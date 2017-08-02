---
title: '[SPOJ] NUCLEAR - Hai nhà máy điện nguyên tử'
author: Joker
date: 2017-08-02T02:52:03.452Z
thumbnail: /img/uploads/dien_hat_nhan_YMJI.jpg
tags:
  - spoj
  - data-structure
---
# Link đề bài gốc: 
[http://vn.spoj.com/problems/NUCLEAR/](http://vn.spoj.com/problems/NUCLEAR/)
# Đề bài:

Hai nhà máy điện nguyên tử sẽ được xây dựng tại Byteland trong tương lai gần. Nhà máy điện thứ nhất có bán kính nguy hiểm là R1 và nhà máy điện thứ hai có bán kính nguy hiểm là R2. Để tránh bị nhiễm phóng xạ, tất cả các hộ gia đình cách nhà máy thứ nhất <= R1 km hoặc cách nhà máy thứ hai <= R2 km sẽ phải chuyển chỗ ở.Hai nhà máy sẽ được xây dựng cũng như các hộ gia đình đều nằm trên mặt phẳng với hệ tọa độ Descartes vuông góc , trong đó khoảng cách giữa hai điểm (x1,y1) và (x2,y2) được tính theo công thức:

                                   sqrt(sqr(x1-x2)+sqr(y1-y2))

Có q đề án xây dựng, mỗi đề án đều phải cho biết bán kính nguy hiểm của mỗi nhà máy là một cặp giá trị . Nhiệm vụ của bạn là xác định số lượng gia đình phải chuyển chỗ ở ứng với mỗi đề án nếu đề án đó được thực thi.

# Dữ liệu:
- Dòng 1 chứa số nguyên dương N là số hộ gia đìnhN dòng tiếp, dòng i chứa hai số nguyên (xi,yi) là tọa độ  của một hộ gia đình.
- Dòng N+2 chứa 5 số nguyên ax,ay,bx,by là tọa độ của nhà máy thứ nhất, tọa độ của nhà máy thứ hai và số đề  án q.
- q dòng tiếp theo, dòng thứ j chứa hai số nguyên R1, R2 lần lượt là bán kính nguy hiểm của nhà máy thứ nhất và bán kính nguy hiểm của nhà máy thứ hai trong đề án thứ j.

Tất cả các số trong file dữ liệu đều là số nguyên không âm và không lớn hơn 2*10^5. Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

# Kết quả:
Ghi ra q dòng, dòng thứ j ghi một số nguyên duy nhất là số hộ gia đình phải chuyển chỗ ở nếu đề án thứ j được thực thi.

# Ví dụ:
### Input:
```
11

95 75

27 6

93 5

124 13

34 49

65 61

81 49

77 33

110 50

91 22

110 25

57 42 97 36 2

31 25

25 25

```

### Output:
```
7
7
```

### Hình ảnh cho ví dụ:
![undefined](/img/uploads/[spoj]NUCLEAR-example.jpg)

## Solution: 

Tham khảo tại: [http://simizer.com/nhx](http://simizer.com/nhx)

## Code: 
Tham khảo tại: [http://simizer.com/npX](http://simizer.com/npX)





