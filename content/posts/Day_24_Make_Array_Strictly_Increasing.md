---
title: "Day 24: Leetcode Daily - Make Array Strictly Increasing"
date: 2023-06-17T15:38:07+05:30
draft: false
tags:
-   Hard
-   TODO
image: "/images/post_pics/Day_24_Make_Array_Strictly_Increasing/Cover.png"
---


## Problem - [1187. Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/)

### Level - Hard
---

### Solution

---
**Approach:**
In this problem if we are given correct sequence then we can skip and move to next step. otherwise we can either try to reduce the element even if it is in correct order or we can keep it as it is and find minimum of both the solution. We can use hashmap to store the solution of sub problems so that we don't have to recompute them.

---

**Code:**

```java
class Solution { 
    public int makeArrayIncreasing(int[] arr1, int[] arr2) {
        Arrays.sort(arr2);
        
        int answer = dfs(0, -1, arr1, arr2);
        
        return answer < 2_001 ? answer : -1;
    }
    
    Map<Pair<Integer, Integer>, Integer> dp = new HashMap<>();
    private int dfs(int i, int prev, int[] arr1, int[] arr2) {
        if (i == arr1.length) {
            return 0;
        }
        if (dp.containsKey(new Pair<>(i, prev))) {
            return dp.get(new Pair<>(i, prev));
        }

        int cost = 2_001;

        if (arr1[i] > prev) {
            cost = dfs(i + 1, arr1[i], arr1, arr2);
        }

        int idx = bisectRight(arr2, prev);

        if (idx < arr2.length) {
            cost = Math.min(cost, 1 + dfs(i + 1, arr2[idx], arr1, arr2));
        }

        dp.put(new Pair<>(i, prev), cost);
        return cost;
    }
    
    private static int bisectRight(int[] arr, int value) {
        int left = 0, right = arr.length;
        while (left < right) {
            int mid = (left + right) / 2;
            if (arr[mid] <= value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    } 
}

```
---

**Time Complexity:**
```
O(M * N log N)
```
Sorting and iterating over M size array.
---

**Space Complexity:**
```
O(M * N)
```
Memoization will take M * N.

