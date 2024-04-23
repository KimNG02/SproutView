package se.kth.ii1305.gulsparv.sproutview;

import lombok.val;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class JSONObject {

    String[] attributeNames;
    String[][] attributeValues;

    /*
    public JSONObject(String JSONRaw) {
        if (JSONRaw != null && JSONRaw != "") {
            String[] rawArray = JSONRaw.split(",");
            attributeNames = new String[rawArray.length];
            attributeValues = new String[rawArray.length];
            for (int n = 0; n < rawArray.length; n++) {
                String[] smallArray = rawArray[n].split(":");
                smallArray[0] = smallArray[0].replaceAll("\"", "");
                attributeNames[n] = smallArray[0];
                if (!smallArray[1].equals("null")) {
                    smallArray[1] = smallArray[1].replaceAll("\"", "");
                    attributeValues[n] = smallArray[1];
                } else {
                    attributeValues[n] = null;
                }

            }
        }
    }
    */

   
   public JSONObject(String JSONRaw){
        if (JSONRaw != null && JSONRaw != "") {
            String[] rawArray = JSONRaw.split(":");
            attributeNames = new String[rawArray.length-1];
            attributeValues = new String[rawArray.length-1][];
            for(int n = 0; n < attributeNames.length; n++){
                attributeNames[n] = rawArray[n].replaceAll("\"", "");
                if(rawArray[n+1].contains("]")){
                    String attributeValuesRaw = rawArray[n+1].substring(0, rawArray[n+1].indexOf("]") + 1);

                    attributeValues[n] = jsonArrayToArray(attributeValuesRaw);

                    rawArray[n+1] = rawArray[n+1].substring(rawArray[n+1].indexOf("]")+2);
                } else {
                    String attributeValue = "";
                    int endOfSubstring = rawArray[n+1].indexOf(",");
                    
                    if(endOfSubstring != -1){
                        attributeValue = rawArray[n+1].substring(0, endOfSubstring);
                    } else {
                        attributeValue = rawArray[n+1].substring(0);
                    }

                    attributeValue = attributeValue.replaceAll("\"", "");

                    attributeValues[n] = new String[1];
                    attributeValues[n][0] = attributeValue;

                    if(endOfSubstring != -1){
                        rawArray[n+1] = rawArray[n+1].substring(rawArray[n+1].indexOf(",")+1);
                    }
                }

                System.out.println(n);
                System.out.println(attributeNames[n] + ":" + attributeValues[n][0]);
            }
            //name:value,name:value,name:value,name:value
        }
   }

   private String[] jsonArrayToArray(String rawArray){
    rawArray = rawArray.replace("[", "").replace("]", "");
    String[] out = rawArray.split(",");
    for(int i = 0; i < out.length; i++){
        out[i] = out[i].replaceAll("\"", "");
    }
    return out;
   }
   

    //constructs a json from a sql resultset
    public JSONObject(ResultSet result) throws SQLException{
        result.next();
        int arrayLength = result.getMetaData().getColumnCount();
        attributeNames = new String[arrayLength];
        ArrayList<String>[] attributeValuesPreliminary = new ArrayList[arrayLength];

        for(int n = 0; n < attributeValuesPreliminary.length; n++){
            attributeValuesPreliminary[n] = new ArrayList<String>();
        }

        result.next();
        for(int n = 0; n < arrayLength; n++){
            attributeNames[n] = result.getMetaData().getColumnLabel(n+1);
            attributeValuesPreliminary[n].add(result.getString(n+1));
        }
        while(result.next()){
            for(int n = 0; n < arrayLength; n++){
                String value = result.getString(n);
                if(!attributeValuesPreliminary[n].contains(value)){
                    attributeValuesPreliminary[n].add(value);
                }
            }
        }

        attributeValues = new String[arrayLength][];

        for(int n = 0; n < arrayLength; n++){
            attributeValues[n] = (String[]) attributeValuesPreliminary[n].toArray();
        }
    }

    public String[] getValue(String attributeName) {
        String[] value = null;

        System.out.println("Name to get: " + attributeName);

        for (int n = 0; n < attributeNames.length; n++) {
            System.out.println("Name: " + attributeNames[n]);
            if (attributeNames[n].equals(attributeName)) {
                value = attributeValues[n];
                break;
            }
        }

        return value;
    }

    public String toString(boolean includeBrackets){
        String out = "";

        if(includeBrackets){
            out = "{";
        }

        for(int n = 0; n < attributeNames.length; n++){
            out += attributeNames[n];
            if(attributeValues[n].length == 1){
                out += ":" + attributeValues[n][0] + ",";
            } else {
                out += ":[";
                for(int i = 0; i < attributeValues[n].length; i++){
                    out += attributeValues[n][i] + ",";
                }
                out = out + out.substring(0, out.length()-1) + "],";
            }
        }

        out = out.substring(0, out.length()-1);

        if(includeBrackets){
            out += "}";
        }

        System.out.println("Json to string returning: " + out);

        return out;
    }
}