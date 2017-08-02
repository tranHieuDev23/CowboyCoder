---
title: '[SPOJ] VMKEY - Thế giới năm 1000003'
author: Nguyễn Minh Quân
date: 2017-08-02T13:18:12.645Z
thumbnail: /img/uploads/VMKEY.jpg
tags:
  - spoj
  - brute-force
---
# Link bài gốc

[http://vn.spoj.com/problems/VMKEY/](http://vn.spoj.com/problems/VMKEY/)

# Đề bài

Nếu là một người ưa phát minh, chắc hẳn bạn sẽ cảm thấy thế giới năm 1000003 vô cùng nhàm chán. Lúc này, tất cả mọi phát minh mà con người từng mơ ước tới đều đã trở thành hiện thực. Ô tô bay, nhà bay, thành phố bay... đã xuất hiện nhiều nhan nhản. Tất cả mọi người sống trong những ngôi nhà thông minh được điều khiển bởi giọng nói, ánh mắt hoặc suy nghĩ, với sự hỗ trợ của các hệ thống máy tính hiện đại nhất. Con người có thể di chuyển tức thời giữa không gian (giữa các hành tinh ở cách nhau hàng nghìn năm ánh sáng) và thời gian - điều này đã góp phần khiến cho dân số thế giới tăng với tốc độ chóng mặt, vượt qua con số 10001000 vào năm 1000003.

Lúc này, những chiếc SmartPhone đã trở nên lỗi thời, do chúng không chịu được áp lực quá lớn khi đi qua cổng dịch chuyển tức thời hoặc khi đi vào các cỗ máy thời gian. Tất cả mọi người đều dùng điện thoại Nokia.

Do dân số thế giới đã tăng vượt mốc 10001000, những dãy số điện thoại cũng đã dài tới hàng trăm nghìn chữ số. Điều này đã khiến cho việc bấm phím số điện thoại trở nên ác mộng. Trước tình trạng này, hãng điện thoại Nokia đã đưa ra tính năng mới, cho phép bạn có thể thay đổi vị trí các phím số trên bàn phím, để bạn có thể bấm số điện thoại một cách nhanh nhất có thể.

Thời gian để bạn bấm số điện thoại bằng tổng thời gian di chuyển của ngón tay bạn giữa các phím số liên tiếp trong dãy số. Thời gian này đúng bằng khoảng cách Manhattan giữa 2 phím số: Nếu phím số **A** ở dòng **i**, cột **j**, và phím số **B** ở dòng **u**, cột **v**, thì khoảng cách Manhattan giữa 2 phím số được tính theo công thức:

**dist(A, B) = |i - u| \+ |j - v|** 

Chẳng hạn, bạn muốn gọi số 357468, nếu sử dụng bàn phím cổ điển:

1234567890

bạn sẽ mất tổng thời gian là;

dist(3, 5) \+ dist(5, 7) \+ dist(7, 4) \+ dist(4, 6) \+ dist(6, 8)

= ( |1 - 2| \+ |3 - 2| ) \+ ( |2 - 3| \+ |2 - 1| ) \+ ( |3 - 2| \+ |1 - 1| ) \+ ( |2 - 2| \+ |1 - 3| ) \+ ( |2 - 3| \+ |3 - 2|)

= 2 \+ 2 \+ 1 \+ 2 \+ 2

= 9

Nhưng nếu bạn thay đổi vị trí các phím số như hình dưới:

3578641290

 

thì bạn chỉ mất tổng thời gian là:

dist(3, 5) \+ dist(5, 7) \+ dist(7, 4) \+ dist(4, 6) \+ dist(6, 8)

= 1 \+ 1 \+ 1 \+ 1 \+ 1

= 5

**Chú ý**: Bạn chỉ được phép đổi chỗ các phím số, nghĩa là sau khi bạn thay đổi các phím số, mỗi phím phải tương ứng với duy nhất 1 số, và mỗi số phải tương ứng với duy nhất 1 phím. Các phím phải nằm đúng ở 10 vị trí chứa các số 0-9 trong bàn phím cổ điển. Các phím trên điện thọai được đánh số hàng từ trên xuống dưới, đánh số cột từ trái sang phải (xem ví dụ).

## Input

Gồm 1 dòng duy nhất chứa dãy số điện thoại

## Output

Gồm 1 dòng duy nhất ghi thời gian nhỏ nhất để bạn bấm dãy số điện thoại, sau khi đã thay đổi vị trí các phím số một cách hợp lý

## Giới hạn

* Độ dài dãy số điện thoại không quá 400,000

* Trong 20% số test, độ dài dãy số điện thoại không quá 625

# Solution

[http://simizer.com/wnW](http://simizer.com/wnW)

# Code mẫu

[http://simizer.com/wpZ](http://simizer.com/wpZ)

## 
