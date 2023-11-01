---
title: "Day 93: Leetcode Daily - Delete Node in a BST"
date: 2023-11-01T20:59:21+05:30
draft: false
tags:
  - Medium
image: "/images/post_pics/Day_93_Delete_Node_in_a_BST/Cover.png"
---

## Problem - [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/description/)

### Level - Medium

---

### Solution

---

**Approach:**

In this problem we first have to find the key, If we found the key and it don't have any children then we return null. If either left or right is available then we return left or right node. But if both are available we find it's ancestor in right subtree. We replace the value with its ancestor and delete that node from tree.

---

**Code:**

```java
class Solution {

    public int findAnc(TreeNode root) {
        while(root.left != null) {
            root = root.left;
        }
        return root.val;
    }

    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null) return null;
        if(root.val < key) {
            root.right = deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = deleteNode(root.left, key);
        } else {
            TreeNode left = root.left;
            TreeNode right  = root.right;
            if(left == null && right == null) return null;
            if(left == null) return right;
            if(right == null) return left;
            else {
                int nextAnc = findAnc(root.right);
                root.val = nextAnc;
                root.right = deleteNode(root.right, nextAnc);
            }
        }
        return root;
    }
}

```

---

**Time Complexity:**

```
O(H)
```

Equals to height of tree.

---

**Space Complexity:**

```
O(N)
```

Equals to total number of nodes.
