---
title: ADS - Quảng cáo
author: Accepted Problems
date: 2017-08-03T00:49:18.192Z
thumbnail: '/img/uploads/[SPOJ]ADS.jpg'
tags:
  - spoj
  - dfs
---
##Link đề gốc

[http://vn.spoj.com/problems/ADS/](http://vn.spoj.com/problems/ADS/)

#Đề bài:

Nhân dịp Tết sắp đến công ty Jelly-for-Kids quyết định tăng cường việc quảng bá sản phẩm đến người tiêu dùng. Vì thế giám đốc marketing, ông Fruit-Jelly muốn gửi đi số lượng nhân viên tối đa có thể, làm nhiệm vụ tiếp thị tại đại lý trong thành phố

Trong thành phố có m con đường, n đại lý bán kẹo \(đánh số từ 1 đến n\). Mỗi con đường chỉ nối trực tiếp giữa 2 đại lý, và được ký hiệu bằng chỉ số của 2 đại lý mà nó nối. Đồng thời, giữa 2 đại lý bất kỳ có không quá 1 con đường nối chúng

Ông Fruit-Jelly nghĩ rằng, ông ta sẽ quản lý nhân viên dễ hơn nếu xếp mỗi người tiếp thị trên những hành trình có tính chất thứ tự. Tức là những đại lý bán kẹo trên hành trình đó thỏa các điều kiện sau

Có đường nối trực tiếp giữa 2 đại lý liên tiếp nhau trên hành trình

Từ một đại lý bất kỳ trong hành trình có thể đi qua tất cả các đoạn đường trong hành trình đó rồi trở về nơi xuất phát mà không đi qua đoạn đường nào quá một lần

Hành trình phân công cho mỗi nhân viên phải có ít nhất một đoạn đường chưa có nhân viên nào khác đi tiếp thị.

Mỗi nhân viên chỉ di chuyển trên hành trình mà anh ta được phân công. Hãy tính số lượng nhân viên tối đa mà ông Fruit-Jelly có thể xếp việc, và hành trình cụ thể mà mỗi người được xếp.

### Input

Dòng đầu là 2 số tự nhiên N và M \(N&lt;=2000\) \(M&lt;=5000\)

Trong M dòng tiếp theo, mỗi dòng ghi 2 số nguyên mô tả một đoạn đường, mỗi đoạn đường được mô tả bởi chỉ số của 2 đại lý mà nó nối.

### Output

Dòng đầu tiên ghi Q là số lượng nhân viên tối đa tìm được

#Ví dụ:

```
Input:
5 6
1 2
2 4
4 5
3 5
1 3
2 3
```

```
Output:
2
```

##Solution:

Tham khảo tại: [http://simizer.com/1955](http://simizer.com/1955)

##Code: 

Tham khảo tại: [http://simizer.com/18uO](http://simizer.com/18uO)


(Code đã được nộp và AC trên SPOJ, sử dụng bộ dịch của C++11)


