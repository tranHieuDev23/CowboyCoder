---
title: '[SPOJ] VO17PHD - Du lịch Bắc Ninh'
author: Nicky.Rio
date: 2017-08-07T13:59:07.272Z
thumbnail: /img/uploads/VO17PHD.jpg
tags:
  - spoj
  - shortest-path
---
# Link gốc
[http://vnoi.info/problems/show/VO17PHD/](http://vnoi.info/problems/show/VO17PHD/)
# Đề bài
Sau khi ra đề xong cho kỳ thi VNOP (Vietnam National Olympiad in Philosophy) Online 2017, GS - TSKH - NGND - CVCC kiêm nhà Đông Phương học PVH quyết định tự thưởng cho mình một chuyến du lịch Bắc Ninh.

Bắc Ninh là tỉnh nổi tiếng với dân ca quan hệ. Bắc Ninh là trung tâm xứ Kinh Bắc cổ xưa. Hiện nay trên địa bàn tỉnh Bắc Ninh có khoảng 41 lễ hội đáng chú ý trong năm được duy trì. Trong đó có những lễ hội lớn như: hội chùa Dâu, Hội Lim, hội đền Đô, hội đền Bà Chúa Kho. Con người Bắc Ninh với truyền thống văn hoá, hiếu khách, cần cù và sáng tạo, với những bàn tay khéo léo mang đậm nét dân gian của vùng trăm nghề như tơ tằm, gốm sứ, đúc đồng, trạm bạc, khắc gỗ, làm giấy, tranh vẽ dân gian... nổi bật là những làn điệu dân ca quan hệ. Ngoài ra, nếu ai có dịp về Đình Bảng du xuân, thì không thể bỏ qua cơ hội thưởng thức món bánh phu thê đặc sản nổi tiếng của vùng đất kinh kỳ. Những cặp bánh thơm ngon được người dân Đình Bảng dùng trong những mâm lễ cưới hỏi hay những ngày lễ, Tết với mong ước về một cuộc sống sung túc, ấm no, hạnh phúc. Bánh phu thê \(có nghĩa là chồng vợ\) nên người ta thường mua ít nhất một cặp chứ không bao giờ mua lẻ một chiếc...

Thành phố Bắc Ninh bao gồm N khu phố. Các khu phố được đánh số từ 1 tới N, và được nối với nhau bởi M con đường hai chiều. Mỗi con đường có một độ dài riêng biệt.

Vào dịp ghé thăm của nhà Đông Phương học PVH, có rất nhiều sự kiện quảng bá văn hóa và du lich Bắc Ninh được diễn ra. Đặc biệt, vào mỗi ngày, tại thành phố N sẽ diễn ra buổi biểu diễn những làn điệu quan hệ. Thêm vào đó, những chiếc bánh phu thê cũng được bán ở tất cả các khu phố trên toàn Bắc Ninh. Mỗi ngày, tại khu phố i có Pi chiếc bánh phu thê được mang ra bán ở đây.

Là người yêu thích văn hóa Phương Đông từ lâu, GS - TSKH - NGND - CVCC PVH không muốn bỏ lỡ giây phút thưởng thức quan hệ Bắc Ninh nào, nên đã chọn con đường đi ngắn nhất để đi từ khu phố 1 (khách sạn của GS) tới khu phố N (nơi diễn ra sự kiện nghệ thuật). Ngoài ra, GS còn muốn trên con đường ngắn nhất của mình, tổng số lượng bánh phu thê được rao bán ở đây là lớn nhất.

Hãy giúp GS tìm ra độ dài đường đi ngắn nhất và tổng số bánh được bán nhiều nhất trên con đường này.

## Input

Dòng đầu tiên chứa số nguyên dương N là số khu phố tại Bắc Ninh.

Dòng thứ hai chứa N số nguyên P1, P2, ..., PN, lần lượt là số bánh phu thê được rao bán tại các khu phố 1, 2, ..., N.

Dòng thứ ba chứa số nguyên M là số con đường hai chiều trên toàn thành phố.

M dòng tiếp theo, mỗi dòng chứa ba số nguyên dương U, V và C, miêu tả một con đường giữa hai khu phố U và V với chiều dài là C

## Output

Nếu không tồn tại đường đi từ khu phố 1 tới khu phố N, in ra "impossible". Ngược lại, in ra hai số nguyên trên một dòng lần lượt là độ dài đường đi ngắn nhất từ khu phố 1 tới khu phố N và tổng số bánh phu thê tối đa được rao bán trên một con đường ngắn nhất.

## Giới hạn

- Trong tất cả các test, 1 &lt;= N &lt;= 10^5, 0 &lt;= M &lt;= 10^5, 0 &lt;= Pi&lt;= 10^9 và 1 &lt;= C &lt;= 10^9

- Trong 30% số test đầu tiên, P1 = P2= ... = PN= 0.

- Trong 30% số test tiếp theo, N &lt;= 1000 và C = 1.

- Trong 40% số test còn lại, không có ràng buộc gì thêm.

## Example

**Input**
```
8
2 1 1 1 100 1 1 2
10
1 2 1
2 3 2
3 4 2
4 8 1
1 8 7
1 5 3
5 8 4
1 6 2
6 7 2
7 8 2 
```
**Output**
```
6 7
```

# Solution
[http://viahold.com/AuH](http://viahold.com/AuH)
# Code mẫu
[http://viahold.com/AcA](http://viahold.com/AcA)


