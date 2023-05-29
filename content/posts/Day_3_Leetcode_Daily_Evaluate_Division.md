---
title: "Day 3: Leetcode Daily - Evaluate Division"
date: 2023-05-25T19:01:13+05:30
draft: false
image: "/images/post_pics/Day_3_Leetcode_Daily_Evaluate_Division/Cover.png"
tags:
-   Graph
-   Dfs
-   Medium
---

## Problem - [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/description/)

### Level - Medium
---

### Solution

---
**Approach:**

This was a simple dfs based problem. We were given a/b and b/c, then we had given queries and we had to calculate a/c or c/b etc. This can be done by simple calcuting reverse values(e.g. if b/c is given then c/b will be 1/(b/c)) and creating a map. Then we can traverse map to calculate our queries. For example - 

We are given a/b and b/c and we were asked to calculate a/c. Then we can do (a/b)* (b/c) = (a/c).

Or,

If we are given a/b and c/b and we have to calculate a/c. Then we can do (a/b) * (1/(c/b)) = (a/c).

---

**Code:**

```java
class Solution {
private Map<String, Map<String, Double>> map = new HashMap();

    public double dfs(String src, String dest, Set<String> visited, double sol) {
        if (!map.containsKey(src))
            return -1.0;

        if (src.equals(dest)) {
            return sol;
        }

        visited.add(src);

        for (var tmp : map.get(src).entrySet()) {
            String key = tmp.getKey();
            double value = tmp.getValue();
            if (!visited.contains(key)) {
                var ans = dfs(key, dest, visited, value);
                if (ans != -1)
                    return sol * ans;
            }
        }

        return -1.0;
    }

    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        int index = 0;
        for (List<String> i : equations) {
            String x = i.get(0);
            String y = i.get(1);

            map.putIfAbsent(x, new HashMap<>());
            map.putIfAbsent(y, new HashMap<>());

            map.get(x).put(y, values[index]);
            map.get(y).put(x, 1 / values[index]);
            index++;
        }
        int n = queries.size();

        double[] ans = new double[n];

        for (int i = 0; i < n; i++) {
            String src = queries.get(i).get(0);
            String dest = queries.get(i).get(1);

            Set<String> visited = new HashSet<>();
            ans[i] = dfs(src, dest, visited, 1.0);
        }
        return ans;
    }
}

```
---

**Time Complexity:**
```
O(N+Q*E)

Where N is size of equation. Q is number of queries and V is number of Edges.
```


---

**Space Complexity:**
```
O(N)
```
Since we are storing all equation values in seperate map.
