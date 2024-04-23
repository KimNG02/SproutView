package se.kth.ii1305.gulsparv.sproutview;

import java.sql.SQLException;
import java.sql.SQLTimeoutException;

public class MainController{

    private static MainController INSTANCE = new MainController();
    private MainController(){}
    public static MainController getInstance()
    {
        return INSTANCE;
    }

    public JSONObject calculateTimeline(JSONObject options) throws SQLException, SQLTimeoutException
    {
        Query query = new Query(options.getValue("name")[0]);
        JSONObject data = DBHandler.getInstance().executeQuery(query);
        JSONObject timeline = PlantCalculator.getInstance().calculateTimeline(options, data);
        return timeline;
    }
}