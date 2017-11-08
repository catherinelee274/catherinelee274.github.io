---
layout: post
title: "The NQueens Dilemma"
date: 2017-11-07
published: true
---
The first Computer Science course I am taking college is CMPS12B, or Introduction to Data Structures. The majority of our grade is based on our programming assignments, most of which are based on the NQueens problem .

The NQueens problem basically asks "if given an n x n chessboard, can you situate n queens such that none attack one another?" 

Our first assignment was slightly modified. We were given the placement of the first queen and based on that, we were asked to find if there was a solution with the initial placement. 

I understood the outline of the assignment. Use recursion to call n-1 on the number of queens that remain to be placed, but the biggest challenge of mine was the backtracking algorithm. If a queen was not correct, how would you remove it, and try another spot? 

