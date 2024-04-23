package se.kth.ii1305.gulsparv.sproutview;

public class PlantCalculator {

    private static PlantCalculator INSTANCE = new PlantCalculator();
    private PlantCalculator(){}
    public static PlantCalculator getInstance(){

        return INSTANCE;
  
    }

    public JSONObject calculateTimeline(JSONObject options, JSONObject queryResult){

        // beräkna timeline, vi får ett objekt med options och query resultet 

        // to calculate the timeline  depending on the options that I have I need to query it an get the result. But when I have 

        return options;
    }
}
