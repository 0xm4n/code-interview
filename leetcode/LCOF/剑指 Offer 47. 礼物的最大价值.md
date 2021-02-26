```cpp
class Solution {
public:
    int maxValue(vector<vector<int>>& grid) {
        if (grid.size() == 0 || grid[0].size() == 0) return 0;
        int row = grid.size();
        int col = grid[0].size();
        vector<vector<int>> dp(row, vector<int>(col, 0));
        for (int i = 0; i < row; ++i) {
            for (int j = 0; j < col; ++j) {
                if (i == 0 && j == 0) {
                    dp[i][j] = grid[i][j];
                } else if (i == 0) {
                    dp[i][j] = max(dp[i][j-1], 0) + grid[i][j];
                } else if (j == 0) {
                    dp[i][j] = max(dp[i-1][j], 0) + grid[i][j];
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j];
                }
            }
        }
        return dp[row - 1][col - 1];
    }
};
```









