---
title: "Day 15: Leetcode Daily - Count Negative Numbers in a Sorted Matrix"
date: 2023-06-08T12:43:54+05:30
draft: false
tags:
-   Easy
-   2D Array
image: "/images/post_pics/Day_15_Count_Negative_Numbers_in_a_Sorted_Matrix/Cover.png"
---


## Problem - [1351. Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/)

### Level - Easy
---

### Solution

---
**Approach:**
In this problem all the elements are sorted in both row and col wise. So we just need to traverse from right to left. If we found +ve element then we will move down and traverse again from right to left to find negetive elements. Then we can find the sum but subtracting the values.

---

**Code:**

```java
class Solution {
    public int countNegatives(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length - 1;
        int k = m;

        int ans = 0;

        for(int i = 0; i < n; i++) {
            while(m >= 0 && grid[i][m] < 0) {
                m--;
            }
            ans += (k - m);
        }

        return ans;
    }
}

```
---

**Time Complexity:**
```
O(N + M)
```
In worst case we will be traversing M (right to left) and then top to bottom which  is N.
---

**Space Complexity:**
```
O(1)
```
No extra space is used.

