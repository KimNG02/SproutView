package se.kth.ii1305.gulsparv.sproutview;

public class ResourceQuery implements Query{
    @Override
    public String asString() {
        return String.format("SELECT name, link FROM resources;");
    }
}