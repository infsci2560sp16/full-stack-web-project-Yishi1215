public class Chef {

  private String name;
  private String nation;
  private char gender;
  private double review;
  private int id;
  private String introduction;

  public Chef(String name, String nation, char gender, double review, int id, String introduction) {
    this.name = name;
    this.nation = nation;
    this.gender = gender;
    this.review = review;
    this.id = id;
    this.introduction=introduction;
  }

  public String getName() {
    return name;
  }

  public String getNation() {
    return nation;
  }

   public char getGender() {
    return gender;
  }

  public double getReview() {
    return review;
  }

   public int getId() {
    return id;
  }

  public String getIntroduction(){
    return introduction;
  }

} 