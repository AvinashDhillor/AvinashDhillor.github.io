---
title: "Day 77: Leetcode Daily - Maximum Subsequence Score"
date: 2023-09-11T17:44:27+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_77_Maximum_Subsequence_Score/Cover.png"
---


## Problem - [2542. Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {

    
    class Pair implements Comparable<Pair> {
        int x;
        int y;

        Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public int compareTo(Pair o) {
            return o.y - y;
        }

        @Override
        public String toString() {
            return "Pair [x=" + x + ", y=" + y + "]";
        }

    }

    public long maxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;

        Pair pairs[] = new Pair[n];

        for (int i = 0; i < n; i++) {
            pairs[i] = new Pair(nums1[i], nums2[i]);
        }

        Arrays.sort(pairs);

        PriorityQueue<Integer> pQueue = new PriorityQueue<>(k);

        long topSum = 0;

        for (int i = 0; i < k; i++) {
            Pair p = pairs[i];
            topSum += p.x;
            pQueue.add(p.x);
        }

        long ans = topSum * pairs[k - 1].y;

        for (int i = k; i < n; i++) {
            topSum += pairs[i].x - pQueue.poll();
            pQueue.add(pairs[i].x);
            ans = Math.max(ans, topSum * pairs[i].y);
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


