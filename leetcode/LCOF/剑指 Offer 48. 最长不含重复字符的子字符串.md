```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int res = 0;
        int start = 0;
        unordered_map<char, int> map;
        for (int i = 0; i < s.size(); ++i) {
            map[s[i]]++;
            while (map[s[i]] == 2) {
                map[s[start]]--;
                start++;
            }
            res = max(res, i - start + 1);
        }
        return res;
    }
};
```









