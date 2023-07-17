---
title: "Day 46: Leetcode Daily - Add Two Numbers II"
date: 2023-07-17T20:52:19+05:30
draft: false
tags:
-   Medium
-   stack
-   linkedlist
image: "/images/post_pics/Day_46_Add_Two_Numbers_II/Cover.png"
---


## Problem - [445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/description/)

### Level - Medium
---

### Solution

---
**Approach:**
Store all values in the stack and then pop them out and also add.

---

**Code:**

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
          Stack<Integer> s1 = new Stack<Integer>();
        Stack<Integer> s2 = new Stack<Integer>();
        
        while(l1 != null) {
            s1.push(l1.val);
            l1 = l1.next;
        };
        while(l2 != null) {
            s2.push(l2.val);
            l2 = l2.next;
        }
        
        int totalSum = 0, carry = 0;
        ListNode ans = new ListNode();
        while (!s1.empty() || !s2.empty()) {
            if (!s1.empty()) totalSum += s1.pop();
            if (!s2.empty()) totalSum += s2.pop();
            
            ans.val = totalSum % 10;
            carry = totalSum / 10;
            ListNode head = new ListNode(carry);
            head.next = ans;
            ans = head;
            totalSum = carry;
        }

        return carry == 0 ? ans.next: ans;
    }
}
```
---

**Time Complexity:**
```
O(m+n)
```
Creating stack of both linkedlist will take this much time.
---

**Space Complexity:**
```
O(m+n)
```
We need stack of size m and another stack of size n for both linkedlist.

