---
title: '[SPOJ] JOBSET - VOI 2014 - Chọn công việc'
author: Nicky.Rio
date: 2017-08-07T14:28:35.334Z
thumbnail: /img/uploads/JOBSET.jpg
tags:
  - spoj
  - max-flow
---
# Link gốc
[http://vnoi.info/problems/show/JOBSET/](http://vnoi.info/problems/show/JOBSET/)
# Đề bài
Công ty xây dựng SVI phải lựa chọn các dự án cần thực hiện để lợi nhuận đem lại là nhiều nhất. Công ty có một danh sách gồm n dự án đánh số từ 1 đến n. Sau khi công ty rà soát năng lự thực hiện các dự án, công ty đưa ra bảng đánh giá hiệu quả (có thể là lợi nhuận hoặc thua lỗ) từ việc thực hiện dự án i là pi (nếu pi &gt; 0 đó là lợi nhuận, ngược lại nếu pi &lt; 0 thì đó là thua lỗi phải chị từ việc thực hiện dự án i, |pi| &lt; 10^6). Việc lựa chọn các dự án cần thực hiện để lợi nhuận đem lại là lớn nhất không phải là đơn giản bời vì công ty không thể chi lựa chọn các công việc đem lại lợi nhuận để thực hiện. Có một danh sách gồm m điều kiện liên quan đến việc lựa chọn thực hiện các dự án. Điều kiện thứ j yêu cầu: "Nếu thực hiện dự án uj thì phải thực hiện dự án vj", j = 1, 2, .., m. Một tập con các dự án được gọi là lựa chọn được nếu mỗi dự án trong nó luôn thỏa mãn các điều kiện trong danh sách.

## Yêu cầu

Hãy giúp công ty tìm tập các dự án lựa chọn được mà việc thực hiện chúng đem lại tổng hiệu quả lớn nhất.

## Input

* Dòng đầu ghi một số nguyên dương n
* Dòng thứ hai ghi n số nguyên tương ứng là tính hiệu quả của từng công việc.
* Dòng thứ bai ghi một số nguyên dương m (m &lt;= 10^4).
* Dòng thứ j trong số m dòng tiếp theo ghi hai số nguyên dương uj và vj chỉ sự ràng buộc rằng nếu thực hiện công việc uj thì phải thực hiện công việc vj.

## Output

Ghi ra một số nguyên là tổng hiệu quả của tập các dự có thể án thực hiện tìm được. Ghi ra số 0 nếu như không chọn dự án nảo cả.

## Giới hạn

* 30% số test có n &lt;= 20.
* 30% số test khác có n &lt;= 100.
* 40% số test còn lại có n &lt;= 500.

## Example
**Input**
```
6
10 4 -5 3 -1 -2
4
2 3
2 5
6 5
4 3
```
**Output**
```
11
```
# Solution
[http://viahold.com/BW4](http://viahold.com/BW4)
# Code mẫu
[http://viahold.com/BOl](http://viahold.com/BOl)
