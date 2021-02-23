```cpp
class MonotonicQueue {
private:
    deque<int> deq;
public:
    void push(int val) {
        while (!deq.empty() && val > deq.back()) deq.pop_back();
        deq.push_back(val);
    }

    void pop() {
        deq.pop_front();
    }

    int max() {
        return deq.front();
    }
};

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> res;
        queue<int> q;
        MonotonicQueue mq;
        for (int i = 0; i < nums.size(); ++i) {
            q.push(nums[i]);
            mq.push(nums[i]);
            if (i >= k - 1) {
                res.push_back(mq.max());
                if (q.front() == mq.max()) mq.pop();
                q.pop();
            }
        }
        return res;
    }
};
```





