package com.projeto.valemax.FordFulkersonIntegration;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * Controller for integrating the Ford-Fulkerson algorithm.
 */
@RestController
public class FordFulkersonIntegrationController {

    @Autowired
    private FordFulkersonIntegrationService fordFulkersonIntegrationService;

    /**
     * Endpoint to execute the Ford-Fulkerson algorithm.
     */
    @PostMapping("/execute-ford-fulkerson")
    public void executeFordFulkerson() {
        // Method implementation intentionally left blank as it will be executed internally.
    }
}
