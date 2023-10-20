---
title: "Day 90: Leetcode Daily - Symmetric Tree"
date: 2023-10-20T19:22:46+05:30
draft: false
tags:
  - Easy
  - Tree
image: "/images/post_pics/Day_90_Symmetric_Tree/Cover.png"
---

## Problem - [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

### Level - Easy

---

### Solution

---

**Approach:**

Traverse using recursion in left and right subtree. If any mismatch is found we will return false.

**Code:**

```java
class Solution {

    private boolean util(TreeNode a, TreeNode b) {
        if(a == null && b == null) return true;
        if(a == null || b == null) return false;

        if(a.val != b.val) return false;

       return util(a.right, b.left) &&
        util(a.left, b.right);
    }

    public boolean isSymmetric(TreeNode root) {
        return util(root.left, root.right);
    }
}

```

---

**Time Complexity:**

```
O(N)
```

## We are traversing each node at least once hence time complexity will be equal to number of nodes.

**Space Complexity:**

```
O(N)
```

No extra space is used. Only recursion stack space for traversing the tree.
