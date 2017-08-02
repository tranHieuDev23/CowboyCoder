---
title: '[SPOJ] JEWELNB - Trang sức'
author: Nicky.rio
date: 2017-08-02T09:47:02.679Z
thumbnail: /img/uploads/JEWELNB.jpg
tags:
  - spoj
  - IT
---
# Link bài gốc 

[http://vn.spoj.com/problems/JEWELNB/](http://vn.spoj.com/problems/JEWELNB/)

# Đề bài

Các thương nhân kinh doanh đồ trang sức tại các địa điểm dọc nước ta từ Bắc xuống Nam. Trong đó, các địa điểm buôn bán được đánh số từ 1 đến 𝑛 dọc theo nước ta. Tùy thuộc vào nhu cầu mua mà giá của các đồ trang sức thay đổi theo từng ngày. Qua thống kê, người ta biết hiện có 𝑚 loại đồ trang sức khác nhau được bán trong các ngày vừa qua, trong đó loại thứ 𝑖 được biết với các thông tin như sau:

Ngày đầu tiên, đồ trang sức 𝑖 được bán từ địa điểm 𝑠𝑖.

Ngày cuối cùng, đồ trang sức 𝑖 sẽ được bán đến địa điểm 𝑒𝑖
(1 ≤ 𝑠𝑖 ≤ 𝑒𝑖 ≤ 𝑛)

Mỗi ngày thương nhân sẽ chuyển địa điểm bán sang địa điểm kế tiếp theo hướng xuống dưới phía Nam.

Như vậy, các địa điểm bán đồ trang sức 𝑖 sẽ là: 𝑠𝑖, 𝑠𝑖 + 1, … , 𝑒𝑖 − 1, 𝑒𝑖

Ngày đầu tại vị trí 𝑠𝑖, giá chào bán của nó là 𝑣𝑖(1 ≤ 𝑣𝑖 ≤ 10^9)

Mỗi ngày giá loại trang sức 𝑖 sẽ cộng thêm một lượng là 𝑑𝑖
(|𝑑𝑖| ≤ 10^9). 
Tức là, giá tại địa điểm 𝑠𝑖 là 𝑣𝑖, giá tại 𝑠𝑖 + 1 là 𝑣𝑖 + 𝑑𝑖 ,…, giá tại 𝑒𝑖 là 𝑣𝑖 + (𝑒𝑖 − 𝑠𝑖) ∗ 𝑑𝑖.

KHUONGND là một nhà thống kê thị trường và anh ta muốn nhờ bạn cho biết giá đồ trang sức cao nhất
được bán tại tất cả các địa điểm dựa vào thông tin của các đồ trang sức đã biết
## Dữ liệu: 
* Dòng 1 chứa hai số nguyên dương 𝑛, 𝑚 ≤ 2.10^5
* 𝑚 dòng tiếp theo, dòng thứ 𝑖 chứa bốn số nguyên dương 𝑠𝑖, 𝑒𝑖, 𝑣𝑖 và 𝑑𝑖 lần lượt thể hiện thông tin của loại đồ trang sức lần lượt là vị trí bán ban đầu 𝑠𝑖, vị trí bán kết thúc 𝑒𝑖, giá chào bán ban đầu 𝑣𝑖 và lượng giá bán thay đổi 𝑑𝑖 theo mỗi ngày. 
Dữ liệu vào đảm bảo giá bán các loại đồ trang sức luôn dương.
Các số trên một dòng của input file được ghi cách nhau bởi dấu cách

## Kết quả: 
Ghi ra 𝑛 dòng, dòng thứ 𝑖 ghi một số nguyên duy nhất là giá đồ trang sức đắt nhất bán tại vị trí 𝑖, nếu tại ví trí 𝑖 không có đồ trang sức nào được bán thì dòng 𝑖 ghi số 0

## Ví dụ
**Input** 
```
6 4
4 4 3 1
1 2 5 1
5 6 1 1
6 6 1 1
```
**Output**
```
5
6
0
3
1
2
```
Giới hạn: 30% số điểm ứng với các test có 𝑛 × 𝑚 ≤ 5000^2

# Solution
[http://simizer.com/trY](http://simizer.com/trY)
# Code mẫu
[http://simizer.com/tYn](http://simizer.com/tYn)
