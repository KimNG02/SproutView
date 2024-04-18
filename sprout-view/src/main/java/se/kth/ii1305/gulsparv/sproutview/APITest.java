package se.kth.ii1305.gulsparv.sproutview;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APITest {

    private static TimelineHandler timelineHandler = TimelineHandler.getInstance();

    @GetMapping("/api/test")
    public ResponseEntity<String> Test(@RequestParam String data)
    {
        return new ResponseEntity<String>(data, HttpStatusCode.valueOf(200));
    }

    @GetMapping("/api/timeline")
    public ResponseEntity<String> Timeline(@RequestParam String data)
    {
        System.out.print(data);
        JSONObject json = new JSONObject(data);
        String outData = ""+timelineHandler.fetchTimeline(json);
        return new ResponseEntity<String>(outData, HttpStatusCode.valueOf(200));
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

