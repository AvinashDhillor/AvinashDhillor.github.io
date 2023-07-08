---
title: "Day 44: Leetcode Daily - Longest Subarray of 1s After Deleting One Element"
date: 2023-07-07T15:56:18+05:30
draft: false
tags:
-   Medium
-   Sliding window
image: "/images/post_pics/Day_44_Longest_Subarray_of_1s_After_Deleting_One_Element/Cover.png"
---


## Problem - [1493. Longest Subarray of 1&#39;s After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

### Level - Medium
---

### Solution

---
**Approach:**

In this problem we will use sliding window approach. If one+ zero comes under window we will shrink the window until zero <= 1.
---

**Code:**

```java
class Solution {

    public int longestSubarray(int[] nums) {

        int zeroCount = 0;
        int longestWindow = 0;

        int start = 0;
        
        for (int i = 0; i < nums.length; i++) {
            zeroCount += (nums[i] == 0 ? 1 : 0);

            while (zeroCount > 1) {
                zeroCount -= (nums[start] == 0 ? 1 : 0);
                start++;
            }
              
            longestWindow = Math.max(longestWindow, i - start);
        }

        return longestWindow;
    }
}

```
---

**Time Complexity:**
```
O(N)
```
Since we are iterating only once.
---

**Space Complexity:**
```
O(1)
```
We are not using any extra space.

