---
title: '[SPOJ] ROADS - Roads'
author: Accepted Problems
date: 2017-08-11T15:02:32.518Z
thumbnail: '/img/uploads/[spoj]roads.jpg'
tags:
  - spoj
  - graph
---
## Link đề gốc:

http://vn.spoj.com/problems/ROADS/

## Đề bài:

Có N thành phố 1..N nối bởi các con đường một chiều. Mỗi con đường có hai giá trị: độ dài và chi phí phải trả để đi qua. Bob ở thành phố 1. Bạn hãy giúp Bob tìm đường đi ngắn nhất đến thành phố N, biết rằng Bob chỉ có số tiền có hạn là K mà thôi.

### Dữ liệu

Dòng đầu tiên ghi t là số test. 

Với mỗi test, dòng đầu ghi K \(0 ≤ K ≤ 10000\). 

Dòng 2 ghi N, 2 ≤ N ≤ 100. 

Dòng 3 ghi R, 1 ≤ R ≤ 10000 là số đường nối. 

Mỗi dòng trong N dòng sau ghi 4 số nguyên S, D, L, T mô tả một con đường nối giữa S và D với độ dài L \( 1 ≤ L ≤ 100\) và chi phí T \(0 ≤ T ≤ 100\). Lưu ý có thể có nhiều con đường nối giữa hai thành phố.

### Kết quả

Với mỗi test, in ra độ dài đường đi ngắn nhất từ 1 đến N mà tổng chi phí không quá K. Nếu không tồn tại, in ra -1.

### Ví dụ

```
Dữ liệu
2
5
6
7
1 2 2 3
2 4 3 3
3 4 2 4
1 3 4 1
4 6 2 1
3 5 2 0
5 4 3 2
0
4
4
1 4 5 2
1 2 1 0
2 3 1 1
3 4 1 0
```


```
Kết quả
11
-1
```

## Solution:

Tham khảo tại: [http://viahold.com/1t7x](http://viahold.com/1t7x)

## Code:

Tham khảo tại: [http://viahold.com/1Z4I](http://viahold.com/1Z4I)







