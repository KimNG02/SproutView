package se.kth.ii1305.gulsparv.sproutview;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;

@RestController
@RequestMapping("api")
public class APIController {

    @GetMapping("timeline")
    public ResponseEntity<String> getTimeline(@RequestParam String data) {
        String message = "Internal server error";
        int code = 500;

        JSONObject options = new JSONObject(data.replace("%5B", "[").replace("%5D", "]"));

        try {
            JSONObject timeline = MainController.getInstance().calculateTimeline(options);
            code = 200;
            message = timeline.getString(true);
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(code));
    }

    @GetMapping("plants")
    public ResponseEntity<String> getPlants() {
        String message = "Internal server error";
        int code = 500;

        try {
            JSONObject plants = MainController.getInstance().getPlants();
            code = 200;
            message = plants.getString(false);
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(code));
    }

    @GetMapping("resources")
    public ResponseEntity<String> getResources() {
        String message = "Internal server error";
        int code = 500;

        try {
            JSONObject resources = MainController.getInstance().getResources();
            code = 200;
            message = resources.getString(false);
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(code));
    }

    @GetMapping(value = "image/{image:.+}", produces = "image/png")
    public ResponseEntity<Resource> image(@PathVariable("image") String image) throws IOException {
        final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(
                "sprout-view/src/main/resources/assets/"+image+".png"
        )));
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentLength(inputStream.contentLength())
                .body(inputStream);
    }
}
