package se.kth.ii1305.gulsparv.sproutview;

public class MainController{

    private static MainController INSTANCE = new MainController();
    private MainController(){}
    public static MainController getInstance()
    {
        return INSTANCE;
    }

    public JSONObject calculateTimeline(JSONObject options)
    {
        JSONObject timeline = new JSONObject("Stuff");
    }
}