---
title: '[Lập trình thi đấu cơ bản] Phần cuối: Kinh nghiệm khi thi cử'
author: Nam Phương Đại Hiệp
date: 2017-09-05T14:06:35.286Z
thumbnail: /img/uploads/comp.png
tags:
  - competitive-programming
  - cp
---
Như vậy là sau 4 bài trước của series Lập trình thi đấu cơ bản, chúng ta đã phần nào hiểu rõ những khái niệm, những nguyên tắc đơn giản nhất để bước chân vào "giang hồ". Chúng mình rất muốn chia sẻ với các bạn nhiều hơn nữa, tuy nhiên do thời gian có hạn và phải gánh thêm nhiều series khác, do đó Cowboy Coder xin tạm kết thúc series "Lập trình thi đấu cơ bản" ở bài này.

Ngay từ đầu, đối tượng hướng đến của series này chính đó là các bạn học sinh, sinh viên. Các bạn là những người có nhiều cơ hội được tham gia thi thố, cọ sát. Và hơn cả là những kì thi quan trọng có thể ảnh hưởng đến cả tương lai của các bạn như kì thi học sinh giỏi quốc gia chẳng hạn. Vì vậy, ở bài này chúng ta sẽ bàn về những kinh nghiệm khi thi cử. Để làm sao tối đa hóa khả năng bản thân, cũng như đạt những kết quả như mong muốn. 

# Trước khi thi

![undefined](/img/uploads/0401.jpg)

Chuẩn bị luôn là bước quan trọng nhất. Nếu bạn muốn có một kết quả tốt thì bạn phải có một bước chuẩn bị kĩ càng. Tuy nhiên, việc chuẩn bị là cả một quá trình, chứ không phải trong một vài ngày là đủ. Đừng bao giờ dành những ngày cuối cùng trước khi thi của mình để nhồi nhét, để cố ôn tập bất kì thứ gì. Bời vì kiến thức ở môn tin học và trong lập trình thi đấu có đặc thù của nó. Là một môn đề cao khả năng tư duy, mà tư duy thì phải cần có thời gian rèn giũa mới phát triển được. Do đó, việc học và training của bạn là cả một quá trình dài đã qua. Đừng vì lo sợ thiếu sót kiến thức mà lao đầu vào cày cuốc, việc đó chỉ khiến bạn thêm bối rối và phát hiện thêm nhiều lỗ hổng của mình mà thôi. Còn nếu thật sự kiến thức bạn quá thiếu sót, kiểu như chưa biết gì thì... thôi cứ YOLO đi. Vì vài ngày ngắn ngủi cũng chẳng giúp bạn hơn được ai cả. Thay vào đó, hãy thư giản, nghe nhạc, xem phim hay chơi game chẳng hạn. Và điều quan trọng nhất vẫn là sức khỏe. Hãy giữ cho mình một tinh thần sảng khoái và tràn đầy sức sống trước khi bước vào bất kì một cuộc thi nào.

# Trong kì thi

![undefined](/img/uploads/0402.jpg)

Bình tĩnh là điều quan trọng nhất trong các kì thi. Nếu không giữ được bình tĩnh thì mọi thứ gần như tan vỡ. Vì vậy, tập giữ bình tĩnh, không lo lắng trong kì thi là một điều quan trọng. Ngoài ra, mình cũng xin liệt kê một số thói quen mà mình thấy là những người "pro" trong lập trình thi đấu thường có:

- Test máy kĩ, hãy làm những điều quen thuộc như với máy tính của bạn vậy. Hãy xem đó như làm quen với không khí còn bỡ ngỡ khi vừa bước vào phòng thi.
- Hãy giải lao vài phút khi lâm vào thế bí. Với những bài tập dạng "thách đấu" trong kì thi thì việc đôi lúc lâm vào thế bí là một chuyện hết sức bình thường. Khi ấy, đừng cố bám theo những dữ kiện đã làm mình rơi vào chân tường nữa. Mà hãy cho mình vài phút giải lao (xin ra ngoài hóng gió, hay uống nước chẳng hạn, ...). Và sau đó bắt đầu suy nghĩ lại từ đầu, theo kinh nghiệm của nhiều người đúc kết được thì đó là cách hiệu quả nhất để gỡ rối.
- Vét cạn: Luôn giữ càng nhiều điểm càng tốt. Để chắc chắn, hãy viết solution cho từng subtask và với nhiều điều kiện của test khác nhau hãy cho chạy từng subtask một để chắc ăn nhất. Ví dụ như thế này chẳng hạn:

{% highlight c++ %}
if (N < 1000) sol_subtask1();
else sol_subtask2();
{% endhighlight %}

- Tham lam: Đôi khi với những bài quá khó. Bạn đã cố thử mọi cách cũng như vét cạn hết các subtask nhỏ, nhưng còn subtask còn lại thì có vẻ không khả thi. Lúc đó, phương pháp tham lam chính là lúc cần lên tiếng. Trong nhiều cuộc thi, phương pháp tham lam của ai khoan ngoan hơn là cách duy nhất để phân định thứ hạng, khi những subtask dễ còn lại hầu như ai cũng giải được. Vì vậy, tại sao không thử một cách tham lam đơn giản mà bạn có thể nghĩ ra, biết đâu bạn sẽ gặp may mắn thì sao. 
- Phân thời gian hợp lí: Như đã nói ở các bài trước vì sao cần phải phân chia thời gian. Ở đây mình chỉ nhắc lại rằng nó là một điều cốt yếu cho thành bại của cả một bài thi.
- Bài dễ làm trước, bài khó làm sau: Điều này thì trước khi thi chắc có lẽ bạn sẽ được dặn dò khá nhiều lần. Lí do của nó chắc ai cũng biết, tuy nhiên lại có một số thành phần khá hổ báo, vừa bắt đầu đã solo với những bài khó. Mình xin nhắc lại, điều đó hoàn toàn không khoa học, trừ khi bạn là những ACMer ngoại hạng kiểu như Petr hay tourist, chứ nếu không thì thôi, pleaseee... hãy đọc đề kĩ và làm bài dễ trước. Đó mới là cách tốt nhất cho chúng ta.

# Sau khi thi

![undefined](/img/uploads/0403.jpg)

Đây là lúc yolo được rồi. Bạn có một thời gian rãnh làm mọi điều bạn muốn trong lúc chờ đợi kết quả. Nhưng mà, mình khuyên các bạn nên làm một cái gì đó có ích một chút, chứ đừng ngồi chờ kết quả cả tuần, cả tháng. Vì kết quả là do người khác quyết định chứ không phải bạn, dù bạn có cầu nguyện hay làm gì đi nữa thì cũng chẳng có tác dụng gì cả. :)

