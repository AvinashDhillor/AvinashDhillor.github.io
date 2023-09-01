---
title: "Day 67: Leetcode Daily - Path Sum III"
date: 2023-09-01T17:30:18+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_67_Path_Sum_III/Cover.png"
---


## Problem - [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)

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
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    int DFS(TreeNode *root,int sum){
        return root?(root->val==sum) + DFS(root->left,sum-root->val) + DFS(root->right,sum-root->val):0;
    }
    int pathSum(TreeNode* root, int sum) {
        return root? DFS(root,sum) + pathSum(root->left,sum) + pathSum(root->right,sum):0;
    }
};

```
---

**Time Complexity:**
```

```

---

**Space Complexity:**
```

```


