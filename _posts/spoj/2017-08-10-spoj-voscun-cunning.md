---
title: '[SPOJ] VOSCUN - CUNNING'
author: Nicky.Rio
date: 2017-08-10T15:11:02.062Z
thumbnail: /img/uploads/VOSCUN.png
tags:
  - spoj
  - dp
  - bfs
---
# Link gốc
[http://vnoi.info/problems/show/VOSCUN/](http://vnoi.info/problems/show/VOSCUN/)
# Đề bài
Cho một khối lập phương NxNxN được tạo thành bởi việc xếp nhiều cái lồng lên nhau. Các lồng được đánh số từ (1,1,1) đến (N,N,N). Bên trong mỗi lồng có một con cáo, nó mong muốn được tới lồng (1,1,1). Tuy nhiên, các con cáo này không phải là những con cáo bình thường, đây trở thành vấn đề bạn cần giải quyết.

Mỗi con cáo cần nhảy một số bước nhất định để thoát. Nếu có nhiều đường, chúng luôn đi con đường với số lần nhảy ít nhất. Trong mỗi lần di chuyển con cáo có thể nhảy dọc theo 1 chiều âm hoặc dương trong các trục x, y, z một lượng là lũy thừa của 2 (…, -8, -4, -2, -1, 1, 2, 4, 8,…) và không được nhảy theo kiểu khác.

Một lồng có thể  chứa nhiều cáo  trong một thời điểm. Cáo không thể rời khối lập phương.

Viết chương trính tính T: tổng số bước nhảy cần thiết để toàn bộ cáo đến lồng (1,1,1). Ngoài ra, bạn phải xác định số bước nhảy cần thiết với mỗi con cáo để tới lồng (1,1,1)

## Input

Dòng đầu chứa 2 số nguyên N và K.

K dòng tiếp theo lần lượt chứa 3 số nguyên a, b, c.

## Output

Dòng đầu output in ra số nguyên T, tổng số bước nhảy được thực hiện bởi tất cả các con cáo.

K dòng tiếp theo in ra số bước nhảy được thực hiện bởi con cáo ở lồng (a,b,c) được cho bởi truy vấn thứ K.

## Example
**Input**
```
3 4
2 1 2
2 3 3
1 1 1
3 3 3
```
**Output**
```
54
2
3
0
3
```
**Giải thích**
```
Cho khối lập phương 3x3x3. 
Con cáo ở ô (2,1,2) có thể nhảy tới (1,1,2) và sau đó là (1,1,1). 
Con cáo ở (2,3,3) nhảy tới (1,3,3), (1,1,3) rồi (1,1,1). 
Con cáo ở (1,1,1) ở sẵn vị trí. 
Con cáo ở (3,3,3) nhảy tới (1,3,3), (1,1,3) rồi (1,1,1). 
Có thể có một số cách dịch chuyển khác với số lượt nhảy tương tự.
Tổng số bước nhảy của 27 con cáo là 54.
Từ 8 đến 1 có thể đi như sau: 8 -> 9 -> 1
```
# Solution
[http://viahold.com/1Et7](http://viahold.com/1Et7)
# Code mẫu
[http://viahold.com/1EfK](http://viahold.com/1EfK)

