import java.sql.*;
import java.util.*;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import static javax.measure.unit.SI.KILOGRAM;
import javax.measure.quantity.Mass;
import org.jscience.physics.model.RelativisticModel;
import org.jscience.physics.amount.Amount;

import com.heroku.sdk.jdbc.DatabaseUrl;

public class Main {

  public static void main(String[] args) {

   port(Integer.valueOf(System.getenv("PORT")));
   staticFileLocation("/public");

   ArrayList<Chef> chefs = new ArrayList<Chef>();
            chefs.add(new Chef("Grant Achatz", "India", 'M', 4.0, 1, "His love for food began at 17 when he took to learning kebab-making from veteran street vendor Munir Ahmed in his home town Lucknow. Having won numerous awards for his restaurant Banq, in Boston, Brar returned to his homeland in 2010."));
            chefs.add(new Chef("Devin Alexander", "United States",'M', 3.0, 2, "Chef Alexander has worked at many different venues, from restaurants in the Beau Rivage Casino & Resort in Biloxi, Mississippi, to Morton’s Steakhouse here in Pittsburgh. His diverse experience has made him the master of many types of cuisine, from burgers to traditional French. But it is his love of his hometown, Pittsburgh, and passion for local cuisine that will define his creations at Braddock’s. He says that he is excited to use locally sourced meats and produce to present “uniquely inspired and seasonal dishes with a local flare.”"));
            chefs.add(new Chef("Rachel Allen", "Germany", 'F', 4.0, 3, "Rachel was introduced to country Italian cuisine at a very young age with her grandparents who were born in Patrica, Italy. Using fresh garden ingredients that his grandmother, mother and four aunts grew, Italian feasts were a regularity at the Burzese household."));
            chefs.add(new Chef("Anjum Anand", "France", 'M', 4.0, 4, "Originally from France, Chef Anand started his career in 1985 in his hometown, Vire, in the Calvados region. He brings over 25 years' experience at luxury hotels and restaurants such as Intercontinental Hotel The May Fair, Park Hyatt Canberra, Grand Hyatt Seoul, Grand Hyatt Delhi and Grand Hyatt Mumbai. Chef Anand also worked at Roppongi Hills Club, a private members club managed by Hyatt. He joins Grand Hyatt Tokyo after assignments as executive chef at Grand Hyatt Shenzhen and Grand Hyatt Taipei."));

     get("/host.html", (request, response) -> {
            Map<String, Object> attributes = new HashMap<>();
            attributes.put("chefs",chefs);
            return new ModelAndView(attributes, "example.ftl");
        }, new FreeMarkerEngine()); 


     get("/chef",  (request, response) -> {
            String id = request.queryParams("id");
            for(Chef chef: chefs){
              if (chef.getId() == Integer.parseInt(id)){
              return chef.getIntroduction();
              }
            }
            return null;  
        }, new JosnTransformer()); 


    // get("/hello", (req, res) -> {
    //   RelativisticModel.select();
    //   Amount<Mass> m = Amount.valueOf("12 GeV").to(KILOGRAM);
    //   return "E=mc^2: 12 GeV = " + m.toString();
    // });

    // get("/", (request, response) -> {
    //         Map<String, Object> attributes = new HashMap<>();
    //         attributes.put("message", "Hello World!");

    //         return new ModelAndView(attributes, "index.ftl");
    //     }, new FreeMarkerEngine());

    // get("/db", (req, res) -> {
    //   Connection connection = null;
    //   Map<String, Object> attributes = new HashMap<>();
    //   try {
    //     connection = DatabaseUrl.extract().getConnection();

    //     Statement stmt = connection.createStatement();
    //     stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
    //     stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
    //     ResultSet rs = stmt.executeQuery("SELECT tick FROM ticks");

    //     ArrayList<String> output = new ArrayList<String>();
    //     while (rs.next()) {
    //       output.add( "Read from DB: " + rs.getTimestamp("tick"));
    //     }

    //     attributes.put("results", output);
    //     return new ModelAndView(attributes, "db.ftl");
    //   } catch (Exception e) {
    //     attributes.put("message", "There was an error: " + e);
    //     return new ModelAndView(attributes, "error.ftl");
    //   } finally {
    //     if (connection != null) try{connection.close();} catch(SQLException e){}
    //   }
    // }, new FreeMarkerEngine());

  }

}
