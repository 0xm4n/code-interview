```cpp
class Solution {
public:
    int Fibonacci(int n) {
        int f = 0, g = 1;
        while (n--) {
            g += f;
            f = g - f;
        }
        return f;
    }
};
```

```cpp
class Solution {
public:
    int Fibonacci(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
};
```

