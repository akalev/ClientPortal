package ee.portal.client.service;

import ee.portal.client.model.Client;

import java.util.List;

public interface ClientService {
    List<Client> findByUserId(Long id);
    Client save(Client client);
    Client update(Client client);
}
