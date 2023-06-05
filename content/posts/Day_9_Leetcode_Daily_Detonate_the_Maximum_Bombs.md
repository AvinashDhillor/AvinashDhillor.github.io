---
title: "Day 9: Leetcode Daily - Detonate the Maximum Bombs"
date: 2023-06-02T07:48:04+05:30
draft: false
image: "/images/post_pics/Day_9_Leetcode_Daily_Detonate_the_Maximum_Bombs/Cover.png"
tags:
-   Dfs
-   Graph
-   Medium
---


## Problem - [2101. Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/description/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem we need to check how many bombs are coming in range of one bomb. We can find it by using Euclidean's distance formula. For example if distance between center of Bomb A and Bomb B is lesser or equal to radius of B, it means B is coming in range of B. But reverse might not be true. B radius could be less then the distance between A and B center. So we can construct a directed graph for each bomb. and then we can traverse this directed graph for each bomb and count number of bombs coming in range.

---

**Code:**

```java
class Solution {
    public static int maximumDetonation(int[][] bombs) {
        var graph = new HashMap<Integer, List<Integer>>();

        int n = bombs.length;

        for (int i = 0; i < n; i++) {
            int x1 = bombs[i][0], y1 = bombs[i][1], r1 = bombs[i][2];
            for (int j = 0; j < n; j++) {
                if (i != j) {
                    int x2 = bombs[j][0], y2 = bombs[j][1];

                    long dist = (long) (x1 - x2) * (x1 - x2) + (long) (y1 - y2) * (y1 - y2);
                    if (dist <= (long) r1 * r1) {
                        graph.putIfAbsent(i, new ArrayList<>());
                        graph.get(i).add(j);
                    }
                }
            }
        }

        int ans = 0;

        for (int i = 0; i < n; i++) {
            var visited = new HashSet<Integer>();
            int sol = dfs(graph, visited, i);
            ans = Math.max(ans, sol);
        }
        return ans;
    }

    private static int dfs(HashMap<Integer, List<Integer>> graph, HashSet<Integer> visited, int i) {
        visited.add(i);
        int count = 1;
        for (int j : graph.getOrDefault(i, new ArrayList<>())) {
            if (!visited.contains(j)) {
                count += dfs(graph, visited, j);
            }
        }
        return count;
    }
}

```
---

**Time Complexity:**
```
O(N*(N*N))
```
Time complexity of DFS is O(V + E) where V is nodes and E is number of Edges. Since in our case we could have maximum of N nodes and N*N edges (directed graph). So time complecity will be O(N*N). We have to perform DFS for N nodes. so total time complexity will be N*(N*N). We are also creating graph which have complexity O(N*N). Total time complexity will be
O(N*(N*N)) + O(N*N)

---

**Space Complexity:**
```
O(N*N)
```
We have to store N*N edges. Also need O(N) space for storing visited nodes and O(N) for dfs stack.
