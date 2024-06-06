package com.projeto.valemax.DataGraphGenerator;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.stereotype.Service;

/**
 * Service class for generating graph data from CSV files or strings.
 */
@Service
public class DataGraphGeneratorService {

    /**
     * Generates a JSON representation of a graph from a CSV file or string.
     *
     * @param filepath The file path of the CSV file or the CSV string itself.
     * @return A JSON string representing the graph.
     */
    public String generateGraphFromCSV(String filepath) {
        if (!isValidFilePath(filepath)) {
            List<int[]> graphData = readDataFromString(filepath);
            String jsonGraph = generateJSON(graphData);
            return jsonGraph;
        }

        List<int[]> graphData = readDataFilepath(filepath);
        String jsonGraph = generateJSON(graphData);
        return jsonGraph;
    }

    /**
     * Checks if the given file path is valid.
     *
     * @param filepath The file path to check.
     * @return True if the file exists and is a file, false otherwise.
     */
    private boolean isValidFilePath(String filepath) {
        File file = new File(filepath);
        return file.exists() && file.isFile();
    }

    /**
     * Reads graph data from a CSV string.
     *
     * @param csvString The CSV string to read.
     * @return A list of integer arrays, each representing an edge in the graph.
     */
    public List<int[]> readDataFromString(String csvString) {
        List<int[]> graphData = new ArrayList<>();

        try (Scanner scanner = new Scanner(new StringReader(csvString))) {
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");

                int v = Integer.parseInt(parts[0]);
                int w = Integer.parseInt(parts[1]);
                int weight = Integer.parseInt(parts[2]);

                graphData.add(new int[]{v, w, weight});
            }
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }

        return graphData;
    }

    /**
     * Reads graph data from a file path.
     *
     * @param filepath The file path of the CSV file.
     * @return A list of integer arrays, each representing an edge in the graph.
     */
    private List<int[]> readDataFilepath(String filepath) {
        List<int[]> graphData = new ArrayList<>();

        try {
            File file = new File(filepath);
            Scanner scanner = new Scanner(file);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");

                int v = Integer.parseInt(parts[0]);
                int w = Integer.parseInt(parts[1]);
                int weight = Integer.parseInt(parts[2]);

                graphData.add(new int[]{v, w, weight});
            }

            scanner.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }

        return graphData;
    }

    /**
     * Generates a JSON representation of the graph data.
     *
     * @param graphData The graph data to convert to JSON.
     * @return A JSON string representing the graph.
     */
    private String generateJSON(List<int[]> graphData) {
        StringBuilder jsonBuilder = new StringBuilder();

        jsonBuilder.append("{\n  \"nodes\":[\n");
        for (int i = 0; i < graphData.size(); i++) {
            jsonBuilder.append("    {\"id\":").append(i).append(",\"category\":\"mid\",\"name\":\"node").append(i).append("\"}");
            if (i < graphData.size() - 1) {
                jsonBuilder.append(",\n");
            } else {
                jsonBuilder.append("\n");
            }
        }

        jsonBuilder.append("  ],\n  \"links\":[\n");
        for (int i = 0; i < graphData.size(); i++) {
            int[] data = graphData.get(i);
            jsonBuilder.append("    {\"source\":").append(data[0]).append(",\"target\":").append(data[1]).append(",\"value\":").append(data[2]).append("}");
            if (i < graphData.size() - 1) {
                jsonBuilder.append(",\n");
            } else {
                jsonBuilder.append("\n");
            }
        }

        jsonBuilder.append("  ]\n}");
        return jsonBuilder.toString();
    }
}
