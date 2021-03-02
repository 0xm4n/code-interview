```cpp
class Solution {
public:
    bool isStraight(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int numJoker = 0;
        for (int i = 0; i < 4; ++i) {
            if (nums[i] == 0) {
                numJoker++;
            } else if (nums[i] == nums[i + 1])
                return false;
        }
        return nums[4] - nums[numJoker] < 5;
    }
};
```









