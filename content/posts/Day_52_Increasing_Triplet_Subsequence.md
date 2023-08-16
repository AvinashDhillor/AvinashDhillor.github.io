---
title: "Day 52: Leetcode Daily - Increasing Triplet Subsequence"
date: 2023-08-16T00:39:27+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_52_Increasing_Triplet_Subsequence/Cover.png"
---


## Problem - [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/)

### Level - Medium
---

### Solution

---
**Approach:**

---

**Code:**

```java
class Solution {

    public boolean increasingTriplet(int[] nums) {
        long A, B;
        A = Long.MAX_VALUE;
        B = A;

        for(int i : nums) {
            if(i <= A) A = i;
            else if(i <= B) B = i;
            else return true;
        }

        return false;
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


