---
title: '[SPOJ] CUTSEQS - Cắt dãy'
author: Nicky.Rio
date: 2017-07-31T08:18:31.613Z
thumbnail: /img/uploads/SPOJ.png
tags:
  - dp
  - stack
  - two-pointers
---
# Link đề bài: [http://vn.spoj.com/problems/CUTSEQS/](http://vn.spoj.com/problems/CUTSEQS/)


# Đề bài :
Cho số nguyên N và một dãy số nguyên a1, a2, …, aN. Nhiệm vụ của bạn là phải cắt dãy số trên thành một số dãy số \(giữ nguyên thứ tự\) thỏa mãn:

Tổng của mỗi dãy số không lớn hơn số nguyên M.

Tổng của các số lớn nhất trong các dãy trên là nhỏ nhất.

### Input

Dòng đầu gồm 2 số nguyên N và M.

Dòng thứ hai gồm N số nguyên của dãy a1, a2, …, aN.

### Output

Gồm một số duy nhất là tổng của các số lớn nhất trong các dãy số trên. Nếu không có cách cắt nào thỏa mãn hai điều kiện trên, in ra -1.

###Example

```
Input:
8 17
2 2 2 8 1 8 2 1

Output:
12

Giải thích: Cắt thành 3 dãy 2 2 2, 8 1 8, 2 1

Giới hạn:
1 ≤ N ≤ 100000.
0 ≤ ai ≤ 106.
M < 263.
```


Solution :[Here]()

Code mẫu: [Here](http://simizer.com/64K)
