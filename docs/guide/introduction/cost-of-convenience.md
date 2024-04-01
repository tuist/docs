---
title: The cost of convenience
---

# The cost of convenience

Before continuing, let's take a moment to consider the cost of convenience in [Xcode](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://developer.apple.com/xcode/&ved=2ahUKEwik55Xo35-FAxVqxzgGHZAZCz4QFnoECAYQAQ&usg=AOvVaw28WTg1BlCGAf937pcwXMip).

Designing a code editor that the spectrum **from small to large-scale projects can use** is a challenging task. 
Many tools approach the problem by layering their solution and providing extensibility. The bottom-most layer is very low-level and close to the underlying build system, and the top-most layer is a high-level abstraction that's convenient to use but less flexible.
By doing so, they make the simple things easy, and everything else possible.

However,
**[Apple](https://www.apple.com) decided to take a different approach with Xcode**.
The reason is unknown, but it's likely that optimizing for the challenges of large-scale projects has never been their goal.
They overinvested in convenience for small projects,
provided little flexibility,
and strongly coupled the tools with the underlying build system.
To achieve the convenience, they provide sensible defaults, which you can easily replace,
and added a lot of implicit build-time-resolved behaviors that are the culprit of many issues at scale.

## Explicitness and scale

When working at scale, **explicitness is key**.
It allows the build system to analyze and understand the project structure and dependencies ahead of time,
and perform optimizations that would be impossible otherwise.
The same explicitness is also key in ensuring that editor features such as [SwiftUI previews](https://developer.apple.com/documentation/swiftui/previews-in-xcode) or [Swift Macros](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/macros/) work reliably and predictably.
Because Xcode and Xcode projects embraced implicitness as a valid design choice to achieve convenience,
a principle that the Swift Package Manager has inherited,
the difficulties of using Xcode are also present in the Swift Package Manager.

> [!INFO] THE ROLE OF TUIST
> We could summarize Tuist's role as a tool that prevents implicitly-defined projects and leverages explicitness to provide a better developer experience (e.g. validations, optimizations). Tools like [Bazel](https://bazel.build) take it further by bringing it down to the build system level.

This is an issue that's barely discussed in the community, but it's a significant one.
While working on Tuist,
we've noticed many organizations and developers thinking that the current challenges they face will be addressed by the [Swift Package Manager](https://www.swift.org/documentation/package-manager/),
but what they don't realize is that because it's building on the same principles,
even though it mitigates the so well-known Git conflicts,
they degrade the developer experience in other areas and continue to make the projects non-optimizable.

In the following sections, we'll discuss some real examples of how implicitness affects the developer experience and the project's health. The list is not exhaustive, but it should give you a good idea of the challenges that you might face when working with Xcode projects or Swift Packages.

### Shared built products directory

Xcode 

### Find implicit dependencies in schemes

### SwiftUI Previews and static libraries/frameworks

### Mergeable libraries

### Automatic static or dynamic resolution

<!-- Along with explicitness, functional principles like immutability and purity are also important. -->

<!-- ## Implicitness -->

<!-- Xcode is a powerful tool that offers a wide range of features, but it's not without its drawbacks. The complexity of Xcode projects can lead to merge conflicts, slow build times, and a lack of flexibility in project structure. This is where Tuist comes in. -->