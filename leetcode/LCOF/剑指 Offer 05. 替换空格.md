```cpp
class Solution {
public:
    string replaceSpace(string s) {
        int numSpace = 0;
        int originLen = s.size() - 1;
        for (int i = 0; i <= originLen; ++i) {
            if (s[i] == ' ') {
                ++numSpace;
            }
        }
        int newStrLen = s.size() + 2 * numSpace;
        s.resize(newStrLen);
        for (int i = newStrLen - 1; i >= 0; --i) {
            if (s[originLen] == ' ') {
                s[i--] = '0';
                s[i--] = '2';
                s[i]   = '%';
            } else {
                s[i]   = s[originLen];
            }
            originLen--;
        }
        return s;
    }
};
```





