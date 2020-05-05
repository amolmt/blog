---
title: "Using firebase to implement view count"
date: "2020-04-24"
og:
  description: "A quick introduction to ReactJS useState method"
  image: "https://amolt.me/og/usestate.png"
author:
  twitter: "amoltangade"
  name: "Amol Tangade"
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is a draft.</p></blockquote>

Recently I came across this problem where I wanted to implement view count for each of my blog posts. So how does one implemnt this? I had few options:

- By using local storage
- By using some sort of database

Later I realised that the first option wasn't feasible beacause I wanted to persist the number of views by each user for a perticular post. The second option was logical, initial view count for a post will be zero and whenever a user opens that post the count will be increased.
