---
title: '[SPOJ] VOGAME - Trò chơi với những viên bi'
author: Nicky.Rio
date: 2017-08-10T13:40:25.370Z
thumbnail: /img/uploads/VOGAME.jpg
tags:
  - spoj
  - dp
---
# Link gốc
[http://vn.spoj.com/problems/VOGAME/](http://vn.spoj.com/problems/VOGAME/)
# Đề bài
Cho một cái hộp có N viên bi đánh số từ 1 đến N có màu đỏ (màu 1) hoặc màu đen (màu 0). Màu của các viên bi được cho bởi dãy A gồm D số 0 hoặc 1:

* COLOR[i] = A[i] với 1 ≤i≤ D
* COLOR[i] = COLOR[i - 1]  XOR  COLOR[i - 2] XOR  COLOR[i - 3] XOR  ... XOR  COLOR[i - D] với i > D

Tuấn chơi một trò chơi như sau: Mỗi lượt Tuấn sẽ bốc ngẫu nhiên ra 2 viên bi bất kỳ từ hộp bi.

* Nếu 2 viên bi cùng màu thì bỏ 2 viên đó đi và lấy từ một hộp khác một viên đen bỏ lại vào hộp.
* Ngược lại, nếu 2 viên bi khác màu thì bỏ viên bi đen đi, giữ lại viên bi đỏ và cho lại vào hộp.

Bạn hãy giúp Tuấn tìm xem, liệu màu của viên bi cuối cùng còn trong hộp có phải là cố định hay không. Nếu cố định (đen hoặc đỏ), in ra màu đó. Còn nếu màu của viên bi cuối cùng không cố định in ra “MANY”.

## Input

Dòng đầu tiên ghi số nguyên T là số lượng bộ dữ liệu. Mô tả của mỗi bộ dữ liệu như sau: 

Dòng thứ nhất chỉ gồm hai số nguyên lần lượt là N và D

Dòng tiếp theo ghi D số 0 hoặc 1 mô tả dãy A(1..d)

## Output

In ra T dòng là kết quả của T bộ dữ liệu.

## Giới hạn
```
Trong tất cả các test, T≤ 5.

Subtask 1 (15% số điểm)

* 1 ≤ D = N ≤ 20

Subtask 2 (25% số điểm)

* 1 ≤ D = N ≤ 105

Subtask 3 (30% số điểm)

* 1 ≤ D ≤ 20
* 10^5 ≤ N ≤ 10^9

Subtask 4 (30% số điểm)

* 1 ≤ D ≤ 10^5
* 10^5 ≤ N ≤ 10^9
```
## Ví dụ
**Input**
```
3
2 2
1 1
2 2
0 0
2 2
1 0
```
**Output**
```
0
0
1
```
## Giải thích
```
Bộ dữ liệu đầu tiên

Trong đó có hai viên bi đỏ thì khi Tuấn bốc hai viên bi này lên. Theo quy tắc vì chúng cùng màu nên Tuấn sẽ bỏ 2 viên bi đó đi và cho lại vào hộp viên bi màu đen(màu 0).

Bộ dữ liệu thứ hai
 
Tương tự như bộ dữ liệu đầu tiên nhưng là hai viên bi màu đen. Tuấn cũng theo quy tắc và bỏ hai viên bi đen đó đi và sau đó cho lại vào hộp viên bi màu đen(màu 0).

Bộ dữ liệu thứ ba

Tuấn bốc hai viên bi từ trong hộp ra thì trong đó có một viên bi đỏ và một viên bi đen. Tuấn bỏ viên bi đen đi và chỉ giữ lại viên bi màu đỏ (màu 1) và cho viên đỏ lại vào hộp.
```

# Solution
[http://viahold.com/1DkR](http://viahold.com/1DkR)
# Code mẫu
[http://viahold.com/1DSg](http://viahold.com/1DSg)





