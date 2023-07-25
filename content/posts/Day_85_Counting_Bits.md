---
title: "Day 85: Leetcode Daily - Counting Bits"
date: 2023-07-25T22:58:49+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_85_Counting_Bits/Cover.png"
---


## Problem - [338. Counting Bits](https://leetcode.com/problems/counting-bits/)

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
    vector<int> countBits(int num) {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
        cout.tie(NULL);
        
        if(num == 0) return {0};
        
        vector<int> sol(num+1);
        sol[0] = 0;
        sol[1] = 1;
        int val = 2;
        int range = val;
        for(int i = 2; i<=num; i++) {
            if(i == val)  {
                sol[i] = 1;
                continue;
            }
            sol[i] = sol[val] + sol[i%val];
            range--;
            if(range == 0) {
                val <<= 1;
                range = val;
            }
        }
        return sol;
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


