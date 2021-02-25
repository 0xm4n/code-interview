```cpp
class Solution {
public:
    bool verifyPostorder(vector<int>& postorder) {
        if (postorder.size() < 0) return false;
        return _verifyPostorder(postorder, 0, postorder.size() - 1);
    }

    bool _verifyPostorder(vector<int>& arr, int l, int r) {
        if (l >= r) return true;
        int rootVal = arr[r];
        int i;
        for (i = l; i < r; ++i) {
            if (arr[i] > rootVal) break;
        }
        for (int j = i; j < r; ++j) {
            if (arr[j] < rootVal) return false;
        }
        return _verifyPostorder(arr, l, i - 1) && _verifyPostorder(arr, i, r - 1);
    }
};

```







