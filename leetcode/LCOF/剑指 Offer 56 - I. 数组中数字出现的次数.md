```cpp
class Solution {
public:
    vector<int> singleNumbers(vector<int>& nums) {
        int diff = 0;
        for (int n : nums) {
            diff ^= n;
        }
        int div = 1;
        while ((diff & div) == 0) {
            div <<= 1;
        }
        int a = 0, b = 0;
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] & div) {
                a ^= nums[i];
            } else {
                b ^= nums[i];
            }
        }
        return {a, b};
    }
};
```



