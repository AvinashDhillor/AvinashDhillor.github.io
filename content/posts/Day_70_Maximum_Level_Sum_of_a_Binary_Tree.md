---
title: "Day 70: Leetcode Daily - Maximum Level Sum of a Binary Tree"
date: 2023-09-04T17:34:21+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_70_Maximum_Level_Sum_of_a_Binary_Tree/Cover.png"
---


## Problem - [1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

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
    List<Integer> list = new ArrayList<>();

    public void dfs(TreeNode src, int lvl) {
        if(src == null) return;
        if(list.size() <= lvl) {
            list.add(src.val);
        } else {
            list.set(lvl, list.get(lvl) + src.val);
        }
        dfs(src.left, lvl + 1);
        dfs(src.right, lvl + 1);
    }  
    public int maxLevelSum(TreeNode root) {
        int max = Integer.MIN_VALUE;
        int ans = -1;

        dfs(root, 0);
        int index = 0;
        for(int i : list) {
            if(max < i) {
                ans = index;
                max = i;
            }
            index++;
        }

        return ans + 1;
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


