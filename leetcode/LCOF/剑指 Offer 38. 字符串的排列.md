```cpp
class Solution {
private:
    vector<string> res;
public:
    vector<string> permutation(string s) {
        if (s.size() == 0) return {};
        sort(s.begin(), s.end());
        vector<bool> used(s.size());
        string path = "";
        backtrack(s, path, used);
        return res;
    }

    void backtrack(string& s, string& path, vector<bool>& used) {
        if (path.size() == s.size()) {
            res.push_back(path);
            return;
        }
        for (int i = 0; i < s.size(); ++i) {
            if (!used[i]) {
                if (i > 0 && s[i - 1] == s[i] && !used[i - 1]) {
                    continue;
                }
                path.push_back(s[i]);
                used[i] = true;
                backtrack(s, path, used);
                used[i] = false;
                path.pop_back();
            }
        }
    }
};
```









