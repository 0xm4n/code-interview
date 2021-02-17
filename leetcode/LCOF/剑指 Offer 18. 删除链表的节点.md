```cpp
class Solution {
public:
    ListNode* deleteNode(ListNode* head, int val) {
        if (head->val == val) return head->next;
        ListNode* pre = head;
        ListNode* cur = head;
        while (cur && cur->val != val) {
            pre = cur;
            cur = cur->next;
        }
        pre->next = cur->next;
        return head;
    }
};
```



```cpp
class Solution {
public:
    ListNode* deleteNode(ListNode* head, int val) {
        ListNode dummy = ListNode(0);
        dummy.next = head;
        ListNode* cur = &dummy;
        while(cur->next) {
            if (cur->next->val == val) {
                cur->next = cur->next->next;
            } else {
                cur = cur->next;
            }
        }
        return dummy.next;
    }
};
```



