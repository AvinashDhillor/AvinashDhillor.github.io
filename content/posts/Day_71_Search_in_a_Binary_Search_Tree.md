---
title: "Day 71: Leetcode Daily - Search in a Binary Search Tree"
date: 2023-09-05T17:35:10+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_71_Search_in_a_Binary_Search_Tree/Cover.png"
---


## Problem - [700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

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
    
    TreeNode* searchBST(TreeNode* root, int val) {
        if(!root) return nullptr;
        if(root->val == val) return root;
        if(root->val < val) {
           return searchBST(root->right, val);
        } else  {
           return searchBST(root->left, val);
        }
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


