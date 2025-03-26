public class Main {


    public static void main(String[] args) {
        int num = 5;         // Binary: 0101
        int position = 1;    // Position to update
        int value = 1;       // New value (0 or 1)

        int mask = ~(1 << position);  // Step 1: Create a mask to clear the bit
        num = num & mask;             // Step 2: Clear the bit at position
        num = num | (value << position); // Step 3: Set the new bit value

        System.out.println(num); // Expected Output: 7 (Binary: 0111)
            }
        }
