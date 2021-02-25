```cpp
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> dp(n);
        dp[0] = 1;
        int two = 0, three = 0, five = 0;
        for (int i = 1; i < n; ++i) {
            int t2 = dp[two] * 2;
            int t3 = dp[three] * 3;
            int t5 = dp[five] * 5;
            dp[i] = min(min(t2, t3), t5);
            if (dp[i] == t2) ++two;
            if (dp[i] == t3) ++three;
            if (dp[i] == t5) ++five;
        }
        return dp[n - 1];
    }
};
```









