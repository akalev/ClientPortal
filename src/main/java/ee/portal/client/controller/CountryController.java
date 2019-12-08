package ee.portal.client.controller;

import ee.portal.client.model.Country;
import ee.portal.client.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static ee.portal.client.common.Constants.ENDPOINT_COUNTRY;

@RestController
@RequestMapping(ENDPOINT_COUNTRY)
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public ResponseEntity<List<Country>> getCountries() {
        return ResponseEntity.ok(countryService.getAll());
    }
}
