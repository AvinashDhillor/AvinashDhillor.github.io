---
title: "Day 89: Leetcode Daily - Invert Binary Tree"
date: 2023-10-18T18:12:56+05:30
draft: false
tags:
  - Easy
  - Tree
image: "/images/post_pics/Day_89_Invert_Binary_Tree/Cover.png"
---

## Problem - [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

### Level - Easy

---

### Solution

---

**Approach:**

We will use recursion and traverse each node and swap child nodes while traversing.

**Code:**

```java
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root == null) return null;

        TreeNode left = root.left;
        TreeNode right  = root.right;

        root.left = right;
        root.right = left;

        invertTree(root.left);
        invertTree(root.right);

        return root;
    }
}

```

---

**Time Complexity:**

```
O(N)
```

## Here N is the number of nodes because we will be traversing each node at least once.

**Space Complexity:**

```
O(1)
```

No extra space is used.
