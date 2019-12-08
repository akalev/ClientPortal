package ee.portal.client.controller;

import ee.portal.client.service.AuthenticationService;
import ee.portal.client.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static ee.portal.client.common.Constants.ENDPOINT_LOGIN;

@CrossOrigin
@RestController
@RequestMapping(ENDPOINT_LOGIN)
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity login(@RequestBody User user) {
        return ResponseEntity.ok(authenticationService.authenticate(user));
    }
}
