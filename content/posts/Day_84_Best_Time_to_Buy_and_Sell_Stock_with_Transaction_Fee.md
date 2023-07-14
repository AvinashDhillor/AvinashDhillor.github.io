---
title: "Day 84: Leetcode Daily - Best Time to Buy and Sell Stock with Transaction Fee"
date: 2023-07-14T22:57:18+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_84_Best_Time_to_Buy_and_Sell_Stock_with_Transaction_Fee/Cover.png"
---


## Problem - [714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int maxProfit(int[] prices, int fee) {
        int n = prices.length;
        int[] free = new int[n], hold = new int[n];
   
        hold[0] = -prices[0];
        
        for (int i = 1; i < n; i++) {
            hold[i] = Math.max(hold[i - 1], free[i - 1] - prices[i]);
            free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i] - fee);
        }
        
        return free[n - 1];
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


