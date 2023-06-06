---
title: "Day 12: Check If It Is a Straight Line"
date: 2023-06-06T09:40:48+05:30
draft: false
tags:
-   Easy
-   Math
image: "/images/post_pics/Day_12_Leetcode_Daily_Check_If_It_Is_a_Straight_Line/Cover.png"
---


## Problem - [1232. Check If It Is a Straight Line](https://leetcode.com/problems/check-if-it-is-a-straight-line/)

### Level - Easy
---

### Solution

---
**Approach:**
This problem is simple math problem in which we have to check if the given points form a straight line or not.
We can simple check by keeping one corrdinate fixed(in our case we had kept 0th position fixed). Then we can calculate slope for each remaining corrdinates w.r.t fixed point. If all slopes are matching then we can say all points form a straight line otherwise return false. Slope finding formula can be modified further to multiplications only as shown in image to avoid divide by zero condition.

---

**Code:**

```java
class Solution {
       
    public boolean checkStraightLine(int[][] c) {
        for (int i = 2; i < c.length; i++) {
            if ((c[i][1] - c[0][1] )  * (c[1][0] - c[0][0]) != (c[i][0] - c[0][0]) * (c[1][1] - c[0][1] )) {
                return false;
            }
        }
        return true;
    }
}
```
---

**Time Complexity:**
```
O(N)
```
We are traversing whole array once so it is O(N).

---

**Space Complexity:**
```
O(1)
```
We are not using any extra space so time complexity is O(1)

