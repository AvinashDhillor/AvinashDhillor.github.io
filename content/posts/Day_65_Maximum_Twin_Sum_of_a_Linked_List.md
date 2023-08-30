---
title: "Day 65: Leetcode Daily - Maximum Twin Sum of a Linked List"
date: 2023-08-30T17:24:19+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_65_Maximum_Twin_Sum_of_a_Linked_List/Cover.png"
---


## Problem - [2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int pairSum(ListNode head) {
        int[] a = new int[(int)1e5+1];
        int index = 0;
        while(head != null) {
            a[index++] = head.val;
            head = head.next;
        }

        int max = -1;
        
        for(int i =0; i < index/2; i++) {
            max = Math.max(a[i] + a[index - i - 1], max);
        }

        return max;
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


