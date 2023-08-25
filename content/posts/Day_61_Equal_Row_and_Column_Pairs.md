---
title: "Day 61: Leetcode Daily - Equal Row and Column Pairs"
date: 2023-08-25T17:16:14+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_61_Equal_Row_and_Column_Pairs/Cover.png"
---


## Problem - [2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/)

### Level - Medium
---

### Solution

---
**Approach:**


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

```

---

**Space Complexity:**
```

```


