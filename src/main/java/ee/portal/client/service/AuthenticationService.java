package ee.portal.client.service;

import ee.portal.client.model.User;

public interface AuthenticationService {
    String authenticate(User user);
}
