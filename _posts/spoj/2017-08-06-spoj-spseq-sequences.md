---
title: '[SPOJ] SPSEQ - Sequences'
author: CVHvn
date: 2017-08-05T17:21:43.790Z
thumbnail: '/img/uploads/[SPOJ]SPSEQ-graph.png'
tags:
  - spoj
  - Dp
  - data-structure
  - binary-search
---
# Link đề bài: [http://vnoi.info/problems/show/SPSEQ/](http://vnoi.info/problems/show/SPSEQ/)

# Đề bài:

W. là 1 dãy các số nguyên dương. Nó có các đặc điểm sau:

* Độ dài của dãy là 1 số lẻ : L = 2*N + 1
* N + 1 số nguyên đầu tiên của dãy tạo thành 1 dãy tăng
* N + 1 số nguyên cuối của dãy tạo thành 1 dãy giảm
* Không có 2 số nguyên nào cạnh nhau trong dãy có giá trị bằng nhau

Ví dụ: 1, 2, 3, 4, 5, 4, 3, 2, 1 là 1 dãy W. độ dài 9. Tuy nhiên, dãy 1, 2, 3, 4, 5, 4, 3, 2, 2 không là 1 dãy W.

## Yêu cầu: Trong các dãy con của dãy số cho trước, tìm dãy W. có độ dài dài nhất.

## Input:
Dòng 1: số nguyên dương N (N <= 100000), độ dài dãy số.
Dòng 2: N số nguyên dương ai(ai <= 10^9).

## Output

1 số nguyên dương duy nhất là độ dài dãy W. dài nhất.

## Example

```
Input:
10
1 2 3 4 5 4 3 2 1 10

Output:
9


Input:
19
1 2 3 2 1 2 3 4 3 2 1 5 4 1 2 3 2 2 1

Output:
9
```

# Solution: 
[http://dataurbia.com/pXd](http://dataurbia.com/pXd)

# Code: 
[http://dataurbia.com/pKp](http://dataurbia.com/pKp)
