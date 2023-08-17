---
title: "Day 53: Leetcode Daily - Move Zeroes"
date: 2023-08-17T00:47:35+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_53_Move_Zeroes/Cover.png"
---


## Problem - [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public void moveZeroes(int[] nums) {
            int zeroIndex = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0 && zeroIndex == -1) {
                zeroIndex = i;
            } else if (nums[i] != 0 && zeroIndex != -1) {
                nums[zeroIndex++] = nums[i];
                nums[i] = 0;
            }
        }
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


