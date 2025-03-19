public class SubarrayPairs {

    // Count the occurrence of a given character in a string.
    public static int CountChar(String word) {
        int count = 0;
        char chara = 'a'; // It's a char, not a String!

        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) == chara) {
                count++;
            }
        }
        return count; // Return after the loop ends
    }

    public static void main(String[] args) {
        String word = "Tayyab";
        int occurrences = CountChar(word.toLowerCase()); // Convert to lowercase if you only want lowercase 'a'

        System.out.println("Word: " + word);
        System.out.println("Occurrences of 'a': " + occurrences);
    }
}
