---
title: '[SPOJ] MINCUT - VOI 2015 Day 2 - Cắt hình'
author: Nguyễn Minh Quân
date: 2017-08-07T09:25:54.269Z
thumbnail: /img/uploads/MINCUT.jpg
tags:
  - spoj
  - binary-search
---
# Link đề gốc: [http://vnoi.info/problems/show/MINCUT/](http://vnoi.info/problems/show/MINCUT/)

# Đề bài
Cho A là lưới ô vuông gồm m dòng và n cột. Các dòng của lưới được đánh số từ 1 đến m, từ trên xuống dưới. Các cột của lưới được đánh số từ 1 đến n , từ trái sang phải. Ô nằm trên giao của dòng i và cột j của lưới, được gọi là ô \(i, j\), chứa số nguyên không âm a_i,j có giá trị không vượt quá 10 ^ 6.

Các lưới ô vuông như vậy luôn là đối tượng cho nhiều nghiên cứu thú vị. Vừa qua, trong giờ học ôn luyện cho kỳ thi học sinh giỏi Tin học, Hùng được cô giáo giao cho giải quyết bài toán trả lời truy vấn sau đây đối với bảng đã cho:

Cho một hình chữ nhật con có ô trái trên là ô \(x, y\) và ô phải dưới là ô \(u, v\), cần đưa ra chênh lệch nhỏ nhất trong số các chênh lệch giữa hai tổng các số trong hai hình chữ nhật thu được bằng việc cắt ngang hoặc cắt dọc hình chữ nhật đã cho dọc theo đường kẻ của lưới. Giả thiết \(x, y\) và \(u, v\) là hai ô khác nhau trên lưới.

Bạn hãy giúp Hùng giải quyết bài toán đặt ra.

Yêu cầu: Cho lưới A và k bộ x_q, y_q, u_q, v_q \(q = 1, 2, ..., k\) tương ứng với k truy vấn, hãy đưa ra các câu trả lời cho k truy vấn.

## Dữ liệu vào: 

* Dòng đầu tiên chứa ba số nguyên m, n, k \(k ≤ m × n\);
* m dòng tiếp theo, dòng thứ i chứa n số nguyên không âm a_i_1, a_i_2, ..., a_i_n;
* Dòng thứ q trong số k dòng tiếp theo chứa 4 số nguyên x_q, y_q, u_q, v_q \(q = 1, 2, ..., k\).

## Dữ liệu ra:

* Ghi ra file văn bản MINCUT.OUT gồm k dòng, mỗi dòng chứa một số là câu trả lời cho một truy vấn theo thứ tự xuất hiện trong file dữ liệu vào.

## Ràng buộc:

* Có 30% số test ứng với 30% số điểm của bài có m, n ≤ 10.
* Có 30% số test khác ứng với 30% số điểm của bài có m, n ≤ 100.
* Có 40% số test  ứng với 40% số điểm còn lại của bài có m, n ≤ 1000.

# Solution

[Here](http://viahold.com/6Zj)
# Code mẫu 

[Here](http://viahold.com/6fG)
