package se.kth.ii1305.gulsparv.sproutview;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.*;

@RestController
@RequestMapping("api/db")
public class dbtest {

    String password = "password";

    @GetMapping
    public ResponseEntity<String> test() {
        String string = "test";
        Connection db;
        try {
            db = DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/sprouttest", "postgres", password);
            ResultSet result = db.prepareStatement("SELECT * FROM plant;").executeQuery();
            result.next();
            string = result.getString(2);
        } catch (Exception e) {
            System.out.println("Error connecting to database");
            System.out.println(e.getMessage());
        }
        return new ResponseEntity<String>(string, HttpStatusCode.valueOf(200));
    }
}
