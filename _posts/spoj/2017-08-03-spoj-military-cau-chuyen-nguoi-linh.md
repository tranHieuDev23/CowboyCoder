---
title: '[SPOJ] MILITARY - Câu chuyện người lính'
author: Nicky.Rio
date: 2017-08-03T13:54:08.747Z
thumbnail: /img/uploads/MILITARY.jpg
tags:
  - spoj
  - convex-hull
---
# Link gốc
[http://vn.spoj.com/problems/MILITARY/](http://vn.spoj.com/problems/MILITARY/)

# Đề bài

“Tôi vẫn nhớ chiến trường Điện Biên năm đó rất ác liệt, rất nhiều người lính đã ngã xuống. Tại vùng căn cứ này, địch cho xây dựng lô cốt, hàng rào dây thép gai rất nhiều , vòng trong nối vòng ngoài, tạo thành nhiều vòng bảo vệ … “Đó là dòng hồi tưởng của 1 người lính già đã từng tham gia chiến dịch Tây Bắc lịch sử. Lần theo những trang sử được ghi chép lại, người ta biết rằng tướng Đờ Cát lúc đầu chưa chọn vị trí để đặt sở chỉ huy mà tìm cách thiết lập các vòng bảo vệ bằng dây thép gai nối các cứ điểm lại với nhau, sau đó sẽ chọn đặt sở chỉ huy tại vị trí an toàn nhất là ở vị trí mà có nhiều vòng bảo vệ bao quanh nhất. Mỗi 1 vòng bảo vệ là 1 đa giác không tự cắt tạo thành bằng cách nối 1 số cứ điểm lại với nhau bằng dây thép gai, 1 cứ điểm thuộc về không quá 1 vòng bảo vệ, các vòng bảo vệ phải được thiết lập sao cho giữa 2 vòng bảo vệ bất kỳ X và Y thì phần diện tích chung của X và Y = Min( diện tích X, diện tích Y ) hoặc = 0. Trên mặt phẳng toạ độ, các cứ điểm được coi như các điểm có toạ độ nguyên. Bạn hãy xác định xem, sở chỉ huy của tướng Đờ Cát sẽ được bảo vệ tối đa bởi mấy vòng bảo vệ.

## Input
Dòng 1: số nguyên N là số cứ điểm. \( 1 ≤ N ≤ 4000 \).N dòng tiếp theo, dòng thứ i gồm 2 số nguyên xi, yi tương ứng là toạ độ của cứ điểm i . Các toạ độ đều là số nguyên dương ≤ 10000 .
## Output
Gồm 1 dòng duy nhất ghi ra số lượng vòng bảo vệ tối đa mà sở chỉ huy của tướng Đờ Cát có thể được bao bọc .
## Example
**Input**
```
4
100 100
200 100
100 200
300 300
```
**Output**
```
1
```
**Giải thích**
```
Ta nối cứ điểm 1, 2, 3, 4 lại tạo thành 1 vòng bảo vệ, đặt trụ sở chỉ huy bên trong thì ra được đáp án. Ngoài ra còn có các phương án khác là nối cứ điểm 1, 2, 3 tạo thành 1 vòng bảo vệ, nối cứ điểm 2, 3, 4 thành 1 vòng bảo vệ, … nhưng tất cả các phương án này thì khi chọn vị trí đặt trụ sở chỉ huy thì vẫn tối đa = 1.
```

# Solution
[http://dataurbia.com/3ww](http://dataurbia.com/3ww)

# Code mẫu
[http://dataurbia.com/3pY](http://dataurbia.com/3pY)
