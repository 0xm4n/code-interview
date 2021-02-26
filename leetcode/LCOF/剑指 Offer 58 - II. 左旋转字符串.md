```cpp
class Solution {
public:
    string reverseLeftWords(string s, int n) {
        int len = s.size();
        n %= len;
        s += s;
        return s.substr(n, len);
    }
};
```









