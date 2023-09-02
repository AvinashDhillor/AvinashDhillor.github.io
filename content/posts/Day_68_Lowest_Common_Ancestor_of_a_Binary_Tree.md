---
title: "Day 68: Leetcode Daily - Lowest Common Ancestor of a Binary Tree"
date: 2023-09-02T17:31:05+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_68_Lowest_Common_Ancestor_of_a_Binary_Tree/Cover.png"
---


## Problem - [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

### Level - Medium
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
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private TreeNode ans;
public boolean r(TreeNode root, TreeNode p, TreeNode q){
        if(root == null) return false;
        
        int left = r(root.left, p, q) ? 1 : 0;
        
        int right = r(root.right, p, q) ? 1: 0;
        
        int mid = (root == p || root == q) ? 1 : 0;
        
        if(mid + left+ right >= 2) {
            this.ans = root;
        }
        
        return (mid + left + right > 0);
    }
    
    
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
      // Traverse the tree
        this.r(root, p, q);
        return this.ans;
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


