---
title: "Day 58: Leetcode Daily - Longest Subarray of 1&#39;s After Deleting One Element"
date: 2023-08-22T17:09:11+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_58_Longest_Subarray_of_1&#39;s_After_Deleting_One_Element/Cover.png"
---


## Problem - [1493. Longest Subarray of 1&#39;s After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

### Level - Medium
---

### Solution

---
**Approach:**


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

```

---

**Space Complexity:**
```

```


