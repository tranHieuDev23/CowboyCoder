---
title: '[SPOJ] VOXOR - XOR dãy số'
author: itsjustwinds
date: 2017-08-11T03:58:50.720Z
thumbnail: /img/uploads/VOXOR_graph.jpg
tags:
  - data-structure
  - tree
  - spoj
---
# Đề: [http://vn.spoj.com/problems/VOXOR/](http://vn.spoj.com/problems/VOXOR/)

Cho dãy A gồm N số nguyên không âm. Ta lần lượt thực hiện Q thao tác trên tập hợp này:

* XOR x: Với mọi i, Ai = Ai xor x
* FIND k: Tìm số lớn thứ k trong dãy A.

Yêu cầu: Thực hiện các truy vấn trên.

## Input

Dòng đầu tiên ghi 2 số N và Q.

Dòng thứ hai ghi N số là giá trị ban đầu của dãy A.

Tiếp theo là Q dòng, mỗi dòng ghi 1 trong 2 loại truy vấn.

## Output

Với mỗi truy vấn loại FIND, in ra kết quả tìm được.

## Giới hạn

Subtask 1 \(25%\)

* N, Q ≤ 5000
* 0 ≤ Ai ≤ 10^9
* 0 ≤ x ≤ 10^9.

Các subtask 2, 3 và 4 tiếp theo đều có

* N ≤ 10^5
* Q ≤ 10^5
* 0 ≤ Ai ≤ 10^9

Subtask 2 \(40%\)

* 0 ≤ x ≤ 100

Subtask 3 \(10%\):

* 0 ≤ x ≤ 10^9
* x luôn có dạng 2k

Subtask 4 \(25%\):

* 0 ≤ x ≤ 10^9

## Ví dụ

```
Input:
4 9
1 2 3 4
FIND 1
FIND 2
FIND 3
FIND 4
XOR 6
FIND 1
FIND 2
FIND 3
FIND 4
```

```
Output:
4
3
2
1
7
5
4
2
```

## Giải thích

Trước truy vấn XOR 6, dãy số là 1 2 3 4.

Sau truy vấn XOR 6, dãy số là 7 4 5 2.

# Hướng dẫn

[http://viahold.com/1Pt2](http://viahold.com/1Pt2)

# code

[http://viahold.com/1Ptx](http://viahold.com/1Ptx)

