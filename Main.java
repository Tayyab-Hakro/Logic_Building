public class Main {
    public static void main(String[] args) {
        int num = 5; // Binary: 10101
        int bitPosition = 3; // Counting from right, 0-based index (6th bit is index 5)
         String Binary = Integer.toBinaryString(num);
            System.out.println(Binary);
        int bitValue = (num >> bitPosition) & 1;
        System.out.println(bitValue); // Output: 0 (6th bit of 10101 is 0)
    }        

    
}
