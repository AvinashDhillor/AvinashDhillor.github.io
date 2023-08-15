---
title: "Day 51: Leetcode Daily - Product of Array Except Self"
date: 2023-08-15T00:36:00+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_51_Product_of_Array_Except_Self/Cover.png"
---


## Problem - [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)

### Level - Medium
---

### Solution

---
**Approach:**
class Solution {
    public int[] productExceptSelf(int[] nums) {

        int[] prefix = new int[nums.length];

        prefix[0] = nums[0];

        for(int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i];
        }

        int right = nums[nums.length - 1];
        prefix[nums.length - 1] = prefix[nums.length - 2];

        for(int i = nums.length - 2; i>=1; i--) {
            prefix[i] = prefix[i-1] * right;
            right *= nums[i];
        }

        prefix[0] = right;

        return prefix;

    }
}

---

**Code:**

```java


```
---

**Time Complexity:**
```

```

---

**Space Complexity:**
```

```


