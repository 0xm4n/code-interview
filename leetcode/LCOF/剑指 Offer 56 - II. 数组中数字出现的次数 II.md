```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size() - 2; i = i + 3) {
            if (nums[i] != nums[i + 2]) {
                return nums[i];
            }
        }
        return nums.back();
    }
};
```



```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        unordered_map<int, int> hashMap;
        for (int num : nums) {
            hashMap[num]++;
        }
        for (int num : nums) {
            if (hashMap[num] == 1) return num;
        }
        return -1;
    }
};
```



```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int bits[32] = {0}, res = 0;
        for (int num : nums) {
            for (int i = 31; i >= 0; --i) {
                bits[i] += num & 1;
                num >>= 1;
            }
        }
        for (int n : bits) {
            res <<= 1;
            res += n % 3;
        }
        return res;
    }
};
```





