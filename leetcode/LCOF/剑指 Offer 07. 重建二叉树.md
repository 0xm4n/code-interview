```cpp
class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        return _buildTree(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1);
    }

    TreeNode* _buildTree(vector<int>&preorder, int preLeft, int preRight, vector<int>& inorder, int inLeft, int inRight) {
        if (preLeft > preRight || inLeft > inRight) return nullptr;

        int preRoot = preLeft;
        
        int inRoot;
        for (int i = inLeft; i <= inRight; ++i) {
            if (inorder[i] == preorder[preRoot]) {
                inRoot = i;
            }
        }

        int numLeft = inRoot - inLeft;
        int numRight = inRight - inRoot;

        TreeNode* root = new TreeNode(preorder[preRoot]);

        root->left = _buildTree(preorder, preLeft + 1, preLeft + numLeft, inorder, inRoot - numLeft, inRoot - 1);
        root->right = _buildTree(preorder, preLeft + numLeft + 1, preRight, inorder, inRoot + 1, inRight);

        return root;
    }
};
```





