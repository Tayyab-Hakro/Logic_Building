public class Main {
    public static void main(String[] args) {
        int num = 5; // Binary: 101
        int bitPosition = 2; // 0-based index (setting the 4th bit)
        int Bitmase = 1 << bitPosition;
        int NotBitmase = ~(Bitmase);

        int bitresult  = NotBitmase & num;
        System.out.println(bitresult);
      
    }
}
