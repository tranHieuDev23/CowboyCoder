---
title: '[SPOJ] RBULL - VOI 2016 - Trại bò tót'
author: Nguyễn Minh Quân
date: 2017-08-05T03:55:12.551Z
thumbnail: /img/uploads/RBULL.jpg
tags:
  - spoj
  - implementation
  - dp
  - voi
---
# Linh đề gốc : [http://vnoi.info/problems/show/RBULL/](http://vnoi.info/problems/show/RBULL/)

# Đề bài

Ông Bảo là chủ của một trang trại, đang nuôi một đàn bò trên khu đất hình chữ nhật chia thành lưới mxn ô vuông đơn vị. Các hàng của lưới được đánh số từ 1 tới m từ trên xuống, và các cột của lưới được đánh số từ 1 tới n từ trái qua phải. Ô nằm trên giao điểm của hàng i và cột j được gọi là ô \(i, j\). Tại tâm của một số ô đã cắm cọc, mỗi cọc để buộc một con bò. Để bảo vệ đàn bò tót quý của mình khỏi những tên trộm, ông Bảo thuê Hùng tìm một thửa đất có dạng hình thoi \(mà theo quan niệm của ông Bảo là biểu tượng cho may mắn\) trong khu đất để nhốt đàn bò của mình. Thửa đất hình thoi có tâm tại ô \(x0,y0\) và bán kính là r là tập hợp tất cả các ô có tọa độ \(x, y\) thỏa mãn \|x – x0\| + \|y – y0\| &lt;= r. Do bò tót là các con vật rất hung dữ, nên ông Bảo yêu cầu trong thửa đất tìm được không có hai ô có cọc nào lại có cạnh chung.

Yêu cầu: Giúp Hùng xác định thửa đất có dạng hình thoi nằm trọng vẹn trong khu đất với số cọc cột bò là nhiều nhất đáp ứng yêu cầu của ông Bảo.

## Dữ liệu:

* Dòng đầu tiên chứa 2 số nguyên m và n xác định kích thước của khu đất của ông Bảo.

* Dòng  thứ i trong m dòng sau chứa n kí tự liền nhau, mỗi kí tự xác định trạng thái của một thửa đất: ‘\*’ nếu ô đất có cắm cọc và ‘.’ nếu ô đất đó không cắm cọc.

## Kết quả: 
* Đưa ra 4 số nguyên S, x0, y0, r được ghi cách nhau một dấu cách, trong đó: S là tổng số cọc trong thửa đất được chọn; x0, y0là tọa độ tâm và r là bán kính của thửa đất đó. Nếu có nhiều lời giải hãy đưa ra một lời giải bất kỳ.

# Solution 

[Here](http://dataurbia.com/dNm)

# Code mẫu

[Here](http://dataurbia.com/dQa)


