```cpp
class Solution {
private:
    void heapify(vector<int>& arr, int i, int size) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;
        if (left <= size && arr[left] < arr[smallest]) {
            smallest = left;
        }
        if (right <= size && arr[right] < arr[smallest]) {
            smallest = right;
        }
        if (smallest != i) {
            swap(arr[smallest], arr[i]);
            heapify(arr, smallest, size);
        }
    }
public:
    vector<int> getLeastNumbers(vector<int>& arr, int k) {
        vector<int> ans;
        int arrSize = arr.size() - 1;
        // build heap
        for (int i = arrSize / 2; i >= 0; --i) {
            heapify(arr, i, arrSize);
        }
        while(k--) {
            ans.push_back(arr[0]);
            swap(arr[0], arr[arrSize--]);
            heapify(arr, 0, arrSize);
        }
        return ans;
    }
};
```

```cpp
// priority_queue
class Solution {
public:
    vector<int> getLeastNumbers(vector<int>& arr, int k) {
        if (k == 0) return {};
        vector<int> ans;
        priority_queue<int> q;
        for (int i = 0; i < k; ++i) {
            q.push(arr[i]);
        }
        for (int i = k; i < arr.size(); ++i) {
            if (arr[i] < q.top()) {
                q.pop();
                q.push(arr[i]);
            }
        }
        for (int i = 0; i < k; ++i) {
            ans.push_back(q.top());
            q.pop();
        }
        return ans;
    }
};
```

```cpp
class Solution {
public:
    vector<int> getLeastNumbers(vector<int>& arr, int k) {
        if (k == 0) return {};
        vector<int> ans;
        quick_select(arr, 0, arr.size() - 1, k);
        for (int i = 0; i < k; ++i) {
            ans.push_back(arr[i]);
        }
        return ans;
    }

    void quick_select(vector<int>& arr, int l, int r, int k) {
        if (l >= r) return;
        int m = partition(arr, l, r);
        int size = m - l + 1;
        if (size == k) {
            return;
        } else if (size < k) {
            quick_select(arr, m + 1, r, k - size);
        } else {
            quick_select(arr, l, m - 1 , k);
        }
    }

    int partition(vector<int>& arr, int l, int r) {
        int pivot = arr[r];
        int i = l - 1;
        for (int j = l; j <= r - 1; ++j) {
            if (arr[j] < pivot) {
                i++;
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[r]);
        return i + 1;
    }
};
```





