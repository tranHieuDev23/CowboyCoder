---
title: '[SPOJ] CHEER - Động viên đàn bò'
author: itsjustwinds
date: 2017-08-09T08:26:00.357Z
thumbnail: /img/uploads/CHEER_graph.jpg
tags:
  - graph
  - spoj
---
# Đề: [http://vnoi.info/problems/show/CHEER/](http://vnoi.info/problems/show/CHEER/)

Bác John dạo này lười đến nỗi không muốn bảo trì các con đường dẫn bác đến thăm N \(5 &lt;= N &lt;= 10,000\) cánh đồng \(đánh số từ 1 đến N\) nữa. Mỗi cánh đồng là nơi ở của một cô bò. Bác John có kế hoạch loại bỏ nhiều nhất P \(N-1 &lt;= P &lt;= 100,000\) con đường sao cho các cánh đồng vẫn liên thông.

Ban phải xác định N-1 con đường cần giữ lại.

Đường nối hai chiều j nối giữa cánh đồng Sj và Ej\(1 &lt;= Sj&lt;= N; 1 &lt;= Ej&lt;= N; Sj\# Ej\) và cần Lj\(0 &lt;= Lj&lt;= 1000\) thời gian để di chuyển. Không có hai cánh đồng nào được nối trực tiếp bởi nhiều hơn một con đường.

Đàn bò buồn vì hệ thống giao thông của chúng sắp bị rút gọn. Bạn phải thăm mỗi cô bò ít nhất một lần trong ngày để động viên. Mỗi lần thăm cánh đồng i \(dù chỉ đi ngang qua\), bạn phải trò chuyện với cô bò trong thời gian Ci\(1 &lt;= Ci&lt;= 1000\).

Bạn sẽ nghỉ lại đêm trên cùng một cánh đồng \(bạn sẽ được chọn\) cho đến khi đàn bò đều đã hết bị suy sụp. Bạn sẽ trò chuyện với cô bò trong cánh đồng mà bạn nghỉ lại ít nhất 2 lần vào buổi sáng thức dậy và vào buổi tối khi trở về nghỉ.

Giả dụ bác John theo lời khuyên của bạn giữ lại một số con đường và bạn sẽ chọn cánh đồng tối ưu nhất để nghỉ lại, hãy xác định thời gian nhỏ nhất bạn cần để thăm tất cả đàn bò ít nhất một lần trong ngày.

## Dữ liệu

* Dòng 1: Hai số nguyên N và P cách nhau bởi khoảng trắng

* Dòng 2..N+1: Dòng i+1 chứa một số nguyên duy nhất Ci

* Dòng N+2..N+P+1: Dòng N+j+1 chứa ba số nguyên phân biệt: Sj, Ej và Lj

## Kết quả

* Dòng 1: Một số nguyên duy nhất, tổng thời gian cần để thăm tất cả đàn bò \(bao gồm hai lần thăm cô bò ở nơi mà bạn nghỉ\).

## Ví dụ

```
Dữ liệu:
5 7
10
10
20
6
30
1 2 5
2 3 5
2 4 12
3 4 17
2 5 15
3 5 6
4 5 12

Kết quả:
176
```

# Hướng dẫn

[http://viahold.com/n0j](http://viahold.com/n0j)

# Code

[http://viahold.com/n14](http://viahold.com/n14)
