---
title: "Day 63: Leetcode Daily - Odd Even Linked List"
date: 2023-08-27T17:19:24+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_63_Odd_Even_Linked_List/Cover.png"
---


## Problem - [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

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
    public ListNode oddEvenList(ListNode head) {
        if(head == null || head.next == null) return head;

        ListNode odd = head, even = head.next;
        ListNode oddStart = odd, evenStart = even;

        while(odd != null && even != null) {
            odd.next = even.next;
            if(odd.next == null) break;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
            
        }

        odd.next = evenStart;

        return oddStart;
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


