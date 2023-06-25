---
title: "Day 27: Leetcode Daily - K Radius Subarray Averages"
date: 2023-06-24T21:29:46+05:30
draft: false
tags:
-   Medium
-   TODO
image: "/images/post_pics/Day_27_K_Radius_Subarray_Averages/Cover.png"
---


## Problem - [2090. K Radius Subarray Averages](https://leetcode.com/problems/k-radius-subarray-averages/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int[] getAverages(int[] pre, int k) {
        int n = pre.length - 1;

        long[] nums = new long[pre.length];
        nums[0] = pre[0];

        for(int i = 1; i < nums.length; i++) {
            nums[i] += nums[i-1] + pre[i];
        }

        var sol = new int[nums.length];

        for(int i = 0; i <= n; i++) {
            if(i >= k && (n - i) >= k) {
                long ele = i - k - 1 < 0 ? 0 : nums[i - k - 1];
                long ab = (nums[i] - ele + nums[i + k] - nums[i]) / ((2 * k ) + 1);
                sol[i] = (int) ab;
            } else {
                sol[i] = -1;
            }
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


