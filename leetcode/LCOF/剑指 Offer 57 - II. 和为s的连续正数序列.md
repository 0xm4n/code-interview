```cpp
class Solution {
public:
    vector<vector<int>> findContinuousSequence(int target) {
        if (target < 3) return {};
        vector<vector<int>> res;
        int start = 1;
        int end = 2;
        int curSum = start + end;
        while (start <= target / 2) {
            if (curSum < target) {
                curSum += ++end;
            } else if (curSum > target) {
                curSum -= start++;
            } else {
                vector<int> arr;
                for (int i = start; i <= end; ++i) {
                    arr.push_back(i);
                }
                res.push_back(arr);
                curSum -= start++;
            }
        }
        return res;
    }
};
```





