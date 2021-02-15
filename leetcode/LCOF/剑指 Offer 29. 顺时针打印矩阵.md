```cpp
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int nRow = matrix.size();
        if (nRow < 1) return {};

        int nCol = matrix[0].size();
        if (nCol < 1) return {};

        vector<int> res;
        vector<vector<int>> Dir = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        vector<int> Step = {nCol, nRow - 1};

        int iDir = 0;
        int ir = 0;
        int ic = -1;

        while (Step[iDir % 2]) {
            for (int i = 0; i < Step[iDir % 2]; ++i) {
                ir += Dir[iDir][0];
                ic += Dir[iDir][1];
                res.push_back(matrix[ir][ic]);
            }
            Step[iDir % 2]--;
            iDir = (iDir + 1) % 4;
        }

        return res;
    }
};
```



