---
title: '[SPOJ] MESSAGE - Truyền tin'
author: Nicky.Rio
date: 2017-08-10T14:35:06.879Z
thumbnail: /img/uploads/MESSAGE.jpg
tags:
  - spoj
  - dfs-and-similar
  - graph
---
# Link gốc
[http://vnoi.info/problems/show/MESSAGE/](http://vnoi.info/problems/show/MESSAGE/)
# Đề bài
Một lớp gồm N học sinh, mỗi học sinh cho biết những bạn mà học sinh đó có thể liên lạc được (chú ý liên lạc này là liên lạc một chiều : u có thể gửi tin tới v nhưng v thì chưa chắc đã có thể gửi tin tới u).

Thầy chủ nhiệm đang có một thông tin rất quan trọng cần thông báo tới tất cả các học sinh. Để tiết kiệm thời gian, thầy chỉ nhắn tin tới 1 số học sinh rồi sau đó nhờ các học sinh này nhắn lại cho tất cả các bạn mà các học sinh đó có thể liên lạc được, và cứ lần lượt như thế làm sao cho tất cả các học sinh trong lớp đều nhận được tin .

Hãy tìm một số ít nhất các học sinh mà thầy chủ nhiệm cần nhắn.

## Input

- Dòng đầu là N, M (N &lt;= 800, M là số lượng liên lạc 1 chiều)

- Một số dòng tiếp theo mỗi dòng gồm 2 số u , v cho biết học sinh u có thể gửi tin tới học sinh v

## Output

- Gồm 1 dòng ghi số học sinh cần thầy nhắn tin.

## Example
**Input**
```
12 15
1 3
3 6
6 1
6 8
8 12
12 9
9 6
2 4
4 5
5 2
4 6
7 10
10 11
11 7
10 9
```
**Output**
```
2

Giải thích: Chọn cả học sinh 2 và 7.
```

# Solution
[http://viahold.com/1E5m](http://viahold.com/1E5m)
# Code mẫu
[http://viahold.com/1E0W](http://viahold.com/1E0W)

