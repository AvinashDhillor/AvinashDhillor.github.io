---
title: "Day 56: Leetcode Daily - Maximum Average Subarray I"
date: 2023-08-20T17:04:36+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_56_Maximum_Average_Subarray_I/Cover.png"
---


## Problem - [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double sum = 0;
        for(int i = 0; i < k; i++) sum  += nums[i];

        double avg = sum/k;

        for(int i = k; i < nums.length; i++) {
            sum += nums[i];
            sum -= nums[i - k];
            avg = Math.max(avg, sum/k);
        }

        return avg;
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


