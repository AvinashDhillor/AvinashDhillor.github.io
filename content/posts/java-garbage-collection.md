---
title: "Java Garbage Collection"
date: 2024-02-09T18:44:11+05:30
draft: false
tags:
  - Garbage Collection
  - Java
  - Performance & optimization
  - JVM tunning
image: /images/post_pics/java-garbage-collection/simple-gc.png  
---

## Index
- [x] [Garbage Collection](#garbage-collection)
- [x] [System.gc()](#systemgc)
- [x] [Changing size of Heap](#changing-size-of-heap)
- [x] [Soft Leaks](#soft-leaks)
- [x] [Heap dump](#heap-dump)
  - [x] [Generating heap dump](#generating-heap-dump)
  - [x] [Viewing heap dump](#viewing-a-heap-dump)
- [x] [Generational Garbage Collector](#generational-garbage-collector)
  - [x] [Introduction](#introduction)
  - [x] [Categories of Young Generation](#categories-of-young-generation)
  - [x] [Viewing GC generations in VisualVM](#viewing-gc-generations-in-visualvm)

---

## Garbage Collection

Garbage collection in Java is a mechanism that automatically manages the memory used by a Java program (process to free up memory). Developers generally don't need to explicitly free memory or manage the garbage collection process, as it is handled automatically by the JVM.

In this process **memory is made available by deleting the objects which no longer can be referenced from stack or metaspace**.

> Metaspace - Used to store static objects references.

![Simple Garbage Collection](/images/post_pics/java-garbage-collection/simple-gc.png)

## System.gc()

Calling `System.gc()` in code to suggest the virtual machine to start the Garbage Collections but it may or may not start the garbage collection process immediately.

## Changing size of heap

| Description              | VM Command            | Shortcut | Example Usage |
| ------------------------ | --------------------- | -------- | ------------- |
| To set maximum heap size | -XX:MaxHeapSize=n     | -Xmx     | -Xmx10m       |
| To set initial heap size | -XX:InitialHeapSize=n | -Xms     | -Xms10m       |

## Soft Leaks

When object remain referenced even when it no longer required is example of soft leak. This problem can easily happen in long running java application like servers.

### Visualizing stack & heap memory using VisualVM application.

[VisualVM]() is free application that can be downloaded from internet.

![VisualVM](/images/post_pics/java-garbage-collection/visualvm.png)

## Heap Dump

- ### Generating heap dump

We need to run our application by using below mentioned command. If application stopped working due to memory error it will generate heap dump at that place.

```sh
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=FILE_PATH
```

or it can be generate from VisualVM as well.

![VisualVM](/images/post_pics/java-garbage-collection/visualvm.gif)

- ### Viewing a heap dump

We can view heap dump by using tool [MAT]() (Memory Analyzer tool) by eclipse.

![MAT](/images/post_pics/java-garbage-collection/mat.png)

---

## Generational garbage collector

- ### Introduction

If an object survives in a Garbage Collection process. Then it is most likely to live forever.
To make this process efficient heap is organized in forms of generations.

![Generational GC](/images/post_pics/java-garbage-collection/generational-gc.png)

Heap is divided into two general categories one is young generation and other is old generation. New objects are created inside young generation. The size of young generation is small as compare to old generation. Hence garbage collection in young space takes very less time as compare to the older generation. This process is also called minor garbage collection. Where as if old generation get filled and GC run over old generation objects. This takes few seconds time and also called major garbage collection.

- ### Categories of Young Generation

![Young generation types](/images/post_pics/java-garbage-collection/young-generation-gc.png)


Young generation is further divided into 2 Parts.

- Eden
- S0 (surviver 0)
- S1 (surviver 1)


`Eden` is very small memory space where new objects get created and Garbage collection will run over it only. It will take very less time. The object that survived are then moved to `S0`. If they survived `S0` as well then they are sent to `S1`. Objects are moved between these 3 partitions. If they survive 4-5 cycles then they are moved to old generation.

- ### Viewing GC generations in VisualVM

![Visual GC](/images/post_pics/java-garbage-collection/visualgc.gif)

We can view generation in VisualMV by enabling plugin `Visual GC`. We can monitor different generation as shown.