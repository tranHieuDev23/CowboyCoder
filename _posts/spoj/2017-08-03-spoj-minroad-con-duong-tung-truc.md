---
title: '[SPOJ] MINROAD - Con đường Tùng Trúc'
author: Joker
date: 2017-08-03T03:39:29.678Z
thumbnail: '/img/uploads/[spoj]minroad.jpg'
tags:
  - spoj
---
# Link đề bài gốc:

[http://vn.spoj.com/problems/MINROAD/](http://vn.spoj.com/problems/MINROAD/)

# Đề bài:

Địa điểm du lịch Dailai nổi tiếng với con đường Tùng-Trúc. Đó là một con đường dài và thẳng, dọc bên đường người ta trồng rất nhiều cây tùng và cây trúc. Với mục đích tạo điểm nhấn cho con đường, Ban quản lý khu du lịch muốn chọn một đoạn đường mà dọc theo nó có ít nhất a cây tùng và có ít nhất b cây trúc để trang trí. Sau khi khảo sát, Ban quản lý ghi nhận được vị trí của từng cây tùng và cây trúc. Trên con đường có tất cả n cây, không có hai cây nào ở cùng một vị trí. Cây thứ i ở ị trí có khoảng cách đến vị trí bắt đầu của con đường là d\_i \(i = 1, 2, ..., n\). Với kinh phí có hạn, Ban quản lý muốn chọn một đoạn đường thỏa mãn điều kiện đã nêu với độ dài là ngắn nhất.

## Yêu cầu

Cho a, b và vị trí của n cây. Hãy tìm đoạn đường có độ dài ngắn nhất mà dọc theo đoạn đường đó có ít nhất a cây tùng và b cây trúc.

## Input

* Dòng đầu chứa 3 số nguyên dương n, a, b \(a + b &lt;= n\)
* Dòng thứ i trong n dòng tiếp theo mỗi dòng chứa hai số nguyên dương d\_i \(d\_i &lt;= 10^9\) trong đó d\_i là khoảng cách của cây tính từ vị trí bắt đầu của con đường, k\_i = 1 nếu cây thứ i là cây tùng, k\_i = 2 nếu là cây trúc.
* Các số trên cùng một dòng được ghi cách nhau ít nhất một dấu cách.

## Output

Ghi ra một số nguyên là độ dài đoạn đường ngắn nhất tìm được, quy ước ghi số -1 nếu không tồn tại đoạn đường nào thỏa mãn điều kiện đặt ra.

# Ví dụ: 

## Input:

```
7 2 2
20 2
30 1
25 1
35 1
60 2
65 2
10 1
```

## Output:

``` 
35
```
# Solution: 

Tham khảo tại: [http://simizer.com/18oC](http://simizer.com/18oC) 

# Code: 

Tham khảo tại: [http://simizer.com/18jF](http://simizer.com/18jF)




