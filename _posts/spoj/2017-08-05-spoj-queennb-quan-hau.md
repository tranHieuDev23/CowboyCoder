---
title: '[SPOJ] QUEENNB - Quân Hậu'
author: Nicky.Rio
date: 2017-08-05T21:07:00+07:00
thumbnail: /img/uploads/QUEENNB.jpg
tags:
  - dp
  - spoj
---
# Đề gốc 
[http://vn.spoj.com/problems/QUEENNB/](http://vn.spoj.com/problems/QUEENNB/)
# Đề bài
Mất ngủ vì không có đối thủ trong môn cờ vua, KHUELD quyết định chế tạo một robot để chơi cờ với mình. Một trong những việc đầu tiên là phải “dạy” robot biết quy tắc không chế bàn cờ của quân hậu.

Xét bàn cờ vua hình chữ nhật kích thước 𝑚 × 𝑛 được chia làm lưới ô vuông đơn vị. Các hàng của bàn cờ được đánh số từ 1 tới 𝑚 từ trên xuống và các cột của bàn cờ được đánh số từ 1 tới 𝑛 từ trái quá phải, ô nằm trên giao của hàng 𝑖 và cột 𝑗 được gọi là ô (𝑖,𝑗)

Trên bàn cờ, tại một số ô có đặt vật cản. Quân hậu ở một ô có thể không chế một ô khác nếu đoạn thẳng nối tâm hai ô đó song song với một trong hai cạnh bàn cờ hoặc đi qua đỉnh ô vuông có quân hậu đang
đứng, đồng thời đoạn thẳng nối tâm hai ô không được chứa tâm bất kỳ ô nào chứa vật cản. Ta quy ước rằng quân hậu phải đặt vào ô không có vật cản và cũng khống chế luôn ô nó đang đứng.

## Yêu cầu: 
Cho biết tình trạng bàn cờ, với mỗi ô (𝑖,𝑗) không chứa vật cản, hãy “dạy” cho robot của KHUELD biết có bao nhiêu ô trên bàn cờ mà đặt hậu ở đó sẽ không chế được ô (𝑖,𝑗)
## Dữ liệu:
* Dòng 1 chứa hai số nguyên dương 𝑚, 𝑛 ≤ 1000
* 𝑚 dòng tiếp theo , dòng thứ 𝑖 chứa 𝑛 ký tự liền nhau, ký tự thứ 𝑗 là dấu “.” (chấm) nếu ô (𝑖,𝑗) là ô trống, là dấu # nếu ô (𝑖,𝑗) có đặt vật cản.

## Kết quả: 
Ghi ra 𝑚 dòng, dòng 𝑖 in ra 𝑛 số nguyên, số nguyên thứ 𝑗 là số ô trên bàn cờ mà khi đặt quân hậu vào ô đó có thể khống chế được ô (𝑖,𝑗).
Các số trên một dòng của phải ghi cách nhau bởi dấu cách.

## Ví dụ 
**Input**
```
4 3
.#.
.#.
...
..#
```
**Output**
```
4 0 3
5 0 5
7 7 6
7 5 0
```

# Solution
[http://dataurbia.com/m5H](http://dataurbia.com/m5H)
# Code mẫu
[http://dataurbia.com/lxG](http://dataurbia.com/lxG)

