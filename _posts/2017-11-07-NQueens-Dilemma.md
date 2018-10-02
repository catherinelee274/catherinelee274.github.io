---
layout: post
title: "The NQueens Dilemma"
date: 2017-11-07
published: true
---
The first Computer Science course I am taking in college is CMPS12B, or Introduction to Data Structures. The majority of our grade is based on our programming assignments, most of which are based on the NQueens problem.

The NQueens problem basically asks "if given an n x n chessboard, can you situate n queens such that none attack one another?" 

Our first assignment was slightly modified. We were given the placement of the first queen and based on that, we were asked to find if there was a solution with the initial placement. 

I understood the outline of the assignment. Use recursion to call n-1 on the number of queens that remain to be placed, but the biggest challenge of mine was the backtracking algorithm. If a queen was not correct, how would you remove it, and try another spot? 

The tricky part with recursion is that, especially in a multifaceted project like this one, there are many little details that one needs to pay attention to, on top of recursion. It is especially pivotal to be able to know how to debug. With the NQueens problem, I learned that box tracing helps with keeping track of all the recursive calls. For example, if after a recursive call, there is another method call, a box trace includes that, because after each recursive call is "done", it goes back up in reverse order from the call. 

Some programming assignments don't require convoluted and complex structures. I could've solved this entire problem with just a 2D array and recursion. An arrayList only complicated things and made debugging more of a pain. Like with FizzBuzz, sometimes you need to do things the brutal way.

Also, PLAN before you code. I treated coding like I did writing (diving right in without a plan) which explains why I am bad at both. Okay, perhaps not bad, but they are subject areas with which I need much improvement.

