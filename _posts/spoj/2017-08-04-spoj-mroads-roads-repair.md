---
title: '[SPOJ] MROADS - Roads Repair'
author: Nicky.Rio
date: 2017-08-04T13:08:44.374Z
thumbnail: /img/uploads/MROADS.jpg
tags:
  - spoj
  - tree
  - dfs
  - deque
  - binary-search
  - dp
---
# Link gốc
[http://vnoi.info/problems/show/MROADS/](http://vnoi.info/problems/show/MROADS/)
# Đề bài
Có N thành phố và N-1 cặp đường nối chúng, có duy nhất 1 đường nối 2 thành phố khác nhau.

Đường đã bị xuống cấp và với mỗi đường ta biết 2 số A, B : A(s) thời gian để đi qua đường này và B(s) là thời gian ít nhất để đi qua đường này nếu nâng cấp hết cả đường.

Có 1 lượng tiền đầu tư để sửa đường, với mỗi đoạn đường, kết quả sẽ tỉ lệ với lượng tiền đầu tư. Đầu tư 1 euro cho 1 đoạn đường sẽ giảm thời gian trên đoạn đường đó đi 1s. Tuy nhiên nó không thể giảm quá thời gian tối thiểu B của đoạn đường này.

Cần phân bố lượng tiền trên cho các đoạn đường khác nhau để thời gian cần thiết đi từ thành phố 1 tới thành phố xa nhất (đi mất nhiều thời gian nhất sau khi thực hiện mọi sửa chữa) là nhỏ nhất có thể.

Xác định thời gian nhỏ nhất này.

## Input
Dòng đầu gồm 2 số nguyên N và K, 2 ≤ N ≤ 100 000, 0 ≤ K ≤ 1 000 000, số thành phố và lượng tiền (euros)

Sau đó là N-1 dòng, mỗi dòng 4 số nguyên X, Y, A và B, 0 ≤ B ≤ A ≤ 10 000. Nghĩa là có đường đi từ nối X và Y với 2 thông tin A và B như trên.

## Output

Thời gian nhỏ nhất cần tìm theo yêu cầu đề bài.

## Sample
**Input 1**
```
3 200 
1 2 200 100 
2 3 450 250
```
**Output 1**
```
450
```
**Input 2**
```
5 11 
1 2 10 5 
1 3 3 2 
1 4 9 6 
3 5 7 3
```
**Output 2**
```
6
```
**Input 3**
```
11 12 
1 2 7 5 
1 3 20 15 
2 4 10 8 
2 5 5 3 
2 6 6 2 
4 7 3 0 
4 8 7 2 
5 9 8 4 
5 10 9 8 
5 11 6 5 
```
**Output 3**
```
17
```

# Solution
[http://dataurbia.com/Pgu](http://dataurbia.com/Pgu)
# Code mẫu
[http://dataurbia.com/PEA](http://dataurbia.com/PEA)

