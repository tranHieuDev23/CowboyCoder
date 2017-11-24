---
title: '[SPOJ] NETWRKNB - Mạng máy tính'
author: La Hoàng Phong
date: 2017-08-04T08:27:59.402Z
thumbnail: /img/uploads/NETWORK_Image.jpg
tags:
  - data-structure
  - dfs
---
# Link đề bài gốc : [http://vnoi.info/problems/show/NETWRKNB/](http://vnoi.info/problems/show/NETWRKNB/)
# Đề bài : 
Những ngày nghỉ tại NTU là thời gian để ANHNT ngẫm nghĩ về các cấu trúc mạng máy tính. Mạng mà ANHNT đang nghiên cứu gồm có 𝑛 máy tính đánh số từ 1 tới 𝑛 và 𝑛 − 1 dây cáp mạng đánh số từ 1 tới 𝑛 − 1. Dây cáp thứ 𝑖 nối giữa hai máy tính 𝑢𝑖 , 𝑣𝑖 và cho phép truyền tin giữa hai máy này theo cả hai chiều với độ tin cậy là 𝑤𝑖 .


Ta nói máy 𝑠 và máy 𝑡 có thể truyền tin cho nhau nếu như tồn tại đường truyền tin là dãy 𝑠 =
𝑥1, 𝑥2, … , 𝑥𝑘 = 𝑡 sao cho các máy 𝑥1, 𝑥2, … , 𝑥𝑘 hoàn toàn phân biệt và giữa máy 𝑥𝑖 và 𝑥𝑖+1 có cáp nối trực
tiếp \(∀𝑖 = 1,2, … , 𝑘 − 1\). Mạng đảm bảo việc truyền tin giữa hai máy bất kỳ.

ANHNT đang loay hoay trả lời 𝑚 câu hỏi, mỗi câu hỏi thuộc một trong hai dạng:

- 𝑃 𝑎 𝑏 𝑐: Cần cho biết trên đường truyền tin từ máy a tới máy b có bao nhiêu cáp nối mà độ tin cậy nhỏ hơn hoặc bằng c

- 𝑇 𝑘 𝑐: Cần cho biết nếu cắt bỏ dây cáp thứ k thì trong số những dây cáp có thể truyền tin từ máy 𝑣𝑘, có bao nhiêu cáp nối mà độ tin cậy nhỏ hơn hoặc bằng c

## Yêu cầu: 
Cho mạng máy tính, và danh sách các câu hỏi, hãy giúp ANHNT trả lời tất cả các câu hỏi đó.

## Dữ liệu: 
Vào từ file văn bản NETWORK.INP:

- Dòng 1 chứa hai số nguyên dương 𝑛, 𝑚 ≤ 105

- 𝑛 − 1 dòng tiếp theo, dòng thứ 𝑖 chứa ba số nguyên dương 𝑢𝑖
, 𝑣𝑖
, 𝑤𝑖
\(∀𝑖: 1 ≤ 𝑢𝑖
, 𝑣𝑖 ≤ 𝑛; 𝑤𝑖 ≤ 109
\)
- 𝑚 dòng tiếp theo mỗi dòng ghi một câu hỏi, ký tự đầu dòng ∈ {𝑃, 𝑇} cho biết loại câu hỏi

  + Nếu ký tự đầu dòng là 𝑃, tiếp theo là ba số nguyên dương 𝑎, 𝑏, 𝑐 ứng với dạng câu hỏi 𝑃 𝑎 𝑏 𝑐
\(1 ≤ 𝑎, 𝑏 ≤ 𝑛; 𝑐 ≤ 10^9
\)
  + Nếu ký tự đầu dòng là 𝑇, tiếp theo là hai số nguyên dương 𝑘, 𝑐 ứng với dạng câu hỏi 𝑇 𝑘 𝑐 \(1 ≤
𝑘 &lt; 𝑛; 𝑐 ≤ 10^9
\)

Các số trên một dòng của input file được ghi cách nhau bởi dấu cách.

## Kết quả : 
Ghi ra file văn bản NETWORK.OUT 𝑚 dòng, mỗi dòng ghi một số nguyên duy nhất là đáp số cho
một câu hỏi theo đúng thứ tự đã cho.

## Ví dụ
```
NETWORK.INP
6 3
1 2 1
2 3 2
2 4 4
4 5 3
4 6 5
P 1 5 3
T 1 4
T 5 1
NETWORK.OUT
2
3
0
```
50% số điểm ứng với các test có 𝑛, 𝑚 ≤ 2000
50% số điểm ứng với các test có 𝑛, 𝑚 ∈ \[20000,100000\]

# Solution : 
Tham Khảo Tại : [http://dataurbia.com/Kt8](http://dataurbia.com/Kt8)
# Code : 
Tham Khảo Tại : [http://dataurbia.com/Kwp](http://dataurbia.com/Kwp)

