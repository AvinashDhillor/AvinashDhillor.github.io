---
title: "Day 13: Leetcode Daily - Can Make Arithmetic Progression From Sequence"
date: 2023-06-06T11:40:20+05:30
draft: false
tags:
-   Easy
-   Loop
-   1D Array
image: "/images/post_pics/Day_13_Can_Make_Arithmetic_Progression_From_Sequence/Cover.png"
---


## Problem - [1502. Can Make Arithmetic Progression From Sequence](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/)

### Level - Easy
---

### Solution

---
**Approach:**
This can be solved by sorting the array and then find difference between current element and its adjacent element. If we find any difference in the subtracted value as compare to other element then it is not AP.

---

**Code:**

```java
class Solution {
    public boolean canMakeArithmeticProgression(int[] arr) {
        Arrays.sort(arr);
        int diff = arr[1] - arr[0];
        for(int i = 2; i < arr.length; i++) {
            if(diff  != arr[i] - arr[i-1]){
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
O(N*LogN)
```
We are sorting array first and then iterating over array.
---

**Space Complexity:**
```
O(1)
```
We are not using any extra space.s


