---
title: "Day 69: Leetcode Daily - Binary Tree Right Side View"
date: 2023-09-03T17:33:12+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_69_Binary_Tree_Right_Side_View/Cover.png"
---


## Problem - [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view)

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
    
    public void util(TreeNode root, List<Integer> list, int lvl) {
        if(root == null) return;
        if(list.size() <= lvl) {
            list.add(0);
        }
        
        list.set(lvl, root.val);
        util(root.left, list, lvl + 1);
        util(root.right, list, lvl + 1);
    }
    
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        
        util(root, list, 0);
        return list;
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


