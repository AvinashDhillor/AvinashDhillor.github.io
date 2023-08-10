---
title: "Day 47: Leetcode Daily - Search in Rotated Sorted Array II"
date: 2023-08-10T22:42:10+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_47_Search_in_Rotated_Sorted_Array_II/Cover.png"
---


## Problem - [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/)

### Level - Medium
---

### Solution

---
**Approach:**
In this problem statement we have to apply binary search and reduce search space on every operation. We have to figure out multiple cases to reduce the search space.

---

**Code:**

```java
class Solution {
    public boolean search(int[] nums, int target) {
       int n = nums.length;
       if(n == 0) return false;

       int end = n - 1;
       int start = 0;

       while(start <= end) {
           int mid = start + (end - start) / 2;

           if(nums[mid] == target) {
               return true;
           }

           if(!isBinarySearchHelpful(nums, start, nums[mid])) {
               start++;
               continue;
           }

           boolean pivotArray = existsInFirst(nums, start, nums[mid]);

           boolean targetArray = existsInFirst(nums, start, target);

           if(pivotArray ^ targetArray) {
               if(pivotArray) {
                   start = mid + 1;
               } else {
                   end = mid - 1;
               } 
           } else {
               if (nums[mid] < target) {
                   start = mid + 1;
               } else {
                   end = mid - 1;
               }
           }
       }

       return false;
    }

    private boolean existsInFirst(int[] arr, int start, int ele) {
        return arr[start] <= ele;
    }

    private boolean isBinarySearchHelpful(int[] arr, int left, int ele) {
        return arr[left] != ele;
    }
}
```
---

**Time Complexity:**
```
O(N)
```
In worst case binary search will not work. So we will have to travel whole array.
---

**Space Complexity:**
```
O(1)
```
No extra space is used.


