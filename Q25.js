class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a node to the end of the list
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = newNode;
      }
  
      this.size++;
    }
  
    // Add a node at the beginning
    prepend(value) {
      const newNode = new Node(value);
  
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    // Delete a node by value
    delete(value) {
      if (!this.head) return;
  
      // If the head needs to be deleted
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current && current.value !== value) {
        previous = current;
        current = current.next;
      }
  
      if (current) {
        previous.next = current.next;
        this.size--;
      }
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      let listValues = '';
  
      while (current) {
        listValues += `${current.value} -> `;
        current = current.next;
      }
  
      listValues += 'null';
      console.log(listValues);
    }
  
    // Get the size of the list
    getSize() {
      return this.size;
    }
  }
  const list = new LinkedList();

  list.append(10);
  list.append(20);
  list.append(30);
  list.prepend(5);
  
  list.print();  // 5 -> 10 -> 20 -> 30 -> null
  
  list.delete(20);
  list.print();  // 5 -> 10 -> 30 -> null
  
  console.log('Size:', list.getSize());  // Size: 3
    