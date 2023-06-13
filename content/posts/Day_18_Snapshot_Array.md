---
title: "Day 18: Leetcode Daily - Snapshot Array"
date: 2023-06-11T20:57:54+05:30
draft: false
tags:
-   Medium
-   Binary Search
-   Tree
image: "/images/post_pics/Day_18_Snapshot_Array/Cover.png"
---


## Problem - [1146. Snapshot Array](https://leetcode.com/problems/snapshot-array/)

### Level - Medium
---

### Solution

---
**Approach:**
This problem can be solved by using binary search or also by using the tree. We have to find lower bound of the element to find the value.

---

**Code:**

```java
class SnapshotArray {
    TreeMap<Integer, Integer>[] map;
    int snap_id = 0;

    public SnapshotArray(int length) {
        map = new TreeMap[length];
        for (int i = 0; i < length; i++) {
            map[i] = new TreeMap<>();
            map[i].put(0, 0);
        }
    }

    public void set(int index, int val) {
        map[index].put(snap_id, val);
    }

    public int snap() {
        return snap_id++;
    }

    public int get(int index, int snap_id) {
        return map[index].floorEntry(snap_id).getValue();
    }
}


```
---

**Time Complexity:**
```
O(N*Log(N))
```
We have total N elemtns and for searching we have Log(N) time complexity.

---

**Space Complexity:**
```
O(N)
```
We are storing all elements again in tree+array.

