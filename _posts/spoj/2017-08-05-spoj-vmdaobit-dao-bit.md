---
title: '[SPOJ] VMDAOBIT - Đảo bit'
author: Nguyễn Minh Quân
date: 2017-08-05T04:20:04.765Z
thumbnail: /img/uploads/VMDAOBIT.jpg
tags:
  - spoj
  - implementation
---
# Link đề gốc: [http://vn.spoj.com/problems/VMDAOBIT/](http://vn.spoj.com/problems/VMDAOBIT/)

# Đề bài

Cho một bảng kích thước M \* N. Các hàng được đánh số từ 1 đến M từ trên xuống dưới. Các cột được đánh số từ 1 đến N từ trái sang phải. Mỗi ô của bảng có giá trị là0hoặc1. Bạn được thực hiện thao tác: Chọn một hình vuông 3\*3 nằm trọn vẹn trong bảng và đảo bit tất cả các ô trong hình vuông đó (từ 1 chuyển về 0, hoặc từ 0 chuyển về 1). Mỗi hình vuông 3\*3 không được chọn quá một lần.

Nhiệm vụ của bạn là tìm một dãy ít thao tác nhất sao cho sau khi thực hiện thì bảng chỉ còn chứa số0. In ra tọa độ ô trái trên của các hình vuông3\*3 với tọa độ hàng tăng dần (nếu hai ô có cùng tọa độ hàng thì hình vuông nào có tọa độ cột của ô trái trên nhỏ hơn sẽ được in trước). Nếu không thể đưa bảng về toàn số 0 thì in ra-1. Nếu có nhiều phương án, bạn có thể in ra phương án bất kỳ.

## Input

* Dòng 1: Chứa 2 số nguyênMvàN(M,N≤ 100).
* Mdòng tiếp theo: mỗi dòng chứaNsố0hoặc1.

## Output

* Dòng đầu chứa sốK- số thao tác bạn thực hiện (nếu không tồn tại dãy thao tác thỏa mãn yêu cầu thì chỉ in ra duy nhất số -1).
* Kdòng tiếp theo mô tảKthao tác được thực hiện, mỗi dòng chứa  2 số nguyên dương là tọa độ ô trái trên của các hình vuông3\*3.

## Giới hạn

* Tất cả các test có M, N≤ 100.
* Trong 40% test (tương ứng với 40% số điểm), M\*N≤ 18.
* Trong quá trình thi, bài của bạn chỉ được chấm với test ví dụ. Nếu được chấm đúng, kết quả sẽ được hiện là 100.

# Solution 

[Here](http://dataurbia.com/dmF)

# Code mẫu

[Here](http://dataurbia.com/dmd)

