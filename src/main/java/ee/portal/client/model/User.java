package ee.portal.client.model;

import lombok.Data;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;

@Data
@Entity
public abstract class User extends BaseModel implements UserDetails {
    private String username;
    private String password;
}
