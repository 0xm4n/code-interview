```cpp
class Solution {
public:
    int cuttingRope(int n) {
        if (n <= 3) return n - 1;
        long ans = 1;
        while (n > 4) {
            ans *= 3;
            ans %= 1000000007;
            n -= 3;
        }
        return ans * n % 1000000007;
    }
};
```







