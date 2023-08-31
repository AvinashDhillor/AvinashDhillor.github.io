---
title: "Day 66: Leetcode Daily - Maximum Depth of Binary Tree"
date: 2023-08-31T17:28:27+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_66_Maximum_Depth_of_Binary_Tree/Cover.png"
---


## Problem - [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
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

```

---

**Space Complexity:**
```

```


