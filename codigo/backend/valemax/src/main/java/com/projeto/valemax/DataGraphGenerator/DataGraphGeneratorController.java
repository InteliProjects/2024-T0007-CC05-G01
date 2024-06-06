package com.projeto.valemax.DataGraphGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for generating data graphs from CSV files.
 */
@RestController
public class DataGraphGeneratorController {

    private final DataGraphGeneratorService dataGraphGeneratorService;

    /**
     * Constructor that injects the necessary service for data graph generation.
     *
     * @param dataGraphGeneratorService The service for data graph generation.
     */
    @Autowired
    public DataGraphGeneratorController(DataGraphGeneratorService dataGraphGeneratorService) {
        this.dataGraphGeneratorService = dataGraphGeneratorService;
    }

    /**
     * Endpoint to generate a graph from a CSV file.
     *
     * @param filepath The path of the CSV file to be used for graph generation.
     * @return A message indicating the result of the graph generation.
     */
    @GetMapping("/generate-graph")
    public String generateGraph(@RequestParam String filepath) {
        return dataGraphGeneratorService.generateGraphFromCSV(filepath);
    }
}
