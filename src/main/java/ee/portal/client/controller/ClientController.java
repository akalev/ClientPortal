package ee.portal.client.controller;

import ee.portal.client.service.ClientService;
import ee.portal.client.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static ee.portal.client.common.Constants.ENDPOINT_CLIENT;

@RestController
@RequestMapping(ENDPOINT_CLIENT)
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> findByUserId(@RequestParam() Long id) {
        return ResponseEntity.ok(clientService.findByUserId(id));
    }

    @PostMapping
    public ResponseEntity<Client> save(@Valid Client client) {
        return ResponseEntity.ok(clientService.save(client));
    }

    @PutMapping
    public ResponseEntity<Client> update(@Valid Client client) {
        return ResponseEntity.ok(clientService.update(client));
    }
}
