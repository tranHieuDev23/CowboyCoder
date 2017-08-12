---
title: '[SPOJ] QTREE3 - Query on a tree again!'
author: CVHvn
date: 2017-08-12T06:26:03.120Z
thumbnail: '/img/uploads/[SPOJ]QTREE3-graph.png'
tags:
  - dfs
  - spoj
  - heavy-light-decomposition
  - data-structure
---
# Link đề bài : [http://vn.spoj.com/problems/QTREE3/](http://vn.spoj.com/problems/QTREE3/)

# Đề bài:

Cho một cây \(đồ thị vô hướng phi chu trình\) có N nút. Các nút của cây được đánh số từ 1 đến N. Ban đầu, mỗi nút đều có màu trắng.

Bạn phải thực hiện các thao tác có dạng sau:

* **0 i**: đổi màu nút thứ i \(từ đen thành trắng, hoặc từ trắng thành đen\)
* **1 v**: tìm chỉ số của nút đen đầu tiên trên đường đi từ nút 1 đến nút v. Nếu không tồn tại, hãy trả về -1.

## Input :

* Dòng thứ nhất gồm hai số nguyên **N** và **Q**.
* N-1 dòng sau, mỗi dòng gồm hai số nguyên **a b** mô tả một cạnh nối giữa nút **a** và nút **b**.
* Q dòng sau chứa các thao tác dạng **"0 i"** hoặc **"1 v"** \(1 ≤ i, v ≤ N\).

## Output :
Với mỗi thao tác dạng "**1 v**", in ra một số nguyên là kết quả.

## Giới hạn :
Có 12 test:
* Trong 1\/3 số test, N=5000, Q=400000.
* Trong 1\/3 số test tiếp theo, N=10000, Q=300000.
* Trong 1\/3 số test tiếp theo, N=100000, Q=100000.

# Solution: 

[http://viahold.com/1mJA](http://viahold.com/1mJA)
# Code: 

[http://viahold.com/1mJm](http://viahold.com/1mJm)

