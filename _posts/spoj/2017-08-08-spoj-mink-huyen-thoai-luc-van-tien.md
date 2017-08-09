---
title: '[SPOJ] MINK - Huyền thoại Lục Vân Tiên'
author: Accepted Problems
date: 2017-08-08T09:25:39.042Z
thumbnail: '/img/uploads/[spoj]mink.jpg'
tags:
  - spoj
  - data-structure
  - stack
---
# Link đề gốc:

<http://vn.spoj.com/problems/MINK/>

# Đề bài:

Dạo này tivi cũng đang chiếu phim Lục Vân Tiên , sẵn tiện lấy luôn làm tiêu đề .Lục Vân Tiên cũng giống Samurai Jack , bị Quan Thái Sư đẩy vào vòng xoáy thời gian và bị chuyển tới tương lai của những năm 2777 .

Ở thời đại này , Tráng sỹ phải là người thông thạo máy tính , gõ bàn phím lia lịa như đấu sỹ thời xưa múa kiếm ấy và phải qua một cuộc thi lập trình mới được phong danh hiệu .

Để vượt qua vòng loại , Vân Tiên cần tham gia cuộc thi sát hạch . Ban Giám Khảo cuộc thi sát hạch gồm có N người , họ đều là các cao thủ trong giới IT . Các thành viên trong Ban Giám Khảo được đánh số từ 1 -&gt; N và mỗi người lại có một chỉ số sức mạnh gọi là APM \( Actions Per Minute \) . Các giám khảo sẽ xếp hàng lần lượt từ 1 -&gt; N . Mỗi thí sinh sẽ phải đấu với K vị giám khảo và K vị giám khảo này phải đứng liền thành 1 đoạn \( Tức là i , i+1 , i+2 , ... i+K-1 \) , chỉ cần thắng 1 vị giám khảo thì sẽ vượt qua vòng loại .Tuy nhiên thí sinh kô được chọn xem những giám khảo nào sẽ đấu với mình .Vân Tiên rất lo vì lỡ may đụng độ với những vị giám khảo nào "khó nhằn" thì sẽ tiêu mất . Nên chiến thuật của Vân Tiên là tập trung hạ vị giám khảo có chỉ số APM thấp nhất trong số K vị . Bạn hãy lập trình để giúp Lục Vân Tiên xác định được ở tất cả các phương án thì chỉ số APM của vị giám khảo thấp nhất sẽ là bao nhiêu \( Có tất cả N-k+1 phương án :

Phương án 1 : Vân Tiên phải đấu với vị 1 -&gt; vị k

Phương án 2 : Vân Tiên phải đấu với vị 2 -&gt; vị k+1

…

Phương án N-k+1 : Vân Tiên phải đấu với vị N-k+1 -&gt; vị N \) .

\( 1 &lt;= N &lt;= 17000 , chỉ số APM của 1 giám khảo &gt;= 1 và &lt;= 2 * 10^9 , 1 &lt;= K &lt;= N \) .

## Input

Dòng 1 : số T là số test .Tiếp theo là T bộ test , mỗi bộ test có format như sau :Dòng 1 : N k

Dòng 2 : N số nguyên dương A\[1\] , … A\[N\] .

## Output

Kết quả mỗi test ghi ra trên dòng , dòng thứ i gồm N-k+1 số , số thứ j tương ứng là chỉ số APM của vị giám khảo yếu nhất trong phương án j .

## Ví dụ:

```
Input:
2
4 2
3 2 4 1
3 3
1 2 3
```


```
Output:
2 2 1
1
```

# Solution:

Tham khảo tại:[http://viahold.com/SaT](http://viahold.com/SaT)

# Code:

Tham khảo tại: [http://viahold.com/SZm](http://viahold.com/SZm)

Code đã được nộp và AC trên SPOJ, sử dụng bộ dịch của C++11
