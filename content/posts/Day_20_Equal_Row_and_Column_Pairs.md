---
title: "Day 20: Leetcode Daily - Equal Row and Column Pairs"
date: 2023-06-13T22:28:28+05:30
draft: false
tags:
-   Medium
-   Hashing
image: "/images/post_pics/Day_20_Equal_Row_and_Column_Pairs/Cover.png"
---


## Problem - [2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem we have to find row and coloums which are similar. This can be done by first traversing the rows and store all of them in hashmap along with count. Then we can traverse all coloum and check if the hash of coloum already exist in the hashmap for rows. It we found, we can add count to the answer.


---

**Code:**

```java
class Solution {
    public int equalPairs(int[][] grid) {
        Map<String, Integer> map = new HashMap<>();
        
        for(int i = 0; i < grid.length; i++) {
            String result = "";
            for(int j = 0; j < grid[0].length; j++) {
                result += String.valueOf(grid[i][j]) + "#";
            }
            int occu = map.getOrDefault(result, 0);
            map.put(result, occu + 1);
        }
        
        int sol = 0;
        for(int i = 0; i < grid[0].length; i++) {
            String result = "";
            for(int j = 0; j < grid.length; j++) {
                result += String.valueOf(grid[j][i]) + "#";
            }
            int val = map.getOrDefault(result, 0);
            sol += val;
        }
        return sol;
    }
}

```
---

**Time Complexity:**
```
O(N * N)
```
We are traversing all elements  of array which takes time of O(N*N), and finding and storing in hashMap is O(1)

---

**Space Complexity:**
```
O(N * N)
```
We are storing all elements once again in hashmap.


