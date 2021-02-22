```cpp
class Solution {
public:
    int numWays(int n) {
        if (n == 0) return 1;
        if (n == 1) return 1;
        if (n == 2) return 2;
        int f = 1;
        int g = 2;
        for (int i = 3; i <= n; ++i) {
            int sum = (f + g) % 1000000007;
            f = g;
            g = sum;
        }
        return g;
    }
};
```





