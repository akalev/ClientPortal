package ee.portal.client.service;

import ee.portal.client.model.User;

public interface UserService {
    User findByUsername(String username);
}
