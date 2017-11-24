---
title: '[SPOJ] CHAIN - Strange Food Chain'
author: houtaru
date: 2017-08-03T14:22:37.298Z
thumbnail: '/img/uploads/[spoj]-chain.graph.jpg'
tags:
  - spoj
  - dsu
  - data-structure
---
# Link bài gốc : [http://www.vnoi.info/problems/show/CHAIN/](http://www.vnoi.info/problems/show/CHAIN/)

# Đề bài :

Cho 3 loại động vật A, B, C. A ăn B, B ăn C, C ăn A.

Có n con vật, mỗi con là 1 trong 3 loại trên.
 
Có 2 thông tin :
* 1 x y : x, y chung 1 loại
* 2 x y : x ăn y

Các thông tin có thể đúng hoặc sai. Thông tin bị sai khi là 1 trong các trường hợp sau:
- x hoặc y > n
- x có thể ăn x
- thông tin này xung đột với các thông tin đúng khác.

## Input :
- Dòng đầu tiên là t - số testcase
- t dòng tiếp theo : gồm n, k - số loại động vật, số thông tin. k dòng tiếp theo là 3 số D x, y (1 <= D <= 2) là các thông tin.

## Output : 
Gồm t dòng, mỗi dòng là số thông tin bị sai.

# Solution : [http://simizer.com/vNo](http://simizer.com/vNo) 

# Code : [http://simizer.com/vYb](http://simizer.com/vYb)


