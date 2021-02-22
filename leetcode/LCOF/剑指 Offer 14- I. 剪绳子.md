```cpp
class Solution {
public:
    int cuttingRope(int n) {
        vector<int> dp(n+1, 1);
        for (int i = 3; i <= n; ++i) {
            for (int j = 1; j < i; ++j) {
                dp[i] = max(dp[i] , max(j * (i - j), j * dp[i - j]));
            }
        }
        return dp[n];
    }
};
```

```cpp
class Solution {
public:
    int cuttingRope(int n) {
        if (n == 2 || n == 3) return n - 1;
        int ans = 1;
        while (n > 4) {
            ans *= 3;
            n -= 3;
        }
        return n * ans;
    }
};
```





