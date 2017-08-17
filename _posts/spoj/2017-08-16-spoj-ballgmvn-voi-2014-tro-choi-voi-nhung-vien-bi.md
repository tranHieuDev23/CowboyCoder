---
title: '[SPOJ] BALLGMVN - VOI 2014 - Trò Chơi Với Những Viên Bi'
author: rknguyen
date: 2017-08-16T08:51:40.291Z
thumbnail: /img/uploads/ballgmvn-image.jpg
tags:
  - spoj
  - geometry
---
# Link đề gốc:
[http://vn.spoj.com/problems/BALLGMVN/](http://vn.spoj.com/problems/BALLGMVN/)

# Đề bài:
Trong một hội thi Ballgame, ban tổ chức chuẩn bị một bàn lớn. Trên mặt bàn có n bi xanh đánh số từ 1 đến n và n bi đỏ đánh số từ n + 1 đến 2n. Mỗi trận đấu, các vận động viên sẽ chơi luân phiên nhau. Đến lượt chơi của mình, Hùng cần tìm 3 bi mà vị trí của chúng là thằng hàng hanu và sao cho trong số đó có hai bi đỏ và 1 bi xanh \(khi đó ăn được một bi đỏ\), hoặc là có hai bi xanh và 1 bi đỏ \(khi đó được ăn 1 bi xanh\).

# Yêu cầu
Cho biết tọa độ trên mặt phẳng tọa độ Đề-các của vị trí và màu của các bi hiện tại trên bàn, bạn hãy giúp Hùng chọn 3 bi để chơi.

## Input
* Dòng đầu ghi số nguyên dương n.
* Dòng thứ i trong số n dòng tiếp theo ghi hai số nguyên là hoành độ và tung độ trên mặt phẳng tọa độ Đề-các của vị trí đặt bi xanh với chỉ số i.
* Dòng thứ i trong số n dòng cuối cùng ghi hai số nguyên là hoàng độ và tung độ trên mặt phẳng tọa độ Đề-các của vị trí đặt bi đỏ với chỉ số n + i.
* Hoàng độ và tung độ không vượt quá 10^6, vị trí các bi là đôi một phân biệt.

## Giới hạn
* 30% số test có n &lt;= 2.
* 30% số test khác có n &lt;= 100.
* 40% số test còn lại có n &lt;= 1000.

## Output
Ghi ra 3 chỉ số của các viên bi mà Hùng cần chọn, nếu không thể chọn được 3 bi nào, ghi ra -1.

Nếu có nhiều đáp án, ghi ra một đáp án bất kì.

## Ví dụ
```
Input:
3
1 1
2 2
4 9
3 3
6 20
8 100
```

```
Output:
1 2 4
```

# Solution:
Tham khảo tại: [http://viahold.com/3a1P](http://viahold.com/3a1P)

# Code:
Tham khảo tại: [http://viahold.com/3a0b](http://viahold.com/3a0b)

