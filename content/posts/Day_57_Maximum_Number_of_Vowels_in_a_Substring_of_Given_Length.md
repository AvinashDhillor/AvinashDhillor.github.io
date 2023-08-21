---
title: "Day 57: Leetcode Daily - Maximum Number of Vowels in a Substring of Given Length"
date: 2023-08-21T17:05:51+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_57_Maximum_Number_of_Vowels_in_a_Substring_of_Given_Length/Cover.png"
---


## Problem - [1456. Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public boolean isV(char c) {
        String tmp = "aeiou";
        if(tmp.contains(c + "")) return true;
        return false;
    }
    public int maxVowels(String s, int k) {
        int v = 0;
        int sol = 0;

        for(int i = 0; i < k; i++) {
            if(isV(s.charAt(i))) v++;
        }
        sol = v;
        for(int i = k; i < s.length(); i++) {
            char remo = s.charAt(i - k);
            char next = s.charAt(i);

            if(isV(remo)) v--;
            if(isV(next)) v++;
            sol = Math.max(v, sol);
        }
        return sol;
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


