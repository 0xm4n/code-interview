```cpp
// backtracking
class Solution {
private:
    vector<vector<int>> ans;
    vector<int> arr;
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        if (!root) return {};
        findPathSum(root, sum);
        return ans;
    }

    void findPathSum(TreeNode* root, int sum) {
        if (!root) return;
        arr.push_back(root->val);
        sum -= root->val;
        if (sum == 0 && !root->left && !root->right) {
            ans.push_back(arr);
        }
        findPathSum(root->left, sum);
        findPathSum(root->right, sum);
        arr.pop_back();
        return;
    }
};
```



```cpp
class Solution {
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        vector<vector<int>> res;
        vector<int> arr;
        findPath(root, sum, res, arr);
        return res;
    }

    void findPath(TreeNode* root, int sum, vector<vector<int>>& res, vector<int>& arr) {
        if (!root) return;
        sum -= root->val;
        arr.push_back(root->val);
        if (sum == 0 && !root->left && !root->right) {
            res.push_back(arr);
        } else {
            findPath(root->left, sum, res, arr);
            findPath(root->right, sum, res, arr);
        }
        arr.pop_back();
    }
};
```



