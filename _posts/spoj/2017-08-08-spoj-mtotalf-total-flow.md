---
title: '[SPOJ] MTOTALF - Total Flow'
author: itsjustwinds
date: 2017-08-08T03:24:11.490Z
thumbnail: /img/uploads/MTOTALF-GRAPH.jpg
tags:
  - max-flow
  - spoj
---
# Đề: [http://vn.spoj.com/problems/MTOTALF/](http://vn.spoj.com/problems/MTOTALF/)

Để quản lý nước cho đàn bò, FJ  đã vẽ bản đồ đường ống gồm N (1<=N<=700) 
ống trong trang trại mà nối bể nước với các chuồng. FJ thấy rằng các 
đường ống có kích thước khác nhau và được nối một cách rất kỳ lạ. 
Do đó, FJ muốn tính xem lượng nước truyền qua các ống.

Hai ống nước được nối liên tiếp với nhau cho phép lượng nước không vượt 
quá thông lượng nhỏ nhất của hai ống. Một ống có thông lượng 5 nối với 
ống có thông lượng 3 sẽ tương đương với một ống có thông lượng 3.:

```

  +---5---+---3---+    ->    +---3---+

```

Còn hai ống nối song song cho phép thông lượng nước là tổng thông lượng 
của từng ống. 

```

    +---5---+

 ---+       +---    ->    +---8---+

    +---3---+

```

Còn một ống mà không nối với chuồng bò nào hay ống nào khác có thể bỏ đi: 

```

    +---5---+

 ---+               ->    +---3---+

    +---3---+--

```

Sử dụng cách thức trên, cho bản đồ đường ống, xác định lượng nước có thể
truyền từ nguồn (A) cho tới chuồng (Z).

Xét ví dụ sau:

                 +-----------6-----------+

        A+---3---+B                      +Z

                 +---3---+---5---+---4---+
                         C       D

Ống BC và CD có thể gộp lại được:

                 +-----------6-----------+

        A+---3---+B                      +Z

                 +-----3-----+-----4-----+
                             D

Sau đó gộp BD và DZ  :

                 +-----------6-----------+

        A+---3---+B                      +Z

                 +-----------3-----------+

Gộp hai nhánh nối B và Z:

                 B
        A+---3---+---9---+Z

Gộp AB và BZ và thông lượng thu được là 3:

        A+---3---+Z

FJ cần viết một chương trình đọc vào một tập các đường ống mà mỗi
đường ống được mô tả thông qua 2 đầu nối và tính thông lượng từ 'A' tới 'Z'.

Mọi dữ liệu cần tính đều có thể suy luận theo các quy tắc bên trên. 

Ống i nối hai nút a_i và b_i (a_i,b_i là các chữ cái hoa hoặc thường
 - 'A-Za-z') và có thông lượng F_i (1 <= F_i <= 1,000). 
Tên nút phân biệt chữ cái hoa và thường ('A' <> 'a').


## Input

```
* Dòng 1: Số nguyên N

* Dòng 2..N + 1: Dòng i+1 mô tả ống i qua hai chữ cái và một số nguyên,
cách nhau bởi 1 dấu trống: a_i, b_i, and F_i

Ví dụ:

5
A B 3
B C 3
C D 5
D Z 4
B Z 6


```

## Output

```
* Dòng 1: Lượng nước lớn nhất có thể truyền từ nguồn A tới chuồng Z.

Ví dụ:  
3
```

# Hướng dẫn: 

[http://viahold.com/Nn8](http://viahold.com/Nn8)

# Code

[http://viahold.com/Nnh](http://viahold.com/Nnh)



