class Billionaire {
    void  Billion(){
        System.err.println("Become a Billionaire");
    }
}

class Millioniare extends Billionaire {
    void million(){
        System.out.println("You have to become millionaire");
    }
} 
class Skiller extends Millioniare {
    void learner (){
        System.out.println("First you to learn ");
    }
}
public class Main {

    public static void main(String[] args) {
        Skiller first  = new Skiller();
        first.Billion();
        first.million();
        first.learner();

    }
}