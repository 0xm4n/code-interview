```cpp
// heap sort
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        // Build heap
        int arrSize = nums.size();
        for (int i = arrSize / 2 - 1; i >= 0; --i) {
            heapify(nums, arrSize, i);
        }
        for (int i = arrSize - 1; i > 0; --i) {
            std::swap(nums[0], nums[i]);
            heapify(nums, i, 0);
        }
        return nums;
    }
    
    void heapify(vector<int>& nums, int n, int i) {
        int l = 2 * i + 1;
        int r = 2 * i + 2;
        int largest = i;
        if (l < n && nums[l] > nums[largest]) {
            largest = l;
        }
        if (r < n && nums[r] > nums[largest]) {
            largest = r;
        }
        if (largest != i) {
            std::swap(nums[largest], nums[i]);
            heapify(nums, n, largest);
        }
    }
};
```

