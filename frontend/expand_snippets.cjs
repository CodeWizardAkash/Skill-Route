const fs = require('fs');

const path = 'C:/Users/pc/OneDrive/Desktop/skillroute/Skill-Route/frontend/src/data/dsaTopicsContent.jsx';
let content = fs.readFileSync(path, 'utf8');

function updateSnippet(id, cppCode, javaCode) {
    const idMarker = '"' + id + '":';
    const idIndex = content.indexOf(idMarker);
    if (idIndex === -1) {
        console.log("Could not find", id);
        return;
    }

    const codeMarker = "code: {";
    const codeStartIndex = content.indexOf(codeMarker, idIndex);

    // Safely write the strings using JSON.stringify to handle newlines automatically
    const newCodeBlock = "code: { \\ncpp: " + JSON.stringify(cppCode) + ", \\njava: " + JSON.stringify(javaCode) + " \\n}";

    const beforeCode = content.substring(0, codeStartIndex);
    const codeEndStr = content.substring(codeStartIndex);

    let bracketCount = 0;
    let codeEndIndex = -1;
    for (let i = 0; i < codeEndStr.length; i++) {
        if (codeEndStr[i] === '{') bracketCount++;
        else if (codeEndStr[i] === '}') {
            bracketCount--;
            if (bracketCount === 0) {
                codeEndIndex = i;
                break;
            }
        }
    }

    if (codeEndIndex !== -1) {
        content = beforeCode + newCodeBlock + codeEndStr.substring(codeEndIndex + 1);
        console.log("Updated Snippets for:", id);
    }
}

const cppPrefix = "#include <iostream>\\nusing namespace std;\\n\\nclass Node {\\npublic:\\n    int data;\\n    Node* next;\\n    Node* prev;\\n    Node(int data) {\\n        this->data = data;\\n        this->next = nullptr;\\n        this->prev = nullptr;\\n    }\\n};\\n\\n// --- Main Logic ---\\n// C++ snippet\\n";
const javaPrefix = "class Node {\\n    int data;\\n    Node next;\\n    Node prev;\\n    Node(int data) {\\n        this.data = data;\\n        this.next = null;\\n        this.prev = null;\\n    }\\n}\\n\\n// --- Main Logic ---\\n// Java snippet\\n";

const dict = {
    "merge-k-sorted-lists": {
        cpp: cppPrefix + "// Merging Two Lists\\nNode* mergeTwoLists(Node* l1, Node* l2) {\\n    if (!l1) return l2;\\n    if (!l2) return l1;\\n    \\n    Node* head = nullptr;\\n    Node* tail = nullptr;\\n    if (l1->data <= l2->data) {\\n        head = l1;\\n        l1 = l1->next;\\n    } else {\\n        head = l2;\\n        l2 = l2->next;\\n    }\\n    tail = head;\\n    while (l1 && l2) {\\n        if (l1->data <= l2->data) {\\n            tail->next = l1;\\n            l1 = l1->next;\\n        } else {\\n            tail->next = l2;\\n            l2 = l2->next;\\n        }\\n        tail = tail->next;\\n    }\\n    if (l1) tail->next = l1;\\n    if (l2) tail->next = l2;\\n    return head;\\n}\\n\\n// Divide and Conquer Approach without Priority Queue\\nNode* mergeKLists(Node* lists[], int k) {\\n    if (k == 0) return nullptr;\\n    if (k == 1) return lists[0];\\n    int last = k - 1;\\n    while (last != 0) {\\n        int i = 0;\\n        int j = last;\\n        while (i < j) {\\n            lists[i] = mergeTwoLists(lists[i], lists[j]);\\n            i++;\\n            j--;\\n            if (i >= j) last = j;\\n        }\\n    }\\n    return lists[0];\\n}",
        java: javaPrefix + "// Merging Two Lists\\npublic static Node mergeTwoLists(Node l1, Node l2) {\\n    if (l1 == null) return l2;\\n    if (l2 == null) return l1;\\n    Node head = null;\\n    Node tail = null;\\n    if (l1.data <= l2.data) {\\n        head = l1;\\n        l1 = l1.next;\\n    } else {\\n        head = l2;\\n        l2 = l2.next;\\n    }\\n    tail = head;\\n    while (l1 != null && l2 != null) {\\n        if (l1.data <= l2.data) {\\n            tail.next = l1;\\n            l1 = l1.next;\\n        } else {\\n            tail.next = l2;\\n            l2 = l2.next;\\n        }\\n        tail = tail.next;\\n    }\\n    if (l1 != null) tail.next = l1;\\n    if (l2 != null) tail.next = l2;\\n    return head;\\n}\\n\\n// Divide and Conquer Approach without Priority Queue\\npublic static Node mergeKLists(Node[] lists) {\\n    if (lists == null || lists.length == 0) return null;\\n    if (lists.length == 1) return lists[0];\\n    int last = lists.length - 1;\\n    while (last != 0) {\\n        int i = 0;\\n        int j = last;\\n        while (i < j) {\\n            lists[i] = mergeTwoLists(lists[i], lists[j]);\\n            i++;\\n            j--;\\n            if (i >= j) last = j;\\n        }\\n    }\\n    return lists[0];\\n}"
    },
    "lru-cache-linkedlist": {
        cpp: cppPrefix + "#include <unordered_map>\\n\\nclass LRUCache {\\n    Node* head = new Node(-1);\\n    Node* tail = new Node(-1);\\n    int capacity;\\n    unordered_map<int, Node*> map;\\npublic:\\n    LRUCache(int cap) {\\n        capacity = cap;\\n        head->next = tail;\\n        tail->prev = head;\\n    }\\n    void addNode(Node* newNode) {\\n        Node* temp = head->next;\\n        newNode->next = temp;\\n        newNode->prev = head;\\n        head->next = newNode;\\n        temp->prev = newNode;\\n    }\\n    void deleteNode(Node* delNode) {\\n        Node* prevNode = delNode->prev;\\n        Node* nextNode = delNode->next;\\n        prevNode->next = nextNode;\\n        nextNode->prev = prevNode;\\n    }\\n    int get(int key) {\\n        if (map.find(key) != map.end()) {\\n            Node* resNode = map[key];\\n            int ans = resNode->data;\\n            map.erase(key);\\n            deleteNode(resNode);\\n            addNode(resNode);\\n            map[key] = head->next;\\n            return ans;\\n        }\\n        return -1;\\n    }\\n    void put(int key, int value) {\\n        if (map.find(key) != map.end()) {\\n            Node* existingNode = map[key];\\n            map.erase(key);\\n            deleteNode(existingNode);\\n        }\\n        if (map.size() == capacity) {\\n            map.erase(tail->prev->data);\\n            deleteNode(tail->prev);\\n        }\\n        Node* newNode = new Node(value);\\n        addNode(newNode);\\n        map[key] = head->next;\\n    }\\n};",
        java: javaPrefix + "import java.util.HashMap;\\n\\nclass LRUCache {\\n    Node head = new Node(-1);\\n    Node tail = new Node(-1);\\n    int capacity;\\n    HashMap<Integer, Node> map = new HashMap<>();\\n    public LRUCache(int cap) {\\n        capacity = cap;\\n        head.next = tail;\\n        tail.prev = head;\\n    }\\n    private void addNode(Node newNode) {\\n        Node temp = head.next;\\n        newNode.next = temp;\\n        newNode.prev = head;\\n        head.next = newNode;\\n        temp.prev = newNode;\\n    }\\n    private void deleteNode(Node delNode) {\\n        Node prevNode = delNode.prev;\\n        Node nextNode = delNode.next;\\n        prevNode.next = nextNode;\\n        nextNode.prev = prevNode;\\n    }\\n    public int get(int key) {\\n        if (map.containsKey(key)) {\\n            Node resNode = map.get(key);\\n            int ans = resNode.data;\\n            map.remove(key);\\n            deleteNode(resNode);\\n            addNode(resNode);\\n            map.put(key, head.next);\\n            return ans;\\n        }\\n        return -1;\\n    }\\n    public void put(int key, int value) {\\n        if (map.containsKey(key)) {\\n            Node existingNode = map.get(key);\\n            map.remove(key);\\n            deleteNode(existingNode);\\n        }\\n        if (map.size() == capacity) {\\n            map.remove(tail.prev.data);\\n            deleteNode(tail.prev);\\n        }\\n        Node newNode = new Node(value);\\n        addNode(newNode);\\n        map.put(key, head.next);\\n    }\\n}"
    },
    "linkedlist-length": {
        cpp: cppPrefix + "int getLength(Node* head) {\\n    int length = 0;\\n    Node* temp = head;\\n    while (temp != nullptr) {\\n        length++;\\n        temp = temp->next;\\n    }\\n    return length;\\n}",
        java: javaPrefix + "public int getLength(Node head) {\\n    int length = 0;\\n    Node temp = head;\\n    while (temp != null) {\\n        length++;\\n        temp = temp.next;\\n    }\\n    return length;\\n}"
    },
    "linkedlist-create-traverse": {
        cpp: cppPrefix + "void printList(Node* head) {\\n    Node* temp = head;\\n    while (temp != nullptr) {\\n        cout << temp->data << \\" -> \\";\\n        temp = temp->next;\\n    }\\n    cout << \\"NULL\\" << endl;\\n}",
        java: javaPrefix + "public void printList(Node head) {\\n    Node temp = head;\\n    while (temp != null) {\\n        System.out.print(temp.data + \\" -> \\");\\n        temp = temp.next;\\n    }\\n    System.out.println(\\"NULL\\");\\n}"
    },
    "cll-operations": {
        cpp: cppPrefix + "void printCircularList(Node* head) {\\n    if (head == nullptr) return;\\n    Node* temp = head;\\n    do {\\n        cout << temp->data << \\" -> \\";\\n        temp = temp->next;\\n    } while (temp != head);\\n    cout << \\"(Head) \\" << endl;\\n}",
        java: javaPrefix + "public void printCircularList(Node head) {\\n    if (head == null) return;\\n    Node temp = head;\\n    do {\\n        System.out.print(temp.data + \\" -> \\");\\n        temp = temp.next;\\n    } while (temp != head);\\n    System.out.println(\\"(Head) \\");\\n}"
    },
    "detect-cycle": {
        cpp: cppPrefix + "bool hasCycle(Node *head) {\\n    if (head == nullptr || head->next == nullptr) return false;\\n    Node *slow = head;\\n    Node *fast = head;\\n    while (fast != nullptr && fast->next != nullptr) {\\n        slow = slow->next;\\n        fast = fast->next->next;\\n        if (slow == fast) return true;\\n    }\\n    return false;\\n}",
        java: javaPrefix + "public boolean hasCycle(Node head) {\\n    if (head == null || head.next == null) return false;\\n    Node slow = head;\\n    Node fast = head;\\n    while (fast != null && fast.next != null) {\\n        slow = slow.next;\\n        fast = fast.next.next;\\n        if (slow == fast) return true;\\n    }\\n    return false;\\n}"
    },
    "dummy-node-technique": {
        cpp: cppPrefix + "Node* removeElements(Node* head, int val) {\\n    Node* dummy = new Node(0);\\n    dummy->next = head;\\n    Node* current = dummy;\\n    while (current->next != nullptr) {\\n        if (current->next->data == val) {\\n            Node* nodeToDelete = current->next;\\n            current->next = current->next->next;\\n            delete nodeToDelete;\\n        } else {\\n            current = current->next;\\n        }\\n    }\\n    Node* newHead = dummy->next;\\n    delete dummy;\\n    return newHead;\\n}",
        java: javaPrefix + "public Node removeElements(Node head, int val) {\\n    Node dummy = new Node(0);\\n    dummy.next = head;\\n    Node current = dummy;\\n    while (current.next != null) {\\n        if (current.next.data == val) {\\n            current.next = current.next.next;\\n        } else {\\n            current = current.next;\\n        }\\n    }\\n    return dummy.next;\\n}"
    },
    "fast-slow-pointer-technique": {
        cpp: cppPrefix + "Node* findMiddle(Node* head) {\\n    if (head == nullptr) return nullptr;\\n    Node* slow = head;\\n    Node* fast = head;\\n    while (fast != nullptr && fast->next != nullptr) {\\n        slow = slow->next;\\n        fast = fast->next->next;\\n    }\\n    return slow;\\n}",
        java: javaPrefix + "public Node findMiddle(Node head) {\\n    if (head == null) return null;\\n    Node slow = head;\\n    Node fast = head;\\n    while (fast != null && fast.next != null) {\\n        slow = slow.next;\\n        fast = fast.next.next;\\n    }\\n    return slow;\\n}"
    },
    "add-two-numbers-linkedlist": {
        cpp: cppPrefix + "Node* addTwoNumbers(Node* l1, Node* l2) {\\n    Node* dummy = new Node(0);\\n    Node* temp = dummy;\\n    int carry = 0;\\n    while (l1 != nullptr || l2 != nullptr || carry != 0) {\\n        int sum = 0;\\n        if (l1 != nullptr) {\\n            sum += l1->data;\\n            l1 = l1->next;\\n        }\\n        if (l2 != nullptr) {\\n            sum += l2->data;\\n            l2 = l2->next;\\n        }\\n        sum += carry;\\n        carry = sum / 10;\\n        Node* newNode = new Node(sum % 10);\\n        temp->next = newNode;\\n        temp = temp->next;\\n    }\\n    return dummy->next;\\n}",
        java: javaPrefix + "public Node addTwoNumbers(Node l1, Node l2) {\\n    Node dummy = new Node(0);\\n    Node temp = dummy;\\n    int carry = 0;\\n    while (l1 != null || l2 != null || carry != 0) {\\n        int sum = 0;\\n        if (l1 != null) {\\n            sum += l1.data;\\n            l1 = l1.next;\\n        }\\n        if (l2 != null) {\\n            sum += l2.data;\\n            l2 = l2.next;\\n        }\\n        sum += carry;\\n        carry = sum / 10;\\n        Node newNode = new Node(sum % 10);\\n        temp.next = newNode;\\n        temp = temp.next;\\n    }\\n    return dummy.next;\\n}"
    }
};

for (const id in dict) {
    updateSnippet(id, dict[id].cpp, dict[id].java);
}

fs.writeFileSync(path, content, 'utf8');
console.log("Transformation completed successfully");
