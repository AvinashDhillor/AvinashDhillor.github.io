---
title: "Day 80: Leetcode Daily - N-th Tribonacci Number"
date: 2023-09-14T17:47:40+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_80_N-th_Tribonacci_Number/Cover.png"
---


## Problem - [1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
public:
    int tribonacci(int n) {
        if(n == 0) return 0;
        if(n <= 2) return 1;
        int a = 0, b = 1, c = 1;
        for(int i = 3; i <= n; i++) {
            int tmp = c;
            c += b + a;
            int anotmp = b;
            b = tmp;
            a = anotmp;
        }
        return c;
    }
};

```
---

**Time Complexity:**
```

```

---

**Space Complexity:**
```

```


