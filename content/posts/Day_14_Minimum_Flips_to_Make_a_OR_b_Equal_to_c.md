---
title: "Day 14: Leetcode Daily - Minimum Flips to Make a OR b Equal to c"
date: 2023-06-07T8:12:53+05:30
draft: false
tags:
-   Medium
-   Bits 
image: "/images/post_pics/Day_14_Minimum_Flips_to_Make_a_OR_b_Equal_to_c/Cover.png"
---


## Problem - [1318. Minimum Flips to Make a OR b Equal to c](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem we have three challenges only. First is, if c = 1 but a and b are both zero then we have to make either a or b equals to 1. Since as OR property 1 or 0 = 1 and also 0 or 1 = 1. So it will take 1 operation.

Second is, if c == 0, Then if both a = 1 and b = 1. In this case we have to make both of them 0. Which cost 2 operations.

Third is, if c == 0, but if either a = 1 or b == 1. Then we have to make them 0. Which cost 1 opertion. Based on that we can implement our solution.

---

**Code:**

```java
class Solution {

     public boolean isBitSet(int i, int mask) {
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
O(N)
```
Here N is 32 as we are traversing 32 bit length.
---

**Space Complexity:**
```
O(1)
```
No Extra space used.