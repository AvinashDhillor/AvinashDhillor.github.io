---
title: "Java Garbage Collection"
date: 2024-02-09T18:44:11+05:30
draft: true
tags:
  - Garbage Collection
  - Java
  - Performance & optimization
  - JVM tunning
---

## Garbage Collection

Garbage collection in Java is a mechanism that automatically manages the memory used by a Java program (process to free up memory). Developers generally don't need to explicitly free memory or manage the garbage collection process, as it is handled automatically by the JVM.

In this process **memory is made available by deleting the objects which no longer can be referenced from stack or metaspace**.

> Metaspace - Used to store static objects references.

![Simple Garbage Collection](/images/post_pics/java-garbage-collection/simple-gc.png)

## System.gc()

Calling `System.gc()` in code to suggest the virtual machine to start the Garbage Collections but it may or may not start the garbage collection process immediately.

## Changing size of heap

| Description              | VM Command            | Shortcut | Example |
| ------------------------ | --------------------- | -------- | ------- |
| To set maximum heap size | -XX:MaxHeapSize=n     | -Xmx     | -Xmx10m |
| To set initial heap size | -XX:InitialHeapSize=n | -Xms     | -Xms10m |

## Soft Leaks

When object remain referenced even when it no longer required is example of soft leak. This problem can easily happen in long running java application like servers.

### Visualizing stack & heap memory using VisualVM application.

This is free application that can be downloaded from internet.
![VisualVM](/images/post_pics/java-garbage-collection/visualvm.png)

## Heap Dump

### Generating heap dump

We need to run our application by using below mentioned command. If application stopped working due to memory error it will generate heap dump at that place.

```sh
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=FILE_PATH
```

### Viewing a heap dump
