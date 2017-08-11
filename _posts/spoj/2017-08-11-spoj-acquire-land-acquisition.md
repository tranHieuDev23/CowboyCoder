---
title: '[SPOJ] ACQUIRE - Land Acquisition'
author: houtaru
date: 2017-08-11T11:14:17.016Z
thumbnail: '/img/uploads/[spoj] acquire.png'
tags:
  - spoj
  - dp
  - convex-hull
---
# Link đề bài : [http://www.spoj.com/problems/ACQUIRE/](http://www.spoj.com/problems/ACQUIRE/)

# Đề bài :

Cho N(N≤50000) hình chữ nhật khác nhau về hình dạng, mục tiêu của bài toán là phải lấy được tất cả hình chữ nhật. Một tập hình chữ nhật có thể thu được với chi phí bằng tích của chiều dài dài nhất và chiều rộng dài nhất. Chúng ta cần phân hoạch tập các hình chữ nhật này một cách khôn khéo sao cho tổng chi phí có thể được tối thiểu hóa và tính chi phí này. Hình chữ nhật không thể được xoay (đổi chiều dài và chiều rộng).

## Input :

- Dòng đầu là số N.
- N dòng tiếp theo, mỗi dòng là 2 số w, l lần lượt là chiều dài và chiều rộng của các hình chữ nhật.

## Output :

- Gồm 1 dòng là tổng chi phí bé nhất.

```

Input :

4
100 1
15 15
20 5
1 100

Output :

500

```

## Giải thích : 

Chia làm 3 phần là (1), (2, 3), (4) <=> 100 x 1 + 20 x 15 + 1 x 100 = 500

## Solution : [http://viahold.com/1V3Z](http://viahold.com/1V3Z)

## Code : [http://viahold.com/1V48](http://viahold.com/1V48)
