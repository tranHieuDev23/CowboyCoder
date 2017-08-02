---
title: '[SPOJ] VOTREE - Cây'
author: La Hoàng Phong
date: 2017-08-02T12:13:13.216Z
thumbnail: /img/uploads/VOTREE_Image.jpg
tags:
  - data-structure
---
# Link Bài Gốc : [http://vn.spoj.com/problems/VOTREE/](http://vn.spoj.com/problems/VOTREE/)

# Đề Bài :

Cho cây gồm N đỉnh, có gốc ở đỉnh 1. (N ≤ 70,000). Bạn cần trả lời Q truy vấn, mỗi truy vấn gồm 2 số u, v. Bạn cần tìm đỉnh xa gốc nhất, mà là tổ tiên của tất cả các đỉnh u, u\+1, ..., v.

## Input

* Dòng 1: Số nguyên dương N và Q.
* N-1 dòng tiếp theo, mỗi dòng chứa 2 số nguyên dương u và v, thể hiện có 1 cạnh nối giữa 2 đỉnh u và v. (u ≠ v, 1 ≤ u, v ≤ N).
* Q dòng tiếp theo, mỗi dòng gồm 2 số nguyên dương u và v (1 ≤ u ≤ v ≤ N), thể hiện 1 truy vấn.

## Output

Với mỗi truy vấn, in ra 1 dòng duy nhất là đáp số của truy vấn.

## Giới hạn

* Trong 30% số test, 1 ≤ N, Q ≤ 1000.
* Trong tất cả các test, 1 ≤ N, Q ≤ 70,000.
* Thời gian chạy: 1s. Thời gian chạy cho test ví dụ: 0.5s

## Chú ý:

* Trong thời gian thi, bài của bạn chỉ được chấm với test đề bài.
* Nếu bài của bạn chạy đúng trên máy mình, nhưng sai khi nộp lên SPOJ, bạn có thể kiểm tra ở [ideone](https://ideone.com/). Chú ý khi submit lên ideone, để chế độ Secret để người khác không đọc được code của bạn.

## Ví dụ

    Input:
    5 3
    1 2
    2 3
    3 4
    3 5
    2 5
    1 3
    4 5
    
    Output:
    2
    1
    3

## Giải Thích Ví Dụ :

![null](/img/uploads/VOTREE_Graph.png)

* Truy vấn 1: Tìm tổ tiên chung gần nhất của các đỉnh được đánh số từ 2 đến 5, ở đây có thể thấy 2 là tổ tiên chung gần nhất của các đỉnh 2,3,4,5.
* Truy vấn 2: Tìm tổ tiên chung gần nhất của các đỉnh được đánh số từ 1 đến 3, ở đây có thể thấy 1 là tổ tiên chung gần nhất của các đỉnh 1,2,3.
* Truy vấn 3: Tìm tổ tiên chung gần nhất của các đỉnh được đánh số từ 4 đến 5, ở đây có thể thấy 3 là tổ tiên chung gần nhất của các đỉnh 4,5.

# Solution:

Tham khảo tại : [http://simizer.com/w59](http://simizer.com/w59)

# Code:

Tham khảo tại : [http://simizer.com/w8B](http://simizer.com/w8B)
