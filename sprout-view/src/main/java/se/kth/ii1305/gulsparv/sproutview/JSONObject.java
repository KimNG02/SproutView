package se.kth.ii1305.gulsparv.sproutview;

import lombok.val;

public class JSONObject {

    String[] attributeNames;
    String[] attributeValues;

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

    public String getValue(String attributeName) {
        String value = null;

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

    public void printAll() {
        for (int n = 0; n < attributeNames.length; n++) {
            System.out.println(attributeNames[n] + ": " + attributeValues[n]);
        }
    }
}