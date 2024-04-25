package se.kth.ii1305.gulsparv.sproutview;
import java.util.ArrayList;

public class PlantCalculator {


    private static PlantCalculator INSTANCE = new PlantCalculator();
    private PlantCalculator(){}
    public static PlantCalculator getInstance(){

        return INSTANCE;

    }

    public JSONObject calculateTimeline(JSONObject options, JSONObject queryResult){

        // beräkna timeline, vi får ett objekt med options och query resultet 

        // to calculate the timeline  depending on the options that I have I need to query it an get the result. But when I have 

        System.out.println(options.getString(true));
        
        String optionsLight = options.getValue("light_level")[0];
        String[] resultLight = queryResult.getValue("light_level");
        double lightSimilarity = 0;
        for(int n = 0; n < resultLight.length; n++){
            double currentLightSimilarity = lightCompare(optionsLight, resultLight[n]);
            if(currentLightSimilarity > lightSimilarity){
                lightSimilarity = currentLightSimilarity;
            }
        }

        String optionsSoil = options.getValue("soil")[0];
        String[] resultSoil = queryResult.getValue("soil");
        double soilSimilarity = 0;
        for(int n = 0; n < resultSoil.length; n++){
            double currentSoilSimilarity = soilCompare(optionsSoil, resultSoil[n]);
            if(currentSoilSimilarity > soilSimilarity){
                soilSimilarity = currentSoilSimilarity;
            }
        }


        String optionsWater = options.getValue("preferred_watering_frequency")[0];
        String[] resultWater = queryResult.getValue("preferred_watering_frequency");
        double waterSimilarity = 0;
        for(int n = 0; n < resultWater.length; n++){
            double currentWaterSimilarity = waterCompare(optionsWater, resultWater[n]);
            if(currentWaterSimilarity > waterSimilarity){
                waterSimilarity = currentWaterSimilarity;
            }
        }


        
        String optionsTemp = options.getValue("preferred_average_temperature")[0];
        String[] resultTemp = queryResult.getValue("preferred_average_temperature");
        double tempSimilarity = 0;
        for (int n = 0; n < resultTemp.length; n++) {
            double currentTempSimilarity = temperatureCompare(optionsTemp, resultTemp[n]);
            if(currentTempSimilarity > tempSimilarity){
                tempSimilarity = currentTempSimilarity;
            }
        }

        
        String optionsPotsize = options.getValue("preferred_pot_size")[0];
        String resultPotsize = queryResult.getValue("preferred_pot_size")[0];
        double potSizeSimilarity = potSizeCompare(optionsPotsize, resultPotsize);

        String [] optionsPlantCare = options.getValue("plant_care");
        String [] resultPlantCare = queryResult.getValue("plant_care");
        double plantCareSimilarity = plantCareCompareSeveral(optionsPlantCare, resultPlantCare);

        String optionsHumidity = options.getValue("humidity")[0];
        String resultHumidity = queryResult.getValue("humidity")[0];
        double humiditySimilarity = 1.0;
        boolean humidity = false;
        if(!optionsHumidity.equals("")){
            humiditySimilarity = humidityCompare(optionsHumidity, resultHumidity);
            humidity = true;
        }

        String optionsPh = options.getValue("soil_ph")[0];
        String resultPh = queryResult.getValue("soil_ph")[0];
        double phSimilarity = 1.0;
        boolean ph = false;
        if(!optionsPh.equals("")){
            phSimilarity = soilPhCompare(optionsPh, resultPh);
            ph = true;
        }

        double totalSimilarity = lightSimilarity * soilSimilarity * waterSimilarity * tempSimilarity * potSizeSimilarity * plantCareSimilarity * humiditySimilarity * phSimilarity;

        ArrayList<String> attributeNamesNewJSON = new ArrayList<String>();
        attributeNamesNewJSON.add("similarity");
        attributeNamesNewJSON.add("lightComment");
        attributeNamesNewJSON.add("soilComment");
        attributeNamesNewJSON.add("waterComment");
        attributeNamesNewJSON.add("tempComment");
        attributeNamesNewJSON.add("potSizeComment");
        attributeNamesNewJSON.add("plantCareComment");

        //if(humidity){
            attributeNamesNewJSON.add("humidityComment");
        //}

        //if(ph){
            attributeNamesNewJSON.add("phComment");
        //}

        String[] attributeNamesNewJSONArray = new String[attributeNamesNewJSON.size()];

        for(int n = 0; n < attributeNamesNewJSONArray.length; n++){
            attributeNamesNewJSONArray[n] = attributeNamesNewJSON.get(n);
        }

        ArrayList<String> attributeValuesNewJSON = new ArrayList<String>();

        attributeValuesNewJSON.add(Double.toString(totalSimilarity));

        if(lightSimilarity != 1){
            attributeValuesNewJSON.add("Needs different light.");
        } else {
            attributeValuesNewJSON.add("Good job!");
        }

        if(soilSimilarity != 1){
            attributeValuesNewJSON.add("Needs different Soil.");
        } else {
            attributeValuesNewJSON.add("Good job!");
        }

        if(waterSimilarity != 1){
            attributeValuesNewJSON.add("Needs different Water frequency.");
        } else {
            attributeValuesNewJSON.add("Good job!");
        }
        
        if(tempSimilarity != 1){
             attributeValuesNewJSON.add("Needs different temperature.");
        } else {
            attributeValuesNewJSON.add("Good job!");
        }

        if(potSizeSimilarity != 1){
            attributeValuesNewJSON.add("Needs different pot size.");
        } else {
            attributeValuesNewJSON.add("Good job!");
        }

         if(plantCareSimilarity != 1){
            attributeValuesNewJSON.add("Needs different plantcare choices.");
        } else {
            attributeValuesNewJSON.add("Good job!");
        }

        if(humidity){
            if(humiditySimilarity != 1){
                attributeValuesNewJSON.add("The humidity needs to be changed.");
            } else {
                attributeValuesNewJSON.add("Good job!");
            }
        } else {
            attributeValuesNewJSON.add("");
        }
        

        if(ph){
            if(phSimilarity != 1){
                attributeValuesNewJSON.add("Needs different soil ph.");
            } else {
                attributeValuesNewJSON.add("Good job!");
            }
        } else {
            attributeValuesNewJSON.add("");
        }
        
        
        String[] outArrayPreliminary = new String[attributeValuesNewJSON.size()];

        for(int n = 0; n < outArrayPreliminary.length; n++){
            outArrayPreliminary[n] = attributeValuesNewJSON.get(n);       
        }

        String[][] outArrayFinal = new String[outArrayPreliminary.length][];

        for(int n = 0; n < outArrayFinal.length; n++){
            outArrayFinal[n] = new String[1];
            outArrayFinal[n][0] = outArrayPreliminary[n];
        }

        JSONObject outJSON = new JSONObject(attributeNamesNewJSONArray, outArrayFinal);
        

        return outJSON;
    }


    

    public double lightCompare(String light1, String light2){

        double res = 0;
        

        if(light1.equals(light2)){
            res = 1.0;
        }
        
        if(light1.equals("full sun") && light2.equals("partial sun")){
            res = 0.75; 
        }


        if(light1.equals("full sun") && light2.equals("shade")){
             res = 0.0; 
        }
         
        
        if(light1.equals("partial sun") && light2.equals("shade")){
            res = 0.0;
        }
        
        return res;

    }

    public double soilCompare(String soil1, String soil2){

        double soilRes = 0;

        if(soil1.equals(soil2)){
            soilRes = 1.0; 
        }

        if(soil1.equals("well-draining") && soil2.equals("Loamy soil")){
            soilRes = 0.5;
        }

        if(soil1.equals("well-draining") && soil2.equals("Potting mix")){
            soilRes = 0.5;
        }
        return soilRes;

    }
    
    public double waterCompare(String water1, String water2){

        double waterRatio = Double.valueOf(water1) / Double.valueOf(water2);

        System.out.println("Waterratio: " + waterRatio);

        if(waterRatio > 1){
            waterRatio = 1/waterRatio;
        }

        System.out.println("Waterratio: " + waterRatio);

        System.out.println(Math.pow(waterRatio - 1, 2));
        
        double out = 1-Math.pow(waterRatio - 1, 2)*2;

        System.out.println("Out: " + out);

        if(out < 0){
            out = 0;
        }

        out = out*100;

        int outInt = (int) Math.round(out);

        out = (double) outInt/100;

        return out;
    }

    public double temperatureCompare(String temp1String, String temp2String){
        int temp1 = Integer.valueOf(temp1String);
        
        String[] temp2StringArray = temp2String.split("-");
        
        int lowerRange = Integer.valueOf(temp2StringArray[0]);
        int upperRange = Integer.valueOf(temp2StringArray[1]);

        double out = 0.0;

        if( lowerRange <= temp1 && temp1 <= upperRange){
            out = 1.0;
        }
          
        return out;
    }
 
    public double potSizeCompare(String size1, String size2){
       
        if(size1.equals(size2) || size2.equals("any")){
            return 1.0;
        }

        int size1Int = sizeAsInt(size1);

        int size2Int = sizeAsInt(size2);

        int sizeDifference = size1Int - size2Int;
        
        if(sizeDifference <= 0){
            if(sizeDifference == -1){
                return 0.9;
            }

            if(sizeDifference == -2){
                return 0.7;
            }
            
            if(sizeDifference == -3){
                return 0.4;
            }
            
            if(sizeDifference == -4){
                return 0.0;
            }
            
            return 0.0;
            
        } else {
            return 1.0;
        }
    }

    private int sizeAsInt(String size){
        
        if(size.equals("extra small")){
            return 1;
        }
        if(size.equals("small")){
            return 2;
        }
        
        if(size.equals("medium")){
            return 3;
        }
        if(size.equals("large")){
            return 4;
        } 
        if(size.equals("extra large")){
            return 5;
        }
        
        return 0;
    }
        
        
    

    public double plantCareCompare(String care1, String care2){
        double res = 0;
        
        if(care1.equals(care2)){
            res = 1;
        }
        return res;
      
    }

    public double plantCareCompareSeveral(String[] care1, String[] care2){
        double res = 1;
        int length1 = care1.length;
        int length2 = care2.length;

        if(length1 > 0 || length1 != length2){
            res = res - 0.25;
        } 
        
        if(length1 > 0 && length1 < length2){//Kommer inte ske ifall databasen bara har ett värde 
            for(int i = 0; i < length2; i++){
                if(!care1[i].equals(care2[i])){
                    res = res - 0.1;
                }
            }
        }
        if (length1 > length2){
            for (int i = 0; i < length2; i++){
                if(!care1[i].equals(care2[i])){
                    res = res - 0.1;
                }
            } 
        }
                        
      return res;
    }

    public double humidityCompare(String humidity1String, String humidity2String){
        int humidity1 = Integer.valueOf(humidity1String);
        //B)
        String[] humidity2StringArray = humidity2String.split("-");
        
        int lowerRange = Integer.valueOf(humidity2StringArray[0]);
        int upperRange = Integer.valueOf(humidity2StringArray[1]);

        double out = 0.0;

        if( lowerRange <= humidity1 && humidity1 <= upperRange){
            out = 1.0;
        }
        
          
        return out;
    }

    public double soilPhCompare(String ph1String, String ph2String){

        double ph1 = Double.valueOf(ph1String);
        //B)
        String[] ph2StringArray = ph2String.split("-");
        
        double lowerRange = Double.valueOf(ph2StringArray[0]);
        double upperRange = Double.valueOf(ph2StringArray[1]);

        double out = 0.0;

        if( lowerRange <= ph1 && ph1 <= upperRange){
            out = 1.0;
        }
          
        return out;
    }

     
        
    
    
    
}



