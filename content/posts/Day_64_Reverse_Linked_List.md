---
title: "Day 64: Leetcode Daily - Reverse Linked List"
date: 2023-08-28T17:21:07+05:30
draft: false
tags:
-   Easy
image: "/images/post_pics/Day_64_Reverse_Linked_List/Cover.png"
---


## Problem - [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

### Level - Easy
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
    ListNode result = new ListNode(0);
    ListNode ans = result;
    public ListNode util(ListNode head) {
        if(head == null) return null;
        util(head.next);
        result.next = new ListNode(head.val);
        result = result.next;
        return head;
    }

    public ListNode reverseList(ListNode head) {
        util(head);
        return ans.next;
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


