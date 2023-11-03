---
title: "Day 94: Leetcode Daily - Maximum Depth of Binary Tree"
date: 2023-11-03T13:27:38+05:30
draft: false
tags:
  - Easy
  - Tree
image: "/images/post_pics/Day_94_Maximum_Depth_of_Binary_Tree/Cover.png"
---

## Problem - [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

### Level - Easy

---

### Solution

---

**Approach:**

We iterate left and right subtree and once we found out null at the end of tree we return 0, and for node we keep adding 1 for left and right subtree. We will then return the max from left and right.

---

**Code:**

```java
class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;
        return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
    }
}

```

---

**Time Complexity:**

```
O(N)
```

Each node will be iterated once so time complexity will be equals to number of nodes.

---

**Space Complexity:**

```
O(N)
```

Here N is the number of nodes.
