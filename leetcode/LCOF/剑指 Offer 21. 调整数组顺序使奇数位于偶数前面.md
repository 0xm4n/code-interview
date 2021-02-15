```cpp
// two pointers
class Solution {
public:
    vector<int> exchange(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        while (left < right) {
            if (nums[left] & 1) {
                ++left;
                continue;
            }
            if (!(nums[right] & 1)) {
                --right;
                continue;
            }
            std::swap(nums[left++], nums[right--]);
        }
        return nums;
    }
};
```

```cpp
// In place
class Solution {
public:
    vector<int> exchange(vector<int>& nums) {
        for (int i = 0; i < nums.size(); ++i) {
            for (int j = 0; j < nums.size() - i - 1; ++j) {
                if (!(nums[j] & 1) && (nums[j + 1] & 1)) {
                    swap(nums[j], nums[j + 1]);
                }
            }
        }
        return nums;
    }
};
```

```cpp
// two pointers
class Solution {
public:
    vector<int> exchange(vector<int>& nums) {
        int slow = 0, fast = 0;
        while (fast < nums.size()) {
            if (nums[fast] & 1) {
                swap(nums[fast], nums[slow]);
                slow++;
            }
            fast++;
        }
        return nums;
    }
};
/* 
	slow pointer point to the position of the next odd number;
    fast pointer move forward to find next odd number;
*/
```

