package se.kth.ii1305.gulsparv.sproutview;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;

@RestController
@RequestMapping("/test")
public class APITest {

    @GetMapping
    public ResponseEntity<byte[]> Test()
    {
        byte[] fileBytes = {};
        String userDirectory = new File("").getAbsolutePath();
        System.out.println(userDirectory);
        Path path = Paths.get("sprout-view/src/main/resources/static/test.html"); 
        try {
            fileBytes = Files.readAllBytes(path);
        } catch (Exception e) {
            System.out.println("ERROR");
        }
        return new ResponseEntity<byte[]>(fileBytes, HttpStatusCode.valueOf(200));
    }

    // IMAGE MAPPING
    // @GetMapping(value = "/strawberryTransparent.png", produces = "image/png")
    // public ResponseEntity<Resource> image() throws IOException {
    //     final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(
    //             "/strawberryTransparent.png"
    //     )));
    //     return ResponseEntity
    //             .status(HttpStatus.OK)
    //             .contentLength(inputStream.contentLength())
    //             .body(inputStream);

    // }
}

