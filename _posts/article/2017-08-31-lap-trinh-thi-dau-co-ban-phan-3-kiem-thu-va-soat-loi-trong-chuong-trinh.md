---
title: '[Lập trình thi đấu cơ bản] Phần 3: Kiểm thử và soát lỗi trong chương trình'
author: Nam Phương Đại Hiệp
date: 2017-08-31T14:06:13.336Z
thumbnail: /img/uploads/comp.png
tags:
  - competitive programing
  - cp
---
Như đã nói ở phần trước, cho dù bạn có một chiến lược làm bài hiệu quả và hoàn hảo thế nào thì cũng khó có thể tránh khỏi những "bug" trong quá trình code. Vì vậy, việc hạn chế và khắc phục những lỗi trong chương trình là một điều hết sức quan trọng trong lập trình thi đấu. Đó là lí do vì sao ta có bài này với kiểm thử và soát lỗi trong chương trình.
Bạn có biết testing là cả một nghệ thuật. Trong nhiều cuộc thi ACM, việc bạn nộp mà không AC sẽ mang đến hậu quả là bạn sẽ bị thua thiệt về penalty. Do đó, nếu không muốn trở thành spammer thì hãy cố gắng hạn chế việc nộp bài càng nhiều càng tốt. 
Bời vì VNOI đã có một bài hướng dẫn cách viết trình test bài chất lượng là [Tự code, tự chấm, tự sướng - Bí kíp thi offline](http://vnoi.info/wiki/algo/skill/viet-trinh-cham). Nên ở đây, mình sẽ không hướng dẫn lại các bạn cách viết code để test nữa mà sẽ nói về một số nguyên tắc và kinh nghiệm thu thập được trong quá trình "stress testing" của mình.
![undefined](/img/uploads/0302.png)
- Đối với những bài tập có dạng "multiple testcase", tức là một test bao gồm rất nhiều test nhỏ. Thì bạn nên tạo một bộ test có nhiều test giống nhau. Nếu như cùng một test giống nhau mà ra nhiều kết quả, thì chứng tỏ việc khởi tạo cho mỗi test của bạn là chưa tốt. Đó là một lỗi hay gặp, tuy nhiên để phát hiện thì không hề là một điều đơn giản. Do đó, hạn chế chúng là một điều cần thiết.
- Cố gắng nghĩ ra những test hiểm nhất mà người ra đề có thể cho. Nhất là với những bài ACM, bạn sẽ có lúc rơi vào trường hợp cực kì cay cú khi bài đã pass qua 99 test mà vẫn vướng lại một test. Đó chắc chắn là một test hiểm, kiểu như các trường hợp đơn giản như N = 0, N = 1, là những ý được ẩn trong đề. Hay thậm chí với những bài liên quan đến lí thuyết đồ thị thì mới có những test hiểm hết sức đỉnh cao. Với những bài đó, chỉ cái việc đơn đồ thị hay đa đồ thị cũng là một vấn đề lớn. Cho nên, bạn nên nắm vững chúng nếu không muốn rơi vào những trường hợp khó khăn. Thông thường những trường hợp như vậy sẽ được giải quyết bằng câu lệnh if. Ví dụ như:
` if (N == 0) cout << "-1";`
- Luôn thử với test lớn nhất. Hãy cố gắng sinh ra test lớn nhất. Để đảm bảo chương trình của bạn luôn đảm bảo mọi yêu cầu về thời gian, bộ nhớ cũng như độ chính xác với test lớn nhất của chương trình.
![undefined](/img/uploads/0303.jpg)
- Các tình huống hiếm gặp. Đôi khi ở một số trang online judge như UVa Online Judge hay Codechef bạn gặp những lỗi khá vô duyên như xuất dữ liệu dư khoảng trắng hay tab gì đấy. Cho nên hay thử tất cả những trường hợp bạn có thể nghĩ ra cho đến khi AC :).
- Cuối cùng, có lẽ là trường hợp bất khả kháng. Đó là stress testing. Khi mà bạn đã thử tất cả mọi cách, mọi test có thể nghĩ ra mà bạn vẫn không tìm ra test nào sai cả. Thì bạn hãy tự viết một chương trình bruteforce hay tìm những bài đã AC. Sinh hàng tá test random để so sánh hai chương trình đến khi tìm được test sai thì thôi.
![undefined](/img/uploads/0301.jpeg)

