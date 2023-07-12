---
title: "Day 81: Leetcode Daily - Min Cost Climbing Stairs"
date: 2023-07-12T17:48:49+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_81_Min_Cost_Climbing_Stairs/Cover.png"
---


## Problem - [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] finalCost = new int[cost.length + 1];
        
        finalCost[0] = cost[0];
        finalCost[1] = cost[1];
        
        for(int i = 2; i <= cost.length; i++) {
            if(i == cost.length) {
                finalCost[i] = Math.min(finalCost[i-1], finalCost[i-2]) + 0;
            } else 
                finalCost[i] = Math.min(finalCost[i-1], finalCost[i-2]) + cost[i];
            
        }
        return finalCost[cost.length];
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


