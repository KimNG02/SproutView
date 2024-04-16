import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class ClientHandler implements Runnable {
    Socket socket;
    AssetHandler assetHandler = AssetHandler.getInstance();
    static String notFound = "HTTP/1.1 404 Not Found\r\n";
    

    public ClientHandler(Socket socket)
    {
        this.socket = socket;
    }

    public void run()
    {
        try {

            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            
            String line = input.readLine();

            System.out.println(line);
            if (line == null) {
                socket.close();
                return;
            }

            String[] request = line.split(" ");
            
            if (!request[0].equals("GET")) {
                socket.close();
                System.out.println("Invalid request, rejected.");
                return;
            }

            Boolean asset = request[1].contains("assets");

            try{
                byte[] outputBytes = assetHandler.get(request[1], asset);

                if(asset){
                    sendAsset(outputBytes);
                } else {
                    sendText(outputBytes);
                }
            } catch (FileNotFoundException e){
                System.out.println("Not Found");
                sendText(notFound.getBytes());
            }
            

            /* 
            OutputStreamWriter output = new OutputStreamWriter(socket.getOutputStream());

            if (outputBytes != null) {
                //System.out.println("Outbytes: " + new String(outputBytes));
                int a = 0;
                    if (asset) {
                        socket.getOutputStream().write(outputBytes, 0, outputBytes.length);    
                    } else {
                        for (int i = 0; i < outputBytes.length; i++) {
                            output.write(outputBytes[i]);
                        }
                    }
                System.out.println(a);
            } else {
                System.out.println("Null");
            }

            output.close();
            */
            socket.close();
        } catch (Exception e) {
            // TODO: handle exception
        }
    }

    private void sendText(byte[] toSendBytes) throws IOException{
        OutputStreamWriter output = new OutputStreamWriter(socket.getOutputStream());
        for (int i = 0; i < toSendBytes.length; i++) {
            output.write(toSendBytes[i]);
        }
        output.close();
    }

    private void sendAsset(byte[] toSendBytes) throws IOException{
        socket.getOutputStream().write(toSendBytes, 0, toSendBytes.length);
    }


}
