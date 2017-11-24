---
title: '[SPOJ] TRAKA - TRAKA'
author: houtaru
date: 2017-10-30T18:38:52.336Z
thumbnail: '/img/uploads/[spoj] traka.jpg'
tags:
  - spoj
  - shortest-path
  - geometry
---
# Link đề bài: [http://vnoi.info/problems/show/TRAKA/](http://vnoi.info/problems/show/TRAKA/)

# Đề bài:

Có N người thợ, M chiếc xe. Người thứ i hoàn thành việc sửa bộ phận xe mình phụ trách với tốc độ T[i]. Xe thứ j có độ rắc rối là F[j]. Thời gian người thứ i cửa xong bộ phận người i phụ trách trên xe j trong thời gian T[i] * F[j]. Các công việc được thực hiện theo thứ tự từ người 1 -> n. Người i làm việc liên tục ko đc dừng lại(tức là sửa xong xe i thì đến xe i + 1). Với mỗi thời điểm t, mỗi chiếc xe chỉ được sửa bởi tối đa 1 người. Tính thời điểm bé nhất để n người sửa xong m chiếc xe.

## Dữ Liệu:

- Dòng đầu gồm 2 số nguyên N (1 <= N <= 100 000) - số người thợ, M (1 <= M <= 100 000) - số chiếc xe cần sửa.
- Dòng thứ i trong n dòng tiếp theo là T[i] - tốc độ sửa xong bộ phận người i phụ trách.
- Dòng thứ j trong m dòng tiếp theo là F[j] - độ rắc rối của chiếc xe thứ j.

## Kết quả:

- Gồm 1 dòng là kết quả của bài toán.

## Ví dụ:

```
Input:

3 3
2
1
1
2
1
1

Output:

11
```

## Solution: [http://vializer.com/1MsR](http://vializer.com/1MsR)

## Code: [http://vializer.com/1K5j](http://vializer.com/1K5j)
