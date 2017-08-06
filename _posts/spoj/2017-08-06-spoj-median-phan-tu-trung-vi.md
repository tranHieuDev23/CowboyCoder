---
title: '[SPOJ] MEDIAN - Phần tử trung vị'
author: Accepted Problems
date: 2017-08-06T14:35:06.386Z
thumbnail: '/img/uploads/[spoj]Median.png'
tags:
  - spoj
  - implementation
---
## Link đề gốc:

http://vn.spoj.com/problems/MEDIAN/

## Đề bài:

Cho một dãy số a1, a2, ..., an được sinh ngẫu nhiên như sau:

* a1=seed
* ai=\(ai-1\*mul+add\)%65536

Với mul, add, seed là các số cho trước.

Cho một số k ≤ n. Dãy đã cho có n-k+1 dãy con độ dài k. Hãy tính tổng tất cả các phần tử trung vị \(phần tử nhỏ thứ \(k+1\)\/2\) của n-k+1 dãy con này\).

### Dữ liệu

Dòng đầu tiên chứa số test \(không quá 30\). Mỗi dòng tiếp theo chứa 5 số nguyên seed, mul, add, N, K. \(0 ≤ seed, mul, add ≤ 65535, 1 ≤ N ≤ 250000, 1 ≤ K ≤ 5000, K ≤ N\)

### Kết quả

Với mỗi test in ra số hiệu test \(theo mẫu\) cùng với tổng các trung vị tìm được.

# Ví dụ:

```
Dữ liệu
5
3 1 1 10 3
10 0 13 5 2
4123 2341 1231 7 3
47 5621 1 125000 1700
32321 46543 32552 17 17
```

```
Kết quả
Case #1: 60
Case #2: 49
Case #3: 102186
Case #4: 4040137193
Case #5: 25569


Giải thích
Với test 1, dãy sinh ra là 3, 4, 5, 6, 7, 8, 9, 10, 11, and 12.
Các dãy con là (3, 4, 5), ..., (10, 11, 12).
Các trung vị là 4, 5, ..., 11.
```

# Chú ý:

Muốn hiểu được code trước hết các bạn cần phải nắm rõ được về set. Những kiến thức cơ bản về set các bạn hãy đọc trước trên VNOI : [http://vnoi.info/library/56/4958/](http://vnoi.info/library/56/4958/)

## Solution:

Tham khảo tại: [http://dataurbia.com/18Wu](http://dataurbia.com/18Wu)

## Code:

Tham khảo tại: [http://dataurbia.com/18YJ](http://dataurbia.com/18YJ)

Code đã được nộp và AC trên SPOJ, sử dụng bộ dịch của C++11


