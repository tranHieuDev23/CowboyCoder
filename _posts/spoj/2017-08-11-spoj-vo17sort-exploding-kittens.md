---
title: '[SPOJ] VO17SORT - Exploding kittens'
author: houtaru
date: 2017-08-11T13:23:43.777Z
thumbnail: '/img/uploads/[spoj]vo17sort.jpg'
tags:
  - implementation
  - bfs
  - spoj
---
# Link đề bài : [http://vn.spoj.com/problems/VO17SORT/](http://vn.spoj.com/problems/VO17SORT/)

# Đề bài :

Trong lúc rảnh rỗi, Thắng dễ thương cùng đồng nghiệp trong công ty thực phẩm Con Heo Vàng chơi mèo nổ. Đỏ bạc đen tình, Thắng liên tục rút được lá Alter the future, giúp Thắng được sắp xếp các lá bài trên bài theo ý muốn.

Hiện tại, trên bàn còn N lá bài xếp thành chồng. Mỗi lá bài có một nhãn hiệu là số nguyên phân biệt từ 1 tới N. Để sắp xếp, tại mỗi bước, Thắng sẽ lấy ra một dãy con liên tiếp của chồng bài, đưa lại dãy này vào một vị trí khác. Thứ tự của các lá bài trong đoạn con được rút ra cũng như trong phần còn lại của bộ bài không được phép thay đổi. Ví dụ, nếu hiện tại chồng bài đang là "2 3 5 1 4 7 6", Thắng có thể xếp lại thành "2 5 1 4 7 3 6". Từ "1 4 3 6 7 2 5" sang "6 7 2 5 1 4 3" cũng là một phép sắp xếp hợp lệ.

Để gài bẫy cô bạn KTH của mình, Thắng sẽ sắp xếp chồng bài về thứ tự chuẩn, nghĩa là "1 2 3 ... N". Tuy nhiên, sợ ý đồ bị bại lộ, Thắng sẽ không thực hiện việc sắp xếp nếu như cần nhiều hơn 4 bước chuyển.

Hãy giúp Thắng đễ thương tìm ra số bước tối thiểu cần sắp xếp nhé.

## Input

Dòng đầu tiên chứa số nguyên T là số lượng test.

Trong các dòng tiếp theo, mỗi test được mô tả bởi hai dòng: Dòng trên chứa số nguyên N, dòng dưới chứa một hoán vị của N số nguyên dương bé nhất - là thứ tự của chồng bài lúc ban đầu.

## Output

Ghi ra kết quả của mỗi test trên một dòng, là số bước tối thiểu cần để xếp chồng bài về thứ tự "1 2 3 .. N", hoặc "5 or more" nếu cần ít nhất 5 bước để sắp xếp.

## Giới hạn 

Trong 30% số test, N <= 3.

Trong 70% số test, N <= 7.

Trong 100% số test, N <= 15.

Trong lúc thi bài của bạn chỉ được chấm với test ví dụ.

```

Input:
5
3
1 2 3
4
1 3 4 2
7
7 6 5 4 2 1 3
10
10 7 5 8 1 2 9 3 4 6
15
8 15 12 1 10 3 7 4 6 9 5 2 11 14 13

Output:
0
1
4
4
5 or more 
```

# Solution : [http://viahold.com/1Wwj](http://viahold.com/1Wwj)

# Code : [http://viahold.com/1Wqh](http://viahold.com/1Wqh)
