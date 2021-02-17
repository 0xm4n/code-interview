```cpp
class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (!head) return nullptr;
        Node* p = head;
        while (p) {
            Node* dup = new Node(p->val);
            dup->next = p->next;
            p->next = dup;
            p = p->next->next;
        }
        p = head;
        while (p) {
            if (p->random) {
                p->next->random = p->random->next;
            } else {
                p->next->random = nullptr;
            }
            p = p->next->next;
        }
        Node* newHead = head->next;
        Node* np = newHead;
        p = head;
        while (p->next->next) {
            p->next = p->next->next;
            np->next = np->next->next;
            p = p->next;
            np = np->next;
        }
        p->next = nullptr;
        np->next = nullptr;
        return newHead;
    }
};
```





