package se.kth.ii1305.gulsparv.sproutview;

import org.apache.tomcat.util.json.*;

public class TimelineHandler {
    private static TimelineHandler INSTANCE = new TimelineHandler();

    private TimelineHandler() {
    }

    public static TimelineHandler getInstance() {
        return INSTANCE;
    }

    public String fetchTimeline(JSONObject json) {
        json.printAll();

        String out = "{ \"suggestion1\":\"Du borde vattna mer!!\", \"timelineState\":\"Risky\", \"sproutTime\":\"10\", \"halfGrownTime\":\"20\",\"matureTime\":\"30\", \"witheringTime\":\"40\"}";

        return out;
    }

    private double preferredWater(String water) {

        return 1;
    }

    private double preferredLight(String light) {
        return 1;
    }

    private double preferredTemp(String temp) {
        return 1;
    }

    private double preferredSoil(String soil) {
        return 1;
    }

    private double preferredSeason(String season) {
        return 1;
    }
}
