import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ClientHandler implements Runnable {
    Socket socket;

    public ClientHandler(Socket socket)
    {
        this.socket = socket;
    }

    public void run()
    {
        try {
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
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
