---
title: '[SPOJ] VMUNCH - Gặm cỏ'
author: rknguyen
date: 2017-08-11T08:58:44.796Z
thumbnail: /img/uploads/vmunch-spoj-img.jpg
tags:
  - spoj
  - bfs
  - graph
---
# Link gốc
[http://vn.spoj.com/problems/VMUNCH/](http://vn.spoj.com/problems/VMUNCH/)
# Đề bài
Bessie rất yêu bãi cỏ của mình và thích thú chạy về chuồng bò vào giờ vắt sữa buổi tối.

Bessie đã chia đồng cỏ của mình là 1 vùng hình chữ nhật thành các ô vuông nhỏ với R \(1 &lt;= R &lt;= 100\) hàng và C \(1 &lt;= C &lt;= 100\) cột, đồng thời đánh dấu chỗ nào là cỏ và chỗ nào là đá. Bessie đứng ở vị trí R\_b,C\_b và muốn ăn cỏ theo cách của mình, từng ô vuông một và trở về chuồng ở ô 1,1 ; bên cạnh đó đường đi này phải là ngắn nhất.

Bessie có thể đi từ 1 ô vuông sang 4 ô vuông khác kề cạnh.

Dưới đây là một bản đồ ví dụ \[với đá \('\*'\), cỏ \('.'\), chuồng bò \('B'\), và Bessie \('C'\) ở hàng 5, cột 6\] và một bản đồ cho biết hành trình tối ưu của Bessie, đường đi được dánh dấu bằng chữ ‘m’.

## Input

- Dòng đầu là N, M (N &lt;= 800, M là số lượng liên lạc 1 chiều)

- Một số dòng tiếp theo mỗi dòng gồm 2 số u , v cho biết học sinh u có thể gửi tin tới học sinh v

## Output

- Gồm 1 dòng ghi số học sinh cần thầy nhắn tin.

## Ví dụ
**Input**
```
5 6
B...*.
..*...
.**.*.
..***.
*..*.C
```
**Output**
```
9
```

## Giải thích
```
   Bản đồ               Đường đi tối ưu
1 2 3 4 5 6  <-cột      1 2 3 4 5 6  <-cột
1 B . . . * .           1 B m m m * .
2 . . * . . .           2 . . * m m m
3 . * * . * .           3 . * * . * m
4 . . * * * .           4 . . * * * m
5 * . . * . C           5 * . . * . m

```

# Solution
[http://viahold.com/1TQx](http://viahold.com/1TQx)
# Code mẫu
[http://viahold.com/1TOv](http://viahold.com/1TOv)

