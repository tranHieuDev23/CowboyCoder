---
title: '[SPOJ] NKPOS - Người đưa thư'
author: Nguyễn Minh Quân
date: 2017-08-04T08:45:42.619Z
thumbnail: /img/uploads/NKPOS.jpg
tags:
  - spoj
  - graph
---

# Link đề gốc: [http://vn.spoj.com/problems/NKPOS/](http://vn.spoj.com/problems/NKPOS/)

# Đề bài

Một bưu tá ở vùng quê cần chuyển thư cho người dân ở các ngôi làng cũng như ở trên các con đường nối giữa các ngôi làng. Bạn cần giúp bưu tá tìm hành trình đi qua mỗi ngôi làng và mỗi con đường ít nhất một lần \(dữ liệu vào đảm bảo một hành trình như vậy tồn tại\). Tuy nhiên, mỗi hành trình còn được gắn với một chi phí. Người dân ở các ngôi làng đều muốn bưu tá đến làng mình càng sớm càng tốt. Vì vậy mỗi ngôi làng đã thỏa thuận với bưu điện, nếu làng i là làng thứ k phân biệt được thăm trên hành trình và k ≤ wi, làng i sẽ trả wi– k euros cho bưu điện. Nếu k &gt; wi, bưu điện đồng ý trả k - wieuros cho ngôi làng. Ngoài ra, bưu điện còn trả bưu tá một euro khi đi qua mỗi con đường trên hành trình.

Có n ngôi làng, được đánh số từ 1 đến n. Bưu điện được đặt ở ngôi làng số một, do đó hành trình cần bắt đầu và kết thúc tại ngôi làng này. Mỗi ngôi làng được đặt ở giao điểm của hai, bốn, hoặc tám con đường. Có thể có nhiều đường nối giữa hai ngôi làng. Con đường có thể là một vòng nối một ngôi làng với chính nó.

Yêu cầu: Viết chương trình xác định một hành trình đi qua mỗi ngôi làng và mỗi con đường ít nhất một lần, sao cho tổng lợi nhuận của bưu điện là lớn nhất \(hay tổng thiệt hại là bé nhất\).

## Dữ liệu

* Dòng đầu tiên chứa 2 số nguyên n, m, cách nhau bởi khoảng trắng; n \(1 ≤ n ≤ 200\), là số ngôi làng và m là số con đường.
* Mỗi dòng trong số n dòng sau chứa một số nguyên dương. Dòng thứ i+1 chứa số wi, 0 ≤ wi≤ 1000, xác định chi phí được trả bởi làng i.
* Mỗi dòng trong số m dòng sau chứa hai số nguyên dương cách nhau bởi khoảng trắng, mô tả một con đường nối hai ngôi làng.

## Kết qủa

* Dòng đầu tiên chứa số nguyên dương k, độ dài của hành trình.
* Dòng thứ hai theo chứa k+1 số cho biết các ngôi làng được thăm theo thứ tự trên hành trình, cách nhau bởi khoảng trắng, trong đó v1=vk+1=1.

# Solution

[Here](http://dataurbia.com/KU1)

# Code mẫu

[Here](http://dataurbia.com/KRi)





