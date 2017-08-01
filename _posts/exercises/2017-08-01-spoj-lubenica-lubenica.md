---
title: '[SPOJ] LUBENICA - Lubenica'
author: La Hoàng Phong
date: 2017-08-01T06:23:05.828Z
thumbnail: /img/uploads/lcr1464410729.jpg
tags:
  - data-structure
  - heavy-light-decomposition
---
# Link Bài Tập Gốc ( Tiếng Anh ) :http://www.spoj.com/problems/LUBENICA

# Đề Bài ( Tiếng Việt ) 
Mạng lưới giao thông ở 1 nước bao gồm N thành phố \(đánh số từ 1 đến N\) và N-1 đường nối các thành phố với nhau. Có một đường đi duy nhất giữa mỗi cặp thành phố. Mỗi con đường có một độ dài xác định.

Viết chương trình, với mỗi K cặp thành phố cho trước, tìm độ dài của con đường ngắn nhất và dài nhất trên đường đi giữa 2 thành phố này.

### Dữ liệu

Dòng đầu tiên chứa số nguyên N, 2 ≤ N ≤ 100 000.

Mỗi dòng trong số N-1 dòng tiếp theo chứa 3 số nguyên A, B, C cho biết có một con đường độ dài C giữa thành phố A và thành phố B. Độ dài của mỗi con đường là số nguyên dương không vượt quá 1000000.

Dòng tiếp theo chứa số nguyên K, 1 ≤ K ≤ 100 000.

Mỗi dòng trong số K dòng tiếp theo chứa 2 số nguyên D và E - chỉ số của 2 thành phố cần truy vấn.

### Kết quả

Mỗi dòng trong số K dòng chứa 2 số nguyên - độ dài của con đường ngắn nhất và dài nhất trên đường nối giữa 2 thành phố tương ứng.

### Ví dụ

```
Dữ liệu:

5
2 3 100
4 3 200
1 5 150
1 3 50

3
2 4
3 5
1 2

Kết quả:

100 200
50 150
50 100
```

**Giải thích Ví dụ:** 

![undefined](/img/uploads/graph.png)

- Truy vấn 1 : Từ đỉnh 2 đến đỉnh 4 đi qua gồm các cạnh: 2-3, 3-4. Các cạnh này có trọng số tối thiểu là 100 (2-3) trọng số tối đa là 200 (3-4)

- Truy vấn 2:  Từ đỉnh 3 đến đỉnh 5 đi qua gồm các cạnh: 3-1, 1-5. Các cạnh này có trọng số tối thiểu là 50 (3-1) trọng số tối đa là 150 (1-5)

- Truy vấn 3: Từ đỉnh 1 đến đỉnh 2 đi qua gồm các cạnh: 1-3, 3-2. Các cạnh này có trọng số tối thiểu là 50 (1-3) trọng số tối đa là 100 (3-2)

# Solution : http://simizer.com/T0f 

# Code Mẫu : http://simizer.com/T82








