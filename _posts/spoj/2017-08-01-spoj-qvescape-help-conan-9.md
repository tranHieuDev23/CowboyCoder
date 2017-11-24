---
title: '[SPOJ] QVESCAPE - Help Conan 9 !'
author: Nguyễn Minh Quân
date: 2017-08-01T07:11:48.879Z
thumbnail: /img/uploads/CONAN-Image.jpg
tags:
  - spoj
  - graph
  - shortest-path
  - math
---
# Link gốc

[http://vnoi.info/problems/show/QVESCAPE/](http://vnoi.info/problems/show/QVESCAPE/)

# Đề bài

Anh Quang Vũ dạo này khá hư hỏng, suốt ngày cứ chơi bời lêu lổng nên đã bị bạn Như Quỳnh trừng phạt. Nhưng bạn Như Quỳnh rất nương tay nên chỉ thử anh anh Quang Vũ bằng cách ném vào ngục tối bởi vua bóng tối để xác định độ ngoan của anh ta. Cái ngục được tạo dáng thành một hình lập phương với những bức tường đá lớn. Những căn phòng được nối bởi những lối đi nên vì vậy toàn bộ ngục tối khi nhìn từ phía trên trông giống như một đường xoắn ốc. Những căn phòng đc đánh số như sau:

... 15 14 13

5 4 3 12

6 1 2 11

7 8 9 10

Sau một trận động đất lớn một số bức tường đã bị phá hủy và những lối đi mới được hình thành giữa những phòng kế bên

Anh Quang Vũ đang ở phòng 1 . Ông ấy biết rằng lối thoát đc đặt ở phòng N, và muốn chạy thoát trong lúc mọi người đang hoảng loạn vì trận động đất, bởi vì vua bóng tối đang canh gác ngục tối, anh Quang Vũ muốn dùng con đường đi nhanh nhất để thoát khỏi ngục tối.

Viết chương trình đưa ra vị trí của lối thoát N và danh sách những lối đi mới, xác định số đoạn đường phải đi nhỏ nhất mà anh Quang Vũ phải đi qua trước khi thóat khỏi ngục.

## Input

Dòng đầu tiên của input chứa một số nguyên N(1<=N<=10^15), phòng mà lối thoát ở đó.

Dòng thứ hai chứa 1 số nguyên K (1<=K<=100000), số của con đường mới.

Mỗi dòng K chứa 1 số nguyên B(4<=B<=10^15) nghĩa là một con đường mới được nối vào hai phòng A,B cạnh nhau, nơi mà A<B. Số A không được đưa một cách chi tiết nhưng nó có thể xác định một cách duy nhất từ B (ví dụ nếu B là 20, thì A phải là 7), và một số phòng ko bao giờ là phòng B (2,3,5,7,10,13..v..v).

## Output

Output chứa 1 số nguyên, số con đường nhỏ nhất mà anh Quang Vũ phải đi qua trước khi thoát.

Nếu không thoát ra, anh Vũ sẽ bị tử ẹo tại hang động này, hy vọng các bạn sẽ giúp anh Vũ thoát khỏi hang.

P/S: 50% số test có N<=10^5

# Solution : 

[http://simizer.com/T7S](http://simizer.com/T7S)

# Code mẫu :

[http://simizer.com/Snm](http://simizer.com/Snm)


