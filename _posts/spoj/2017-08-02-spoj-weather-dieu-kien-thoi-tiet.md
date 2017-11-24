---
title: '[SPOJ] WEATHER - Điều kiện thời tiết'
author: Joker
date: 2017-08-02T07:59:11.365Z
thumbnail: '/img/uploads/[spoj]weather.png'
tags:
  - spoj
  - graph
---
# Link đề gốc:

[http://vnoi.info/problems/show/WEATHER/](http://vnoi.info/problems/show/WEATHER/)

# Đề bài:

Hãng hàng không OlympAirways thực hiện các chuyến bay giữa n sân bay được đánh số từ 1 đến n. Hệ thống các chuyến bay được thiết lập sao cho giữa 2 sân bay bất kỳ được phục vụ bởi hãng luôn có một đường bay bao gồm một hoặc nhiều chuyến bay trực tiếp giữa hai sân bay. Mỗi chuyến bay thực hiện việc di chuyển giữa hai thành phố theo cả hai chiều.

Trung tâm điều khiển của hãng đưa ra khái niệm độ dính kết giữa cặp hai sân bay A và B được xác định như là số lượng các chuyến bay mà việc không thực hiện một trong số chúng \(các chuyến bay khác vẫn thực hiện bình thường\) dẫn đến không thể bay từ sân bay A đến sân bay B.

Một nghiên cứu cho biết rằng, trong điều kiện thời tiết xấu, tổng độ dính kết giữa các cặp sân bay phải đạt đến một giá trị nhất định thì hệ thống đường bay mới được gọi là an toàn.

Yêu cầu: Hãy giúp trung tâm điều khiển tính tổng độ dính kết giữa mọi cặp sân bay.

### Dữ liệu:

* Dòng đầu tiên chứa số nguyên n \(1 ≤ n ≤ 100\)
* Dòng thứ hai chứa số nguyên m \(1 ≤ m ≤ 5000\) - số lượng các chuyến bay
* Mỗi dòng trong số m dòng tiếp theo chứa thông tin về một chuyến bay, bao gồm hai số nguyên dương trong khoảng từ 1 đến n: chỉ số của hai sân bay được nối bởi chuyến bay.

### Kết qủa:

In ra 1 số nguyên duy nhất là tổng độ dính kết giữa mọi cặp sân bay \(A, B\) \(với A &lt; B\).

### Ví dụ:

#### Input:
```
5
5
1 2
4 2
4 5
3 2
3 1
```

#### Output:
```
10
```

# Solution:

Tham khảo tại: [http://simizer.com/s2r](http://simizer.com/s2r)

# Code;
Tham khảo tại: [http://simizer.com/rrG](http://simizer.com/rrG)







