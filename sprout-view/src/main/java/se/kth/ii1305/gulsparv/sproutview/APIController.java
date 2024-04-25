package se.kth.ii1305.gulsparv.sproutview;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/timeline")
public class APIController {

    @GetMapping
    public ResponseEntity<String> getTimeline(@RequestParam String data) {
        String message = "Internal server error";
        int code = 500;

        JSONObject options = new JSONObject(data);

        try {
            JSONObject timeline = MainController.getInstance().calculateTimeline(options);
            code = 200;
            message = timeline.getString(true);
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return new ResponseEntity<String>(message, HttpStatusCode.valueOf(code));
    }
}
