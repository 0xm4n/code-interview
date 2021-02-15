```cpp
class Solution {
public:
    vector<int> constructArr(vector<int>& a) {
        if (a.size() < 1) return {};
        vector<int> b(a.size());
        b[0] = 1;
        for (int i = 1; i < a.size(); ++i) {
            b[i] = b[i - 1] * a[i - 1];
        }
        int temp = 1;
        for (int i = a.size() - 2; i >= 0; --i) {
            temp *= a[i + 1];
            b[i] *= temp;
        }
        return b;
    }
};
```





