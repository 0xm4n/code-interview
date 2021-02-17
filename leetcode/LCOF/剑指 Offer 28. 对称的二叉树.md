```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (!root) return true;
        return _isSymmetric(root->left, root->right);
    }

    bool _isSymmetric(TreeNode* leftTree, TreeNode* rightTree) {
        if (!leftTree && !rightTree) return true;
        if (!leftTree || !rightTree || leftTree->val != rightTree->val) return false;
        return _isSymmetric(leftTree->right, rightTree->left) && _isSymmetric(leftTree->left, rightTree->right);
    }

};
```





