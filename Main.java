class Car {
    String Brand ;
    int Speed ;
    Car(String Brand , int Speed){
        this.Brand = Brand;
        this.Speed = Speed;
    }

  public String  toString(){
return "Car " + Brand + "is  and Speed " + Speed ;
  }

}

public class Main {
    public static void main(String[] args) {

     Car Car1  = new Car("Ferrari", 79);
     System.out.print(Car1);
        

    }}
