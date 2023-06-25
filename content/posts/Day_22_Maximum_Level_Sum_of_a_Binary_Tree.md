---
title: "Day 22: Leetcode Daily - Maximum Level Sum of a Binary Tree"
date: 2023-06-15T15:46:04+05:30
draft: false
tags:
-   Medium
-   Binary Search
image: "/images/post_pics/Day_22_Maximum_Level_Sum_of_a_Binary_Tree/Cover.png"
---


## Problem - [1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem we are asked to calculate maximum sum at each level of binary search tree. We can traverse tree using DFS and then we can calculate sum of nodes at each level. Finally we can traverse that array and find maximum value.

---

**Code:**

```java
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
O(N)
```
We are traversing tree once and also we are iterating over array once so time complexity will be O(N).
---

**Space Complexity:**
```
O(N)
```
Recursive call will take O(N) space and also we are storing level sum in array. 

