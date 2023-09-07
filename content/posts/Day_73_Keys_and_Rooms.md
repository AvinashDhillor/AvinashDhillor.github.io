---
title: "Day 73: Leetcode Daily - Keys and Rooms"
date: 2023-09-07T17:37:51+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_73_Keys_and_Rooms/Cover.png"
---


## Problem - [841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Solution {
    
    public void util(List<List<Integer>> list, boolean[] visited, int src) {
        visited[src] = true;
        
        for(Integer i : list.get(src)) {
            if(!visited[i]) {
                util(list, visited, i);            
            }
        }
    }
    
    public boolean visited(List<List<Integer>> list) {
        boolean[] visited = new boolean[list.size()];
        util(list, visited, 0);
        
        for(int i = 1; i < list.size(); i++) {
            if(!visited[i]) return false;
        }
        
        return true;
    }
    
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        return visited(rooms);
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


