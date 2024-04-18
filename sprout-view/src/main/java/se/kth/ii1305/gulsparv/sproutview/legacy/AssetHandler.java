package se.kth.ii1305.gulsparv.sproutview.legacy;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.File;
import java.io.IOException;
import java.io.FileNotFoundException;


public class AssetHandler {
    private static AssetHandler INSTANCE = new AssetHandler();

    private AssetHandler(){}

    public static AssetHandler getInstance() {return INSTANCE;};

    /**
     * @param path Path of the item that is requested
     */
    public byte[] get(String path, boolean asset) throws FileNotFoundException, IOException
    {
        System.out.println("Attempting to get file from " + path);
        if (asset) {
            System.out.println("Asset");
            return getRequestImage(path);
        }
        System.out.println("Not an asset");
        return getRequestTextFile(path);
    }

    private byte[] getRequestTextFile(String pathName) throws FileNotFoundException, IOException 
    {
        System.out.println("Getting text file");
        if (pathName.equals("/")) {
            System.out.println("Getting index.html");
            pathName = "/index.html";
        }
        pathName = findFilePathString(pathName);
        Path path = Paths.get(pathName);
        byte[] fileBytes = {};
        
        fileBytes = readFile(path);
        System.out.println("Stated length: " + fileBytes.length);
        String ok = "HTTP/1.1 200 OK\r\nContent-Length: " + fileBytes.length + "\r\n\r\n";
        byte[] okBytes = ok.getBytes();

        byte[] out = toOut(okBytes, fileBytes);
        
        

        return out;
    }

    private byte[] getRequestImage(String pathName) throws FileNotFoundException, IOException 
    {
        byte[] fileBytes = {};
        pathName = findFilePathString(pathName);
        Path path = Paths.get(pathName);
        fileBytes = readFile(path);

        String ok = "HTTP/1.1 200 OK\r\nContent-Length:" + fileBytes.length + "\r\nContent-Type:image/png" + "\r\n\r\n";
        byte[] okBytes = ok.getBytes();

        byte[] out = toOut(okBytes, fileBytes);

        return out;
    }

    private String findFilePathString(String fuzzyPathString) throws FileNotFoundException
    {
        String newPathString = "SproutView/resources"+fuzzyPathString;
        File file = new File(newPathString);

        if (file.exists()) {
            return newPathString;
        }

        newPathString = "SproutView"+fuzzyPathString;

        file = new File(newPathString);
        if (file.exists()) {
            return newPathString;
        }
        throw new FileNotFoundException();
    }

    private byte[] toOut(byte[] okBytes, byte[] fileBytes)
    {
        byte[] out =  new byte[okBytes.length + fileBytes.length];
        int n;
        for(n = 0; n < okBytes.length; n++){
            out[n] = okBytes[n];
        }
        int a = n;
        for(; n < out.length; n++){
            out[n] = fileBytes[n - okBytes.length];
        }
        System.out.println("Content length: " + (n-a));
        return out;
    }

    private byte[] readFile(Path path) throws IOException
    {
        return Files.readAllBytes(path);
    }
}