---
title: '[SPOJ] BONES - Xúc xắc bò'
author: G
date: 2017-08-10T13:14:26.072Z
thumbnail: '/img/uploads/[spoj] Bones.jpg'
tags:
  - impletion
---
## Link đề gốc : http://vn.spoj.com/problems/BONES/ .

## Đề bài :
Bessie rất yêu thích chơi những trò chơi đổ xúc xắc và cô bò này đã nài được bác nông dân John chở tới cửa hàng đồ chơi và cô bò đã mua 3 cái xúc xắc về để lăn.

Những viên xúc xắc này tương ứng có S1, S2 và S3 mặt đều nhau, các mặt được đánh số từ 1-&gt;S1, 1-&gt;S2 và 1-&gt;S3 \(2 &lt;= S1 &lt;= 20; 2 &lt;= S2 &lt;= 20; 2 &lt;= S3 &lt;= 40\).

Bessie cứ thả xúc xắc liên tục và mỗi lần lại ghi nhận lại 1 số nguyên là tổng giá trị của 3 mặt xúc xắc thả được. Mục đích của cô bò là để tìm ra xem tổng giá trị nào xuất hiện nhiều nhất.

Cho số mặt của 3 xúc xắc, hãy xác định xem tổng giá trị nào xuất hiện nhiều nhất. Nếu có nhiều hơn 1 giá trị xuất hiện nhiều nhất thì ghi ra giá trị nhỏ nhất.

# DỮ LIỆU

* Dòng 1: 3 số nguyên cách nhau bởi dấu cách: S1, S2 và S3

# KẾT QUẢ

* Dòng 1: Số nguyên nhỏ nhất là tổng giá trị xuất hiện nhiều lần nhất, giả sử rằng xác suất các mặt xúc xắc xuất hiện là như nhau.

# VÍ DỤ

```
Dữ liệu
3 2 3

Kết quả
5

```

# GIẢI THÍCH

Đây là tất cả các trường hợp có thể xảy ra. 1 1 1 -&gt; 3 1 2 1 -&gt; 4 2 1 1 -&gt; 4 2 2 1 -&gt; 5 3 1 1 -&gt; 5 3 2 1 -&gt; 6 1 1 2 -&gt; 4 1 2 2 -&gt; 5 2 1 2 -&gt; 5 2 2 2 -&gt; 6 3 1 2 -&gt; 6 3 2 2 -&gt; 7 1 1 3 -&gt; 5 1 2 3 -&gt; 6 2 1 3 -&gt; 6 2 2 3 -&gt; 7 3 1 3 -&gt; 7 3 2 3 -&gt; 8 Trong đó 5 và 6 xuất hiện nhiều nhất \(mỗi số 5 lần\), vậy 5 là kết quả.

## Solution :
[Here](http://viahold.com/1CRK)

## Code :
[Here](http://viahold.com/1CSS)




