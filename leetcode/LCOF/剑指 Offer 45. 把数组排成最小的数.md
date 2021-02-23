```cpp
class Solution {
public:
    string minNumber(vector<int>& nums) {
        vector<string> arr;
        string ans;
        auto f = [](const string& a, const string& b) {return a+b < b+a;};
        for (auto i : nums) {
            arr.push_back(to_string(i));
        }
        sort(arr.begin(), arr.end(), f);
        for (auto s : arr) {
            ans += s;
        }
        return ans;
    }
};
```







