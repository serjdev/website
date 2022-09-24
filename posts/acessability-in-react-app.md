---
title: "Acessability in React apps"
metaTitle: "Acessability in React apps"
metaDesc: "How to write accesable apps for all users of a React application"
headerImgId: "_t-l5FFH8VA"
publishedAt: "2022-09-22"
tags:
  - react
  - html
  - front end development
  - accessability
---

We live in a world that is full of illness, unfortunately. But at the same time we want to care for all people, and we want to develop applications and websites that can be accesed by all. So to achieve this goal the accesible design comes in place.

## What we mean accessible design?

Accesible design can be spread in two main ideas:

- Direct acces - when people use your app without asistance.
- Assisted acces - when people use your website with help of an assistant (ex. screen reader)

So acessible desing means your app is developed in a way that ensures it can be accessed by both categories.

## Basic acessibily design rules

- Acessible by keyboard:
  All elements that are interactive in your app should be accesible not only by mouse click, but by keyboard also. The good news are that browsers are doing most of this by default, the problems can come into place when we are doing something like this:

  ```
  <div onClick={handleClick}>Click Me<div>
  ```

  In this case browser is not doing work for us, and this div is not focusable
