---
title: "Day 72: Leetcode Daily - Delete Node in a BST"
date: 2023-09-06T17:36:12+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_72_Delete_Node_in_a_BST/Cover.png"
---


## Problem - [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

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

```

---

**Space Complexity:**
```

```


