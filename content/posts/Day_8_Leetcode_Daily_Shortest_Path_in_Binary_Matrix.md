---
title: "Day 8: Leetcode Daily - Shortest Path in Binary Matrix"
date: 2023-06-01T07:42:50+05:30
image: "/images/post_pics/Day_8_Leetcode_Daily_Shortest_Path_in_Binary_Matrix/Cover.png"
draft: false
tags:
    -   BFS
    -   Graph
    -   Medium
---


## Problem - [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem we have to find shortest path from start node (0,0) to (n-1, n-1) only if it is connected (means contain 0).
We can easily do using BFS because it visit all nodes all once which is at same distance as explained in above diagram.
for example if node have distance 2 from start. It will visit all of them in once, then it will calculate distance 3. Also we will have to keep track of smallest distance in dist array.

---

**Code:**

```java
class Solution {
    
    static int[][] dir = {
            { -1, 0 }, { 0, -1 }, { 1, 0 }, { 0, 1 }, { -1, -1 }, { 1, 1 }, { -1, 1 }, { 1, -1 }
    };

    static int bfs(int[][] grid, int row, int col) {
        int n = grid.length;
        int m = grid[0].length;
        int[][] dist = new int[n][m];
        Queue<Integer[]> queue = new LinkedList<>();

        boolean[][] visited = new boolean[n][m];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                dist[i][j] = Integer.MAX_VALUE;
        }

        dist[row][col] = 0;

        queue.add(new Integer[] { row, col });

        while (!queue.isEmpty()) {
            Integer u[] = queue.poll();
            int parentRow = u[0], parentCol = u[1];

            for (int[] i : dir) {
                int newRow = parentRow + i[0];
                int newCol = parentCol + i[1];

                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && grid[newRow][newCol] == 0
                        && visited[newRow][newCol] == false) {
                    dist[newRow][newCol] = Math.min(dist[parentRow][parentCol] + 1, dist[newRow][newCol]);
                    visited[newRow][newCol] = true;
                    queue.add(new Integer[] { newRow, newCol });
                }
            }
        }
        return dist[n - 1][m - 1];
    }

    public static int shortestPathBinaryMatrix(int[][] grid) {
        if(grid[0][0] != 0) return -1;
        int ans = bfs(grid, 0, 0);
        return ans == Integer.MAX_VALUE ? -1 : ans+1;
    }
}
```
---

**Time Complexity:**
```
O(V + E)
```
Since we are using simple BFS. It time complexity will be sum of nodes and edges.


---

**Space Complexity:**
```
O(N)
```
We are using queue and visited array. 