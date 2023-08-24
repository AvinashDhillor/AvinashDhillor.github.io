---
title: "Day 60: Leetcode Daily - Find the Difference of Two Arrays"
date: 2023-08-24T17:13:08+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_60_Find_the_Difference_of_Two_Arrays/Cover.png"
---


## Problem - [2215. Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays/)

### Level - Easy
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        for(int i : nums1) set.add(i);

        Set<Integer> set1 = new HashSet<>();
        for(int i : nums2) set1.add(i);

        List<List<Integer>> list = new ArrayList<>();
        list.add(new ArrayList<>());
        list.add(new ArrayList<>());

        for(int i : set) {
            if(set1.contains(i) == false) list.get(0).add(i);
        }

        for(int i : set1) {
            if(set.contains(i) == false) list.get(1).add(i);
        }

        return list;
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


