---
title: "Day 62: Leetcode Daily - Dota2 Senate"
date: 2023-08-26T17:18:27+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_62_Dota2_Senate/Cover.png"
---


## Problem - [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public String predictPartyVictory(String senate) {
          Queue<Integer> qr = new LinkedList<>();
        Queue<Integer> qd = new LinkedList<>();
        int n = senate.length();
        for(int i = 0;i < n;i++){
            if(senate.charAt(i) == 'R') qr.add(i);
            else qd.add(i);
        }
        for(;!qr.isEmpty() && !qd.isEmpty();){
            int r_i = qr.poll();
            int d_i = qd.poll();
            if(r_i < d_i) qr.add(r_i + n);
            else qd.add(d_i + n);
        }
        return qr.size() > qd.size() ? "Radiant" : "Dire";
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


