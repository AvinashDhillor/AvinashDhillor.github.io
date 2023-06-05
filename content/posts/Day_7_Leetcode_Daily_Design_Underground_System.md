---
title: "Day 7: LeetCode Daily - Design Underground System"
date: 2023-05-31T21:37:40+05:30
draft: false
tags:
    - Hashing
    - Medium
image: "/images/post_pics/Day_7_Leetcode_Daily_Design_Underground_System/Cover.png"
---


## Problem - [1396. Design Underground System](https://leetcode.com/problems/design-underground-system/)

### Level - Medium
---

### Solution

---
**Approach:**

This problem can be solved by proper using of HashMaps. As shown in image above. We have to maintain two HashMap. One is to store uncompleted journey and once user reach the destination then we will remove it from uncompleted journey map(Hashmap1) and add into second hashmap with some modification. Or simple we just remove the element from hashmap1 and then add the time difference in second map and increment the count. That will help us to calculate average.

---

**Code:**

```java
    private class One {
        String stationname;
        int t;

        public One(String stationname, int t) {
            this.stationname = stationname;
            this.t = t;
        }

        @Override
        public String toString() {
            return "One [stationname=" + stationname + ", t=" + t + "]";
        }
    }

    private class Two {
        int sum = 0;
        int count = 0;

        @Override
        public String toString() {
            return "Two [sum=" + sum + ", count=" + count + "]";
        }
    }

    Map<Integer, One> set = new HashMap<>();
    Map<String, Two> two = new HashMap<>();

    public void checkIn(int id, String stationName, int t) {
        set.put(id, new One(stationName, t));
    }

    private String genName(String a, String b) {
        String[] tmp = { a, b };
        return String.join("+", tmp);
    }

    public void checkOut(int id, String stationName, int t) {
        One one = set.get(id);
        set.remove(id);
        String name = genName(one.stationname, stationName);
        two.putIfAbsent(name, new Two());

        Two tmp = two.get(name);
        tmp.sum += t - one.t;
        tmp.count += 1;

        two.put(name, tmp);
    }

    public double getAverageTime(String startStation, String endStation) {
        String name = genName(startStation, endStation);
        Two tw = two.get(name);
        return (double) tw.sum / (double) tw.count;
    }
```
---

**Time Complexity:**
```
O(1)
```
Since we are using Hashmap. Time complexity will be O(1) for all operations.

---

**Space Complexity:**
```
O(N)
```
Here N is the sum of CheckIn + CheckOut.
