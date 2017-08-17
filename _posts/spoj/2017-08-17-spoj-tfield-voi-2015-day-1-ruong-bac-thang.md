---
title: '[SPOJ] TFIELD - VOI 2015 Day 1 - Ruộng bậc thang'
author: itsjustwinds
date: 2017-08-17T04:29:01.995Z
thumbnail: /img/uploads/TFIELD_graph.jpg
tags:
  - geometry
  - spoj
---
# Đề: [http://vn.spoj.com/problems/TFIELD/](http://vn.spoj.com/problems/TFIELD/)

Ở các vùng cao hiếm đất cùng mặt bằng để canh tác, khi tiến hành trồng trọt trên các sườn đồi núi có đất màu, người ta phải bạt tam cấp để tạo thành những vạt đất bằng. Khu vực đất dốc dùng để canh tác như vậy gọi là ruộng bậc thang. Hình ảnh các khu ruộng bậc thang vẫn luôn là một hình ảnh đẹp ở các vùng cao khiến du khách và các nhà nhiếp ảnh đam mê và tốn không ít phim ảnh. Gia đình Hoàng có một khu ruộng bậc thang bao quanh một ngọn đồi được chia thành các khoang bậc thang, mỗi khoang trồng một loại cây. Khi nhìn từ trên cao xuống, ta thấy các khoang bậc thang này có hình dạng của các đa giác lồi lồng nhau. Ngoại trừ khoang chứa đỉnh đồi có biên là một đa giác lồi chứa đỉnh đồi, mỗi khoang còn lại được xác định bởi hai đa giác lồng nhau: đa giác có diện tích lớn hơn được gọi là biên ngoài của khoang còn đa giác có diện tích nhỏ hơn được gọi là biên trong của khoang. Mỗi khoang có màu đặc trưng của loại cây được trồng ở khoang đó. Vốn là một người say mê chụp ảnh, muốn có một bức ảnh đẹp, Hoàng tìm cách thay đổi không quá k loại cây được trồng ở k khoang để khi nhìn từ trên cao xuống sẽ thấy một vùng cùng màu có diện tích lớn nhất. Hoàng đã ghi nhận được danh sách m đa giác lồi mô tả biên ngoài của m khoang và màu tương ứng của chúng. Do sơ xuất, Hoàng đã để các thông tin về các khoang trong danh sách bị xáo trộn, không còn được liệt kê theo đúng trình tự từ khoang trong đến khoang ngoài.

**Yêu cầu:** Cho biết thông tin về danh sách mà Hoàng đã ghi nhận và số nguyên k, hãy tìm cách thay đổi không quá k loại cây được trồng ở k khoang để khi nhìn từ trên cao xuống sẽ thấy một vùng cùng màu có diện tích lớn nhất.

## Dữ liệu vào:

Dòng đầu chứa hai số nguyên dương m, k (k ≤ m);
Dòng thứ i trong số m dòng tiếp theo chứa thông tin về khoang thứ i trong danh sách mà Hoàng ghi nhận bao gồm:
Đầu tiên là số nguyên ni là số đỉnh của đa giác lồi mô tả biên ngoài của khoang;
Tiếp theo là số nguyên ci thể hiện màu của khoang (1 ≤ ci ≤ m);
Cuối cùng là ni cặp số nguyên, mỗi số có trị tuyệt đối không quá 10^9, là tọa độ của một đỉnh của đa giác. Các đỉnh của đa giác được liệt kê theo thứ tự ngược chiều kim đồng hồ.
Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:

Ghi ra một số thực là diện tích vùng cùng màu lớn nhất sau khi thay đổi không quá k loại cây được trồng ở k khoang (kết quả đưa ra với độ chính xác 1 chữ số sau dấu chấm thập phân).

## Ràng buộc:

* Có 40% số test ứng với 40% số điểm của bài thỏa mãn điều kiện: m ≤ 10; k = 1; các đa giác mô tả biên ngoài của các khoang là hình chữ nhật;
* Có 40% số test khác ứng với 40% số điểm của bài thỏa mãn điều kiện: m ≤ 10; các đa giác mô tả biên ngoài của các khoang là tam giác;
* Có 20% số test còn lại ứng với 20% số điểm của bài thỏa mãn điều kiện: m, ni ≤ 1000.

## Ví dụ:
```
Input:
3 1

4 1 0 0 1 0 1 1 0 1

4 1 -2 -3 5 -3 5 5 -2 5

3 2 -1 -1 4 -1 -1 4

Output:

56.0
```
# Hướng dẫn: 

[http://viahold.com/3VrS](http://viahold.com/3VrS)

# Code

[http://viahold.com/3Vrm](http://viahold.com/3Vrm)




