---
title: '[SPOJ] C11CAVE - Hang động'
author: Joker
date: 2017-08-09T08:00:50.054Z
thumbnail: '/img/uploads/[spoj]c11cave.jpg'
tags:
  - spoj
---
# Link đề bài gốc:

[http://vnoi.info/problems/show/C11CAVE/](http://vnoi.info/problems/show/C11CAVE/)

# Đề bài:

Một con đom đóm bay vào một cái hang đầy những chướng ngại vật gồm: măng đá \(nhô lên từ mặt đất\) và nhũ đá \(đâm xuống từ trần hang\). Hang này dài N đơn vị \(N chẵn\) và cao H đơn vị. Khi vào hang, vật cản đầu tiên là măng đá, sau đó là nhũ đã, rồi lại đến măng đá, ... cứ thế thay phiên nhau.

Đây là một ví dụ về một hang dài 14 đơn vị và cao 5 đơn vị.

![undefined](/img/uploads/c11cave1.PNG)

Con đom đóm này không phải là loài có thể bay quanh các chướng ngại vật. Thay vào đó, nó sẽ chọn một mức chiều cao bắt đầu rồi bay từ đầu đến cuối hang, phá hết tất cả các chướng ngại vật trên đường bay của nó.

Theo ví dụ trên, nếu chọn mức 4, con đom đóm sẽ phá tất cả là 8 chướng ngại vật.

![undefined](/img/uploads/c11cave2.PNG)

Đây không phải là lựa chọn tốt nhất vì con đom đóm sẽ ít mệt hơn nếu chọn mức 1 hoặc mức 5, lúc này nó chỉ cần phá 7 chướng ngại vật.

Bạn được cho chiều dài, chiều cao và kích thước của tất cả các chướng ngại vật. Hãy xác định số chướng ngại vật tối thiểu mà con đom đóm cần phá để thoát khỏi hang, và có bao nhiêu cách chọn khác nhau đưa đến kết quả đó.

## Dữ liệu

* Dòng 1: Hai số nguyên N và H \(1 ≤ N ≤ 2.105 và 1 ≤ H ≤ 5.105\) là chiều dài và chiều cao của hang.
* Mỗi dòng trong N dòng tiếp theo là một số nguyên dương - kích thước của chướng ngại vật. Tất cả các kích thước đều nhỏ hơn H.

## Kết quả

Gồm 2 số nguyên cách nhau là số chướng ngại vật ít nhất cần phá và số cách chọn khác nhau để có được kết quả đó.


# Ví dụ:

## Input:

```
6 7
1
5
3
3
5
1
```

## Output:

```
2 3
```

# Solution:

Tham khảo tại: [http://viahold.com/mwW](http://viahold.com/mwW)

# Code:

 Tham khảo tại: [http://viahold.com/mtJ](http://viahold.com/mtJ)
