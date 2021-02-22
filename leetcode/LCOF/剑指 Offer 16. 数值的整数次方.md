```cpp
class Solution {
public:
    double myPow(double x, int n) {
        if (x == 0) return 0;
        double res = 1;
        long exp = n;
        if (n < 0) {
            x = 1 / x;
            exp = -exp;
        }
        while (exp) {
            if (exp & 1) res *= x;
            x *= x;
            exp >>= 1;
        }
        return  res;
    }
};
```







