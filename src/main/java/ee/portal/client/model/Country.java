package ee.portal.client.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import static ee.portal.client.common.Constants.ENTITY_COUNTRY;

@Data
@Entity
public class Country extends BaseModel {
    private String name;

    @OneToOne(mappedBy = ENTITY_COUNTRY)
    private Client client;
}
