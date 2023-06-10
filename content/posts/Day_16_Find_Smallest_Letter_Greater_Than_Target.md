---
title: "Day 16: Leetcode Daily - Find Smallest Letter Greater Than Target"
date: 2023-06-09T13:28:19+05:30
draft: false
tags:
-   Easy
- Binary Search
image: "/images/post_pics/Day_16_Find_Smallest_Letter_Greater_Than_Target/Cover.png"
---


## Problem - [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/)

### Level - Easy
---

### Solution

---
**Approach:**
In this problem we need to find upper bound (modified binary Search) of target element.

---

**Code:**

```java
class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        int left = 0, right = letters.length - 1, mid;

        while(left <= right) {
            mid =  (left + right) / 2;

            if(letters[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left == letters.length ? letters[0] : letters[left];
    }
}

```
---

**Time Complexity:**
```
Log(N)
```
Time complexity of Binary search is log(n).
---

**Space Complexity:**
```
O(1)
```
No extra space is used.


