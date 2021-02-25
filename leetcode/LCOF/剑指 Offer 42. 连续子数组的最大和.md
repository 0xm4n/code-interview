```cpp
// Greedy
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int res = INT_MIN;
        int sum = 0;
        for (int i = 0; i < nums.size(); ++i) {
            sum += nums[i];
            if (sum > res) res = sum;
            if (sum < 0) sum = 0;
        }
        return res;
    }
};
```

```cpp
// DP
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int res = nums[0];
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i - 1] > 0) 
                nums[i] += nums[i - 1];
            res = max(res, nums[i]); 
        }
        return res;
    }
};
```







