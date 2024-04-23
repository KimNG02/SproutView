package se.kth.ii1305.gulsparv.sproutview;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLTimeoutException;
import java.sql.Connection;

public class DBHandler {

    private static DBHandler INSTANCE = new DBHandler();
    private DBHandler() {}

    private String server = "jdbc:postgresql://127.0.0.1:5432/sprouttest";
    private String user = "postgres";
    private String password = "7631";


    public static DBHandler getInstance()
    {
        return INSTANCE;
    }

    public JSONObject executeQuery(Query query) throws SQLException, SQLTimeoutException
    {
        Connection db;
        db = DriverManager.getConnection(server, user, password);
        ResultSet result = db.prepareStatement(query.toString()).executeQuery();
        return new JSONObject(result);
    }
}
