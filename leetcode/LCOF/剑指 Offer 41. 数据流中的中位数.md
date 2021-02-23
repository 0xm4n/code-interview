```cpp
class MedianFinder {
private:
    priority_queue<int, vector<int>, less<int>> p;
    priority_queue<int, vector<int>, greater<int>> q;
public:
    /** initialize your data structure here. */
    MedianFinder() {

    }
    
    void addNum(int num) {
        if (p.empty() || num <= p.top()) {
            p.push(num);
        } else {
            q.push(num);
        }
        if (p.size() + 1 == q.size()) {
            p.push(q.top());
            q.pop();
        }
        if (p.size() == q.size() + 2) {
            q.push(p.top());
            p.pop();
        }
    }
    
    double findMedian() {
        return q.size() == p.size() ? (q.top() + p.top()) / 2.0 : p.top();
    }
};
```







