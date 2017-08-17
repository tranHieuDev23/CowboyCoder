---
title: '[SPOJ] VMPIZZA - Pizza'
author: CVHvn
date: 2017-08-17T15:00:05.579Z
thumbnail: '/img/uploads/[SPOJ]VMPIZZA.png'
tags:
  - Dp
  - SPOJ
  - data-structute
---
## Link đề bài : [http://vn.spoj.com/problems/VMPIZZA/](http://vn.spoj.com/problems/VMPIZZA/)
# Đề bài :
Linh đang sống trên tầng 5 ở East Campus, một trong những kí túc lâu đời nhất của MIT. Một điểm bất tiện của kí túc này là không có thang máy, dẫn đến sự đi lại khó khăn.

Sau một buổi làm việc căng thẳng, Linh quyết định đặt pizza thay cho bữa tối. Để thay đổi khẩu vị, cậu đặtNpizza tạiNcửa hàng khác nhau. Pizza thứ i được chở đến tại thời điểmti, cung cấpainăng lượng nếu ăn ngay. Tuy nhiên, Pizza sẽ mất dần độ nóng hổi cũng như năng lượng theo thời gian: qua mỗi thời điểm, pizza thứ i mấtbinăng lượng.

Linh biết trước thời điểm và giá trị củaNloại pizza, và cậu muốn đạt được càng nhiều năng lượng càng tốt. Mỗi lần, Linh có thể chạy xuống nhận pizza, mang về phòng và ăn hết số pizza trong thời gian không đáng kể. Tuy nhiên, nên nhớ rằng Linh sống ở tầng 5, mỗi chuyến đi sẽ tiêu tốn của cậuBnăng lượng. Linh không thích phí phạm đồ ăn \(mặc dù đã sống gần 2 năm ở Mỹ\), cậu sẽ luôn ăn hết pizza, kể cả khi năng lượng của nó xuống dưới 0 \(khi ăn thì Linh sẽ bị cộng thêm một lượng âm năng lượng, hay nói cách khác là bị giảm năng lượng\).

Xác định lượng năng lượng tối đa Linh sẽ có với chiến thuật chạy tối ưu.

# Input :
Dòng 1: 2 số nguyên N và B.
Dòng 2..N + 1: mỗi dòng chứa 3 số nguyênti,ai,bi\(1 ≤ ti,ai,bi ≤ 10^5\)

# Output :
Một dòng duy nhất: năng lượng tối đa với chiến thuật chạy tối ưu. Kết quả nằm trong phạm vi số nguyên 64-bit \(_int64_trên Pascal hoặc_long long_trên C++\).

# Giới hạn :
* 1≤ N≤ 10^5.
* 1 ≤B ≤ 10^5.
* Trong ít nhất 30% số test, tương ứng với 30% số điểm,N≤ 1000
* Trong quá trình thi, bài của bạn chỉ được chấm với 2 test ví dụ. Kết quả sẽ hiện 100 nếu bài của bạn chạy đúng cả 2 test.

# Solution : [http://viahold.com/3ekA](http://viahold.com/3ekA)
# Code : [http://viahold.com/3eno](http://viahold.com/3eno)
