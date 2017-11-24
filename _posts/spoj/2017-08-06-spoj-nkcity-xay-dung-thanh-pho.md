---
title: '[SPOJ] NKCITY - Xây dựng thành phố'
author: rknguyen
date: 2017-08-06T06:26:14.562Z
thumbnail: /img/uploads/maxresdefault.jpg
tags:
  - spoj
  - kruskal
---
# Link bài gốc : [http://vnoi.info/problems/show/NKCITY/](http://vnoi.info/problems/show/NKCITY/)
# Đề bài :
Nước Anpha đang lập kế hoạch xây dựng một thành phố mới và hiện đại. 
Theo kế hoạch, thành phố sẽ có N vị trí quan trọng, được gọi là N trọng 
điểm và các trọng điểm này được đánh số từ 1 tới N. Bộ giao thông đã lập
 ra một danh sách M tuyến đường hai chiều có thể xây dựng được giữa hai 
trọng điểm nào đó. Mỗi tuyến đường có một thời gian hoàn thành khác 
nhau.

Các tuyến đường phải được xây dựng sao cho N trọng điểm liên thông 
với nhau. Nói cách khác, giữa hai trọng điểm bất kỳ cần phải di chuyển 
được đến nhau qua một số tuyến đường. Bộ giao thông sẽ chọn ra một số 
tuyến đường từ trong danh sách ban đầu để đưa vào xây dựng sao cho điều 
kiện này được thỏa mãn.

Do nhận được đầu tư rất lớn từ chính phủ, bộ giao thông sẽ thuê hẳn 
một đội thi công riêng cho mỗi tuyến đường cần xây dựng. Do đó, thời 
gian để hoàn thành toàn bộ các tuyến đường cần xây dựng sẽ bằng thời 
gian lâu nhất hoàn thành một tuyến đường nào đó.

## Yêu cầu
Giúp bộ giao thông tính thời gian hoàn thành các tuyến đường sớm nhất thỏa mãn yêu cầu đã nêu.

## Input
* Dòng đầu tiên chứa số N và M \(1 ≤ N ≤ 1000; 1 ≤ M ≤ 10000\).

* M tiếp theo, mỗi dòng chứa ba số nguyên u, v và t cho biết có thể xây 
dựng tuyến đường nối giữa trọng điểm u và trọng điểm v trong thời gian 
t. Không có hai tuyến đường nào nối cùng một cặp trọng điểm.

## Output

Một số nguyên duy nhất là thời gian sớm nhất hoàn thành các tuyến đường thỏa mãn yêu cầu đã nêu.

## Ví dụ
Input
```
5 7
1 2 2
1 5 1
2 5 1
1 4 3
1 3 2
5 3 2
3 4 4
```
Output
```
3
```

# Solution
Tham Khảo Tại : [http://dataurbia.com/1245](http://dataurbia.com/1245)
# Code 
Tham Khảo Tại : [http://dataurbia.com/120Q](http://dataurbia.com/120Q)

