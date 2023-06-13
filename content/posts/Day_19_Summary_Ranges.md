---
title: "Day 19: Leetcode Daily - Summary Ranges"
date: 2023-06-12T20:58:33+05:30
draft: false
tags:
-   Easy
-   Loop
image: "/images/post_pics/Day_19_Summary_Ranges/Cover.png"
---


## Problem - [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/)

### Level - Easy
---

### Solution

---
**Approach:**
In this problem we can iterate over array and then we can add inner loop to traverse over element which have difference of 1.
Otherwise we break the loop and jump to next element.

---

**Code:**

```java
class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> sol = new ArrayList<>();

        for(int i = 0; i < nums.length;i++ ) {
            int tmp = nums[i];
            int k = i + 1;
            while(k < nums.length && nums[k] == tmp + 1) {
                tmp = nums[k];
                k++;
            }

            if(nums[i] == nums[k-1]) {
                sol.add(""+nums[i]);
            } else {
                sol.add(nums[i] + "->" + nums[k-1]);
            }
            i = k -1 ;
        }

        return sol;
    }
}


```
---

**Time Complexity:**
```
O(N)
```
We are iterating all elements only once.
---

**Space Complexity:**
```
O(1)
```
No extra space is used.

