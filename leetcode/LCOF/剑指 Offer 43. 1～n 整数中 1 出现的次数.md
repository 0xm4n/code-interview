```cpp
class Solution {
public:
    int countDigitOne(int n) {
        int low = 0, cur = n % 10, high = n / 10;
        long base = 1;
        int sum = 0;
        while(high != 0 || cur != 0) {
            if (cur == 0) {
                sum += high * base;
            } else if (cur == 1) {
                sum += high * base + low + 1;
            } else {
                sum += (high + 1) * base;
            }
            low += cur * base;
            cur = high % 10;
            high = high / 10;
            base *= 10;
        }
        return sum;
    }
};
```









