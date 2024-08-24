---
title: 'GC and Performance'
description: 'A look at the impact of garbage collection and memory safety on runtime performance.'
pubDate: 'August 25 2024'
---

I have wondered for some time what makes languages like Java and C# generally slower than languages like say, C/C++ and Rust. The usual answer to this question is garbage collection.

For those who don't know, garbage collection, or GC for short, is the process by which program memory is automatically managed by a language runtime. GC is the reason why programmers don't have to deal with manually freeing up memory after use when working with languages like Java, C#, JavaScript or Python.

While it's great for developer experience, GC adds overhead to the program runtime. Each time it runs, it has to pause the program execution to find and reclaim all the unused memory.

Also:

- It can pollute the CPU cache, slowing down code that runs later.
- Some GC implementations can cause memory fragmentation which can lead to increased cache misses.
- GC techniques like reference counting introduce overhead to object allocation and referencing.

However, blaming the GC alone is over-simplistic and doesn't give us the full picture.

## Memory Safety

A common theme among garbage-collected languages is that they all attempt to be memory-safe languages as well, which means they usually have:

- Runtime checks on memory access (array bounds checking, exceptions on null memory access instead of segfault).
- Limited control over memory layout and locality of reference.
- Safe type assertions.
- No pointer arithmetic.

These characteristics have performance penalties that can add up. Languages like Rust and [Inko](https://inko-lang.org), which rely on rules baked into their language semantics for memory management and safety, solve a lot of these issues.

Besides, we're always discovering new [approaches](https://verdagon.dev/grimoire/grimoire) to memory safety that provide superior performance compared to conventional GC without making the learning curve steeper.
