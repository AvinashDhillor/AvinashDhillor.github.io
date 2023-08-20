---
title: "Day 55: Leetcode Daily - Container With Most Water"
date: 2023-08-19T00:53:18+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_55_Container_With_Most_Water/Cover.png"
---


## Problem - [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public int maxArea(int[] height) {
        int l = 0;
        int r = height.length - 1;
        
        int volume = Integer.MIN_VALUE;
    
        while(l < r) {
            volume = Math.max(volume, (r - l) * (Math.min(height[l], height[r])));
            
            if(height[l] < height[r]) l++;
            else r--;
        }
        return volume;
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


