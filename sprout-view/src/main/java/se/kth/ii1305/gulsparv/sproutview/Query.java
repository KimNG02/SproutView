package se.kth.ii1305.gulsparv.sproutview;

public class Query {
    String plant;

    public Query(String plant) {
        this.plant = plant;
    }

    public String toString() {
        return String.format("SELECT * FROM plant_info WHERE name = '%s';", plant);
    }
}
