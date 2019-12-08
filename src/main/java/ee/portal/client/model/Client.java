package ee.portal.client.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;

import static ee.portal.client.common.Constants.*;

@Data
@Entity
public class Client extends BaseModel {

    @NotNull
    @NotEmpty
    private String firstName;

    @NotNull
    @NotEmpty
    private String lastName;
    private String email;

    @NotNull
    @NotEmpty
    private String address;

    @ManyToOne
    @JoinColumn(name = COLUMN_USER_ID)
    private User user;

    @OneToOne
    @JoinColumn(name = COLUMN_COUNTRY_ID)
    private Country country;
}
