```cpp
class Solution {
public:
    int translateNum(int num) {
        string s = to_string(num);
        vector<int> dp(s.size() + 1);
        dp[0] = 1;
        dp[1] = 1;
        for (int i = 2; i <= s.size(); ++i) {
            if (s[i - 2] == '1' || (s[i - 2] == '2' && s[i - 1] <= '5')) {
                dp[i] = dp[i - 2] + dp[i - 1];
            } else {
                dp[i] = dp[i - 1];
            }
        }
        return dp[s.size()];
    }
};
```







