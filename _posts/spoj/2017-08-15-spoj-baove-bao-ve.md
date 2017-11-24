---
title: '[SPOJ] BAOVE - Bảo vệ'
author: Accepted Problems
date: 2017-08-15T13:45:18.993Z
thumbnail: '/img/uploads/[spoj]baove.jpg'
tags:
  - spoj
  - flows
---
# Link đề gốc:

[http://vnoi.info/problems/show/BAOVE/](http://vnoi.info/problems/show/BAOVE/)

# Đề bài:

Một mạng lưới gồm N thành phố, và một số đường một chiều nối các cặp thành phố \(giữa hai thành phố có thể có nhiều đường nối một chiều\).Quân địch đang tập trung ở thành phố N, định tiến công ta ở thành phố 1, và chúng sẽ tiến công trên tất cả các con đường chưa được bảo vệ để tiến vào thành phố 1. Bộ chỉ huy ta cần xác định số quân ít nhất trên các con đường để chặn địch tiến về thành phố 1.

## Input

Dòng đầu ghi N \(N ≤ 5000\)Các dòng tiếp theo cho đến hết file, mỗi dòng một tả 1 đường gồm u, v, s cho biết có đoạn đường một chiều từ u đến v, và phải cần ít nhất s quân để chặn địch trên đường này. \(s ≤ 65000\)Có không quá 10000 đường.

## Output

Số quân ít nhất cần điều động

## Ví dụ

```
Input:
10
10 7 25050
6 1 12564
10 4 23916
5 1 61054
10 9 50950
9 1 35558
10 2 60941
3 1 22203
8 2 2853
5 7 31422
3 7 41491
8 7 27235
4 8 55965
8 6 41980
3 6 47707
2 3 45320
3 8 11237
7 6 38734
5 6 7561
3 5 8844
```


```
Output:
79169
```

# Solution:

Tham khảo tại: [http://viahold.com/2y8W](http://viahold.com/2y8W)

# Code:

Tham khảo tại: [http://viahold.com/2y6u](http://viahold.com/2y6u)



Code đã được nộp và AC trên SPOJ, sử dụng bộ dịch của C++11



