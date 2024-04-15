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

            System.out.println(line);
            if (line == null) {
                socket.close();
                return;
            }
            
            if (line.substring(0, 6).equals("GET / ")) {
                Path path = Paths.get("SproutView/resources/index.html");
                byte[] fileBytes = {};
                
                try {
                    fileBytes = Files.readAllBytes(path);
                    
                } catch (Exception e) {
                    System.err.println(e.toString());
                }

                String ok = "HTTP/1.1 200 OK\r\nContent-Length: " + fileBytes.length + "\r\n\r\n";
                byte[] okBytes = ok.getBytes();

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
                System.out.println("Outbytes: " + new String(outputBytes));
                for (int n = 0; n < outputBytes.length; n++) {
                    output.write(outputBytes[n]);
                }
            } else {
                System.out.println("Null");
            }

            output.flush();
            output.close();
            socket.close();
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
