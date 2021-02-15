```cpp
class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        int f = 0, g = 1, sum = 0;
        while (--n) {
            sum = (f + g) % 1000000007;
            f = g;
            g = sum;
        }
        return sum;
    }
};
```

```cpp
class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        int f = 0, g = 1, sum = 0;
        for (int i = 2; i <= n; ++i) {
            sum = (f + g) % 1000000007;
            f = g;
            g = sum;
        }
        return sum;
    }
};
```

