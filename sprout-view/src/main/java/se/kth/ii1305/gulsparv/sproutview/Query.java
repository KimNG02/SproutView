package se.kth.ii1305.gulsparv.sproutview;

import java.util.ArrayList;


public class Query {
    String table;
    String[] columns;
    String[] constraints;

    private Query(String table, String[] columns, String[] constraints) 
    {
        this.table = table;
        this.columns = columns;
        this.constraints = constraints;
    }

    public QueryBuilder getBuilder(String tableName)
    {
        return new QueryBuilder(tableName);
    }

    public class QueryBuilder {
        private String tableName;
        private String[] columns = {"*"};
        private ArrayList<String> constraints;
        
        public QueryBuilder(String tableName)
        {
            this.tableName = tableName;
        }

        public QueryBuilder setColumns(String[] columns)
        {
            this.columns = columns;
            return this;
        }

        public QueryBuilder addConstraint(String constraint)
        {
            this.constraints.add(constraint);
            return this;
        }
        public Query build()
        {

        }
    }
}
