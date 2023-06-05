---
title: "Day 10: Leetcode Daily - Number of Provinces"
date: 2023-06-03T07:49:44+05:30
draft: false
image: "/images/post_pics/Day_10_Leetcode_Daily_Number_of_Provinces/Cover.png"
tags:
-   Dfs
-   Graph
-   Medium
---


## Problem - [547. Number of Provinces](http://localhost:1313/posts/day_10_leetcode_daily_number_of_provinces/)

### Level - Medium
---

### Solution

---
**Approach:**

In this problem we have to find total number of connected graphs. Which can be done by traversing all elements and keep check of visited in array. If elements got traversed in one iteration then it belongs to one graph. Otherwise we run main loop to find unvisited elements and mark all the elements which are connected to it.

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
O(N*N)
```
We are traversing using DFS which takes O(N) and also traversing isConnected in loop. So total time complexity will be O(N*N).

---

**Space Complexity:**
```
O(N)
```
Visited array take O(N) space and also dfs stack can take max of O(N)  space. So total time complexity will be O(N).

