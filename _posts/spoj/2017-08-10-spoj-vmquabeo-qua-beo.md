---
title: '[SPOJ] VMQUABEO - Quá béo'
author: Nguyễn Minh Quân
date: 2017-08-10T14:21:40.836Z
thumbnail: /img/uploads/VMQUABEO.jpg
tags:
  - spoj
  - two-pointer
  - rmq
  - data-structure
---
# Link đề gốc: [http://vnoi.info/problems/show/VMQUABEO/](http://vnoi.info/problems/show/VMQUABEO/)

# Đề bài
Cân nặng đã ở mức đáng báo động, admin K quyết định tập chạy để giảm cân. Khu vực admin K sống có một con đường dài, điểm đầu của con đường là điểm 0, điểm cuối của con đường là điểm N-1. Các điểm cách đều nhau một khoảng 1 đơn vị độ dài; điểm thứ i có độ cao H\[i\]. Admin K muốn chọn ra một đoạn đường để tập chạy sao cho:

* Đoạn đường có chiều dài ít nhất là L.
* Chênh lệch độ cao giữa điểm cao nhất và điểm thấp nhất trên đoạn đường không vượt quá D.

Bạn hãy giúp xác định xem có bao nhiêu đoạn đường thỏa mãn.

## Input

* Dòng đầu tiên ghi ba số N L D.
* Dòng thứ hai ghi N số H\[i\] là độ cao của điểm thứ i.

## Output

In ra số đoạn đường thỏa mãn.

## Giới hạn

* 1 &lt;= L &lt; N &lt;= 10^6
* 0 &lt;= D &lt;= 10000
* 1 &lt;= H\[i\] &lt;= 10000
* Trong 15% số test, N &lt;= 500
* Trong 20% số test tiếp theo, N &lt;= 10^4
* Trong 25% số test tiếp theo, N &lt;= 10^5

# Solution

[Here](http://viahold.com/1DnO)

# Code mẫu

[Here](http://viahold.com/1Do1)


