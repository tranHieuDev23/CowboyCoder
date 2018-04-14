---
title: '[SPOJ] COMPUTER - Máy tính'
author: houtaru
date: 2017-10-14T02:52:05.440Z
thumbnail: '/img/uploads/[spoj]-computer.jpg'
tags:
  - spoj
  - dp
  - binary search
---
## Link đề bài : [http://vnoi.info/problems/show/COMPUTER/](http://vnoi.info/problems/show/COMPUTER/)

## Đề bài:
Công ty phần mềm XYZ mới mua x máy tính để bàn và y máy tính xách tay. Giá một chiếc máy tính để bàn là a đôla còn giá một chiếc máy tính xách tay là b đôla. Để tránh sự thắc mắc giữa các phòng ban, Tổng giám đốc đã đưa ra cách phân bổ các máy tính này về n phòng ban như sau:

Sắp xếp n phòng ban theo thứ tự về mức độ quan trọng của các phòng ban.
Tiến hành phân bổ các máy tính cho các phòng ban bảo đảm nếu phòng ban i có mức độ quan trọng nhỏ hơn mức độ quan trọng của phòng ban j thì tổng giá trị máy tính được phân bổ cho phòng ban i không được vượt quá tổng giá trị máy tính được phân bổ cho phòng ban j.
Phòng ban nhận được tổng giá trị máy tính nhỏ nhất là lớn nhất.
Là một lập trình viên giỏi nhưng lại thuộc phòng ban có mức độ quan trọng nhỏ nhất, Khanh muốn chứng tỏ tay nghề của mình với đồng nghiệp nên đã lập trình tính ra ngay được tổng giá trị máy tính mà phòng ban mình nhận được rồi mời bạn tính lại thử xem!

# Yêu cầu
Cho x, a, y, b, n. Hãy tính tổng giá trị máy tính mà phòng Khanh nhận được.

# Dữ liệu
Gồm 2 bộ dữ liệu, mỗi bộ trên một dòng, mỗi dòng chứa 5 số nguyên dương x, a, y, b, n (các số có giá trị không vượt quá 1000).

# Kết quả
Gồm hai dòng là mỗi dòng là đáp án tương ứng với bộ dữ liệu vào.

# Giới hạn
50% số test có x,a,y,b,n không vượt quá 100.

# Ví dụ
```bash
Dữ liệu:
3 300 2 500 2
4 300 3 500 2

Kết quả:
900
1300
```

# Solution: [http://yobuilder.com/8Yjv](http://yobuilder.com/8Yjv)
# Code: [http://yobuilder.com/8YmM](http://yobuilder.com/8YmM)
