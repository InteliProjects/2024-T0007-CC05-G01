package com.projeto.valemax.FordFulkersonIntegration;

import com.projeto.valemax.Algorithms.FordFulkersonClassic.MaxFlowFF;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Service class for integrating the Ford-Fulkerson algorithm into the application.
 */
@Service
public class FordFulkersonIntegrationService {

    /**
     * Parses graph data from a string and runs the Ford-Fulkerson algorithm.
     *
     * @param content The string containing graph data in CSV format.
     * @return A string representing the output of the Ford-Fulkerson algorithm.
     */
    public String getGraphData(String content) {
        List<int[]> graphData = new ArrayList<>();
        List<String[]> stringGraphData = new ArrayList<>();

        try {
            Scanner scanner = new Scanner(content);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");

                int v = Integer.parseInt(parts[0]);
                int w = Integer.parseInt(parts[1]);
                int weight = Integer.parseInt(parts[2]);

                graphData.add(new int[]{v, w, weight});

                String cod = parts[3];
                String type = parts[4];
                String capacidadeArmMaxO = parts[5];
                String codDest = parts[6];
                String typeDest = parts[7];
                String capacidadeArmMaxD = parts[8];
                String codSubmodal = parts[9];
                String codProd = parts[10];

                stringGraphData.add(new String[]{cod, type, capacidadeArmMaxO, codDest, typeDest, capacidadeArmMaxD, codSubmodal, codProd});
            }

            scanner.close();
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }

        return runFordFulkerson(graphData, stringGraphData);
    }

    /**
     * Runs the Ford-Fulkerson algorithm on the provided graph data.
     *
     * @param gData The graph data as a list of integer arrays.
     * @param stringGraphData Additional string data associated with the graph.
     * @return A string representing the output of the Ford-Fulkerson algorithm.
     */
    public String runFordFulkerson(List<int[]> gData, List<String[]> stringGraphData) {
        // int v = 6;
        // int source = 0;
        // int sink = 5;

        int v = 210;
        int source = 0;
        int sink = 209;

        MaxFlowFF ff = new MaxFlowFF(v, source, sink, gData, stringGraphData);

        String output = ff.getOutput();

        return output;
    }
}
