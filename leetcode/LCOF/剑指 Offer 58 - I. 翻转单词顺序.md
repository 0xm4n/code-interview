```cpp
class Solution {
public:
    string reverseWords(string s) {
        if (s.size() < 1) return "";
        while (s[0] == ' ') s.erase(0, 1);
        reverse(s.begin(), s.end());
        int start = 0;
        while (start < s.size()) {
            int end = start;
            while (s[end] != ' ' && s[end] != '\0') ++end;
            reverse(s.begin() + start, s.begin() + end);
            while (end + 1 < s.size() && s[end + 1] == ' ') s.erase(end + 1, 1);
            start = end + 1;
        }
        while (s[0] == ' ') s.erase(0, 1);
        return s;
    }
};
```









