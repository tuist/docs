---
title: Editing
---

# Editing

Unlike traditional Xcode projects or Swift Packages,
where changes are done through Xcode's UI,
Tuist-managed projects are defined in Swift code contained in **manifest files**.
If you're familiar with Swift Packages and the `Package.swift` file,
the approach is very similar.

You could edit these files using any text editor,
but we recommend to use Tuist-provided workflow for that,
`tuist edit`.
The workflow creates an Xcode project that contains all manifest files and allows you to edit and compile them.
Thanks to using Xcode,
you get all the benefits of **code completion, syntax highlighting, and error checking**.
