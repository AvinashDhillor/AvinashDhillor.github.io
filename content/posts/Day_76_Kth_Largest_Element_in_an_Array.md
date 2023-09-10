---
title: "Day 76: Leetcode Daily - Kth Largest Element in an Array"
date: 2023-09-10T17:42:24+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_76_Kth_Largest_Element_in_an_Array/Cover.png"
---


## Problem - [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int[] arr = new int[20005];

        for(int i : nums) {
            arr[10001 + i]++;
        }

        int j = arr.length - 1;
        int ans = 0;
        while(k > 0 && j > 0) {
            if(arr[j] == 0) {
                j--;
                continue;
            } 
            k -= arr[j];
            if(k <= 0) {
                ans = j - 10001;
            }
            j--;
        }

        return ans;

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


