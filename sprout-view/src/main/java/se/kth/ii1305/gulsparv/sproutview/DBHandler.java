package se.kth.ii1305.gulsparv.sproutview;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLTimeoutException;
import java.sql.Connection;

public class DBHandler {

    private static DBHandler INSTANCE = new DBHandler();

    private DBHandler() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Attempting to connect to DB (try " + (i+1) + ").");
            try {
                db = DriverManager.getConnection(server, user, password);
                return;
            } catch (Exception e) {
                System.err.println("Connection failed: " + e.toString());
            }
        }
        System.err.println("Unable to create DBHandler shuttting down...");
        System.exit(1);
    }

    private String user = "sprout";
    private String password = "view";
    private String database = "postgres";
    // private String server = "jdbc:postgresql://localhost:5432/sprouttest";
    private String server = "jdbc:postgresql://aws-0-eu-central-1.pooler.supabase.com:5432/"+database+"?user="+user+".nyagaaviganqjspzihhb&password="+password;
    private Connection db;


    public static DBHandler getInstance() {
        return INSTANCE;
    }

    public JSONObject executeQuery(Query query) throws SQLException, SQLTimeoutException {
        Connection db;
        db = DriverManager.getConnection(server, user, password);
        ResultSet result = db.prepareStatement(query.asString()).executeQuery();
        return new JSONObject(result);
    }
}
