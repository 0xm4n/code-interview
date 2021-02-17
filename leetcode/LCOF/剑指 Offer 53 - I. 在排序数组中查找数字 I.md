```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        if (first != -1 && last != -1)
            return (last - first + 1);
        return 0;
    }

    int findFirst(vector<int>& nums, int target) {
        int low = 0, high = nums.size();
        int idx = -1;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                idx = mid;
                high = mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return idx;
    }

    int findLast(vector<int>& nums, int target) {
        int low = 0, high = nums.size();
        int idx = -1;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                idx = mid;
                low = mid + 1;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return idx;
    }
};
```





