package se.kth.ii1305.gulsparv.sproutview;

public class InfoQuery implements Query {
    String plant;

    public InfoQuery(String plant) {
        this.plant = plant;
    }
    
    @Override
    public String asString() {
        return String.format("SELECT * FROM plant_info WHERE name = '%s';", plant);
    }
}
