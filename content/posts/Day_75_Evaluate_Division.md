---
title: "Day 75: Leetcode Daily - Evaluate Division"
date: 2023-09-09T17:40:20+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_75_Evaluate_Division/Cover.png"
---


## Problem - [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)

### Level - Medium
---

### Solution

---
**Approach:**


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

```

---

**Space Complexity:**
```

```


