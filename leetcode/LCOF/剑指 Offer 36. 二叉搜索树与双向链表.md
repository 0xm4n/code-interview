```cpp
class Solution {
private:
    Node* head;
    Node* tail;
public:
    Node* treeToDoublyList(Node* root) {
        if (!root) return nullptr;
        inorder(root);
        head->left = tail;
        tail->right = head;
        return head;
    }

    void inorder(Node* root) {
        if (!root) return;

        inorder(root->left);

        if (!tail) {
            head = root;
        } else {
            tail->right = root;
            root->left = tail;
        }
        tail = root;
        inorder(root->right);
    }
};

```







