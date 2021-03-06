---
title: '[SPOJ] NKFLOW - Luồng cực đại trên mạng'
author: itsjustwinds
date: 2017-08-08T02:57:58.159Z
thumbnail: /img/uploads/FLOW_GRAPH.jpg
tags:
  - max-flow
  - spoj
---
# Đề: [http://vnoi.info/problems/show/NKFLOW/](http://vnoi.info/problems/show/NKFLOW/)

Trong lý thuyết đồ thị, mạng luồng là một đồ thị có hướng, trong đó mỗi cạnh có một độ thông qua và một giá trị luồng. Lượng luồng trên mỗi cạnh không được vượt quá độ thông qua của cạnh đó. Lượng luồng đi vào một đỉnh phải bằng lượng luồng đi ra khỏi nó, trừ khi đó là đỉnh nguồn \(có nhiều lượng luồng đi ra hơn\), hay đỉnh đích \(có nhiều lượng luồng đi vào hơn\). Mạng luồng có thể dùng để mô hình hóa hệ thống đường giao thông, dòng chảy của chất lỏng trong ống, dòng điện trong mạch, hay bất kỳ các bài toán nào tương tự khi có sự di chuyển trong một mạng các nút.

Mô hình các ống dẫn nước bằng một mạng luồng. Mỗi ống nước có đường kính xác định nên chỉ cho phép một lưu lượng nước xác định chảy qua. Ở nơi giao điểm giữa các ống, lưu lượng nước đi vào phải bằng lưu lượng nước đi ra nếu không nước sẽ nhanh chóng bị thất thoát. Ta có một bồn nước, hay đỉnh phát, và một vòi nước, hay đỉnh thu. Một cách trực quan, giá trị luồng trên mạng chính là vận tốc nước chảy ra từ vòi. Luồng còn có thể mô hình sự lưu chuyển của người hay hàng hóa trên các mạng giao thông, dòng điện trong hệ thống phân phối,... Đối với các hệ thống mạng này, luồng đi vào các nút trung gian cần phải bằng luồng đi ra khỏi nút đó. Tính chất này cũng giống như định luật dòng điện Kirchhoff. Mạng luồng còn được ứng dụng trong sinh thái học: mạng luồng xuất hiện khi xem xét sự lưu chuyển chất dinh dưỡng và năng lượng giữa các nhóm khác nhau trong một mạng thức ăn. Các bài toán gắn với loại mạng sinh thái này hoàn toán khác với trường hợp mạng chất lỏng hay mạng giao thông.

Bài toán luồng cực đại trên mạng yêu cầu tìm một luồng tương thích có giá trị lớn nhất trong mạng luồng có một đỉnh phát và một đỉnh thu. Bài toán luồng cực đại trên mạng có thể xem như trường hợp đặc biệt của lớp các bài toán mạng phức tạp hơn, chẳng hạng như bài toán lưu thông . Định lý luồng cực đại-lát cắt hẹp nhất \(max-flow min-cut theorem\) chỉ ra giá trị luồng cực đại từ s đến t \(đỉnh phát đến đỉnh thu\) bằng giá trị của lát cắt s-t hẹp nhất trên mạng.

Bạn hãy thử giải quyết bài toán luồng cực đại trên mạng: cho một mạng luồng, hãy tìm giá trị luồng cực đại.

## Dữ liệu

* Dòng đầu tiên chứa 4 số nguyên dương n, m, s, t, \(2 ≤ n ≤ 1000\) tương ứng là số đỉnh, số cạnh của đồ thị, chỉ số của đỉnh phát và đỉnh thu.
* m dòng tiếp theo, mỗi dòng có dạng ba số u, v, c cách nhau ít nhất một dấu cách thể hiện có cung u, v trong mạng với khả năng thông qua là c \(1 ≤ c ≤ 10^6\).

## Kết qủa

In ra một số duy nhất là giá trị của luồng cực đại trên mạng.

## Ví dụ

```
Dữ liệu:
6 8 1 6
1 2 5
1 3 5
2 4 6
2 5 3
3 4 3
3 5 1
4 6 6
5 6 6

Kết qủa
9
```

# Hướng dẫn

[http://viahold.com/Nbk](http://viahold.com/Nbk)

# Code

Dinitz(N^2*M): [http://ideone.com/DGrZT7](http://ideone.com/DGrZT7)

E.K(N*M^2): [http://ideone.com/JNxZ0h](http://ideone.com/JNxZ0h)


