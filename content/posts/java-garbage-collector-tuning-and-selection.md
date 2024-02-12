---
title: "Java Garbage Collector Tuning and Selection"
date: 2024-02-10T23:00:11+05:30
tags:
  - Garbage Collection
  - Java
  - Performance & optimization
  - JVM tunning
draft: false
---

## Index

- [x] [Monitoring Garbage collections](#monitoring-garbage-collections)
- [x] [Turning off automated heap allocation sizing](#turning-off-automated-heap-allocation-sizing)
- [x] [Tuning garbage collection](#tuning-garbage-collection)
  - [x] [Old and Young allocation](#old-and-young-allocation)
  - [x] [Survivor space allocation](#survivor-space-allocation)
  - [x] [Generation needed to become old](#generation-needed-to-become-old)
- [x] [Selecting a garbage collector](#selecting-a-garbage-collector)
  - [x] [Types](#types)
- [x] [G1 garbage collector](#g1-garbage-collector)
- [x] [Tuning  the G1 garbage collector](#tuning-the-g1-garbage-collector)
- [x] [String de-duplication](#string-de-duplication)
- [x] [Misc](#misc)
  - [x] [Viewing running java processes and PID](#viewing-running-java-processes-and-pid)
  - [x] [Viewing enabled flag on a process](#viewing-enabled-flag-on-a-process)

---


## Monitoring Garbage collections

We can pass `-verbose:gc` VM argument to monitor the garbage collection. If it shows simple GC then it is **minor garbage collection**.
If it shows GC full then it is **major garbage collection**.

![verbose gc](/images/post_pics/java-garbage-collector-tuning-and-selection/verbose-gc.gif)

## Turning off automated heap allocation sizing

Java's heap `Eden`, `S0`, `S1` and `Old generation` are allocated at runtime and these size can very. To stop this behavior we will have to disable the flag.
We can do so by passing following VM argument.

```sh
-XX:-UseAdaptiveSizePolicy
```

## Tuning garbage collection

- ### Old and Young allocation
We can specify how much be the size of our old generation should be w.r.t young generation. We can use following flag.

```sh
-XX:NewRatio=3
```

This means old generation will be 3 times of young generation.

- ### Survivor space allocation

We can specify size of survivor space using following flag.

```sh
-XX:SurvivorRatio=8
```

This means that survivor space will be 1/8th of the young generation. Since we have 2 survivor spaces, 2/8th will be used for survivor and remaining 6/8th
will be occupied by Eden.


- ### Generation needed to become old

We need to set below mentioned flag, this number value tells that an object
need to survive following number of times in young generation GC process. Once it is completed then it is moved to old generation.

```sh
-XX:MaxTenuringThreshold=3
```

Maximum can be 15 only. JVM automatic decide this number for us by default

---

## Selecting a garbage collector

- ### Types

1. Serial - Pause the application and then run on single thread. `(-XX:+UseSerialGC)`
2. Parallel - Can run parallel `(-XX:+UseParallelGC)` **Default since java 8**
3. Mostly Concurrent - These are of two types

- Concurrent Mark Sweep GC `(-XX:+UseConcMarkSweepGC)` **Default since java 9**
- G1 GC `(-XX:+UseG1GC)` **Default since java 10**


## G1 garbage collector

This is most optimal garbage collector. In this heap is split into multiple spaces and `eden`, `s0`, `s2` and `old`are blocks are distributed randomly. When GC is performed on `eden` and objects are surviving then it mark that particular block as `old` and allocate new memory block to `eden`.


## Tuning  the G1 garbage collector

- **Important flags**
  
1. `-XX:ConcGCThreads=n`
It tells the number of thread to be used by GC to cleanup space in young generation.
2. `-XX: InitiatingHeapOccupancyPercent=n`
G1 run GC process when eden is at least 45% full and same applies to other spaces as well. We can change the number by using this flag.

## String de-duplication

This is only available in G1. We will have to use following flag.

```sh
-XX:UseStringDeDuplication
```

When we have so many string duplicates inside the heap then during GC, G1 will compare the string hash and it will change the reference to single string and rest will be garbage collected. This is helpful when we have so many string duplicates.

---

## Misc

- #### Viewing running java processes and PID

We can use `JPS` command in terminal to check java running processes and PID.

- #### Viewing enabled flag on a process

We can use following command to check if flag is enabled or not.

```sh
jinfo -flag UseAdaptiveSizePolicy <PID>
```