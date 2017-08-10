---
title: '[SPOJ] C11DK1 - Những chiếc lá mùa thu'
author: G
date: 2017-08-10T13:56:32.514Z
thumbnail: '/img/uploads/[spoj] c11dk1.jpg'
tags:
  - spoj
  - dp
  - binary-search
---
# Link đề bài http://vn.spoj.com/problems/C11DK1/ .

# Đề bài:
“Hà Nội mùa thu, cây cơm nguội vàng, cây bàng lá đỏ, nằm kề bên nhau phố xưa nhà cổ, mái ngói thâm nâu. ... Hà Nội mùa thu! Đi giữa mọi người, lòng như thầm hỏi "tôi đang nhớ ai?", sẽ có một ngày trời thu Hà Nội, trả lời cho tôi, sẽ có một ngày từng con đường nhỏ trả lời cho tôi.”

Mỗi năm đến mùa thu, những chiếc lá vàng lại rơi khắp trên đường làng, nơi mà khaihanhdk đang ở. Do lần đầu tiên xếp hạng cuối lớp, thầy chủ nhiệm đã phạt khaihanhdk phải quét hết lá vàng rơi trên con đường làng trước ngày 7-10. Nhưng đã học tệ rồi, lại còn thêm tính lười biếng. Cuối cùng, ngày 6-10 cũng đã đến, nhưng khaihanhdk vẫn chưa quét được chiếc lá vàng nào, khaihanhdk cứ ngồi khóc mãi, khóc mãi. Bỗng một lúc sau, Bụt hiện ra và hỏi: “Kìa con, vì sao con khóc?”.

Khaihanhdk kể lại hết câu chuyện cho Bụt nghe, Bụt nói: “Ờ, ta hiểu rồi, ta chỉ có một cách để giúp con. Con hãy ra cửa hàng Olympic Tin học Việt Nam \(VNOI\), con mua vài chiếc máy hút lá vàng do cựu học sinh Nguyễn Vương Linh vừa đem hàng từ Thái Lan về. Vấn đề bây giờ là con phải biết cách chọn lựa máy nào cho tốt mà ít tốn kém đấy nhé. Nếu con không biết có thể hỏi các coder trên trang web vnoi.info, có thể họ sẽ có cách giúp con. Thôi, ta đi đây.”

Con đường làng là 1 đường thẳng, trên đó mỗi chiếc lá vàng có tọa độ x\[i\], có không quá n \(n &lt;= 10^4\) chiếc lá vàng trên đường.

Cửa hàng có m \(m &lt;= 10^4\) loại máy, có thể mua nhiều cái máy cùng 1 loại, không giới hạn số lượng. Mỗi loại máy có 2 thông số là:

d\[i\]: nếu đặt máy i ở vị trí x thì nó sẽ hút được tất cả các lá vàng có tọa độ nằm trong khoảng \[x – d\[i\], x + d\[i\]\].

c\[i\]: chi phí để mua máy.

Yêu cầu: Cần đặt một số máy lên đường làng sao cho các máy hút hết được lá vàng và chi phí mua máy là thấp nhất.

## Input

Dòng đầu gồm 2 số: n và m.

N dòng tiếp theo: mỗi dòng ghi số x\[i\] \(abs\(x\[i\]\) &lt;= 10^9\).

M dòng tiếp thep: mỗi dòng ghi 2 số: d\[i\] và c\[i\] \(1 &lt;= d\[i\] &lt;= 10^9, c\[i\] &lt;= 1000\).

## Output

Chi phí nhỏ nhất tìm được.

# Example

## Input:

```
5 3

2

8

3

6

9

7 9

2 3

8 6
```

## Output:

```
6 
```

# Solution:
[Here](http://viahold.com/1DPo)

# Code:
[Here](http://viahold.com/1DQZ)
