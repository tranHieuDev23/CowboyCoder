---
title: '[SPOJ] QMAX - Giá trị lớn nhất'
author: La Hoàng Phong
date: 2017-08-06T04:31:51.249Z
thumbnail: /img/uploads/QMAX_Image.jpg
tags:
  - spoj
  - data-structure
---
# Link bài gốc : [http://vn.spoj.com/problems/QMAX/](http://vn.spoj.com/problems/QMAX/)
# Đề bài :
Cho một dãy gồm n phần tử có giá trị ban đầu bằng 0.

Cho m phép biến đổi, mỗi phép có dạng (u, v, k): tăng mỗi phần tử từ vị trí u đến vị trí v lên k đơn vị.

Cho q câu hỏi, mỗi câu có dạng (u, v): cho biết phần tử có giá trị lớn nhất thuộc đoạn [u, v]

## Giới hạn
n, m, q <= 50000

k > 0

Giá trị của một phần tử luôn không vượt quá 2^31-1
## Input
Dòng 1: n, m

m dòng tiếp theo, mỗi dòng chứa u, v, k cho biết một phép biến đổi

Dòng thứ m+2: p

p dòng tiếp theo, mỗi dòng chứa u, v cho biết một phép biến đổi

## Output

Gồm p dòng chứa kết quả tương ứng cho từng câu hỏi.

## Example
```
Input:
6 2
1 3 2
4 6 3
1
3 4
Output:
3
```

# Solution 
Tham Khảo Tại : [http://dataurbia.com/zzQ](http://dataurbia.com/zzQ)
# Code 
Tham Khảo Tại : [http://dataurbia.com/zrZ](http://dataurbia.com/zrZ)

