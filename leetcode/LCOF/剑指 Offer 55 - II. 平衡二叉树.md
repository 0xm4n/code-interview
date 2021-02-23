```cpp
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        if (!root) return true;
        bool flag = false;
        int diff = treeDepth(root->left) - treeDepth(root->right);
        if (diff <= 1 && diff >= -1) flag = true;
        return (flag && isBalanced(root->left) && isBalanced(root->right));
    }

    int treeDepth(TreeNode* root) {
        if (!root) return 0;
        return 1 + max(treeDepth(root->left), treeDepth(root->right));
    }
};
```





