```cpp
// deque
// odd line : get from back, push to front
// even line: get from front, push to back
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (!root) return {};
        vector<vector<int>> ans;
        deque<TreeNode*> q;
        q.push_front(root);
        int flag = 1;
        while (!q.empty()) {
            int length = q.size();
            vector<int> arr;
            for (int i = 0; i < length; ++i) {
                TreeNode* node;
                if (flag > 0) {
                    node = q.back();
                    q.pop_back();
                    if (node->left) q.push_front(node->left);
                    if (node->right) q.push_front(node->right);
                } else {
                    node = q.front();
                    q.pop_front();
                    if (node->right) q.push_back(node->right);
                    if (node->left) q.push_back(node->left);
                }
                arr.push_back(node->val);
            }
            ans.push_back(arr);
            flag *= -1;
        }
        return ans;
    }
};
```

```cpp
// Reverse array
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (!root) return {};
        vector<vector<int>> ans;
        queue<TreeNode*> q;
        int flag = 1;
        q.push(root);
        while (!q.empty()) {
            int length = q.size();
            vector<int> arr;
            for (int i = 0; i < length; ++i) {
                auto node = q.front();
                q.pop();
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
                arr.push_back(node->val);
            }
            if (flag == -1) reverse(arr.begin(), arr.end());
            flag *= -1;
            ans.push_back(arr);
        }
        return ans;
    }
};
```





