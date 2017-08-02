---
title: '[SPOJ] PERREC - Perfect Rectangles'
author: itsjustwinds
date: 2017-08-02T03:40:55.682Z
thumbnail: /img/uploads/talonflame_by_kaitlynclinkscales-d6i9tza.png
tags:
  - data structure
---
## Đề:[http://vn.spoj.com/problems/PERREC/](http://vn.spoj.com/problems/PERREC/)

Cho 1 bảng kích thước N \* N được chia thành các ô vuông đơn vị. Mỗi ô vuông có thể có màu đen hoặc trắng. Bây giờ, định nghĩa 1 hình chữ nhật tốt là 1 hình chữ nhật có các cạnh song song với cạnh của bảng và chỉ chứa các ô vuông màu trắng. 1 hình chữ nhật được gọi là hoàn hảo, nếu nó là 1 hình chữ nhật tốt, và không tồn tại 1 hình chữ nhật tốt nào khác chứa nó \(tức không thể mở rộng hình chữ nhật này sang trái, phải, trên hay dưới\).



Yêu cầu: Xác định số hình chữ nhật hoàn hảo của bảng đã cho.



Lưu ý:

Để giảm kích thước của input, bảng sẽ được tô màu theo quy tắc sau:

-       Ban đầu bảng chỉ chứa các ô vuông màu trắng

-       Sinh 2 dãy số X và Y độ dài m theo quy tắc

+  X\[0\] = x0 mod N, Y\[0\] = y0 mod N

+ X\[i\] = \(X\[i – 1\] \* a + b\) mod N, Y\[i\] = \(Y\[i – 1\] \* c + d\) mod N với 1 &lt;= i &lt; m

trong đó x0, y0, a, b, c, d, m là các số được cho trước, và P mod Q kí hiệu là phần dư của phép chia P cho Q

-       Tô đen các ô có tọa độ \(X\[0\],Y\[0\]\), \(X\[1\],Y\[1\]\),…, \(X\[m – 1\],Y\[m – 1\]\). \(Tọa độ của bảng được đánh số từ 0 đến N – 1 theo thứ tự từ trái qua phải, và từ trên xuống dưới\)



Input:

-       1 dòng duy nhất gồm 8 số nguyên N,m,x0,a,b,y0,c,d như mô tả trong đề bài



Output:

-       1 dòng duy nhất ghi ra số lượng hình chữ nhật hoàn hảo thu được



Giới hạn:

-       0 &lt; N &lt;= 2000

-       1 &lt;= m &lt;= 4000000

-       0 &lt;= a, b, c, d, x0, y0 &lt;= 2000

-       Time limit: 5s

## Hướng dẫn:
[http://simizer.com/okX](http://simizer.com/okX)

!!!!!Waring !!!!! suy nghĩ trước khi đọc code

## Code

[http://simizer.com/olO](http://simizer.com/olO)
