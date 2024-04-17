package se.kth.ii1305.gulsparv.sproutview;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class APITest {

    @GetMapping
    public ResponseEntity<String> Test(@RequestParam String data)
    {
        return new ResponseEntity<String>(data, HttpStatusCode.valueOf(200));
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

