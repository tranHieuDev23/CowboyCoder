---
title: '[SPOJ] QTSEQ - Dãy số QT'
author: Nicky.Rio
date: 2017-08-05T14:27:33.160Z
thumbnail: /img/uploads/QTSEQ.png
tags:
  - dp
  - spoj
---
# Link gốc
[http://vnoi.info/problems/show/QTSEQ/](http://vnoi.info/problems/show/QTSEQ/)
# Đề bài
Một vụ tai nạn giao thông vừa xảy ra ngoài phố. Mọi người tò mò chen lấn vòng trong vòng ngoài để xem. Rất đông người xem vụ tai nạn như:khanh_can_k7, nhungngoisao, chicuong123, harry_porter_7, mr_ntt, manhboyak6. Một anh đến chậm không tài nào vào xem được. Tức quá, anh ta liền hét toáng lên:

- Tôi là bố kẻ bị nạn đây!

Mọi người kinh ngạc quay lại nhìn và vội vã giãn ra cho anh ta vào. "Kẻ bị nạn" là một... chú chó vừa bị xe cán chết.

Ngại ngùng, anh ta chạy về nhà, than khóc. Và ông tiên hellosirius hiện ra ban cho anh ta 1 điều ước. Anh ta ước rằng mọi người trên thế giới sẽ quên hết mọi chuyện trong hôm nay. Tuy nhiên, theo định luật bảo toàn năng lượng cũng như định luật bảo toàn tính mạng ông tiên buộc chú phải giải bài toán sau mới giúp chú thực hiện điều ước. Nhanh chóng chú giải được bài toán ông đưa ra tuy nhiên, lần này ông buộc chú phải chiến đấu với hiệp sĩ đẹp trai n_cqt và blackstar. Để chiến thắng hiệp sĩ cách duy nhất là giải được bài toán hiệp sĩ đưa ra (vì hiệp sĩ không những đẹp trai, học giỏi mà còn khỏe mạnh vô đối nữa ). Đề bài của hiệp sĩ như sau:

Cho dãy số nguyên A gồm N phần tử A1,A2,...,An. Tìm cặp chỉ số i,j thỏa mãn:

DSEQ =|(A1+ A2+ ... + Ai) - (Aj+ Aj+1+ ... + An)| đạt giá trị lớn nhất (với 1 ≤ i &lt; j ≤ N).

Hãy giúp anh bạn khốn khổ của chúng ta hoàn thành điều ước!

## Input:

Dòng đầu là số nguyên dương N; (2 ≤ N ≤ 10^6).  

Dòng tiếp theo chứa N số nguyên A1, A2, …, An; (|Ai|&lt;10^9), các số cách nhau một dấu cách.

## Output:

Gồm một dòng chứa 2 số nguyên là DSEQ lớn nhất tìm được( do hiệp sĩ n_cqt yêu cầu ) và số cặp chỉ số thỏa mãn (hai số cách nhau một dấu cách) ( do hiệp sĩ blackstar yêu cầu )

## Ví dụ
**Input**
```
5
1 -2 3 -4 -7
```
**Output**
```
13 1
```

```
Lưu ý: 50% số test N<= 5000
```

# Solution
[http://dataurbia.com/mao](http://dataurbia.com/mao)
# Code mẫu
[http://ideone.com/BNYqU2](http://ideone.com/BNYqU2)
