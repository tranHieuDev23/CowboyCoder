---
title: '[SPOJ] C11BC1 - The country of heaven'
author: G
date: 2017-08-10T13:20:49.949Z
thumbnail: '/img/uploads/[spoj] c11bc1.jpg'
tags:
  - spoj
  - dp
  - math
---
# Link đề gốc : <http://vn.spoj.com/problems/C11BC1/>.

# Đề bài :
Một đất nước có N thành phố, mỗi thành phố được đặc trưng bởi 2 con số: A\[i\] và B\[i\] \(trong đó: A\[i\] là khả năng tăng trưởng của thành phố đó và B\[i\] là “chỉ số ngôn ngữ” của thành phố đó\). Một “liên minh” là 1 tập hợp gồm k thành phố trong N thành phố của đất nước \(k &lt;= N\) và có ít nhất 2 thành phố khác nhau về chỉ số ngôn ngữ. “Khả năng liên minh” của k thành phố trong 1 liên minh được tính bằng tích các khả năng tăng trưởng của k thành phố đó. Khả năng tăng trưởng của đất nước sẽ được tính bằng tổng tất cả các khả năng liên minh của các liên minh, và tất cả các liên minh này đều khác nhau.

Ví dụ 1 liên minh gồm 5 thành phố là: 1, 4, 2, 5, 6 thì khả năng liên minh sẽ là A\[1\]\*A\[4\]\*A\[2\]\*A\[5\]\*A\[6\].

Hai liên minh được gọi là khác nhau nếu tồn tại "ít nhất" một thành phố có trong liên mình này mà không có trong liên minh kia.

# Input

Dòng đầu gồm 2 số n và k \(2&lt;= n &lt;= 10^5, 2 &lt;= k &lt;= 50\)

N dòng tiếp theo: mỗi dòng gồm 2 số A\[i\] và B\[i\] \(A\[i\] &lt;= 1000 và B\[i\] &lt;= 10^9\)

# Output

Gồm 1 dòng duy nhất: Khả năng tăng trưởng của đất nước theo module 790972.

# Example

```
Input:            
5 3            
4 1
6 4
5 3
2 2
3 5

Output:            
580
```

Time limit đã được thay đổi, những ai code chưa chuẩn thì code lại với cách tối ưu hơn.

# Solution:
[Here](http://viahold.com/1D4C)
# Code :
[Here](http://viahold.com/1CWh)

