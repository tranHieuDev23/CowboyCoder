---
title: '[SPOJ] QBSCHOOL - Đến trường'
author: rknguyen
date: 2017-08-02T14:36:15.968Z
thumbnail: /img/uploads/14356685_1161310190602946_8901270260116619264_n_1485.jpg
tags:
  - spoj
  - dijkstra
  - dp
---
# Link đề gốc:

[http://vn.spoj.com/problems/QBSCHOOL/](http://vn.spoj.com/problems/QBSCHOOL/)

# Đề bài:

Ngày 27/11 tới là ngày tổ chức thi học kỳ I ở trường ĐH BK. Là sinh viên năm thứ nhất, Hiếu không muốn vì đi muộn mà gặp trục trặc ở phòng thi nên đã chuẩn bị khá kỹ càng. Chỉ còn lại một công việc khá gay go là Hiếu không biết đi đường nào tới trường là nhanh nhất.

Thường ngày Hiếu không quan tâm tới vấn đề này lắm cho nên bây giờ Hiếu không biết phải làm sao cả. Bản đồ thành phố là gồm có N nút giao thông và M con đường nối các nút giao thông này. Có 2 loại con đường là đường 1 chiều và đường 2 chiều. Độ dài của mỗi con đường là một số nguyên dương.

Nhà Hiếu ở nút giao thông 1 còn trường ĐH BK ở nút giao thông N. Vì một lộ trình đường đi từ nhà Hiếu tới trường có thể gặp nhiều yếu tố khác như là gặp nhiều đèn đỏ , đi qua công trường xây dựng, ... phải giảm tốc độ cho nên Hiếu muốn biết là có tất cả bao nhiêu lộ trình ngắn nhất đi từ nhà tới trường. Bạn hãy lập trình giúp Hiếu giải quyết bài toán khó này.

## Dữ liệu:

* Dòng đầu tiên chứa số nguyên N và M \(1 ≤ N ≤ 5100, 1 ≤ M ≤ 20000)
* M dòng tiếp theo, mỗi dòng chứa 4 số nguyên dương K, U, V, L. Trong đó:
* K = 1 có nghĩa là có đường đi một chiều từ U đến V với độ dài L.
* K = 2 có nghìa là có đường đi hai chiều giữa U và V với độ dài L.

## Kết quả:

Ghi hai số là độ dài đường đi ngắn nhấn và số lượng đường đi ngắn nhất. Biết rằng số lượng đường đi ngắn nhất không vượt quá phạm vì int64 trong pascal hay long long trong C++.

## Ví dụ:

## Input:

```
3 2
1 1 2 3
2 2 3 1
```

## Output:
```
4 1
```

# Solution:

Tham khảo tại: [http://simizer.com/yzz](http://simizer.com/yzz)

# Code:
Tham khảo tại: [http://simizer.com/z3L](http://simizer.com/z3L)


