---
title: "Day 48: Leetcode Daily - Merge Strings Alternately"
date: 2023-08-11T23:16:30+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_48_Merge_Strings_Alternately/Cover.png"
---


## Problem - [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

### Level - Easy
---

### Solution

---
**Approach:**
We will have to iterate both string until one of them them got completely iterated (in case of one is smaller then other).
Then we can append the remaining character to the solution.
---

**Code:**

```java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        int i = 0, j = 0;

        String sol = "";

        while(i < word1.length() && j < word2.length()) {
            sol += word1.charAt(i);
            sol += word2.charAt(j);
            i++;
            j++;           
        }

        if(i < word1.length()) {
            sol += word1.substring(i, word1.length());
        }

        if(j < word2.length()) {
            sol += word2.substring(i, word2.length());
        }

        return sol;
    }
}

```
---

**Time Complexity:**
```
O(n)
```
Here n is the max length of either String A or B. 

---

**Space Complexity:**
```
O(1)
```
We are not using any extra space.


