---
title: '[SPOJ] METERAIN - Mưa thiên thạch'
author: Joker
date: 2017-08-01T00:28:08.412Z
thumbnail: /img/uploads/METERAIN-images.jpg
tags:
  - spoj
  - convex-hull
---
# Link bài gốc:

[http://vnoi.info/problems/show/METERAIN/](http://vnoi.info/problems/show/METERAIN/)

# Đề bài: 
Phú ông nhận được thông tin về một trận mưa thiên thạch sắp ập xuống trái đất. Không những thế, Phú ông còn biết tọa độ của vị trí điểm rơi của mỗi một thiên thạch. Phú ông nhờ Cuội xác định xem có bao nhiêu thiên thạch có thể rơi xuống cánh đồng của ông ta. Cánh đồng của Phú ông có dạng một hình đa giác lồi được xác định bởi danh sách các đỉnh được liệt kê theo thứ tự ngược chiều kim đồng hồ.

**Yêu cầu:** Xác định xem trong tập cho trước các điểm rơi của thiên thạch, có bao nhiêu điểm nằm trong cánh đồng của Phú ông. Các điểm nằm trên biên của cánh đồng không được tính là điểm nằm trong cánh đồng.

## Input

- Dòng đầu tiên là số nguyên n \(3 &lt;= n &lt;= 5000\) là số đỉnh của đa giác lồi mô tả cánh đồng của Phú ông.
- Mỗi dòng trong n dòng tiếp theo chứa cặp tọa độ của một đỉnh của đa giác lồi.- Dòng tiếp theo là số nguyên m \(2 &lt;= m &lt;= 5000\) - số thiên thạch rơi xuống.
- Mỗi dòng trong số m dòng cuối cùng chứa 2 số là tọa độ điểm rơi của một thiên thạch.Các tọa độ là các số nguyên có trị tuyệt đối không quá 10^6.

## Output

Ghi ra m dòng, mỗi dòng tương ứng với 1 điểm rơi của thiên thạch. Ghi "YES" nếu điểm rơi của thiên thạch nằm trong cánh đồng và ghi "NO" nếu trái lại.

# Ví dụ:

## Input:
```
4
2 4
8 4
6 8
4 6
4
3 5
4 7
5 5
6 7
```

## Output:
``` 
NO
NO
YES 
YES
```

# **Solution**:
Tham khảo tại: [http://simizer.com/SOh](http://simizer.com/SOh)

# **Code mẫu:**

Tham khảo tại: [http://simizer.com/OCo](http://simizer.com/OCo)













