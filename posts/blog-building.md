---
title: "New Blogginings"
subtitle: "The journey of building this blog."
date: "2020-12-27"
---

Initially inspired by [Benedict Neo's](bneo.xyz) website, I decided to embark on my own journey to create my very own website. 

## 1: Breaking the ice
Following [pixegami's tutorial](https://www.youtube.com/watch?v=Hiabp1GY8fA) to understand the basics of Next.js, Tailwind CSS, and create the skeleton of this blog.

![Image of Lamb's inital blog. Each on a new line are the following: a title saying Lamb's Blog, a subheading saying Day 1, a link saying blog-building, and a footer saying Developed by Lamb.](/images/day-1-blog.png)

### Things I learnt:
- Download node, Next.JS and npm on WSL - NOT on Windows! It won't work :<
    Helpful links for setting up your environment:
    - [Set up WSL environment](https://learn.microsoft.com/en-us/windows/wsl/setup/environment#file-storage)
    - [Installing Next.js](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nextjs-on-wsl)
    - [Setting up Node.js on WSL](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)
- Use WSL and do not create your Next.js project in /mnt/c/...

## 2: Static vs Dynamic blogs
```npm run build``` to see which pages are static vs which are rendering at runtime.