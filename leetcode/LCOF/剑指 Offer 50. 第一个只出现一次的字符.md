```cpp
// Hash table
class Solution {
public:
    char firstUniqChar(string s) {
        unordered_map<char, int> hash_map;
        for (char c : s) {
            hash_map[c]++;
        }
        for (char c : s) {
            if (hash_map[c] == 1)
                return c;
        }
        return ' ';
    }
};
```

```cpp
class Solution {
public:
    char firstUniqChar(string s) {
        int arr[26] = {0};
        for (char c : s) {
            arr[c - 'a']++;
        }
        for (char c : s) {
            if (arr[c - 'a'] == 1)
                return c;
        }
        return ' ';
    }
};
```







