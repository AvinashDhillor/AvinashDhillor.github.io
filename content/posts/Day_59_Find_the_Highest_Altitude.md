---
title: "Day 59: Leetcode Daily - Find the Highest Altitude"
date: 2023-08-23T17:11:23+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_59_Find_the_Highest_Altitude/Cover.png"
---


## Problem - [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int largestAltitude(int[] gain) {
        int max = Math.max(gain[0], 0);
        for(int i = 1; i < gain.length; i++) {
            gain[i] += gain[i-1];
            max = Math.max(gain[i], max);
        }
        return max;
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


