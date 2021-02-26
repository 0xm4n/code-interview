```cpp
class Solution {
public:
    int strToInt(string str) {
        long res = 0;
        int flag = 1, i = 0;

        while (str[i] == ' ') ++i;
        if (str[i] == '-') flag = -1;
        if (str[i] == '+' || str[i] == '-') ++i;
        for (; i < str.size(); ++i) {
            if (str[i] >= '0' && str[i] <= '9') {            
                res = res * 10 + (str[i] - '0');
            } else {
                return res * flag;
            }
            if (res >= INT_MAX && flag == 1) return INT_MAX;
            if (res > INT_MAX && flag == -1) return INT_MIN;
        }
        return res * flag;
    }
};
```









