```cpp
class Solution {
private:
    int count;
    
public:
    int movingCount(int m, int n, int k) {
        count = 0;
        vector<vector<bool>> isVisited(m, std::vector<bool>(n, false));
        canReach(0, 0 , m, n, k, isVisited);
        return count;
    }

    int digitSum(int n) {
        int sum = 0;
        while (n) {
            sum += (n % 10);
            n /= 10;
        }
        return sum;
    }

    void canReach(int x, int y, int m, int n, int k, vector<vector<bool>>& isVisited) {
        if (x < 0 || x == m || y < 0 || y == n || digitSum(x) + digitSum(y) > k || isVisited[x][y]  == true) 
            return;
        count++;
        isVisited[x][y] = true;
        canReach(x+1, y, m, n, k, isVisited);
        canReach(x, y+1, m, n, k, isVisited);
        return;
    } 
};
```





