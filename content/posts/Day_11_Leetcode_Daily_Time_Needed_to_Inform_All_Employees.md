---
title: "Day 11: Leetcode Daily - Time Needed to Inform All Employees"
date: 2023-06-04T07:49:10+05:30
draft: false
image: "/images/post_pics/Day_11_Leetcode_Daily_Time_Needed_to_Inform_All_Employees/Cover.png"
tags:
-   Dfs
-   Graph
-   Medium
---

## Problem - [1376. Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/description/)

### Level - Medium
---

### Solution

---
**Approach:**
In this solution we have to construct graph and then we can traverse graph using DFS/BFS to caculate the max time taken to inform all the people as explained in above image.

---

**Code:**

```java
class Solution {
    int maxTime = Integer.MIN_VALUE;

    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
        List<Integer>[] arr = new ArrayList[n];

        for(int i = 0; i < n; i++) arr[i] = new ArrayList<Integer>();

        for (int i = 0; i < manager.length; i++) {
            if(manager[i] == -1) continue;
            arr[manager[i]].add(i);
        }

        cal(arr, headID, informTime, 0);

        return maxTime;
    }

    private void cal(List<Integer>[] arr, int headID, int[] informTime, int time) {
        maxTime = Math.max(maxTime, time);

        for (int i : arr[headID]) {
            cal(arr, i, informTime, time + informTime[headID]);
        }
    }
}
```
---

**Time Complexity:**
```
O(N)
```
We have to traverse all the elements once.

---

**Space Complexity:**
```
O(N)
```

We are creating adjacency list for storing and traversing graph.
