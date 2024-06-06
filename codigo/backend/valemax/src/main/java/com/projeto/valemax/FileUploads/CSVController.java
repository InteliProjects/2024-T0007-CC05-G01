package com.projeto.valemax.FileUploads;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;


import java.io.IOException;
import java.util.Objects;

/**
 * Controller class for handling CSV file uploads.
 */
@CrossOrigin
@RestController
public class CSVController {

    private static final String CSV_CONTENT_TYPE = "text/csv";

    private final CSVService csvService;

    public CSVController(CSVService csvService) {
        this.csvService = csvService;
    }

    /**
     * Handles the file upload endpoint.
     * @param file The uploaded file
     * @return ResponseEntity indicating the status of the upload
     */
    @PostMapping("/upload/edmonds-karp")
    public ResponseEntity<String> handleFileUploadEdmonds(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Arquivo não pode estar vazio!");
        }

        // Checks if the file is indeed a CSV
        if (!Objects.equals(file.getContentType(), CSV_CONTENT_TYPE)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O arquivo não é um CSV válido!");
        }

        try {
            // Processes the CSV file
            String jsonGraph = csvService.processCSVFileEdmonds(file);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonGraph);
        } catch (IOException e) {
            // Log the exception or provide a more descriptive error message
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao processar o arquivo.");
        }
    }

    @PostMapping("/upload/ford-fulkerson")
    public ResponseEntity<String> handleFileUploadFulkerson(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Arquivo não pode estar vazio!");
        }

        // Checks if the file is indeed a CSV
        if (!Objects.equals(file.getContentType(), CSV_CONTENT_TYPE)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O arquivo não é um CSV válido!");
        }

        try {
            // Processes the CSV file
            String jsonGraph = csvService.processCSVFileFulkerson(file);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonGraph);
        } catch (IOException e) {
            // Log the exception or provide a more descriptive error message
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao processar o arquivo.");
        }
    }
}