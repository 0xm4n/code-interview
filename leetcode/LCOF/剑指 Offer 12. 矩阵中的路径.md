```cpp
class Solution {
private:
    int w;
    int h;
public:
    bool exist(vector<vector<char>>& board, string word) {
        h = board.size();
        w = board[0].size();
        for (int i = 0; i < h; ++i) {
            for (int j = 0; j < w; ++j) {
                if(search(board, word, 0, i , j))
                    return true;
            }
        }
        return false;
    }

    bool search(vector<vector<char>>& board, string word, int pos, int x,  int y) {
        if (x < 0 || x == h || y < 0 || y == w || word[pos] != board[x][y]) return false;

        if (word.size() - 1 == pos) return true;

        char cur = board[x][y];
        board[x][y] = 0;
        bool found = search(board, word, pos+1, x+1, y) ||
                     search(board, word, pos+1, x-1, y) ||
                     search(board, word, pos+1, x, y+1) ||
                     search(board, word, pos+1, x, y-1);
        board[x][y] = cur;
        return found;
    }
};
```





