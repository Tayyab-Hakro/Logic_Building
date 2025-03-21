public class MergeSortedLinkedLists {

    // ✅ 1. Node class (Box with a number + next link)
    static class ListNode {
        int val;          // Number inside the box
        ListNode next;    // Link to the next box

        ListNode(int x) {
            val = x;
            next = null;
        }
    }

    // ✅ 2. Merge two sorted linked lists
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        // Step 1: Dummy box to start
        ListNode dummy = new ListNode(0);
        ListNode current = dummy; // Pointer for building the new chain

        // Step 2: While both lists still have boxes
        while (list1 != null && list2 != null) {

            // Step 3: Pick the smaller box and move
            if (list1.val < list2.val) {
                current.next = list1;  // Add box from list1
                list1 = list1.next;    // Move forward in list1
            } else {
                current.next = list2;  // Add box from list2
                list2 = list2.next;    // Move forward in list2
            }

            current = current.next;    // Move current pointer forward
        }

        // Step 4: If boxes are left in list1 or list2, add them
        if (list1 != null) {
            current.next = list1;
        }

        if (list2 != null) {
            current.next = list2;
        }

        // Step 5: Return the merged chain (skip dummy box)
        return dummy.next;
    }

    // ✅ 3. Helper function to print the linked list
    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val + " -> ");
            head = head.next;
        }
        System.out.println("null");
    }

    // ✅ 4. Main method to test everything
    public static void main(String[] args) {

        // Create first sorted linked list: 1 -> 3 -> 5
        ListNode list1 = new ListNode(1);
        list1.next = new ListNode(3);
        list1.next.next = new ListNode(5);

        // Create second sorted linked list: 2 -> 4 -> 6
        ListNode list2 = new ListNode(2);
        list2.next = new ListNode(4);
        list2.next.next = new ListNode(6);

        // Print both lists before merging
        System.out.println("List 1:");
        printList(list1);
        System.out.println("List 2:");
        printList(list2);

        // Merge them
        ListNode mergedList = mergeTwoLists(list1, list2);

        // Print merged list
        System.out.println("Merged List:");
        printList(mergedList);
    }
}
