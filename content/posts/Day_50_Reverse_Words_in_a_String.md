---
title: "Day 50: Leetcode Daily - Reverse Words in a String"
date: 2023-08-14T00:29:04+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_50_Reverse_Words_in_a_String/Cover.png"
---


## Problem - [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string)

### Level - Medium
---

### Solution

---
**Approach:**
Split string into tokens and then we can reverse it to get the desired result.

---

**Code:**

```cpp
class Solution {
public:
     string reverseWords(string s) {
        if(s == "") return "";
        stringstream ss(s);
        string k;
        vector<string> A;
        while(ss >> k) {
            A.push_back(k);
        }
        if(A.size() == 0) return "";
        reverse(A.begin(), A.end());
        string sol = "";
        sol += A[0];
        for(string i : vector(A.begin() + 1 , A.end())) {
            sol += " " + i;
        }
        return sol;
    }
};

```
---

**Time Complexity:**
```
O(N)
```
Reversing will take O(N) time.

---

**Space Complexity:**
```
O(N)
```
Extra space is used to store same string data.


