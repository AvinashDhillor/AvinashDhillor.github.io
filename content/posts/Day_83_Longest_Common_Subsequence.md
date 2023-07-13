---
title: "Day 83: Leetcode Daily - Longest Common Subsequence"
date: 2023-07-13T22:54:32+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_83_Longest_Common_Subsequence/Cover.png"
---


## Problem - [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
public:
   
    
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.size(),  m = text2.size();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1 , 0) );
        for(int i = 1; i <= m; i++ ) {
            for(int j = 1; j<=n; j++) {
                if(text1[j-1] == text2[i-1]) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                }  
                else dp[i][j] = max(dp[i][j-1], dp[i-1][j]);
            }
        }
           
        return dp[m][n];
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


