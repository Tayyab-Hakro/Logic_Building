import java.util.ArrayList;
import java.util.List;

public class SubarrayPairs {

    public static List<List<Integer>> subarray(int[] arr) {
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                List<Integer> sub = new ArrayList<>();
                for (int k = i; k <= j; k++) {
                    sub.add(arr[k]);
                }
                result.add(sub);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        List<List<Integer>> subarrays = subarray(arr);

        // Print the subarrays
        for (List<Integer> sub : subarrays) {
            System.out.println(sub);
        }
    }
}
