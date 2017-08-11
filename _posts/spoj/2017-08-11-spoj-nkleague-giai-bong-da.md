---
title: '[SPOJ] NKLEAGUE - Giải bóng đá'
author: itsjustwinds
date: 2017-08-11T04:55:48.768Z
thumbnail: /img/uploads/NKLEAGUE_graph.jpg
tags:
  - tree
  - graph
  - spoj
---
## đề: [http://vn.spoj.com/problems/NKLEAGUE/](http://vn.spoj.com/problems/NKLEAGUE/)

Một giải thi đấu bóng đá gồm n đội thi đấu vòng tròn một lượt. Các đội bóng được đánh số thứ tự từ 1 đến n. Theo thể lệ giải đấu, nếu trận đấu diễn ra với kết quả hòa, hai đội sẽ thi đấu luân lưu cho đến khi phân định thắng thua \(nghĩa là các trận đấu đều được phân định thắng thua\).

Hỏi có tồn tại một cách sắp xếp các đội theo thứ tự sao cho trong thứ tự đó, mỗi đội đều thắng trận đấu với đội liền sau mình? Trong trường hợp tồn tại, hãy xác định một cách sắp xếp như vậy.

## Dữ liệu

* Dòng đầu tiên chứa số nguyên n, số đội bóng tham dự giải đấu. \(1 ≤ n ≤ 1000\).

* Dòng thứ i trong số n dòng tiếp theo chứa j kí tự 0 hoặc 1, kí tự thứ j thế hiện giá trị aij:
* aii= 0 với mọi i.
* aij= 1 nếu và chỉ nếu đội i thắng đội j. Dữ liệu vào luôn thỏa mãn aij+aji= 1 với i khác j.


## Kết quả

In ra -1 nếu không tồn tại cách sắp xếp thỏa mãn yêu cầu. Trong trường hợp tồn tại, in ra n số nguyên là chỉ số của các đội bóng trong cách sắp xếp tìm được.

### Hạn chế

* Có 30% số test có n ≤ 9.

## Ví dụ

```

Dữ liệu
3
010
000
110

Kết quả
3 1 2

```

## Hướng dẫn 

[http://viahold.com/1QQK](http://viahold.com/1QQK)

## Code

[http://viahold.com/1QQf](http://viahold.com/1QQf)

