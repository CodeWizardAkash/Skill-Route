// ---- LINKED LIST ----
  "linkedlist-definition": {
    title: "What is a Linked List?",
    explanation:
      "A Linked List is a linear data structure where elements are not stored in contiguous memory locations. Each element, called a node, contains data and a pointer (or reference) to the next node in the sequence.",
    visual: (
      <div className="flex flex-col items-center gap-4 my-6 w-full max-w-2xl mx-auto">
        <div className="text-cyan-600 dark:text-cyan-300 font-semibold text-sm md:text-base mb-2 transition-colors text-center leading-snug">
          Linked List Structure
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex border border-cyan-400 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <div className="p-3 border-r border-cyan-400 font-bold dark:text-gray-100">
              10
            </div>
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900 text-xs flex items-center dark:text-gray-100">
              ptr
            </div>
          </div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="flex border border-cyan-400 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <div className="p-3 border-r border-cyan-400 font-bold dark:text-gray-100">
              20
            </div>
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900 text-xs flex items-center dark:text-gray-100">
              ptr
            </div>
          </div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="flex border border-cyan-400 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <div className="p-3 border-r border-cyan-400 font-bold dark:text-gray-100">
              30
            </div>
            <div className="p-3 bg-gray-200 dark:bg-gray-700 text-xs flex items-center dark:text-gray-100">
              null
            </div>
          </div>
        </div>
      </div>
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
struct Node {
    int data;
    Node* next;
    Node(int val) {
        data = val;
        next = nullptr;
    }
};`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
class Node {
    int data;
    Node next;
    Node(int val) {
        data = val;
        next = null;
    }
}`,
    },
  },
  "linkedlist-vs-array": {
    title: "Linked List vs Array",
    explanation:
      "Arrays offer O(1) random access but have fixed size (or costly resizing) and expensive insertions/deletions. Linked lists offer dynamic size and O(1) insertions/deletions (if pointer is known), but require O(N) sequential access.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={[
          "Array: Fixed Size, contiguous, O(1) Access",
          "Linked List: Dynamic Size, scattered, O(N) Access",
        ]}
        outputVariable="Choose based on Use Case!"
        description="Comparison"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// Insert at beginning of array: O(N) shifting required.
// Insert at beginning of Linked List: O(1)
Node* newHead = new Node(5); // Constant time
newHead->next = head;
head = newHead;`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Array insertion may require shifting elements.
// Linked list insertion at head is simple and fast:
Node newHead = new Node(5);
newHead.next = head;
head = newHead;`,
    },
  },
  "node-creation": {
    title: "Creating a Node (Data + Pointer)",
    explanation:
      "A node is the fundamental building block of a linked list. It contains a data field to store the value and a next pointer to store the memory address of the next node.",
    visual: (
      <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
        <div className="flex border-2 border-cyan-500 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="p-4 border-r-2 border-cyan-500 font-bold text-center w-20 dark:text-gray-100">
            Data
          </div>
          <div className="p-4 bg-cyan-50 dark:bg-cyan-900/40 font-mono text-center w-32 text-sm dark:text-gray-200">
            Next Address
          </div>
        </div>
      </div>
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ Initialization
Node* head = new Node(10);
// Memory allocated dynamically on the heap`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java Initialization
Node head = new Node(10);
// Handled automatically by the garbage collector`,
    },
  },
  "linkedlist-traversal": {
    title: "Traversal and Printing",
    explanation:
      "To traverse a linked list, start at the head and follow the next pointers until you reach a node whose next pointer is null.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["head (10)", "head->next (20)", "head->next->next (null)"]}
        outputVariable="Output: 10 20"
        description="Traversing sequentially"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void printList(Node* head) {
    Node* temp = head; // Never modify the original head!
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next; // Move to next node
    }
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
void printList(Node head) {
    Node temp = head; // Good practice to use a temp pointer
    while (temp != null) {
        System.out.print(temp.data + " ");
        temp = temp.next;
    }
}`,
    },
  },
  "linkedlist-search": {
    title: "Search an element in Linked List",
    explanation:
      "Searching involves traversing the list from the head and checking if any node's data matches the target value. Time complexity is O(N).",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={[10, 20, 30, 40]}
        outputVariable="Target 30 -> Found!"
        description="Looping through list until temp->data == target"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
bool searchList(Node* head, int target) {
    Node* temp = head;
    while (temp != nullptr) {
        if (temp->data == target) return true;
        temp = temp->next;
    }
    return false;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
boolean searchList(Node head, int target) {
    Node temp = head;
    while (temp != null) {
        if (temp.data == target) return true;
        temp = temp.next;
    }
    return false;
}`,
    },
  },
  "insert-at-head": {
    title: "Insert at Head/Beginning",
    explanation:
      "Create a new node, point its next reference to the current head, and then update the head to be the new node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["Head: 20"]}
        outputArray={["New Head: 10", "20"]}
        description="Inserting 10 at the start. Time: O(1)"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void insertAtHead(Node*& head, int val) {
    Node* newNode = new Node(val);
    newNode->next = head; // Connect new node to the old head
    head = newNode;       // Update head to point to new node
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
// Function returning the new head
Node insertAtHead(Node head, int val) {
    Node newNode = new Node(val);
    newNode.next = head;
    return newNode; 
}`,
    },
  },
  "insert-at-tail": {
    title: "Insert at Tail/End",
    explanation:
      "Traverse to the last node (where next is null), create a new node, and point the last node's next to this new node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["10", "20"]}
        outputArray={["10", "20", "30 (Tail)"]}
        description="Inserting 30 at the end. Time: O(N)"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void insertAtTail(Node*& head, int val) {
    Node* newNode = new Node(val);
    if (head == nullptr) { // List is empty
        head = newNode;
        return;
    }
    Node* temp = head;
    while (temp->next != nullptr) { // Traverse to last node
        temp = temp->next;
    }
    temp->next = newNode;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node insertAtTail(Node head, int val) {
    Node newNode = new Node(val);
    if(head == null) return newNode;
    
    Node temp = head;
    while(temp.next != null) {
        temp = temp.next;
    }
    temp.next = newNode;
    return head;
}`,
    },
  },
  "insert-at-position": {
    title: "Insert at specific Position",
    explanation:
      "Traverse the list up to the (K-1)th position. Attach the new node's next to the Kth node, and the (K-1)th node's next to the new node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["10", "30"]}
        outputArray={["10", "20 (New)", "30"]}
        description="Inserting 20 at Position 2"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void insertAtPos(Node*& head, int val, int pos) {
    if (pos == 1) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
        return;
    }
    Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != nullptr; i++) {
        temp = temp->next;   // Reach node at pos - 1
    }
    if (temp == nullptr) return; // Out of bounds
    
    Node* newNode = new Node(val);
    newNode->next = temp->next;  // 1: Connect new node to later part
    temp->next = newNode;        // 2: Connect previous part to new node
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node insertAtPos(Node head, int val, int pos) {
    if (pos == 1) {
        Node newNode = new Node(val);
        newNode.next = head;
        return newNode;
    }
    Node temp = head;
    for (int i = 1; i < pos - 1 && temp != null; i++) {
        temp = temp.next;
    }
    if (temp == null) return head;
    
    Node newNode = new Node(val);
    newNode.next = temp.next;
    temp.next = newNode;
    return head;
}`,
    },
  },
  "delete-at-head": {
    title: "Delete Head/First Node",
    explanation:
      "Move the head pointer to the second node. Optionally free the memory of the original head node (required in C++).",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["10", "20"]}
        outputArray={["20 (New Head)"]}
        description="Deleting Head. Time: O(1)"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void deleteHead(Node*& head) {
    if (head == nullptr) return; // Empty list
    Node* temp = head;
    head = head->next; // Shift head
    delete temp; // Free memory to avoid leaks
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node deleteHead(Node head) {
    if (head == null) return null;
    return head.next; // Old head is naturally garbage collected
}`,
    },
  },
  "delete-at-tail": {
    title: "Delete Tail/Last Node",
    explanation:
      "Traverse the list to find the second-to-last node, and set its next reference to null.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["10", "20", "30"]}
        outputArray={["10", "20 (New Tail)"]}
        description="Deleting Tail. Time: O(N)"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void deleteTail(Node*& head) {
    if (head == nullptr) return;
    if (head->next == nullptr) { // Only one node
        delete head;
        head = nullptr;
        return;
    }
    Node* temp = head;
    while (temp->next->next != nullptr) { // Stop at second-last node
        temp = temp->next;
    }
    delete temp->next; // Free last node
    temp->next = nullptr;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node deleteTail(Node head) {
    if (head == null || head.next == null) return null;
    Node temp = head;
    while (temp.next.next != null) {
        temp = temp.next;
    }
    temp.next = null; // Sever the link to the last node
    return head;
}`,
    },
  },
  "delete-by-value": {
    title: "Delete Node by Value/Position",
    explanation:
      "Traverse until the target node is found (tracking the previous node). Update the previous node's next to skip the target node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["10", "20", "30"]}
        outputArray={["10", "30"]}
        description="Deleting Value 20"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
void deleteVal(Node*& head, int val) {
    if (head == nullptr) return;
    if (head->data == val) { // Deleting head
        Node* curr = head;
        head = head->next;
        delete curr;
        return;
    }
    Node* prev = nullptr;
    Node* curr = head;
    while (curr != nullptr && curr->data != val) {
        prev = curr;
        curr = curr->next;
    }
    if (curr == nullptr) return; // Value not found
    prev->next = curr->next; // Bypass the target node
    delete curr;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node deleteVal(Node head, int val) {
    if(head == null) return null;
    if(head.data == val) return head.next;
    
    Node curr = head;
    while(curr.next != null && curr.next.data != val) {
        curr = curr.next;
    }
    if(curr.next != null) {
        curr.next = curr.next.next; // Bypass
    }
    return head;
}`,
    },
  },
  "doubly-linkedlist": {
    title: "Doubly Linked List basics",
    explanation:
      "Every node in a doubly linked list has a pointer to BOTH the next node and the previous node. This allows traversal in both directions but requires more memory per node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["[Prev | 10 | Next]"]}
        outputVariable="Bidirectional Navigation"
        description="Node structure -> Prev | Data | Next"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
struct DoublyNode {
    int data;
    DoublyNode* next;
    DoublyNode* prev;  // Extra pointer backward
    DoublyNode(int val) {
        data = val;
        next = prev = nullptr;
    }
};`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
class DoublyNode {
    int data;
    DoublyNode next;
    DoublyNode prev;  // Extra pointer backward
    DoublyNode(int val) {
        data = val;
        next = prev = null;
    }
}`,
    },
  },
  "circular-linkedlist": {
    title: "Circular Linked List basics",
    explanation:
      "In a circular linked list, the final node's next pointer points back to the head node instead of null, creating a continuous loop.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Tail's next points back to Head"
        outputVariable="Useful for round-robin scheduling queues"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// Traversing a circular linked list
Node* temp = head;
if(head != nullptr) {
    do {
        cout << temp->data << " ";
        temp = temp->next;
    } while(temp != head); // Stop when we wrap around to head
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java Traversing a circular linked list
Node temp = head;
if(head != null) {
    do {
        System.out.print(temp.data + " ");
        temp = temp.next;
    } while(temp != head); // Stop when we wrap around
}`,
    },
  },
  "middle-of-linkedlist": {
    title: "Middle of the Linked List",
    explanation:
      "Use two pointers, slow (moves 1 step) and fast (moves 2 steps). When fast reaches the end, slow will be at the middle.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "3", "4", "5"]}
        outputVariable="Middle is 3"
        description="Slow moves 1, Fast moves 2"
        highlightIndices={[2]}
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* middleNode(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;       // 1 step
        fast = fast->next->next; // 2 steps
    }
    return slow; // When fast reaches end, slow is midway
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node middleNode(Node head) {
    Node slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}`,
    },
  },
  "detect-cycle": {
    title: "Detect a Cycle (Floyd's Algorithm)",
    explanation:
      "Use the slow and fast pointer technique (Hare and Tortoise algorithm). If they ever meet, a cycle exists. If fast reaches null, there is no cycle.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="If Fast == Slow -> Cycle exists!"
        outputVariable="Cycle Detected (True/False)"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
bool hasCycle(Node *head) {
    Node* slow = head;
    Node* fast = head;
    while(fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true; // Tortoise and Hare meet
    }
    return false;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
public boolean hasCycle(Node head) {
    Node slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false;
}`,
    },
  },
  "starting-point-of-cycle": {
    title: "Find starting point of loop",
    explanation:
      "When slow and fast meet, reset one pointer to the head and move both at a speed of 1. Where they meet again is the start of the cycle.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Math: distance(head, start) == distance(meet, start)"
        outputVariable="Return node where they meet again"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* detectCycleStart(Node *head) {
    Node *slow = head, *fast = head;
    while(fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast) {
            slow = head; // Reset one pointer to start
            while(slow != fast) {
                slow = slow->next; // Both move 1 step
                fast = fast->next; // Both move 1 step
            }
            return slow; // The intersection is cycle start
        }
    }
    return nullptr;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node detectCycleStart(Node head) {
    Node slow = head, fast = head;
    boolean hasCycle = false;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if(!hasCycle) return null;
    
    slow = head;
    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}`,
    },
  },
  "nth-node-from-end": {
    title: "Nth node from end of Linked List",
    explanation:
      "Use two pointers. Move the fast pointer N steps ahead first. Then move both pointers one step at a time. When fast reaches null, slow is at the Nth node from the end.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Fast gets N steps headstart. Then move together."
        outputVariable="Node found"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* removeNthFromEnd(Node* head, int n) {
    Node* dummy = new Node(0);
    dummy->next = head;
    Node* slow = dummy;
    Node* fast = dummy;
    
    for(int i = 1; i <= n + 1; i++) {
        fast = fast->next; // Fast gets headstart
    }
    
    while(fast != nullptr) {
        slow = slow->next;
        fast = fast->next;
    }
    
    slow->next = slow->next->next; // Skip the Nth element from end
    Node* res = dummy->next;
    delete dummy;
    return res;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node removeNthFromEnd(Node head, int n) {
    Node dummy = new Node(0);
    dummy.next = head;
    Node slow = dummy, fast = dummy;
    
    for(int i=0; i<=n; i++) fast = fast.next;
    
    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}`,
    },
  },
  "reverse-linkedlist": {
    title: "Reverse a Linked List",
    explanation:
      "Iterate through the list using three pointers: prev (null initially), curr (head), and next. Reverse the current node's pointer, then shift all pointers forward.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "3"]}
        outputArray={["3", "2", "1"]}
        description="Reversing the Next pointers iteratively"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    Node* nextPtr = nullptr;
    
    while(curr != nullptr) {
        nextPtr = curr->next; // Save next node
        curr->next = prev;    // Reverse pointer
        
        // Shift pointers one step forward
        prev = curr;
        curr = nextPtr;
    }
    return prev; // prev logic will land on new head
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node reverseList(Node head) {
    Node prev = null;
    Node curr = head;
    while(curr != null) {
        Node nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`,
    },
  },
  "check-palindrome-linkedlist": {
    title: "Check if Linked List is Palindrome",
    explanation:
      "Find the middle, reverse the second half, and compare the two halves for equality.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "2", "1"]}
        outputVariable="True"
        description="1->2 and reversed 1->2 match"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
// 1. Find middle using fast and slow pointers.
// 2. Reverse the second half.
// 3. Compare the first half and reversed second half element by element.
// 4. (Optional) Reverse the second half again to restore original list.`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
// This combines middleNode + reverseList functions.
public boolean isPalindrome(Node head) {
    // Left as an exercise to assemble!
    return true;
}`,
    },
  },
  "even-odd-linkedlist": {
    title: "Odd Even Linked List",
    explanation:
      "Group all odd indices together followed by the even indices. Keep track of odd head, even head, and traverse updating next pointers.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "3", "4", "5"]}
        outputArray={["1", "3", "5", "2", "4"]}
        description="Grouping based on index position"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* oddEvenList(Node* head) {
    if(!head || !head->next) return head;
    Node *odd = head, *even = head->next, *evenHead = even;
    while(even && even->next) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    odd->next = evenHead;
    return head;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node oddEvenList(Node head) {
    if(head == null) return null;
    Node odd = head, even = head.next, evenHead = even;
    while(even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}`,
    },
  },
  "remove-duplicates-sorted": {
    title: "Remove duplicates from sorted list",
    explanation:
      "Traverse the list. If current node's data equals next node's data, skip the next node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "1", "2", "3", "3"]}
        outputArray={["1", "2", "3"]}
        description="Skipping duplicate contiguous values"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* deleteDuplicates(Node* head) {
    Node* curr = head;
    while(curr != nullptr && curr->next != nullptr) {
        if(curr->data == curr->next->data) {
            Node* temp = curr->next;
            curr->next = curr->next->next;
            delete temp;
        } else {
            curr = curr->next;
        }
    }
    return head;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node deleteDuplicates(Node head) {
    Node curr = head;
    while(curr != null && curr.next != null) {
        if(curr.data == curr.next.data) curr.next = curr.next.next;
        else curr = curr.next;
    }
    return head;
}`,
    },
  },
  "merge-two-sorted-lists": {
    title: "Merge Two Sorted Lists",
    explanation:
      "Use a dummy node and two pointers to traverse both lists, linking the smaller value at every step.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["L1: 1->3", "L2: 2->4"]}
        outputArray={["1->2->3->4"]}
        description="Comparing and linking step by step"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
Node* mergeTwoLists(Node* l1, Node* l2) {
    Node dummy(0);
    Node* tail = &dummy;
    while(l1 && l2) {
        if(l1->data < l2->data) { tail->next = l1; l1 = l1->next; }
        else { tail->next = l2; l2 = l2->next; }
        tail = tail->next;
    }
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
Node mergeTwoLists(Node l1, Node l2) {
    Node dummy = new Node(0);
    Node curr = dummy;
    while(l1 != null && l2 != null) {
        if(l1.data <= l2.data) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}`,
    },
  },
  "reverse-nodes-k-group": {
    title: "Reverse Nodes in k-Group",
    explanation:
      "Iterate to check if there are k nodes left. If so, reverse those k nodes, link the sections, and move forward.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "3", "4", "5"]}
        outputArray={["2", "1", "4", "3", "5"]}
        description="k=2. Reversing pairs."
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet
// Helper reversed and length functions usually required
// It acts as an extension of standard linkedlist reverse`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet
// Hard level interview problem.`,
    },
  },
  "flattening-linkedlist": {
    title: "Flattening a Linked List",
    explanation:
      "Given a list where nodes have a next pointer and a child/bottom pointer, flatten it into a single sorted list. Often solved using recursion and merge two sorted lists.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Merging bottom links like independent sorted arrays"
        outputVariable="Flattened Sorted List"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ snippet // Hard level problem`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java snippet // Hard level problem`,
    },
  },
  "clone-with-random-pointer": {
    title: "Clone a Linked List with random pointers",
    explanation:
      "Standard approach involves creating deep copy nodes and interleaving them with original nodes, updating random pointers, then separating the two intertwined lists.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Node A -> Node A' -> Node B -> Node B'"
        outputVariable="Deep copy restored"
      />
    ),
    code: {
      cpp: `#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// C++ // Medium-Hard level
// 1. Interweave new nodes
// 2. Map random pointers
// 3. Detach original and cloned nodes cleanly`,
      java: `import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Java // Medium-Hard level`,
    },
  },
  "linkedlist-types-overview": {
    title: "Types of Linked Lists overview",
    explanation:
      "Singly Linked List (forward only), Doubly Linked List (forward & backward), Circular Linked List (last node points to first).",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Singly/Doubly/Circular"
        outputLabel="List Types"
        description="Categorization based on pointer directions"
      />
    ),
    code: {
      cpp: "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// Conceptual overview",
      java: "import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Conceptual overview",
    },
  },
  "linkedlist-create-traverse": {
    title: "Creating & Traversing a Linked List",
    explanation:
      "Define a head, link subsequent nodes, and run a while loop (temp != null) to visit each.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output"
        inputArray={["1", "2", "3"]}
        outputVariable="Prints: 1 2 3"
      />
    ),
    code: {
      cpp: '#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\nNode* temp = head;\nwhile(temp) { cout << temp->data << " "; temp = temp->next; }',
      java: 'import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\nNode temp = head;\nwhile(temp != null) { System.out.print(temp.data + " "); temp = temp.next; }',
    },
  },
  "linkedlist-length": {
    title: "Length of Linked List",
    explanation:
      "Count nodes incrementally while traversing until reaching null.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output"
        inputArray={["1", "2", "3", "4"]}
        outputVariable="Length: 4"
      />
    ),
    code: {
      cpp: "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\nint len=0; while(head){len++; head=head->next;} return len;",
      java: "import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\nint len=0; while(head!=null){len++; head=head.next;} return len;",
    },
  },
  "dll-insert-delete": {
    title: "Insert & Delete (Beginning/End/Pos) in DLL",
    explanation:
      "Similar to Singly LL but you must update previous pointers as well to maintain bilateral integrity.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Two-way pointer updates required for prev"
      />
    ),
    code: {
      cpp: "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// DLL adjustments require prev pointer updates",
      java: "import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// DLL adjustments require prev pointer updates",
    },
  },
  "dll-reverse": {
    title: "Reverse Doubly Linked List",
    explanation:
      "Swap the next and prev pointers for every node, and update the head to the last processed node.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "3"]}
        outputArray={["3", "2", "1"]}
      />
    ),
    code: {
      cpp: "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\nNode* curr = head, *temp = nullptr;\nwhile(curr) { temp = curr->prev; curr->prev = curr->next; curr->next = temp; curr = curr->prev; }\nif(temp) head = temp->prev;",
      java: "import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\nNode curr = head, temp = null;\nwhile(curr != null) { temp = curr.prev; curr.prev = curr.next; curr.next = temp; curr = curr.prev; }\nif(temp != null) head = temp.prev;",
    },
  },
  "cll-operations": {
    title: "Insert, Delete & Traverse Circular LL",
    explanation:
      "Traverse using a do-while loop because the tail connects back to the head.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output"
        description="Tail connects to Head"
      />
    ),
    code: {
      cpp: "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\ndo { temp=temp->next; } while(temp!=head);",
      java: "import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\ndo { temp=temp.next; } while(temp!=head);",
    },
  },
  "fast-slow-pointer-technique": {
    title: "Fast & Slow Pointer Technique",
    explanation:
      "Using two pointers moving at different speeds (1x and 2x) to find middle elements or cycles.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Pattern"
        description="Also known as Tortoise and Hare"
      />
    ),
    code: {
      cpp: "#include <iostream>\nusing namespace std;\n\nclass Node {\npublic:\n    int data;\n    Node* next;\n    Node* prev; // For Doubly Linked List\n    Node(int data) {\n        this->data = data;\n        this->next = nullptr;\n        this->prev = nullptr;\n    }\n};\n\n// --- Main Logic ---\n// Pattern overview",
      java: "import java.util.*;\n\nclass Node {\n    int data;\n    Node next;\n    Node prev; // For Doubly Linked List\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n        this.prev = null;\n    }\n}\n\n// --- Main Logic ---\n// Pattern overview",
    },
  },
  "dummy-node-technique": {
    title: "Dummy Node & In-place Reversal",
    explanation:
      "A dummy node before head simplifies edge cases (like inserting/deleting at head). In-place reversal saves space O(1).",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        description="Dummy->Head streamlines pointers"
      />
    ),
    code: {
      cpp: "#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\nNode* removeElements(Node* head, int val) {\\n    // Create a dummy node that points to the actual head\\n    // This helps handle cases where the head itself needs to be removed\\n    Node* dummy = new Node(0);\\n    dummy->next = head;\\n    \\n    Node* current = dummy;\\n    \\n    while (current->next != nullptr) {\\n        if (current->next->data == val) {\\n            // Skip the node containing the value\\n            Node* nodeToDelete = current->next;\\n            current->next = current->next->next;\\n            delete nodeToDelete; // Free memory in C++\\n        } else {\\n            // Move to the next node if no deletion\\n            current = current->next;\\n        }\\n    }\\n    \\n    Node* newHead = dummy->next;\\n    delete dummy;\\n    return newHead;\\n}",
      java: "import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\npublic Node removeElements(Node head, int val) {\\n    // Create a dummy node that points to the head\\n    Node dummy = new Node(0);\\n    dummy.next = head;\\n    \\n    Node current = dummy;\\n    \\n    while (current.next != null) {\\n        if (current.next.data == val) {\\n            // Skip the node containing the value\\n            current.next = current.next.next;\\n        } else {\\n            // Move to the next node if no deletion\\n            current = current.next;\\n        }\\n    }\\n    \\n    return dummy.next;\\n}",
    },
  },
  "merge-k-sorted-lists": {
    title: "Merge K Sorted Linked Lists",
    explanation:
      "Optimize merging multiple lists using a Min-Heap (Priority Queue) or divide and conquer to get O(N log K) time.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="K Sorted Lists"
        outputLabel="Output List"
        description="Merging 3 lists into 1 sorted list"
      />
    ),
    code: {
      cpp: "#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\nNode* mergeTwoLists(Node* l1, Node* l2) {\\n    if (!l1) return l2;\\n    if (!l2) return l1;\\n    Node* head = nullptr;\\n    Node* tail = nullptr;\\n    if (l1->data <= l2->data) { head = l1; l1 = l1->next; }\\n    else { head = l2; l2 = l2->next; }\\n    tail = head;\\n    while (l1 && l2) {\\n        if (l1->data <= l2->data) { tail->next = l1; l1 = l1->next; }\\n        else { tail->next = l2; l2 = l2->next; }\\n        tail = tail->next;\\n    }\\n    if (l1) tail->next = l1;\\n    if (l2) tail->next = l2;\\n    return head;\\n}\\n\\nNode* mergeKLists(Node** lists, int k) {\\n    if (k == 0) return nullptr;\\n    if (k == 1) return lists[0];\\n    int last = k - 1;\\n    while (last != 0) {\\n        int i = 0; int j = last;\\n        while (i < j) {\\n            lists[i] = mergeTwoLists(lists[i], lists[j]);\\n            i++; j--;\\n            if (i >= j) last = j;\\n        }\\n    }\\n    return lists[0];\\n}",
      java: "import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\npublic static Node mergeTwoLists(Node l1, Node l2) {\\n    if (l1 == null) return l2;\\n    if (l2 == null) return l1;\\n    Node head = null;\\n    Node tail = null;\\n    if (l1.data <= l2.data) { head = l1; l1 = l1.next; }\\n    else { head = l2; l2 = l2.next; }\\n    tail = head;\\n    while (l1 != null && l2 != null) {\\n        if (l1.data <= l2.data) { tail.next = l1; l1 = l1.next; }\\n        else { tail.next = l2; l2 = l2.next; }\\n        tail = tail.next;\\n    }\\n    if (l1 != null) tail.next = l1;\\n    if (l2 != null) tail.next = l2;\\n    return head;\\n}\\n\\npublic static Node mergeKLists(Node[] lists) {\\n    if (lists == null || lists.length == 0) return null;\\n    if (lists.length == 1) return lists[0];\\n    int last = lists.length - 1;\\n    while (last != 0) {\\n        int i = 0; int j = last;\\n        while (i < j) {\\n            lists[i] = mergeTwoLists(lists[i], lists[j]);\\n            i++; j--;\\n            if (i >= j) last = j;\\n        }\\n    }\\n    return lists[0];\\n}",
    },
  },
  "intersection-of-two-lists": {
    title: "Intersection of Two Linked Lists",
    explanation:
      "Find the node at which two lists merge. Use length difference or two-pointer alignment strategy.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Two Lists"
        outputLabel="Intersection Node"
        description="Aligning tails to trace back junction"
      />
    ),
    code: {
      cpp: "#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\nNode* getIntersectionNode(Node* headA, Node* headB) {\\n    if (headA == nullptr || headB == nullptr) return nullptr;\\n    Node* a = headA;\\n    Node* b = headB;\\n    // Traverse both lists.\\n    // When one reaches the end, redirect to the head of the other list.\\n    while (a != b) {\\n        if (a == nullptr) a = headB;\\n        else a = a->next;\\n        \\n        if (b == nullptr) b = headA;\\n        else b = b->next;\\n    }\\n    return a;\\n}",
      java: "import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\npublic Node getIntersectionNode(Node headA, Node headB) {\\n    if (headA == null || headB == null) return null;\\n    Node a = headA;\\n    Node b = headB;\\n    // Traverse both lists.\\n    // When one reaches the end, redirect to the head of the other list.\\n    while (a != b) {\\n        if (a == null) a = headB;\\n        else a = a.next;\\n        \\n        if (b == null) b = headA;\\n        else b = b.next;\\n    }\\n    return a;\\n}",
    },
  },
  "rotate-linkedlist": {
    title: "Rotate & Partition Linked List",
    explanation:
      "Rotate: Link tail to head making it circular, then break the link at length - (k % length). Partition: maintain two separate lists (less than X, >= X) and combine.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Input List"
        outputLabel="Output List"
        inputArray={["1", "2", "3", "4", "5"]}
        outputArray={["4", "5", "1", "2", "3"]}
        description="Rotate right by k=2"
      />
    ),
    code: {
      cpp: "#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\nNode* rotateRight(Node* head, int k) {\\n    if (!head || !head->next || k == 0) return head;\\n    int len = 1;\\n    Node* tail = head;\\n    while (tail->next) { tail = tail->next; len++; }\\n    tail->next = head;\\n    k = k % len;\\n    int stepsToNewHead = len - k;\\n    Node* newTail = tail;\\n    while (stepsToNewHead--) newTail = newTail->next;\\n    head = newTail->next;\\n    newTail->next = nullptr;\\n    return head;\\n}",
      java: "import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\npublic Node rotateRight(Node head, int k) {\\n    if (head == null || head.next == null || k == 0) return head;\\n    int len = 1;\\n    Node tail = head;\\n    while (tail.next != null) { tail = tail.next; len++; }\\n    tail.next = head;\\n    k = k % len;\\n    int stepsToNewHead = len - k;\\n    Node newTail = tail;\\n    while (stepsToNewHead-- > 0) newTail = newTail.next;\\n    head = newTail.next;\\n    newTail.next = null;\\n    return head;\\n}",
    },
  },
  "add-two-numbers-linkedlist": {
    title: "Add Two Numbers using Linked List",
    explanation:
      "Each node represents a single digit of a number. Iterate while keeping track of carry-over.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Inputs (Reversed)"
        outputLabel="Output List"
        description="2->4->3 + 5->6->4 = 7->0->8"
      />
    ),
    code: {
      cpp: "#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\nNode* addTwoNumbers(Node* l1, Node* l2) {\\n    Node* dummy = new Node(0);\\n    Node* temp = dummy;\\n    int carry = 0;\\n    while (l1 != nullptr || l2 != nullptr || carry != 0) {\\n        int sum = 0;\\n        if (l1 != nullptr) { sum += l1->data; l1 = l1->next; }\\n        if (l2 != nullptr) { sum += l2->data; l2 = l2->next; }\\n        sum += carry;\\n        carry = sum / 10;\\n        Node* newNode = new Node(sum % 10);\\n        temp->next = newNode;\\n        temp = temp->next;\\n    }\\n    return dummy->next;\\n}",
      java: "import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\npublic static Node addTwoNumbers(Node l1, Node l2) {\\n    Node dummy = new Node(0);\\n    Node temp = dummy;\\n    int carry = 0;\\n    while (l1 != null || l2 != null || carry != 0) {\\n        int sum = 0;\\n        if (l1 != null) { sum += l1.data; l1 = l1.next; }\\n        if (l2 != null) { sum += l2.data; l2 = l2.next; }\\n        sum += carry;\\n        carry = sum / 10;\\n        Node newNode = new Node(sum % 10);\\n        temp.next = newNode;\\n        temp = temp.next;\\n    }\\n    return dummy.next;\\n}",
    },
  },
  "lru-cache-linkedlist": {
    title: "LRU Cache (Linked List + HashMap)",
    explanation:
      "Least Recently Used (LRU) Cache uses a Doubly Linked List to quickly shift elements to the 'most recently used' end, and a HashMap for O(1) lookup.",
    visual: (
      <GenericArrayVisualizer
        inputLabel="Commands"
        outputLabel="Cache Status"
        description="Evicts least recently accessed items first"
      />
    ),
    code: {
      cpp: "#include <iostream>\\n#include <unordered_map>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\nclass LRUCache {\\n    Node* head = new Node(-1);\\n    Node* tail = new Node(-1);\\n    int capacity;\\n    unordered_map<int, Node*> map;\\npublic:\\n    LRUCache(int cap) {\\n        capacity = cap;\\n        head->next = tail;\\n        tail->prev = head;\\n    }\\n    void addNode(Node* newNode) {\\n        Node* temp = head->next;\\n        newNode->next = temp;\\n        newNode->prev = head;\\n        head->next = newNode;\\n        temp->prev = newNode;\\n    }\\n    void deleteNode(Node* delNode) {\\n        Node* prevNode = delNode->prev;\\n        Node* nextNode = delNode->next;\\n        prevNode->next = nextNode;\\n        nextNode->prev = prevNode;\\n    }\\n    int get(int key) {\\n        if (map.find(key) != map.end()) {\\n            Node* resNode = map[key];\\n            int ans = resNode->data;\\n            map.erase(key);\\n            deleteNode(resNode);\\n            addNode(resNode);\\n            map[key] = head->next;\\n            return ans;\\n        }\\n        return -1;\\n    }\\n    void put(int key, int value) {\\n        if (map.find(key) != map.end()) {\\n            Node* existingNode = map[key];\\n            map.erase(key);\\n            deleteNode(existingNode);\\n        }\\n        if (map.size() == capacity) {\\n            map.erase(tail->prev->data);\\n            deleteNode(tail->prev);\\n        }\\n        Node* newNode = new Node(value);\\n        addNode(newNode);\\n        map[key] = head->next;\\n    }\\n};",
      java: "import java.util.*;\\n\\nclass Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\nclass LRUCache {\\n    Node head = new Node(-1);\\n    Node tail = new Node(-1);\\n    int capacity;\\n    HashMap<Integer, Node> map = new HashMap<>();\\n    public LRUCache(int cap) {\\n        capacity = cap;\\n        head.next = tail;\\n        tail.prev = head;\\n    }\\n    private void addNode(Node newNode) {\\n        Node temp = head.next;\\n        newNode.next = temp;\\n        newNode.prev = head;\\n        head.next = newNode;\\n        temp.prev = newNode;\\n    }\\n    private void deleteNode(Node delNode) {\\n        Node prevNode = delNode.prev;\\n        Node nextNode = delNode.next;\\n        prevNode.next = nextNode;\\n        nextNode.prev = prevNode;\\n    }\\n    public int get(int key) {\\n        if (map.containsKey(key)) {\\n            Node resNode = map.get(key);\\n            int ans = resNode.data;\\n            map.remove(key);\\n            deleteNode(resNode);\\n            addNode(resNode);\\n            map.put(key, head.next);\\n            return ans;\\n        }\\n        return -1;\\n    }\\n    public void put(int key, int value) {\\n        if (map.containsKey(key)) {\\n            Node existingNode = map.get(key);\\n            map.remove(key);\\n            deleteNode(existingNode);\\n        }\\n        if (map.size() == capacity) {\\n            map.remove(tail.prev.data);\\n            deleteNode(tail.prev);\\n        }\\n        Node newNode = new Node(value);\\n        addNode(newNode);\\n        map.put(key, head.next);\\n    }\\n}",
    },
  },
};
