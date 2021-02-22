```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while (n) {
            if (n & 1) ++count;
            n >>= 1;
        }
        return count;
    }
};
```

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        unsigned int flag = 1;
        while(flag) {
            if (n & flag) count++;
            flag <<= 1;
        }
        return count;
    }
};
```

```cpp
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while (n) {
            n &= (n - 1);
            ++count;
        }
        return count;
    }
};
```

