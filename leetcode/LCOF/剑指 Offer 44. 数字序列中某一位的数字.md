```cpp
class Solution {
public:
    int findNthDigit(int n) {
        if (n == 0) return 0;

        int digit = 1;
        long start = 1;
        long count = 9 * digit * start;

        while (n > count) {
            n -= count;
            digit++;
            start *= 10;
            count = 9 * digit * start;
        }

        long num = start + (n - 1) / digit;
        int rem = (n - 1) % digit;

        string s_num = to_string(num);
        return int(s_num[rem] - '0');

    }
};
```









