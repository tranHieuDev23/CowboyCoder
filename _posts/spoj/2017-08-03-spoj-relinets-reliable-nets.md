---
title: '[SPOJ] RELINETS - Reliable Nets'
author: houtaru
date: 2017-08-03T16:07:47.786Z
thumbnail: /img/uploads/549705.png
tags:
  - spoj
  - bitmask
  - dsu
  - graph
---
## Link đề bài : [http://www.spoj.com/problems/RELINETS/](http://www.spoj.com/problems/RELINETS/)
## Đề bài :
Cho đồ thị n đỉnh m cạnh mỗi cạnh có trọng số c. Bạn phải tạo 1 đồ thị sao cho bỏ đi 1 cạnh bất kì đồ thị vẫn liên thông. trọng số của đồ thị = tổng các trọng số cạnh. Tính trọng số bé nhất của đồ thị đảm bảo yêu cầu bài toán.

# Input :
Gồm nhiều test case:
n, m - số đỉnh và số cạnh. m = n = 0 => kết thúc bộ test.
m dòng tiếp theo, u - v - w là cạnh nối đỉnh u - v có trọng số w
# Output :
Mỗi test case gồm 1 dòng : Nếu có đáp án thì xuất : "The minimal cost for test case p is c." - p là thứ tự của test case, c là đáp án của bài toán. Ngược lại, xuất : "There is no reliable net possible for test case p.".

# Giới hạn :
n <= 15, m <= 20

# Solution : [http://dataurbia.com/5x3](http://dataurbia.com/5x3)
# Code : [http://dataurbia.com/5y8](http://dataurbia.com/5y8)
