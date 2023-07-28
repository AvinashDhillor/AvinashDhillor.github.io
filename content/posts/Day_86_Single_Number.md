---
title: "Day 86: Leetcode Daily - Single Number"
date: 2023-07-28T23:00:28+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_86_Single_Number/Cover.png"
---


## Problem - [136. Single Number](https://leetcode.com/problems/single-number/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int singleNumber(int[] nums) {
        int x = 0;
        
        for(int i : nums) {
            x ^= i;
        }
        
        return x;
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


