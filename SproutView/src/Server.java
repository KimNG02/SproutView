import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    
    static String res = "<!DOCTYPE html>" + "<html lang=\"en\">" + "<html>" + "<head>" + "<title>Page Title</title>" + "</head>" + "<h1>Sprouuuuttt vieewwwww</h1>" + "</body>" + "</html>";

    static String BadRequest = "HTTP/1.1 400 Bad Request\r\n";

    public Server(int portNumber) throws IOException{
        
        ServerSocket serverSocket = new ServerSocket(portNumber);

        BufferedReader fileInput = new BufferedReader(new FileReader("SproutView/src/test.html")); 

        String res = "";

        while(true){
            String responseAddition = fileInput.readLine();
            if(responseAddition == null){
                break;
            }
            res += responseAddition;
        }

        String OK = "HTTP/1.1 200 OK\r\nContent-Length: " + res.length() + "\r\n\r\n" ;

        while(true){
            Socket socket = serverSocket.accept();

            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            
            String line = input.readLine();

            BufferedWriter output = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));

            if(line.substring(0,14).equals("GET / HTTP/1.1")){
                System.out.println("Line: " + line);
                System.out.println("Connection");
                
                output.write(OK + res + "\r\n");
                output.newLine();
                output.flush();
            }
            else{
                output.write(BadRequest);
                output.newLine();
                output.flush();
            }

            socket.close();
        }
    }
}
