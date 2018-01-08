---
title: '[SPOJ] CATGO - Cắt gỗ'
author: houtaru
date: 2018-01-06T12:55:26.452Z
thumbnail: '/img/uploads/[spoj] - catgo.jpg'
tags:
  - spoj
  - dp
---
# Link đề bài: [http://vnoi.info/problems/CATGO/](http://vnoi.info/problems/CATGO/)

# Đề bài:
Giới hạn
Thời gian: 0.1s
Bộ nhớ: 1536MB
Mã nguồn: 50000 bytes
Ở một xưởng gỗ có rất nhiều đoạn gỗ thừa. Để đạt năng suất cao, người ta muốn tận dụng những thanh gỗ này. Tất nhiên giá trị của mỗi đoạn gỗ sẽ phụ thuộc vào độ dài của chúng. Tuy nhiên sự phụ thuộc này không đơn giản chỉ là sự phụ thuộc tuyến tính: các thanh gỗ càng dài càng có giá trị cao. Do đó, nếu cần thiết, người ta sẽ cắt các thanh gỗ này ra làm nhiều đoạn nhỏ hơn.

Người ta có một máy cắt, mỗi lần có thể cắt một thanh gỗ ra làm hai thanh có độ dài ngắn hơn. Do lưỡi cưa sẽ mòn dần trong quá trình cắt, chi phí của mỗi lần cắt sẽ được tính như sau: lần đầu sẽ mất 1VNĐ, lần thứ 2 sẽ là 2VNĐ, lần thứ 3 sẽ là 3VNĐ,...

Nhiệm vụ của bạn sẽ là tính lợi nhuận lớn nhất có thể thu được từ các đoạn gỗ thừa này.

## Dữ liệu

 - Dòng đầu ghi số N, số thanh gỗ thừa.
 - N dòng sau, mỗi dòng ghi một số nguyên dương là độ dài của một thanh gỗ.
 - Dòng tiếp theo ghi số M, số độ dài có giá trị.
 - M dòng tiếp theo, mỗi dòng ghi 2 số nguyên dương lần lượt là độ dài của một đoạn gỗ và giá trị thu được (tính bằng VNĐ) nếu ta có đoạn gỗ đó.

## Kết quả

Ghi ra một số duy nhất là lợi nhuận lớn nhất có được, đừng quên tính cả chi phí dùng để cắt gỗ.

## Giới hạn

 - 1 ≤ N ≤ 50.
 - 1 ≤ M ≤ 50.
 - Độ dài của một thanh gỗ không quá 50.
 - Giá trị thu được của một đoạn gỗ không quá 50.

## Ví dụ
```
Dữ liệu
2
3
4
2
1 10
2 11

Kết quả
55
```

## Solution: [http://brisktopia.com/9wDV](http://brisktopia.com/9wDV)
## Code: [http://brisktopia.com/9w0r](http://brisktopia.com/9w0r)
