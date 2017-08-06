---
title: '[SPOJ] COLOREC - VOI 2011 Hình chữ nhật bốn màu'
author: La Hoàng Phong
date: 2017-08-06T12:44:16.023Z
thumbnail: /img/uploads/COLOREC_Image.jpg
tags:
  - implementation
---
# Link đề bài gốc : [http://vn.spoj.com/problems/COLOREC/](http://vn.spoj.com/problems/COLOREC/)
# Đề bài : 

Trên mặt phẳng tọa độ Đề các vuông góc Oxy cho n điểm phân biệt Ai\(xi, yi\) i = 1, 2, 3, …, n.   Mỗi điểm Ai được tô bởi màu Ci thuộc {1, 2, 3, 4}. Ta gọi hình chữ nhật bốn màu là hình chữ nhật thỏa mãn hai điều kiện sau:

* Bốn đỉnh của hình chử nhật là bốn điểm trong n điểm đã cho và được tô bởi bốn màu khác nhau.
* Các cạnh của hình chử nhật song song với một trong hai trục tọa độ.

##Yêu cầu:
Cho biết tọa độ và màu của n điểm, hãy đếm số lượng hình chữ nhật bốn màu.

##Dữ liệu:

* Dòng đầu tiên chứa số nguyên dương n \(4 &lt;= n &lt;= 10^5\) là số lượng điểm trên mặt phẳng.
* Dòng thứ i trong n dòng tiếp theo chứa ba số nguyên xi, yi, ci \(\|xi\|, \|yi\| &lt;= 200\)  là thông tin về tọa độ và màu của điểm thứ i \(i = 1, 2, 3, .., n\).
* Các số trên cùng một dòng được ghi cách nhau ít nhất một dấu cách.

## Kết quả:
Ghi ra trên một dòng số lượng hình chữ nhật đếm được.

Ví dụ:

```
input 
7
0 0 1
0 1 4
2 1 2
2 -1 3
0 -1 1
-1 -1 4
-1 1 1

output
2
```














![](http://vn.spoj.com/content/voj:COLOREC.png)

Ràng buộc:50% số test ứng với 50% số điểm của bài có 4 &lt;= n &lt;= 100

# Solution : 
Tham khảo tại : [http://dataurbia.com/16nV](http://dataurbia.com/16nV)
# Code :
Tham khảo tại : [http://dataurbia.com/16oZ](http://dataurbia.com/16oZ)


