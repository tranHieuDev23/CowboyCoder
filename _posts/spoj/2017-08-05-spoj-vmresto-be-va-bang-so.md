---
title: '[SPOJ] VMRESTO - Bé và bảng số'
author: Nguyễn Minh Quân
date: 2017-08-05T09:47:30.508Z
thumbnail: /img/uploads/VMRESTO.jpg
tags:
  - spoj
  - implementation
---
# Link đề gốc: [http://vnoi.info/problems/show/VMRESTO/](http://vnoi.info/problems/show/VMRESTO/)

# Đề bài
Bé năm nay mới 7 tuổi, nhưng đã thể hiện niềm đam mê với Toán học. Bé rất thích chơi với những bảng sốN\*N - các hàng được đánh số từ0tớiN-1từ trên xuống dưới và các cột được đánh số từ0tớiN-1từ trái sang phải. Đặc biệt bé tỏ ra vô cùng hứng thú với những bảng số kỳ diệu - những bảng số có tổng mỗi hàng, tổng mỗi cột, tổng đường chéo chính và tổng đường chéo phụbằng nhau.

Đường chéo chính gồm những ô nằm trên hàngi, cộti. Đường chéo phụ gồm những ô nằm trên hàngi, cộtN-i-1.

Ví dụ. Xét bảng 3\*3:

2 9 4

7 5 3

6 1 8

Bảng này có tổng của mỗi hàng là:

* 2 + 9 + 4 = 15
* 7 + 5 + 3 = 15
* 6 + 1 + 8 = 15

Tổng mỗi cột là:

* 2 + 7 + 6 = 15
* 9 + 5 + 1 = 15
* 4 + 3 + 8 = 15

Tổng đường chéo chính và đường chéo phụ là:

* 2 + 5 + 8 = 15
* 6 + 5 + 4 = 15

Vì tổng mỗi hàng, mỗi cột và 2 đường chéo đều bằng nhau và bằng 15, nên bảng số này được gọi là bảng số kỳ diệu.

Hôm nay, bé được cô tặng 1 bảng số kỳ diệuN\*N. Bé thích lắm. Nhưng để thử thách bé, cô đã xóa tất cả các số trên đường chéo từ góc trên trái xuống góc phải dưới \(đường chéo chính\). Bạn có thể giúp bé khôi phục lại bảng không?

## Input

Dòng đầu: Chứa số nguyên dươngN.

Ndòng tiếp, mỗi dòng chứa đúngNsố nguyên thể hiện bảng. Trong đó, số ở hàngi, cộti bằng 0 \(thể hiện số đã bị xóa\).

## Output

GồmNdòng, mỗi dòng chứa đúngNsố nguyên thể hiện bảng ban đầu.

## Giới hạn

* Trong tất cả các test, ta có 1&lt;N&lt;=100.
* Các số còn lại trong input có trị tuyệt đối không quá1012.
* Trong 20% test \(tương ứng với 20% số điểm\),Nlà sốchẵn.
* Trong 40% test \(tương ứng với 40% số điểm\), các số trong bảng ban đầu có trị tuyệt đối không quá2000.
* Trong quá trình thi, bài của bạn chỉ được chấm với test ví dụ, và nếu bạn ra kết quả đúng, điểm sẽ được hiển thị là 100.

# Solution

[Here](http://dataurbia.com/i8f)
# Code mẫu

[Here](http://dataurbia.com/i9B)



