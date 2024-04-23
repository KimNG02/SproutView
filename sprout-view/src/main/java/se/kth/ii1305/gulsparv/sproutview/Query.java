package se.kth.ii1305.gulsparv.sproutview;


public class Query {
    String plant;

    public Query(String plant) 
    {
        this.plant = plant;
    }

    public String toString()
    {
        return String.format("SELECT * FROM plant_preferrences LEFT JOIN plant_lifetime ON plant_preferrences.name = plant_lifetime.name WHERE plant_lifetime.name = '%s';", plant);
    }
}
