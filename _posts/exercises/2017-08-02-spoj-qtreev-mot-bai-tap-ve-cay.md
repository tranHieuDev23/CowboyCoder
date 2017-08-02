---
title: '[SPOJ] QTREEV - Một bài tập về cây'
author: itsjustwinds
date: 2017-08-02T04:27:54.880Z
thumbnail: /img/uploads/QTREEV-GRAPH.jpg
tags:
  - dp
  - tree
  - spoj
---
## Đề: [http://vn.spoj.com/problems/QTREEV/](http://vn.spoj.com/problems/QTREEV/)

Cho một đồ thị cây có N đỉnh N-1 cạnh, gốc của cây là đỉnh 1, mỗi đỉnh có một trọng số không âm là Ai. Dễ dàng nhận thấy, ngoại trừ đỉnh 1, các đỉnh còn lại đều có một đỉnh cha và nhận nó làm đỉnh con. Từ mảng A người ta tiến hành xây dựng mảng P như sau:

Pu=Au nếu như đỉnh u đó không có đỉnh con, ngược lại Pu=Au\*max\(Pv1, Pv2...Pvm\) với v1,v2...vm lần lượt là các đỉnh con trực tiếp có cạnh nối với u. Nhiệm vụ của bạn là tính P1.

### Input

Dòng 1: Gồm một số nguyên N và M\(1≤N≤10^5, 1≤M≤10^18\).

Dòng 2: Gồm N số nguyên A1... AN với Ai là trọng số của đỉnh thứ i. \(Ai≤10^18\).

N-1 dòng tiếp theo, mỗi dòng gồm hai số nguyên u và v, thể hiện cạnh nối giữa u và v \(1≤u,v≤N\).

### Output

Một số nguyên duy nhất là P1, do kết quả có thể rất lớn nên chỉ cần in ra phần dư cho một số nguyên M 

### Example

```
Input:

3 10001 2 31 21 3

Output:
3
```

## Hướng dẫn

[http://simizer.com/pJk](http://simizer.com/pJk)

**Warning** !!!!!! suy nghĩ trước khi đọc code

## Code

[http://simizer.com/pL2](http://simizer.com/pL2)


