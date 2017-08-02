---
title: '[SPOJ] LQDRACE - Race (IOI 2011)'
author: Nguyễn Minh Quân
date: 2017-08-02T09:18:47.272Z
thumbnail: /img/uploads/LQBRACE.jpg
tags:
  - spoj
  - ioi
  - centroid-decomposition
---
# Link đề gốc

[http://vn.spoj.com/problems/LQDRACE/](http://vn.spoj.com/problems/LQDRACE/)

# Đề bài

Kết hợp với IOI, thành phố Pattaya sẽ tổ chức cuộc đua: Olympic quốc tế về đua tốc độ (IOR) 2011.

Là nhà tổ chức, chúng ta phải tìm ra vòng đua tốt nhất cho cuộc thi tốc độ này.

Ở vùng Pattaya-Chonburi, có N thành phố được nối với nhau bởi mạng gồm N-1 đường cao tốc. Mỗi đường cao tốc đều cho phép đi theo cả hai chiều nối hai thành phố phân biệt và có độ dài đo bởi kilomet là số nguyên. Ngoài ra có đúng một đường đi giữa cặp hai thành phố bất kỳ. Nghĩa là, có đúng một cách đi từ một thành phố này đến một thành phố khác dọc theo dãy các đường cao tốc không qua bất cứ thành phố nào quá một lần.

IOR có qui tắc đặc biệt đòi hỏi vòng đua phải dài đúng K kilomet, bắt đầu và kết thúc ở hai thành phố phân biệt. Rõ ràng là không có đường cao tốc (và vì thế cũng không có thành phố) nào có thể được sử dụng quá một lần trên vòng đua để ngăn ngừa đụng độ. Để cực tiểu ảnh hưởng đến giao thông, vòng đua phải chứa một số ít nhất đường cao tốc có thể.

## Yêu cầu

Bạn hãy cho biết số lượng đường cao tốc nhỏ nhất trên vòng đua hợp qui tắc có độ dài đúng bằng K. Nếu không tìm được vòng đua như vậy, kết quả sẽ là -1.

## Input

* Dòng đầu ghi số N, K.
* N-1 dòng tiếp theo mỗi dòng ghi 3 số u, v, l - đường cao tốc nối thành phố u và v, độ dài l (l <= 10^6).

## Output

* 1 số nguyên duy nhất là kết quả của bài toán.

## Giới hạn

* 1 ≤ N ≤ 2 \* 10^5
* 1 ≤ K ≤ 10^6

# Solution: 

[Here](http://simizer.com/svb)

# Code mẫu:

[Here](http://simizer.com/t0W)

