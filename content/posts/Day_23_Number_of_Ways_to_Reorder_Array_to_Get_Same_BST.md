---
title: "Day 23: Leetcode Daily - Number of Ways to Reorder Array to Get Same BST"
date: 2023-06-16T15:37:28+05:30
draft: false
tags:
-   Hard
-   Dfs
-   BST
-   Combinatorics
image: "/images/post_pics/Day_23_Number_of_Ways_to_Reorder_Array_to_Get_Same_BST/Cover.png"
---


## Problem - [1569. Number of Ways to Reorder Array to Get Same BST](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)

### Level - Hard
---

### Solution

---
**Approach:**
In this problem we were asked to calculate the number of way which create a same binary tree(means they are in same order irrespective of insertion order). In this problem we first have to find way either left or right elements at each level after reducing one element(root). We can find combinations of all left elements and remaining will automatically right elements. So after calculating all values at each level. We can then multiply them to get the result.

---

**Code:**

```java
class Solution {
    long mod = (long) 1e9 + 7;
    long[][] table;

    public int numOfWays(int[] nums) {
        int m = nums.length;

        table = new long[m][m];

        for(int i = 0; i < m; ++i) {
            table[i][0] = table[i][i] = 1;
        }

        for(int i = 2; i < m; i++) {
            for(int j = 1; j < i; j++) {
                table[i][j] = (table[i-1][j-1] + table[i-1][j]) % mod;
            }
        }

        List<Integer> arrList = Arrays.stream(nums).boxed().collect(Collectors.toList());
        return (int)((dfs(arrList) - 1) % mod);
    }

    long dfs(List<Integer> nums) {
        int m = nums.size();
        if(m < 3) {
            return 1;
        }

        List<Integer> leftNodes = new ArrayList<>();
        List<Integer> rightNodes = new ArrayList<>();

        for(int i = 1; i < m; i++) {
            if(nums.get(i) < nums.get(0)) {
                leftNodes.add(nums.get(i));
            } else {
                rightNodes.add(nums.get(i));
            }
        }
        long leftWays = dfs(leftNodes) % mod;
        long rightWays = dfs(rightNodes) % mod;

        return (((leftWays * rightWays) % mod) * table[m-1][rightNodes.size()]) % mod;
    }
}

```
---

**Time Complexity:**
```
O(m * m)
```
creating pascal triangle takes m * m time and dfs will also take m * m time (calling left and right subtree and then iterating over array.)
---

**Space Complexity:**
```
O(m * m)
```
We are creating table to store pascal triangle and also doing recursive call.


