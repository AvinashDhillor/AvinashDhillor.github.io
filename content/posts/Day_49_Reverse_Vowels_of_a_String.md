---
title: "Day 49: Leetcode Daily - Reverse Vowels of a String"
date: 2023-08-13T00:15:20+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_49_Reverse_Vowels_of_a_String/Cover.png"
---


## Problem - [345. Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)

### Level - Easy
---

### Solution

---
**Approach:**
We will first first vowel from left and then from right. After that we will simply replace these vowels.

---

**Code:**

```java
class Solution {
    public String reverseVowels(String s) {
        StringBuilder sb = new StringBuilder(s);

        int l = 0, r = s.length() - 1;
        String vowels = "aeiouAEIOU";

        while(l < r) {
            boolean f = false;
            while(l < sb.length() && vowels.indexOf(sb.charAt(l)) == -1) {
                l++;
                f |= true;
            }

            while(r >= 0 && vowels.indexOf(sb.charAt(r)) == -1) {
                r--;
                f |= true;
            }      

            if(f) continue;

            char c = sb.charAt(l);

            sb.setCharAt(l, sb.charAt(r));
            sb.setCharAt(r, c);
            l++;
            r--;
        }
        return sb.toString();
    }
}

```
---

**Time Complexity:**
```
O(n)
```
Since we have to iterate every string character once.

---

**Space Complexity:**
```
O(n)
```
We are using extra storage to store string data into string builder.

