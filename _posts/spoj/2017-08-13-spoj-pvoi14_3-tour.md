---
title: '[SPOJ] PVOI14_3 - TOUR '
author: Nicky.Rio
date: 2017-08-13T13:34:00.876Z
thumbnail: /img/uploads/PVOI14_3.jpg
tags:
  - spoj
  - graph
---
# Link gốc
[http://vn.spoj.com/problems/PVOI14_3/](http://vn.spoj.com/problems/PVOI14_3/)
# Đề bài
Sau khi xây dựng xong khu du lịch, thầy Minh bắt tay vào khai thác bằng cách tổ chức các hành trình du lịch. Khu du lịch gồm N địa điểm đánh số từ 1 đến N. Hệ thống giao thông trong vùng gồm M tuyến đường 1 chiều khác nhau, tuyến đường thứ j (j = 1, 2, ..., M) cho phép đi từ địa điểm uj đến địa điểm vj với chi phí đi lại là số nguyên dương cj. Công ty vừa nhận được một hợp đồng yêu cầu xây dựng một hành trình du lịch xuất phát từ địa điểm du lịch bất kỳ và đi thăm một số địa điểm du lịch sau đó quay về địa điểm xuất phát mà chi phí trung bình là nhỏ nhất. Chi phí trung bình được tính bằng tổng chi phí của các tuyến đường mà hành trình đi qua chia cho số tuyến đường trên hành trình.

Yêu cầu: Cho thông tin về hệ thống giao thông, hãy xây dựng một hành trình du lịch với chi phí trung bình là nhỏ nhất.

## Input

* Dòng thứ nhất chứa 2 số nguyên dương N ≤ 103, M≤ 104. 
* Dòng thứ j trong số M dòng tiếp theo chứa 3 số nguyên dương uj, vj, cj cho biết thông tin về tuyến đường thứ j. Giả thết là u\_j khác vj; cj &lt;= 10^9 với j = 1, 2, ..., M.

## Output

Ghi ra giá trị tổng chi phí cho số địa điểm trên hành trình tìm được, làm tròn tới đúng 2 chữ số sau dấu phẩy. Ghi ra xâu NO TOUR nếu không tìm được hành trình du lịch thỏa mãn yêu cầu.

## Example
**Input**
```
6 8
1 2 4 
2 4 1 
4 3 3 
3 1 4 
4 1 1 
3 5 5
5 3 1 
5 6 7
```
**Output**
```
2.00
```

# Solution
[http://viahold.com/2H51](http://viahold.com/2H51)
# Code mẫu
[http://viahold.com/2Gek](http://viahold.com/2Gek)


