```cpp
// Tree value is Unique
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
    bool isSubStructure(TreeNode* A, TreeNode* B) {
        if (!A || !B) return false;
        if (A->val == B->val) {
            return _isSub(A, B);
        }
        return isSubStructure(A->left, B) || isSubStructure(A->right, B);
    }
    bool _isSub(TreeNode* A, TreeNode* B) {
        if (!B) return true;
        if (!A) return false;
        if (A->val != B->val) return false;
        return _isSub(A->left, B->left) && _isSub(A->right, B->right);
    }
};
```



```cpp
// Tree value can repeat
class Solution {
public:
    bool isSubStructure(TreeNode* A, TreeNode* B) {
        if (!A || !B) return false;
        bool res = false;
        if (A->val == B->val) {
            res = _isSub(A, B);
        }
        if (!res) res = isSubStructure(A->left, B) || isSubStructure(A->right, B);
        return res;
    }
    
    bool _isSub(TreeNode* A, TreeNode* B) {
        if (!B) return true;
        if (!A) return false;
        if (A->val != B->val) return false;
        return _isSub(A->left, B->left) && _isSub(A->right, B->right);
    }
};
```



