```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (!root) return {};
        queue<TreeNode*> q;
        vector<vector<int>> ans;
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
            ans.push_back(arr);
        }
        return ans;
    }
};
```



