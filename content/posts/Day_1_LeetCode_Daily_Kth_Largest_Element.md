---
title: "Day 1: LeetCode Daily - Kth Largest Element"
date: 2023-05-23T23:41:44+05:30
tags:
    - Leetcode
    - Heap
    - Priority_Queue
    - Easy
draft: false
image: "/images/post_pics/Day_1_Leetcode_Daily_Kth_largest_Element/1.png"
---

## Problem - [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/description/)

### Level - Easy
---

### Solution

---
**Approach:**

In problem we will be getting an array initially and that array size can be greater then **K** so we will be storing that array in heap (Min heap_ of size K. Top element of heap will always be our solution. To maintain a heap of size K in java, we will have to keep removing our K+1th element from heap while inserting all elements of num array.

Similar, while we add new elements into heap we will have to maintain size and remove the K+1 th element from heap and we can return top element of heap. Which will be Kth largest element in our case.

---

**Code:**

```java
class KthLargest {

        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        int maxSize;

        public KthLargest(int k, int[] nums) {
            maxSize = k;

            for (int i : nums) {
                pq.add(i);
                if (pq.size() > k)
                    pq.remove();
            }
        }

        public int add(int val) {
            pq.add(val);
            if (pq.size() > maxSize) {
                pq.remove();
            }

            return pq.peek();
        }
}
```
---

**Time Complexity:**
```
O(N.log(K) + M.log(K))
```
Since initially we will have to traverse array of size **N** and then it will be getting stored in Heap of size K. For heap insertion time complexity is log(K). So the time complexity will be O(N.log(K)). We further do M operations which is the number of calls made for adding elements. That will also take O(M.log(K)) where K is the size of heap. So total time complexity will O(N.log(K) + M.log(K))

---

**Space Complexity:**
```
O(K)
```
We are only maintaining heap of size K.