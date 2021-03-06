---
title: '[SPOJ] FLOW1 - Giao lưu'
author: Nicky.Rio
date: 2017-08-08T15:34:41.236Z
thumbnail: /img/uploads/FLOW1.jpg
tags:
  - spoj
  - max-flow
---
# Link gốc
[http://vnoi.info/problems/show/FLOW1/](http://vnoi.info/problems/show/FLOW1/)
# Đề bài
Cuộc thi giao lưu "Tết Ta Tin (TTT)" giữa hai đội Sư Phạm (SP) và Tổng Hợp (TH) có m bài toán tin học, mỗi đội có n học sinh tham dự. Các bài toán được đánh số từ 1 đến m và các học sinh của mỗi đội được đánh số từ 1 tới n.Học sinh của hai đội đều là những lập trình viên xuất sắc, tuy nhiên mỗi học sinh có thể giải quyết những bài toán thuộc sở trường của mình hiệu quả hơn những bài khác.Hãy giúp thầy My tổ chức cuộc thi theo thể thức sau:
* Chọn đúng n cặp đấu, mỗi cặp gồm 01 học sinh SP và 01 học sinh TH làm 01 bài toán trong số những bài toán này.
* Có đúng n bài toán được mang ra thi
* Học sinh nào cũng được tham gia
* Bài toán cho cặp đấu bất kỳ phải thuộc sở trường của cả hai thí sinh trong cặp

Biết rằng luôn tồn tại phương án thực hiện yêu cầu trên.

## Input

* Dòng 1: Chứa hai số n, m (1 ≤ n ≤ m ≤ 255)
* n dòng tiếp theo, dòng thứ i ghi danh sách các bài toán thuộc sở trường của học sinh SP thứ i.
* n dòng tiếp theo, dòng thứ j ghi danh sách các bài toán thuộc sở trường của học sinh TH thứ j.

Chú ý dùng **Eoln** chứ không dùng **SeekEoln**

## Output

Gồm m dòng, dòng thứ k ghi số hiệu thí sinh SP và số hiệu thí sinh TH trong cặp đấu bằng bài toán k, nếu bài toán k không được mang ra thi thì ghi vào dòng này hai số 0 .

## Example
**Input**
```
4 6
3 6
1 2
2 4
5
6
3 5 6
4
1 2 6
```
**Output**
```
2 4
0 0
0 0
3 3
4 2
1 1
```

# Solution
[http://viahold.com/YzF](http://viahold.com/YzF)
# Code mẫu
[http://viahold.com/YmZ](http://viahold.com/YmZ)

