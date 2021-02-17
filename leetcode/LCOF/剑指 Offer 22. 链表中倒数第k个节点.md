```cpp
class Solution {
public:
    ListNode* getKthFromEnd(ListNode* head, int k) {
        if (!head || k = 0) return nullptr;
        ListNode* fast = head;
        ListNode* slow = head;
        while (--k && fast->next) {
            fast = fast->next;
        }
        if (k > 0) return nullptr;
        while (fast->next) {
            fast = fast->next;
            slow = slow->next;
        }
        return slow;
    }
};
```





