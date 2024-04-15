import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

//String OK = "HTTP/1.1 200 OK\r\nContent-Length: " + res.length() + "\r\n\r\n";

public class Server {

    static String BadRequest = "HTTP/1.1 400 Bad Request\r\n";

    public Server(int portNumber) throws IOException {

        ServerSocket serverSocket = new ServerSocket(portNumber);

        while (true) {
            Socket socket = serverSocket.accept();

            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            String line = input.readLine();

            byte[] outputBytes = null;

            if (line.substring(0, 3).equals("GET / ")) {
                Path path = Paths.get("SproutView/resources/index.html");

                String ok = "HTTP/1.1 200 OK\r\nContent-Length: " + "2000" + "\r\n\r\n";
                byte[] okBytes = ok.getBytes();

                byte[] fileBytes = Files.readAllBytes(path);

                outputBytes = new byte[okBytes.length + fileBytes.length];

                int n;
                for(n = 0; n < okBytes.length; n++){
                    outputBytes[n] = okBytes[n];
                }

                for(n = okBytes.length; n < okBytes.length + fileBytes.length; n++){
                    outputBytes[n] = fileBytes[n - okBytes.length];
                }
            }

            OutputStreamWriter output = new OutputStreamWriter(socket.getOutputStream());

            if (outputBytes != null) {
                for (int n = 0; n < outputBytes.length; n++) {
                    output.write(outputBytes[n]);
                }
            }

            socket.close();
        }
    }
}
