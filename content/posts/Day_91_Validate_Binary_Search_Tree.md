---
title: "Day 91: Leetcode Daily - Validate Binary Search Tree"
date: 2023-10-24T20:12:41+05:30
draft: false
tags:
  - Medium
  - Tree
image: "/images/post_pics/Day_91_Validate_Binary_Search_Tree/Cover.png"
---

## Problem - [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

### Level - Medium

---

### Solution

---

**Approach:**

Traverse each node and its value should be between it's left and right limit.

---

**Code:**

```java

class Solution {

    public boolean util(TreeNode root, long left, long right) {
        if(root == null) return true;

        if(root.val <= left || root.val >= right) return false;

        return util(root.left, left, root.val) && util(root.right, root.val, right);
    }

    public boolean isValidBST(TreeNode root) {
        return util(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
}
```

---

**Time Complexity:**

```
O(N)
```

Time complexity will be equal to the number of nodes.

---

**Space Complexity:**

```
O(N)
```

Recursion stack.
