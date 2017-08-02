---
title: '[SPOJ] - NETACCEL - Tăng tốc mạng máy tính'
author: houtaru
date: 2017-08-02T06:12:16.899Z
thumbnail: /img/uploads/netaccel.jpg
tags:
  - spoj
  - dijkstra
---
## Link bài gốc : [http://vn.spoj.com/problems/NETACCEL/](http://vn.spoj.com/problems/NETACCEL/)
## Đề bài :
Cho mạng máy tính gồm N máy và M liên kết hai chiều giữa các máy. Các máy được đánh số từ 1 đến N. Máy của Bờm là máy 1 còn máy của Cuội là máy N. Mỗi đường nối cần tốn một giá trị thời gian khác nhau để dữ liệu truyền qua. Tốc độ kết nối giữa hai máy là độ dài đường truyền dữ liệu ngắn nhất giữa hai máy đó.

Tốc độ kết nối của mạng khá chậm khiến Bờm và Cuội không thể chơi Dota được, do đó Bờm quyết định mua K thiết bị tăng tốc mạng. Thiết bị tăng tốc mạng được gắn vào các đường truyền dữ liệu giữa hai máy. Mỗi thiết bị sẽ làm giảm thời gian truyền dữ liệu của đường truyền đi một nửa.

Hãy giúp Bờm đặt các thiết bị tăng tốc sao cho tốc độ kết nối giữa máy của Bờm và Cuội là nhanh nhất có thể để hai bạn có thể chơi Dota mà không bị lag!

# Dữ liệu
Dòng đầu chứa 3 số N, M, K.

M dòng tiếp theo, mỗi dòng chứa 3 số x, y, c mô tả một đường truyền dữ liệu: x, y là số hiệu của hai máy tính, còn c là thời gian truyền dữ liệu.

# Giới hạn
1 <= N <= 1000
1 <= M <= 100,000
1 <= K <= 10
1 <= c <= 1,000,000
# Kết quả
In ra 1 số duy nhất là tốc độ kết nối nhanh nhất có thể sau khi đã lắp đặt các thiết bị tăng tốc, làm tròn đến 2 chữ số thập phân.

# Solution : [http://simizer.com/qKV](http://simizer.com/qKV)
 
# Code : [http://simizer.com/qJk](http://simizer.com/qJk)
