package ee.portal.client.filter;

import ee.portal.client.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.*;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.web.authentication.*;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import ee.portal.client.utility.TokenUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

import static ee.portal.client.common.Constants.*;

@Component
public class TokenFilter extends OncePerRequestFilter {

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    private UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String token = null;
        String headerAuthorization = request.getHeader(HEADER_AUTHORIZATION);
        SecurityContext context = SecurityContextHolder.getContext();

        if (headerAuthorization == null) return;
        if (headerAuthorization.startsWith(PREFIX_AUTHORIZATION))
            token = headerAuthorization.replace(PREFIX_AUTHORIZATION, STRING_EMPTY).trim();

        if (token != null && context.getAuthentication() == null) {
            String username = tokenUtil.findUsernameFromToken(token);
            UserDetails userDetails = userService.findByUsername(username);

            if (tokenUtil.validateToken(token, userDetails)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, null);

                WebAuthenticationDetails webAuthenticationDetails = new WebAuthenticationDetailsSource()
                        .buildDetails(request);
                usernamePasswordAuthenticationToken.setDetails(webAuthenticationDetails);

                context.setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
