package se.kth.ii1305.gulsparv.sproutview;

public class PlantQuery implements Query{
    @Override
    public String asString() {
        return String.format("SELECT name, image_link FROM plant;");
    }
}
