package ee.portal.client.utility;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Function;

import static ee.portal.client.common.Constants.*;

@Component
public class TokenUtil {

    @Value(PROPERTY_JWT_SECRET)
    private String secret;

    @Value(PROPERTY_JWT_TOKEN_VALIDITY_TIME)
    private long validityTime;

    public String findUsernameFromToken(String token) {
        return findClaimFromToken(token, Claims::getSubject);
    }

    public Date findExpirationDateFromToken(String token) {
        return findClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T findClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = findAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims findAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = findExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + validityTime * 1000))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = findUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
