import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

//String OK = "HTTP/1.1 200 OK\r\nContent-Length: " + res.length() + "\r\n\r\n";

public class Server {

    static String BadRequest = "HTTP/1.1 400 Bad Request\r\n";

    int portNumber;

    public Server(int portNumber) {
        this.portNumber = portNumber;
    }

    public void run() {
        try {
            ServerSocket serverSocket = new ServerSocket(portNumber);

            List<Thread> clientThreads = new ArrayList<Thread>();
            while (true) {
                ClientHandler clientHandler = new ClientHandler(serverSocket.accept());
                Thread clientThread = new Thread(clientHandler);
                clientThreads.add(clientThread);
                clientThread.start();
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
        
    }
}
