```cpp
class Solution {
public:
    vector<int> reversePrint(ListNode* head) {
        vector<int> ans;
        stack<int> s;
        ListNode* p = head;
        while (p) {
            s.push(p->val);
            p = p->next;
        }
        while (!s.empty()) {
            ans.push_back(s.top());
            s.pop();
        }
        return ans;
    }
};
```



```cpp
class Solution {
public:
    vector<int> reversePrint(ListNode* head) {
        vector<int> ans;
        if (!head) return ans;
        ans = reversePrint(head->next);
        ans.push_back(head->val);
        return ans;
    }
};
```



