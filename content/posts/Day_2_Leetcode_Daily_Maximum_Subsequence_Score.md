---
title: "Day 2: Leetcode Daily - Maximum Subsequence Score"
date: 2023-05-24T23:28:13+05:30
draft: false
image: "/images/post_pics/Day_2_Leetcode_Daily_Maximum_Subsequence_Score/1.png"
tags:
    - Priority_Queue
    - Sorting
    - Leetcode
---

## Problem - [2542. Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/description/)

### Level - Medium
---

### Solution

---
**Approach:**

In this problem we are given two arrays nums1 and nums2, we will have to find **maximum** of (nums1[i]...nums1[k]) * min(nums2[i]...nums2[k]). We have to find subsequence which give maximum result.

So, we will have to sort array based on nums2 in decreasing order as show in **Fig.2**. After that we will have to loop through array and keep track of sum.

when we will move to **K+1** we will have minimum from num2 and we can pick highest elements from left side. We can keep track of highest elements in left side using heap as shown in below diagram.

![image](/images/post_pics/Day_2_Leetcode_Daily_Maximum_Subsequence_Score/2.png)
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
O(N.log(N) + N.log(K))
```
We have to sort array of size N. Sorting algorithm take n.log(n) time. We further do deletion and insertion in heap of size k. For both insertion and deletion time complexity will be log(k) in heap. Overall sum will be O(N.log(N))

---

**Space Complexity:**
```
O(N) + O(K)
```
Since we are storing elements in additional Pair array. Which is of N size. so space complexity will be O(N) and we also keeping a heap of size K. So total time complexity will be O(N) + O(K)