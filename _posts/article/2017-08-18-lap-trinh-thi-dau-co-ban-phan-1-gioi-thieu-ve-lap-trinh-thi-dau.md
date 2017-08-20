---
title: '[Lập trình thi đấu cơ bản] Phần 0: Giới thiệu về lập trình thi đấu'
author: Nam Phương Đại Hiệp
date: 2017-08-18T00:03:14.573Z
thumbnail: /img/uploads/comp.png
tags:
  - competitive-programming
  - cp
---
Nhầm mục đích giúp cho các bạn newbie có thể tiếp cận với lập trình thi đấu. Hôm nay, cowboy coder xin hân hạnh mang đến cho các bạn series "Lập trình thi đấu cơ bản". Series này nhằm mục đích giúp các bạn tiếp cận dễ dàng hơn với lập trình thi đấu cũng như công đồng CP (Competitive Programing) Việt Nam. Những thứ chúng tôi viết là hoàn toàn cơ bản cho những ai chưa từng một lần nghe đến cụm từ "lập trình thi đấu". Ban quản trị cowboy coder sẽ cố gắng dùng kinh nghiệm của mình để truyền đạt những thông tin một cách dễ hiểu nhất. Tuy nhiên, đôi khi không tránh khỏi sơ suất, chúng tôi rất mong các bạn thông cảm và để lại góp ý cho cowboy hoặc mọi thắc mắc cũng có thể comment dưới các bài viết. Cowboy coder hi vọng rằng series này sẽ có ích thiết thực và mong sẽ nhận được sự ủng hộ từ các bạn.

# Lập trình thi đấu là gì?

Như chúng ta đã biết, việc học lập trình có thể giúp chúng ta tạo sản phẩm, những phần mềm phục vụ đắc lực cho công việc cũng như giải trí. Tuy nhiên, ngoài mục đích đó ra, một khía cạnh khác cũng khá quan trọng của việc học lập trình đó là khả năng giải quyết những bài toán khó và phức tạp trong một thời gian cực ngắn. Điều mà con người chưa bao giờ làm được. Từ đó, bộ môn lập trình thi đấu (hay competitive programing) ra đời. Chúng ta có thể xem nó như một môn thể thao trí tuệ, khi mà các vận động viên phải thi đấu với nhau bằng việc giải quyết các bài toán được đưa ra. Người giỏi nhất sẽ là người giải nhanh nhất và đáp ứng được yêu cầu của bài toán đưa ra và đó sẽ là người chiến thắng.

![RR_watemada](/img/uploads/27072061326_0c66e120fa_o.jpg)
# Lập trình thi đấu cho ta những lợi ích gì?

Bạn có thể tìm thấy câu trả lời ở post trước [Lợi và hại của việc tập trung vào lập trình thi đấu](http://cowboycoder.tech/article/loi-va-hai-cua-viec-tap-trung-don-le-vao-lap-trinh-thi-dau).
Ngoài ra, nếu bạn là một bậc thầy trong lập trình thi đấu thì bạn có lẽ còn có được nhiều điều hơn thế. Ví dụ nếu bạn giành được huy chương IOI (sẽ giải thích đây là cái gì dưới) thì bạn sẽ có cơ hội lớn vào học những trường đại học danh giá trên thế giới. Hoặc giành được huy chương ở ACM-ICPC thì sẽ là một cơ hội việc làm rộng mở với đãi ngộ tốt.
Hay đơn giản là kiếm tiền từ những contest online với giá trị giải thưởng có khi cả nghìn Trump.
![undefined](/img/uploads/1200x-1.jpg)

# Một số thuật ngữ hay dùng trong lập trình thi đấu

* Problem: Là những bài toán mà bạn sẽ giải quyết. Problem trong lập trình thi đấu thường chia thành hai dạng chính là ACM và OI. ACM là dạng bài tập chỉ có đúng hoặc sai, tức là solution của bạn phải pass tất cả các test mới được tính là đúng. Còn OI là dạng bài tập tính điểm theo từng test, điểm của bạn sẽ tùy thuộc vào số test đúng sai của bạn.
* Online judge: Là những hệ thống chấm bài trực tuyến, địa chỉ training hàng đầu cho những người muốn theo đuổi lập trình thi đấu.
* IOI: International Olympiad in Informatics - Là cuộc thi lập trình quốc tế dành cho học sinh phổ thông.
![undefined](/img/uploads/index.jpeg)
* ACM - ICPC: ACM International Collegiate Programming Contest - Là cuộc thi lập trình thi đấu dành cho sinh viên đại học. Đây là đích đến mơ ước của những ai đam mêm lập trình thi đấu. 
![undefined](/img/uploads/Icpc_logo.png)
* AC: Accepted - nghĩa là bài của bạn đã pass toàn bộ tất cả các test đồng nghĩa với việc hoàn thành yêu cầu của bài toán.
* WA: Wrong Answer - nghĩa là bài của bạn cho kết quả sai. Hãy nhớ rằng ví dụ bài có 100 test, cho dù bạn pass 99 test nhưng chỉ sai một test thì cũng nhận về kết quả là WA.
* TLE: Time Limit Exceed - nghĩa là bài của bạn đã chạy vượt quá thời gian cho phép trong yêu cầu của bài toán.
* MLE: Memory Limit Exceed - nghĩa là bài của bạn đã dùng nhiều hơn bộ nhớ mà bài toán cho phép.
* Submit: Là hành động nộp solution của bạn lên máy chấm để chạy và cho kết quả.
* Debug: Đôi khi chương trình của bạn gặp một vài vấn đề khiến nó không thể AC, do đó ta cần phải rà soát và sửa lỗi. Qúa trình này gọi là debug.
![undefined](/img/uploads/index1.jpeg)
* Testing: Quá trình kiểm thử chương trình.
