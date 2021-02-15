```cpp
class Solution {
public:
    bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
        int row = matrix.size();
        if (row < 1) return false;
        int col = matrix[0].size();
        if (col < 1) return false;
        for (int i = 0; i < row; ++i) {
            int low = 0;
            int high = col;
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (matrix[i][mid] == target) {
                    return true;
                } else if (matrix[i][mid] > target) {
                    high = mid;
                } else {
                    low = mid + 1;
                }
            }
        }
        return false;
    }
};
```

```cpp
class Solution {
public:
    bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
        int row = matrix.size();
        if (row < 1) return false;
        int col = matrix[0].size();
        if (col < 1) return false;
        int i = 0;
        int j = col - 1;
        while (i < row && j >= 0) {
            if (matrix[i][j] == target) {
                return true;
            }
            if (matrix[i][j] < target) {
                ++i;
            } else {
                --j;
            }
        }
        return false;
    }
};
```

