---
title: "Day 74: Leetcode Daily - Number of Provinces"
date: 2023-09-08T17:38:54+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_74_Number_of_Provinces/Cover.png"
---


## Problem - [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/description/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public static int findCircleNum(int[][] isConnected) {
        boolean[] visited = new boolean[isConnected.length];
        int count = 0;
        for (int i = 0; i < isConnected.length; i++) {
            for (int j = 0; j < isConnected[0].length; j++) {
                if (isConnected[i][j] == 1 && !visited[i]) {
                    dfs(i, visited, isConnected);
                    count++;
                }
            }
        }

        return count;
    }

    private static void dfs(int i, boolean[] visited, int[][] isConnected) {
        visited[i] = true;

        for (int j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j] == 1 && visited[j] == false) {
                dfs(j, visited, isConnected);
            }
        }
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


