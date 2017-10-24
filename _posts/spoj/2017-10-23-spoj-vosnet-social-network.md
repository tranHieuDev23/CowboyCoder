---
title: '[SPOJ] VOSNET - Social Network'
author: houtaru
date: 2017-10-23T16:35:50.651Z
thumbnail: '/img/uploads/[spoj] vosnet.jpg'
tags:
  - spoj
  - graph
  - math
---
# Link đề bài: [http://vn.spoj.com/problems/VOSNET/](http://vn.spoj.com/problems/VOSNET/)

# Đề bài:

Social Network - Một cụm từ chắc ai trong chúng ta đều biết! Một mạng xã hội sẽ gồm nhiều tài khoản (được biết như những người trong một xã hội) và các mối quan hệ giữa chúng (như sự quen biết giữa con người với con người).

Chúng ta hãy cùng làm một "nghiên cứu" nho nhỏ về mạng xã hội. Mạng sẽ gồm N tài khoản (để đơn giản đặt tên từ 1 đến N) và M cặp quan hệ (U,V) cho biết U và V quen biết nhau.

Theo dự đoán, cứ trung bình một tháng, một người sẽ quen hết tất cả những người có quen với bạn của người đó. Nói cách khác nếu:

A quen với B, B quen với C;
A không quen với C
Thì sau một tháng A sẽ quen với C, và một mối quan hệ mới (A,C) được tạo thành !

Sẽ đến 1 tháng, mà sẽ không có mối quan hệ mới nào được tạo thành (và sự phát triển của mạng xã hội sẽ tạm dừng, nếu không kích thích tạo thêm tài khoản mới, quan hệ mới) - người ta gọi tháng đó là tháng bão hòa.

Cứ sau mỗi tháng, người ta sẽ thống kê số mối quan hệ mới được tạo thành. Dựa vào dự đoán ở trên, bạn hãy tính toán những con số quan trọng cho đó đến khi tháng bão hòa bắt đầu.

## Input
Dòng đầu tiên gồm 2 số N và M;
M dòng tiếp theo, mỗi dòng gồm cặp số biểu diễn quan hệ (U,V);

## Output
Một dòng duy nhất chứa 1 dãy số, số thứ i từ trái sang sẽ biểu diễn số mối quan hệ mới được tạo thành trong tháng thứ i (tất nhiên số cuối cùng sẽ là 0 - biểu diễn tháng bão hòa);

## Example
```
Input:
6 6
1 2
2 3
3 4
4 6
2 5
5 6

Output:
7 2 0
```

## Giải thích:
Các mối quan hệ mới theo mỗi tháng:
1. (1,3), (1,5), (2,4), (2,6), (3,5), (3,6), (4,5);
2. (1,4), (1,6);
3. Không tạo mới;

## Giới hạn
N ≤ 3000, M ≤ 6000;
20% số dữ liệu có N ≤ 100;

# Solution: [http://twineer.com/1IbA](http://twineer.com/1IbA)

# Code: [http://twineer.com/1I8v](http://twineer.com/1I8v)


