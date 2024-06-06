package com.projeto.valemax.EdmondsKarpIntegration;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * Controller for integrating the Edmonds-Karp algorithm.
 */
@RestController
public class EdmondsKarpIntegrationController {

    @Autowired
    private EdmondsKarpIntegrationService edmondsKarpIntegrationService;
    
    /**
     * Endpoint to execute the Edmonds-Karp algorithm.
     */
    @PostMapping("/execute-edmonds-karp")
    public void executeEdmondsKarp() {
        // Method implementation intentionally left blank as it will be executed internally.
    }
}
