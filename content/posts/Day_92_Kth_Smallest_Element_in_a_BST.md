---
title: "Day 92: Leetcode Daily - Kth Smallest Element in a BST"
date: 2023-10-31T20:32:39+05:30
draft: false
tags:
  - Medium
  - Tree
image: "/images/post_pics/Day_92_Kth_Smallest_Element_in_a_BST/Cover.png"
---

## Problem - [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)

### Level - Medium

---

### Solution

---

**Approach:**

We will store all left elements of tree into a stack. After that we will pop the last element and decrement K. Then we will starting adding it's right subtree with same approach.

---

**Code:**

```java
class Solution {

       public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();

        while(true) {
            while(root != null)  {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if(--k == 0) return root.val;
            root = root.right;
        }
    }
}

```

---

**Time Complexity:**

```
O(N)
```

Every element will be traversed at least once.

---

**Space Complexity:**

```
O(N)
```

We storing nodes into another stack.
