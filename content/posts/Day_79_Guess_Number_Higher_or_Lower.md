---
title: "Day 79: Leetcode Daily - Guess Number Higher or Lower"
date: 2023-09-13T17:46:46+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_79_Guess_Number_Higher_or_Lower/Cover.png"
---


## Problem - [374. Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int start = 1, end = n;

        while(start <= end) {
            int mid = start + (end - start) / 2; 

            int g = guess(mid);

            if (g == 0) return mid;

            if( g == -1) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return -1;
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


