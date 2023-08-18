---
title: "Day 54: Leetcode Daily - Is Subsequence"
date: 2023-08-18T00:51:02+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_54_Is_Subsequence/Cover.png"
---


## Problem - [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)

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
    bool isSubsequence(string s, string t) {
        int j = 0;
        for(int i = 0; i< t.size(); i++) {
            if(j < s.size() && s[j] == t[i]) {
                j++;
            }
        }
        
        if(j == s.size()) return true;
        return false;
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


