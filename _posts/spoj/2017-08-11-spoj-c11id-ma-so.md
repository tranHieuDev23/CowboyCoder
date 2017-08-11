---
title: '[SPOJ] C11ID - Mã số'
author: houtaru
date: 2017-08-11T14:01:27.849Z
thumbnail: '/img/uploads/[spoj] c11id.jpg'
tags:
  - spoj
  - implementation
---
# Link đề bài : [http://vn.spoj.com/problems/C11ID/](http://vn.spoj.com/problems/C11ID/)

# Đề bài :

Đất nước C11 sắp tiến hành cấp N mã số khác nhau cho N người dân để tiện việc quản lí. Để việc cấp mã số mang tính dân chủ, mỗi người dân được quyền chọn một số max và chính quyền sẽ cấp cho người đó một mã số là một số tự nhiên có giá trị từ 1 đến max.

Nhiệm vụ của bạn là đếm xem có bao nhiêu cách cấp mã số khác nhau cho N người này.

## Dữ liệu

Dòng 1: Số nguyên dương N.
Dòng i trong N dòng tiếp theo: Số nguyên dương maxi.
## Kết quả

Phần dư khi chia số cách cấp mã số khác nhau cho k. Với k là số nguyên tố nhỏ nhất lớn hơn 109.

## Giới hạn

1 ≤ N ≤ 10^5.
1 ≤ maxi ≤ 10^9.

## Ví dụ

```
Input 1:
2
1
3

Output 1:
2
```

```
Input 2:
4
4
4
4
4 
Output 2:
24 
```

```
Giải thích:
- Ví dụ 1: Có 2 cách cấp mã số là { 1, 2 } hoặc { 1, 3 }.
- Ví dụ 2: Số cách cấp mã số là số hoán vị của tập (1, 2, 3, 4).
```

# Solution : [http://viahold.com/1Xd7](http://viahold.com/1Xd7)

# Code : [http://viahold.com/1XeB](http://viahold.com/1XeB)

