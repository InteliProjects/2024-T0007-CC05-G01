package com.projeto.valemax.FileUploads;

import com.projeto.valemax.EdmondsKarpIntegration.EdmondsKarpIntegrationService;
import com.projeto.valemax.FordFulkersonIntegration.FordFulkersonIntegrationService;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * Service class for processing CSV files.
 */
@Service
public class CSVService {

    private final EdmondsKarpIntegrationService edmondsKarpIntegrationService;
    private final FordFulkersonIntegrationService fordFulkersonIntegrationService;

    /**
     * Constructs a CSVService with the specified EdmondsKarpIntegrationService and FordFulkersonIntegrationService.
     *
     * @param edmondsKarpIntegrationService    The EdmondsKarpIntegrationService to be used for processing.
     * @param fordFulkersonIntegrationService  The FordFulkersonIntegrationService to be used for processing.
     */
    public CSVService(EdmondsKarpIntegrationService edmondsKarpIntegrationService, FordFulkersonIntegrationService fordFulkersonIntegrationService) {
        this.edmondsKarpIntegrationService = edmondsKarpIntegrationService;
        this.fordFulkersonIntegrationService = fordFulkersonIntegrationService;
    }

    /**
     * Processes the uploaded CSV file using the Edmonds-Karp algorithm and returns the generated JSON graph.
     *
     * @param file The uploaded CSV file.
     * @return String The JSON graph generated from the CSV file.
     * @throws IOException If an I/O error occurs.
     */
    public String processCSVFileEdmonds(MultipartFile file) throws IOException {
        byte[] bytes = file.getBytes();
        String content = new String(bytes);
        return edmondsKarpIntegrationService.getGraphData(content);
    }

    /**
     * Processes the uploaded CSV file using the Ford-Fulkerson algorithm and returns the generated JSON graph.
     *
     * @param file The uploaded CSV file.
     * @return String The JSON graph generated from the CSV file.
     * @throws IOException If an I/O error occurs.
     */
    public String processCSVFileFulkerson(MultipartFile file) throws IOException {
        byte[] bytes = file.getBytes();
        String content = new String(bytes);
        return fordFulkersonIntegrationService.getGraphData(content);
    }
}