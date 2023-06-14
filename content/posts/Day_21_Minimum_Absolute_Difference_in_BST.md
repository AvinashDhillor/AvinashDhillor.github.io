---
title: "Day 21: Leetcode Daily - Minimum Absolute Difference in BST"
date: 2023-06-14T23:17:58+05:30
draft: false
tags:
-   Easy
-   BST
image: "/images/post_pics/Day_21_Minimum_Absolute_Difference_in_BST/Cover.png"
---


## Problem - [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/)

### Level - Easy
---

### Solution

---
**Approach:**
In this problem we have to find minimum difference in a binary search tree. To solve this we can do preorder traversal which will traverse elements in sorted order. We can keep track of difference and store it in min variable.

---

**Code:**

```java
class Solution {
    int min = Integer.MAX_VALUE;
    int prev = -1;

    public void preOrder(TreeNode root) {
        if (root == null) return;
        preOrder(root.left);
        if(prev == -1) prev = root.val;
        else {
            min = Math.min(min, root.val - prev);
            prev = root.val;
        }
        preOrder(root.right);
    }

    public int getMinimumDifference(TreeNode root) {
        preOrder(root);
        return min;
    }
}

```
---

**Time Complexity:**
```
O(N)
```
Since we are traversing all elements only once so time complexity is linear.

---

**Space Complexity:**
```
O(N)
```
Internal stack is used to traverse the elements.

