---
title: '[SPOJ] BEADSNB - Chuỗi Ốc'
author: Nicky.Rio
date: 2017-08-02T09:30:54.702Z
thumbnail: /img/uploads/BEADSNB.jpg
tags:
  - spoj
  - dp
---
# Link gốc : 
[http://vn.spoj.com/problems/BEADSNB/](http://vn.spoj.com/problems/BEADSNB/)

# Đề bài:
Biển Đà Nẵng được nhiều du khách biết đến như một trong những điểm nghỉ ngơi lý tưởng và được tạp
chí Forbes bình chọn là một trong những bãi biển đẹp nhất thế giới. Các bãi tắm có độ dốc lớn, nước
trong xanh thích hợp cho những du khách muốn thưởng thức các loại hình dịch vụ giải trí nghỉ dưỡng,
câu cá, lướt ván, lặn ngắm san hô, du thuyền,..
Trong một đợt đi du lịch ở Đà Nẵng, sáng sớm DONG3D thường đi dạo dọc bờ biển và nhặt những vỏ ốc
rồi xâu chúng lại thành một chuỗi. Nguyên tắc tạo chuỗi ốc của DONG3D như sau: Ban đầu từ chuỗi rỗng,
không có vỏ ốc; khi gặp một vỏ ốc mới, có thể lấy để xâu vào một trong hai đầu của chuỗi hoặc hoặc bỏ
đi không lấy; cuối cùng nhận được một chuỗi vỏ ốc mà tính từ đầu chuỗi đến cuối chuỗi, các vỏ ốc có kích
thước tăng dần và gồm càng nhiều vỏ ốc càng tốt.

## Yêu cầu: 
Cho trước dãy 𝑎1, 𝑎2, … , 𝑎𝑛 là kích thước của các vỏ ốc mà DONG3D lần lượt gặp khi đi dọc bờ
biển, hãy tìm cách nhặt và xâu chuỗi để được chuỗi gồm nhiều vỏ ốc nhất.

## Dữ liệu: 
Vào từ file văn bản BEADS.INP
* Dòng 1 chứa số nguyên dương 𝑛 ≤ 10^5
* Dòng 2 chứa 𝑛 số nguyên dương 𝑎1, 𝑎2, … , 𝑎𝑛 (∀𝑖: 𝑎𝑖 ≤ 10^9
) cách nhau bởi dấu cách.

## Kết quả: 
Ghi ra file văn bản BEADS.OUT một số nguyên duy nhất là số lượng vỏ ốc trong chuỗi tạo được.
## Ví dụ
**Input**

```
5
4 4 5 3 1
```
**Output**
```
4
```
* 40% số điểm ứng với các test có 𝑛 ≤ 20
* 30% số điểm ứng với các test có 𝑛 thỏa mãn 20 ≤ 𝑛 ≤ 1000
* 30% số điểm ứng với các test có 𝑛 thỏa mãn 1000 ≤ 𝑛 ≤ 10^5

# Solution
[http://simizer.com/t64](http://simizer.com/t64)

# Code mẫu
[http://simizer.com/tJ0](http://simizer.com/tJ0)

