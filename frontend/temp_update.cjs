const fs = require('fs');
const FILE_PATH = 'C:/Users/pc/OneDrive/Desktop/skillroute/Skill-Route/frontend/src/data/dsaTopicsContent.jsx';
let content = fs.readFileSync(FILE_PATH, 'utf-8');

const llIndex = content.indexOf('// ---- LINKED LIST ----');
let preLL = content.substring(0, llIndex);
let targetLL = content.substring(llIndex);

targetLL = targetLL.replace(/<GenericArrayVisualizer/g, '<GenericArrayVisualizer inputLabel="Input List" outputLabel="Output List"');

const newTopics =
    '"linkedlist-types-overview": {' +
    'title: "Types of Linked Lists overview",' +
    'explanation: "Singly Linked List (forward only), Doubly Linked List (forward & backward), Circular Linked List (last node points to first).",' +
    'visual: <GenericArrayVisualizer inputLabel="Singly/Doubly/Circular" outputLabel="List Types" description="Categorization based on pointer directions" />,' +
    'code: { cpp: "// Conceptual overview", java: "// Conceptual overview" }' +
    '},' +
    '"linkedlist-create-traverse": {' +
    'title: "Creating & Traversing a Linked List",' +
    'explanation: "Define a head, link subsequent nodes, and run a while loop (temp != null) to visit each.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output" inputArray={["1", "2", "3"]} outputVariable="Prints: 1 2 3" />,' +
    'code: {' +
    'cpp: "Node* temp = head;\\nwhile(temp) { cout << temp->data << \\" \\"; temp = temp->next; }",' +
    'java: "Node temp = head;\\nwhile(temp != null) { System.out.print(temp.data + \\" \\"); temp = temp.next; }"' +
    '}' +
    '},' +
    '"linkedlist-length": {' +
    'title: "Length of Linked List",' +
    'explanation: "Count nodes incrementally while traversing until reaching null.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output" inputArray={["1", "2", "3", "4"]} outputVariable="Length: 4" />,' +
    'code: { cpp: "int len=0; while(head){len++; head=head->next;} return len;", java: "int len=0; while(head!=null){len++; head=head.next;} return len;" }' +
    '},' +
    '"dll-insert-delete": {' +
    'title: "Insert & Delete (Beginning/End/Pos) in DLL",' +
    'explanation: "Similar to Singly LL but you must update previous pointers as well to maintain bilateral integrity.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output List" description="Two-way pointer updates required for prev" />,' +
    'code: { cpp: "// DLL adjustments require prev pointer updates", java: "// DLL adjustments require prev pointer updates" }' +
    '},' +
    '"dll-reverse": {' +
    'title: "Reverse Doubly Linked List",' +
    'explanation: "Swap the next and prev pointers for every node, and update the head to the last processed node.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output List" inputArray={["1", "2", "3"]} outputArray={["3", "2", "1"]} />,' +
    'code: {' +
    'cpp: "Node* curr = head, *temp = nullptr;\\nwhile(curr) { temp = curr->prev; curr->prev = curr->next; curr->next = temp; curr = curr->prev; }\\nif(temp) head = temp->prev;",' +
    'java: "Node curr = head, temp = null;\\nwhile(curr != null) { temp = curr.prev; curr.prev = curr.next; curr.next = temp; curr = curr.prev; }\\nif(temp != null) head = temp.prev;"' +
    '}' +
    '},' +
    '"cll-operations": {' +
    'title: "Insert, Delete & Traverse Circular LL",' +
    'explanation: "Traverse using a do-while loop because the tail connects back to the head.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output" description="Tail connects to Head" />,' +
    'code: { cpp: "do { temp=temp->next; } while(temp!=head);", java: "do { temp=temp.next; } while(temp!=head);" }' +
    '},' +
    '"fast-slow-pointer-technique": {' +
    'title: "Fast & Slow Pointer Technique",' +
    'explanation: "Using two pointers moving at different speeds (1x and 2x) to find middle elements or cycles.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Pattern" description="Also known as Tortoise and Hare" />,' +
    'code: { cpp: "// Pattern overview", java: "// Pattern overview" }' +
    '},' +
    '"dummy-node-technique": {' +
    'title: "Dummy Node & In-place Reversal",' +
    'explanation: "A dummy node before head simplifies edge cases (like inserting/deleting at head). In-place reversal saves space O(1).",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output List" description="Dummy->Head streamlines pointers" />,' +
    'code: { cpp: "Node dummy(0);\\ndummy.next = head;", java: "Node dummy = new Node(0);\\ndummy.next = head;" }' +
    '},' +
    '"merge-k-sorted-lists": {' +
    'title: "Merge K Sorted Linked Lists",' +
    'explanation: "Optimize merging multiple lists using a Min-Heap (Priority Queue) or divide and conquer to get O(N log K) time.",' +
    'visual: <GenericArrayVisualizer inputLabel="K Sorted Lists" outputLabel="Output List" description="Merging 3 lists into 1 sorted list" />,' +
    'code: { cpp: "// Priority Queue approach used", java: "// PriorityQueue<Node> pq = new PriorityQueue<>((a,b)->a.data-b.data);" }' +
    '},' +
    '"intersection-of-two-lists": {' +
    'title: "Intersection of Two Linked Lists",' +
    'explanation: "Find the node at which two lists merge. Use length difference or two-pointer alignment strategy.",' +
    'visual: <GenericArrayVisualizer inputLabel="Two Lists" outputLabel="Intersection Node" description="Aligning tails to trace back junction" />,' +
    'code: {' +
    'cpp: "Node *a = headA, *b = headB;\\nwhile(a!=b){ a = (a)? a->next:headB; b = (b)? b->next:headA; }\\nreturn a;",' +
    'java: "Node a = headA, b = headB;\\nwhile(a!=b){ a = (a!=null)? a.next:headB; b = (b!=null)? b.next:headA; }\\nreturn a;"' +
    '}' +
    '},' +
    '"rotate-linkedlist": {' +
    'title: "Rotate & Partition Linked List",' +
    'explanation: "Rotate: Link tail to head making it circular, then break the link at length - (k % length). Partition: maintain two separate lists (less than X, >= X) and combine.",' +
    'visual: <GenericArrayVisualizer inputLabel="Input List" outputLabel="Output List" inputArray={["1","2","3","4","5"]} outputArray={["4","5","1","2","3"]} description="Rotate right by k=2" />,' +
    'code: { cpp: "// Break ring at N-k", java: "// Break ring at N-k" }' +
    '},' +
    '"add-two-numbers-linkedlist": {' +
    'title: "Add Two Numbers using Linked List",' +
    'explanation: "Each node represents a single digit of a number. Iterate while keeping track of carry-over.",' +
    'visual: <GenericArrayVisualizer inputLabel="Inputs (Reversed)" outputLabel="Output List" description="2->4->3 + 5->6->4 = 7->0->8" />,' +
    'code: { cpp: "// Classic digit addition with carry", java: "// Classic digit addition with carry" }' +
    '},' +
    '"lru-cache-linkedlist": {' +
    'title: "LRU Cache (Linked List + HashMap)",' +
    'explanation: "Least Recently Used (LRU) Cache uses a Doubly Linked List to quickly shift elements to the \'most recently used\' end, and a HashMap for O(1) lookup.",' +
    'visual: <GenericArrayVisualizer inputLabel="Commands" outputLabel="Cache Status" description="Evicts least recently accessed items first" />,' +
    'code: { cpp: "// Use unordered_map + list", java: "// Use HashMap + Custom Doubly Node structure" }' +
    '}';

targetLL = targetLL.replace(/};\s*$/, ',' + newTopics + '\\n};');
fs.writeFileSync(FILE_PATH, preLL + targetLL, 'utf-8');
console.log("Successfully updated references and appended topics!");
