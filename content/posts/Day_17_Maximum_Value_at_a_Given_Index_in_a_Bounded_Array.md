---
title: "Day 17: Leetcode Daily - Maximum Value at a Given Index in a Bounded Array"
date: 2023-06-10T20:55:43+05:30
draft: false
tags:
-   Medium
-   Binary Search
-   Greedy
image: "/images/post_pics/Day_17_Maximum_Value_at_a_Given_Index_in_a_Bounded_Array/Cover.png"
---


## Problem - [1802. Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/description/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem we need to find maximum number at a given index. But this must follow conditions like the total sum of elements can't be more then maxSum and also different between adjacent element can be either 0 or 1. So we can directly calculate sum of array using AP formula. And also we can use binary search to find the maximum element.

---

**Code:**

```java
class Solution {
    private long getSum(int index, int value, int n) {
        long count = 0;
        
        if (value > index) {
            count += (long)(value + value - index) * (index + 1) / 2;
        } else {
            count += (long)(value + 1) * value / 2 + index - value + 1;
        };
        if (value >= n - index) {
            count += (long)(value + value - n + 1 + index) * (n - index) / 2;
        } else {
            count += (long)(value + 1) * value / 2 + n - index - value;
        }   
        
        return count - value;
    }

    public int maxValue(int n, int index, int maxSum) {
        int left = 1, right = maxSum;
        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (getSum(index, mid, n) <= maxSum) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
}

```
---

**Time Complexity:**
```
O(log(N))
```
Since we are only performing binary search, time complexity will be logn. N is the maxSum.

---

**Space Complexity:**
```
O(1)
```
No extra space is used.

