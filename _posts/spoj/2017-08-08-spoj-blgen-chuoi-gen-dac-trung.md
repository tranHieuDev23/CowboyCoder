---
title: '[SPOJ] BLGEN - Chuỗi gen đặc trưng'
author: G
date: 2017-08-08T15:37:41.266Z
thumbnail: '/img/uploads/[spoj] blgen.jpg'
tags:
  - dp
---
# Link đề gốc: <http://vn.spoj.com/problems/BLGEN/>.

# Đề bài:

Tế bào của một cá thể sinh vật ngoài hành tinh mới được phát hiện gồm rất nhiều gen, mỗi gen trong chuỗi gen của tế bào đều có số lượng nào đó các nucleotide \(ký hiệu là nu\). Các chuyên gia thường quan tâm chuỗi gen của mỗi cá thể dưới góc độ một chuỗi số lượng tương ứng các nu \(gọi tắt là chuỗi nu\), do đó chuỗi sẽ như là một dãy số nguyên dương đồng thời số số hạng của dãy này sẽ được gọi là độ dài của chuỗi. Mỗi gen được xem là đặc biệt nếu số nu của nó hoặc là bình phương của một số nguyên hoặc là lập phương của một số nguyên tố. Để nghiên cứu khả năng biến đổi gen của loài sinh vật nói trên, các nhà khoa học xem xét hai mẫu chuỗi nu của hai cá thể và quan tâm đến mức độ “giống nhau” giữa chúng theo cách tìm ra chuỗi con chỉ gồm các gen đặc biệt mà cùng xuất hiện ở cả hai chuỗi nu \(mỗi chuỗi con như vậy đều được gọi là chuỗi đặc trưng chung của hai chuỗi nu\). Lưu ý rằng, chuỗi con của một chuỗi nu X, là chuỗi thu được từ X bằng cách giữ nguyên tất cả hoặc loại bỏ đi một số nào đó các gen mà vẫn giữ thứ tự  xuất hiện trong chuỗi X.

## Yêu cầu :
Xác định độ dài lớn nhất L của chuỗi đặc trưng chung của hai chuỗi nu cho trước. 

## Dữ liệu vào :

* Dòng đầu ghi lần lượt các số hạng của chuỗi nu thứ nhất. 
* Dòng tiếp theo ghi lần lượt các số hạng của chuỗi nu thứ hai.
* Tất cả các số hạng của hai chuỗi đều nguyên dương và không vượt quá 10^19.
* Độ dài của mỗi chuỗi nu đều không vượt quá 1000.

## Kết quả:

Ghi ra  duy nhất một số nguyên L tìm được. 

# Ví dụ :  

## Input :

```
2 9 8 4 1 27 4 6

5 6 9 1 8 2 6 27 1 4
```

## Output :

```
4
```

\(Giải thích: L = 4, một trong các chuỗi đăc trưng chung là: 9, 1, 27, 4\) 

# Ràng buộc :
60% số test ứng với 60% số điểm của bài ứng với tình huống độ dài của hai chuỗi nu  không vượt 
 quá 255 và giá trị của mỗi số hạng đều không vượt quá 10^6

# Solution :
[Here](http://viahold.com/YuJ)

# Code :
[Here](http://viahold.com/Yud)

