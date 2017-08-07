---
title: '[SPOJ] KQUERY2 - K-query II'
author: CVHvn
date: 2017-08-07T06:36:54.121Z
thumbnail: '/img/uploads/[SPOJ]KQUERY2-graph.png'
tags:
  - SPOJ
  - data-structure
  - sqrt-decomposition
---
# Link đề bài: [http://vn.spoj.com/problems/KQUERY2/](http://vn.spoj.com/problems/KQUERY2/)

# Đề bài:
Cho một dãy n phần tử a1, a2, ..., an và một số các truy vấn-k. Ngoài ra còn có một số thao tác cập nhật.
Một thao tác cập nhật là một cặp (i, v) nghĩa là ai cần được gán giá trị v.
Một truy vấn-k là một bộ ba (i, j, k) (1 ≤ i ≤ j ≤ n).
Với mỗi truy vấn-k (i, j, k), bạn phải trả về số phần tử lớn hơn k nằm trong dãy con ai, ai+1, ..., aj.

## Input:
Dòng 1: n (1 ≤ n ≤ 30000).
Dòng 2: n số a1, a2, ..., an (1 ≤ ai ≤ 10^4).
Dòng 3: q (1 ≤ q ≤ 200000), số truy vấn-k.
q dòng tiếp theo, số đầu tiên trong mỗi dòng là 0 hoặc 1. Số 0 theo sau bởi 2 số i và v (1 ≤ i ≤ n, 1 ≤ v ≤ 10^4) cho biết một thao tác cập nhật. Số 1 theo sau bởi 3 số nguyên i, j, k (1 ≤ i ≤ j ≤ n, 1 ≤ k ≤ 10^4) cho biết một truy vấn-k.

## Output:
Với mỗi truy vấn-k (i, j, k), in ra số phần tử lớn hơn k trong dãy con ai, ai+1, ..., aj trên một dòng.

# Solution: [http://viahold.com/4Ne](http://viahold.com/4Ne)
# Code: [http://viahold.com/4C9](http://viahold.com/4C9)

