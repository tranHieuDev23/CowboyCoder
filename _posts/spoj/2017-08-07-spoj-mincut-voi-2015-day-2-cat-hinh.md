---
title: '[SPOJ] MINCUT - VOI 2015 Day 2 - Cắt hình'
author: Nguyễn Minh Quân
date: 2017-08-07T09:25:54.269Z
thumbnail: /img/uploads/MINCUT.jpg
tags:
  - spoj
  - binary-search
---
# Link đề gốc: [http://vn.spoj.com/problems/MINCUT/](http://vn.spoj.com/problems/MINCUT/)

# Đề bài
Cho_A_là lưới ô vuông gồm_m_dòng và_n_cột. Các dòng của lưới được đánh số từ 1 đến_m_, từ trên xuống dưới. Các cột của lưới được đánh số từ 1 đến_n_, từ trái sang phải. Ô nằm trên giao của dòng_i_và cột_j_của lưới, được gọi là ô \(_i_, _j_\), chứa số nguyên không âm_a__i,j_có giá trị không vượt quá 106.

Các lưới ô vuông như vậy luôn là đối tượng cho nhiều nghiên cứu thú vị. Vừa qua, trong giờ học ôn luyện cho kỳ thi học sinh giỏi Tin học, Hùng được cô giáo giao cho giải quyết bài toán trả lời truy vấn sau đây đối với bảng đã cho:

Cho một hình chữ nhật con có ô trái trên là ô \(_x,y_\) và ô phải dưới là ô \(_u,v_\), cần đưa ra chênh lệch nhỏ nhất trong số các chênh lệch giữa hai tổng các số trong hai hình chữ nhật thu được bằng việc cắt ngang hoặc cắt dọc hình chữ nhật đã cho dọc theo đường kẻ của lưới. Giả thiết \(_x,y_\) và \(_u,v_\) là hai ô khác nhau trên lưới.

Bạn hãy giúp Hùng giải quyết bài toán đặt ra.

Yêucầu:Cho lưới_A_và_k_bộ_x__q_,_y__q___,_u__q_, _v__q___\(_q___= 1, 2, ...,_k_\) tương ứng với_k_truy vấn, hãy đưa ra các câu trả lời cho_k_truy vấn.

## Dữ liệu vào: 

* Dòng đầu tiên chứa ba số nguyên_m_,_n_,_k_\(_k_≤_m_×_n_\);
* _m_dòng tiếp theo, dòng thứ_i_chứa_n_số nguyên không âm_a__i_1,_a__i_2, ...,_a__in_;
* Dòng thứ_q_trong số_k_dòng tiếp theo chứa 4 số nguyên_x__q_,_y__q_,_u__q_,_v__q___\(_q___= 1, 2, ...,_k_\).

## Dữ liệu ra:

* Ghi ra file văn bản MINCUT.OUT gồm_k_dòng, mỗi dòng chứa một số là câu trả lời cho một truy vấn theo thứ tự xuất hiện trong file dữ liệu vào.

## Ràng buộc:

* Có 30% số test ứng với 30% số điểm của bài có_m_,_n_≤ 10.
* Có 30% số test khác ứng với 30% số điểm của bài có _m_,_n_≤ 100.
* Có 40% số test  ứng với 40% số điểm còn lại của bài có_m_,_n_≤ 1000.

# Solution

[Here
](http://viahold.com/6Zj)
# Code mẫu 

[Here](http://viahold.com/6fG)


