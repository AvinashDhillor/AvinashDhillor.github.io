---
title: "Day 87: Leetcode Daily - Minimum Flips to Make a OR b Equal to c"
date: 2023-07-30T23:02:12+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_87_Minimum_Flips_to_Make_a_OR_b_Equal_to_c/Cover.png"
---


## Problem - [1318. Minimum Flips to Make a OR b Equal to c](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {

     public static boolean isBitSet(int i, int mask) {
        return (i & (1 << mask)) != 0;
    }

    public int minFlips(int a, int b, int c) {
        int answer = 0;
        for (int i = 0; i < 32; i++) {
            boolean astatus = isBitSet(a, i);
            boolean bstatus = isBitSet(b, i);
            boolean cstatus = isBitSet(c, i);

            if (cstatus) {
                if (!bstatus && !astatus)
                    answer++;
            } else {
                if (bstatus && astatus)
                    answer += 2;
                else if (bstatus || astatus)
                    answer++;
            }
        }

        return answer;
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


