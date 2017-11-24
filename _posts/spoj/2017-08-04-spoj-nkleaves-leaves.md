---
title: '[SPOJ] NKLEAVES - Leaves'
author: Nguyễn Minh Quân
date: 2017-08-04T01:34:23.853Z
thumbnail: /img/uploads/NKLEAVES.jpg
tags:
  - spoj
  - dp
  - geometry
---
# Link đề gốc: <http://vnoi.info/problems/show/NKLEAVES/>

Một ngày thu đẹp trời, Radu và Mars nhận ra rằng khu vườn của họ chứa đầy lá rụng. Họ quyết định gom lá thành đúng K đống lá.

Biết rằng khu vườn có dạng một đường thẳng. 2 người đã thiết lập một hệ tọa độ với gốc ở điểm đầu của khu vườn.

Có N chiếc lá nằm thẳng hàng với trọng lượng khác nhau, khoảng cách giữa 2 chiếc lá liên tiếp là 1. Nghĩa là, chiếc lá đầu tiên có tọa độ 1, chiếc lá thứ 2 có tọa độ 2,..., chiếc lá thứ N có tọa độ N. Ban đầu, 2 người đang đứng ở tọa độ N.

Radu và Mars thực hiện việc gom lá trong khi rời khỏi khu vườn, do đó những chiếc lá chỉ có thể di chuyển về bên trái. Chi phí di chuyển một chiếc lá bằng tích của trọng lượng chếc lá và khoảng cách di chuyển. Hiển nhiên, một trong K đống lá sẽ nằm ở tọa độ 1, tuy nhiên những đống còn lại có thể nằm ở bất kỳ vị trí nào.

Yêu cầu: tìm chi phí nhỏ nhất để gom N chiếc lá thành đúng K đống lá.

## Dữ liệu

* Dòng đầu tiên chứa 2 số nguyên dương N và K, cách nhau bởi 1 khoảng trắng.
* Dòng thứ i trong số N dòng tiếp theo chứa 1 số nguyên dương cho biết trọng lượng của chiếc lá thứ i.

## Kết quả

In ra 1 số nguyên là chi phí nhỏ nhất để gom N chiếc lá lại thành đúng K đống lá.

## Giới hạn

* 0 < N ≤ 100000
* 0 < K ≤ 10, K < N
* Trọng lượng của mỗi chiếc lá không vượt quá 1000.

# Solution

[Here](http://dataurbia.com/FDh)

# Code mẫu

[Here](http://dataurbia.com/FEF)

