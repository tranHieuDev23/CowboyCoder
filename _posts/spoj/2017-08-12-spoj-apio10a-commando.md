---
title: '[SPOJ] APIO10A - Commando'
author: houtaru
date: 2017-08-12T13:59:47.777Z
thumbnail: '/img/uploads/[spoj] APIO10A.jpg'
tags:
  - spoj
  - dp
  - geometry
---
# Link đề bài : [http://www.vnoi.info/problems/show/APIO10A/](http://www.vnoi.info/problems/show/APIO10A/)

# Đề bài :

Cho 1 dãy N số nguyên. Một hàm số bậc 2 : f(x) = a * x ^ 2 + b * x + c. Phân dãy trên thành các đoạn liên tiếp sao cho tổng các hàm f trên các dãy là lớn nhất (giá trị f của 1 dãy là f(x) với x là tổng của dãy đó).

## Input format :

- Dòng đầu là số test case T
- Mỗi test case gồm 3 dòng :
  - Dòng đầu là số nguyên dương N - số phần tử của dãy.
  - Dòng 2 là 3 số nguyên a, b, c.
  - Dòng còn lại gồm n số x1, x2, ..., xn là n phần tử của dãy.

## Output format :

- Mỗi test case gồm 1 dòng, là kết quả của bài toán.

## Giới hạn :

T<=3

n ≤ 1, 000, 000,

−5 ≤ a ≤ −1

|b| ≤ 10, 000, 000

|c| ≤ 10, 000, 000

1 ≤ xi ≤ 100.


```
Input:

3
4 
-1 10 -20 
2 2 3 4 
5
-1 10 -20
1 2 3 4 5
8
-2 4 3
100 12 3 4 5 2 4 2

Output:

9
13
-19884
```

# Solution: [http://viahold.com/1uCj](http://viahold.com/1uCj)

# Code: [http://viahold.com/1tt2](http://viahold.com/1tt2)
