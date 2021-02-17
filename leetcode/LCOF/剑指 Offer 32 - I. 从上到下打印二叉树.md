```cpp
// print all in one vector
class Solution {
public:
    vector<int> levelOrder(TreeNode* root) {
        if (!root) return {};
        queue<TreeNode*> q;
        vector<int> res;
        q.push(root);
        while (!q.empty()) {
            auto node = q.front();
            q.pop();
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
            res.push_back(node->val);
        }
        return res;
    }
};
```



