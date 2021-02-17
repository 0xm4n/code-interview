```cpp
class Solution {
private:
    int res = 0;

public:
    int kthLargest(TreeNode* root, int k) {
        inorder(root, k);
        return res;
    }

    void inorder(TreeNode* root, int& k) {
        if (!root) return;
        inorder(root->right, k);
        if (--k == 0) res = root->val;
        inorder(root->left, k);
    }
};
```





