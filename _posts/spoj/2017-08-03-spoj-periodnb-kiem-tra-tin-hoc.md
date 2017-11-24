---
title: '[SPOJ] PERIODNB - Kiểm tra tin học'
author: Nicky.Rio
date: 2017-08-03T13:14:53.219Z
thumbnail: /img/uploads/PERIODNB.jpg
tags:
  - spoj
  - deque
  - dp
---
# Link gốc
[http://vnoi.info/problems/show/PERIODNB/](http://vnoi.info/problems/show/PERIODNB/)
# Đề bài
Dạy tin học cơ sở luôn là công việc vất vả ngay cả với những giáo viên nhiều kinh nghiệm như thầy HUNGNT. Trong giờ bài tập tin học, có 𝑛 học sinh ngồi quanh một bàn tròn, các học sinh được đánh số
từ 1 tới 𝑛 theo chiều kim đồng hồ. Xuất phát từ một vị trí từ đầu buổi học, thầy HUNGNT phải đi một vòng quanh bàn theo chiều kim đồng hồ để hướng dẫn từng bạn theo đúng thứ tự thầy đi qua. Mỗi bạn được thầy hướng dẫn đúng Δ micro giây (μs) và sau đó bắt tay vào lập trình ngay trong khi thầy chuyển sang hướng dẫn bạn kế tiếp theo chiều kim đồng hồ…, thời gian di chuyển của thầy coi như không đáng kể. 

Do biết rõ kỹ năng lập trình của từng bạn, thầy HUNGNT có thể ước lượng chính xác rằng bạn học sinh thứ 𝑖 sau khi được thầy hướng dẫn sẽ cần đúng 𝑎𝑖 μs để viết xong chương trình của mình (∀𝑖 = 1,2, … , 𝑛). Vấn đề là thầy muốn kết thúc buổi học càng sớm càng tốt, muốn vậy, việc chọn học sinh nào hướng dẫn
đầu tiên phải được tính toán kỹ lưỡng…

**Yêu cầu:** Bạn được cho biết số 𝑛, giá trị Δ, dãy 𝐴 = (𝑎1, 𝑎2, … , 𝑎𝑛). Hãy giúp thầy HUNGNT chọn vị trí xuất phát sao cho thời gian từ lúc bắt đầu buổi học cho tới khi tất cả các học sinh viết xong chương trình của mình là nhỏ nhất.

Để tránh việc phải đọc một lượng dữ liệu quá lớn, dãy 𝐴 sẽ được cho bởi ba số nguyên dương 𝑝, 𝑞, 𝑚, trong đó mỗi phần tử 𝑎𝑖 được xác định theo công thức: 

𝑎𝑖 = (𝑝 ∗ 𝑖) mod 𝑚 + 𝑞 (∀𝑖: 1 ≤ 𝑖 ≤ 𝑛)

## Dữ liệu: 
* Dòng 1 chứa hai số nguyên dương 𝑛, Δ (𝑛 ≤ 5.10^6; Δ ≤ 10^9)
* Dòng 2 chứa ba số nguyên dương 𝑝, 𝑞, 𝑚 xác định dãy 𝐴 (𝑝, 𝑞, 𝑚 ≤ 10^9)
Các số trên một dòng của input file được ghi cách nhau bởi dấu cách.

## Kết quả: 

Ghi ra một số nguyên duy nhất là thời gian (tính bằng μs) từ lúc bắt đầu buổi học cho tới khi tất cả các học sinh viết xong chương trình theo phương án tìm được.

## Ví dụ

**Input**
```
5 3
2 1 9
```
**Output**
```
18
```
**Giải thích**

```
Δ = 3; Dãy 𝐴 = (3,5,7,9,2).
Phương án tối ưu: Thầy bắt đầu với học sinh 2,
Thời điểm viết xong chương trình của từng học sinh như sau:
Học sinh 2: 3 + 5 = 8
Học sinh 3: 6 + 7 = 13
Học sinh 4: 9 + 9 = 18
Học sinh 5: 12 + 2 = 14
Học sinh 1: 15 + 3 = 18
```
```
40% số điểm ứng với các test có 𝑛 ≤ 10^3
30% số điểm ứng với các test có 𝑛 ∈ [10^4, 10^5]
30% số điểm ứng với các test có 𝑛 ∈ [10^6, 5.10^6]
```

# Solution
[http://dataurbia.com/3Td](http://dataurbia.com/3Td)
# Code mẫu
[http://dataurbia.com/3KF](http://dataurbia.com/3KF)

