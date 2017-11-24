---
title: '[SPOJ] KBUILD - Sửa cầu'
author: La Hoàng PHong
date: 2017-08-06T12:31:22.272Z
thumbnail: /img/uploads/KBUILD_Image.jpg
tags:
  - data-structure
---
# Link đề bài gốc : [http://vnoi.info/problems/show/KBUILD/](http://vnoi.info/problems/show/KBUILD/)
# Đề bài : 

Vì lo lắng Pirate sẽ buồn chán khi một thân một mình ở đảo hoang, bạn gái Pirate từ trong đất liền dự định sang chơi với anh ấy.

Pirate đang sinh sống trên một quần đảo gồm N đảo. Vì các đảo khá gần nhau nên chẳng cần thuyền bè gì, Pirate chỉ cần đốn đại cây dừa nào đó và bắc ngang là có thể đi được từ đảo này sang đảo khác. Vì không muốn hủy hoại môi trường nên anh ấy chỉ đốn N - 1 cây dừa làm cầu, vừa đủ để từ một đảo bất kì đi đến được hết mọi đảo còn lại.

Nhưng mà "Môi son, má đào, chân guốc cao gót làm sao em qua cầu dừa???". Lo lắng sợ bạn gái sẽ rơi xuống biển và bị cá đuối nẫng mất, Pirate hộc tốc đi sửa chữa các cây cầu dừa. Anh đưa ra một lịch trình như sau: vào mỗi ngày sẽ đi kiểm tra mọi cây cầu trên đường đi từ đảo a đến đảo b.

Tuy nhiên, lịch trình đó khá là phi khoa học. Thực hiện, xong rồi, Pirate mới ngớ ra là không biết mình có bỏ sót cây cầu nào không?

## Input

* Dòng thứ nhất: số nguyên N - số hòn đảo.
* N - 1 dòng tiếp theo: mỗi dòng gồm hai số nguyên a và b - có một cây cầu dừa nối đảo a và đảo b.
* Dòng thứ N + 1: số nguyên M - số ngày kiểm tra.
* M dòng tiếp theo: mỗi dòng gồm hai số nguyên a và b - ngày hôm đó, Pirate sẽ kiểm tra các cây cầu trên đoạn đường từ đảo a đến đảo b.

## Output

* Một số nguyên duy nhất thể hiện số cây cầu chưa được kiểm tra.

## Giới hạn

* 1 ≤ N, M ≤ 200000
* 60% số test có 1 ≤ N, M ≤ 5000
* 80% số test có 1 ≤ N, M ≤ 50000

## Example

```
Input:
61 22 32 44 54 623 65 6

Output:
1
```

_Giải thích: Ngày thứ nhất, Pirate kiểm tra các cây cầu \(2, 3\), \(2, 4\) và \(4, 6\). Ngày thứ hai, anh kiểm tra các cây cầu \(5, 4\) và \(4, 6\). Cây cầu duy nhất chưa được kiểm tra là \(1, 2\)._

# Solution : 
Tham khảo tại : [http://dataurbia.com/16bD](http://dataurbia.com/16bD)
# Code : 
Tham khảo tại : [http://dataurbia.com/16bW](http://dataurbia.com/16bW)



