---
title: "Day 3: Playing Around With Godot Gaming Engine"
date: 2023-05-27T20:14:46+05:30
draft: false
tags:
    -   Godot - Gaming Engine
    -   Playground
image : "/images/post_pics/Day_3_Playing_Around_With_Godot_Gaming_Engine/Cover.png"
---

Few days back, i came to know about Godot gaming engine. So this weekend i decided to go in the docs and learn about it.
I had never worked with game development before but after reading the docs and trying to build game in my personal machine by following tutorials, i can say it is pretty easy to use and fun to build games. I will try to summarize my learning from godot doc website in here and also mentioned the resources that i had gone through while learning.

[Godot - Website Link](https://godotengine.org/)

[Godot - Documentation link](https://docs.godotengine.org/en/stable/)

## My Learnings -
- [My Learnings -](#my-learnings--)
  - [Introduction](#introduction)
  - [Nodes \& Scenes](#nodes--scenes)
  - [Signals](#signals)
  - [Editor Overview](#editor-overview)
  - [Listening to player input](#listening-to-player-input)
  - [Godot 2D game tutorial](#godot-2d-game-tutorial)
  - [Nodes/Component that i used](#nodescomponent-that-i-used)
  - [Useful resources that i found.](#useful-resources-that-i-found)

### Introduction

I started with [introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/index.html) section of Godot. Before learning Godot we need to have good knowledge of programming, so i was in good position to learn. 
Godot provide official support of GDScript and C#. I had never worked with C# so i decided to look at GDScript basic syntax.
I had gone through the [syntax quickly](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html) and i understand most of the stuff mentioned in it and later i get to know more once i proceed with the docs.


### Nodes & Scenes
The the next thing i learned about Scenes and Nodes in Godot. In simple terms Scenes are build by combining multiple nodes.
And Nodes can consist of multiple other nodes or elements such as Sprite, Animation, Collision etc.

Nodes are the smallest component of game, By Combining nodes we makes Scene and We can combine multiple Scene to create Scene Tree.

### Signals

Now, One important concept i learned was [**Signals**](https://docs.godotengine.org/en/stable/getting_started/introduction/key_concepts_overview.html#signals). I think it is very amazing feature of Godot. In Godot every Nodes can emit a signal. This signal can be anything or we can define our own custom signals. Then other nodes can listen to those signals and take actions based on that. It is based on [Observer pattern](https://gameprogrammingpatterns.com/observer.html). One more useful website i found is [Design patterns for gamer](https://gameprogrammingpatterns.com/). I used this pattern already in my other projects so i was familiar with it.

### Editor Overview

![](/images/post_pics/Day_3_Playing_Around_With_Godot_Gaming_Engine/1.png)

### Listening to player input

In Godot, Listening to player Input is very easy to configure, This can be done by setting input map under
> `Project > Project Setting > Input Map > Add new action`

Then we can use this map to perform any action in our game.

![](/images/post_pics/Day_3_Playing_Around_With_Godot_Gaming_Engine/2.png)

### Godot 2D game tutorial

After learning the basics i started with the actual game [tutorial](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html). It was an interesting part, It clearly explain different concept that is mostly used in a normal game. I get to learn about different nodes and techniques to build the game.
Here are some nodes that i used while following the tutorial.

### Nodes/Component that i used
- [Timer]() - This is used to start the timer, it emit timeout signal and other's too.
- [Marker2D]() - This is used to set the starting position of player.
- [CanvesLayer(Hud)]() - This is used to create button, score menu, label etc.
- [Path2D]() - This is used to define path.
- [PathFollow2D]() - This is used to follow the defined path.
- [AnimatedSprite2D]() - This is used to play animation of our character.
- [CollisionShape2D]() - This is used to detect Collision with the body.
- [VisibleOnScreenNotifier2D]() - Used to detect when some object enter or leave screen. For notify signal.
- [RigitBody2D]() - Contains object properties.
- [Area2D]() - Used for player to detect if some rigid body enter into area(aka collision).

finally i was able to make this game on my own by following Godot tutorial.

![game](/images/post_pics/Day_3_Playing_Around_With_Godot_Gaming_Engine/3.png)

### Useful resources that i found.

I found this [link](https://docs.godotengine.org/en/stable/community/tutorials.html#doc-community-tutorials) from same godot website. Which contains youtube channels list which is very helpful and contain very informative videos. These channel i liked the most.

[Game Development Center](https://www.youtube.com/c/GameDevelopmentCenter) - This channel contains information about Godot as well as multiplayer gaming which use WebRTC and Websockets.

[Emi](https://www.youtube.com/@emi_cpl/videos) - Dialogic




