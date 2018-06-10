---
title: Làm sao để không thi tốt mà vẫn sống
author: Admin Tổng Quản
date: 2017-08-26T21:21:33.889Z
thumbnail: /img/uploads/lam-sao-de-khong-thi-tot-ma-van-song.jpg
tags:
  - programming
  - kinh-nghiem-song
---
*Bài viết gốc: [How to not perform well on life and survive](http://codeforces.com/blog/entry/54064) được viết bởi I_love_Hoang_Yen, nick Codeforces của anh Thanh Trung Nguyen, founder của cộng đồng Lập trình VNOI, hay còn được mọi người biết tới với biệt danh RR. Bản dịch đã được sự cho phép của anh Thanh Trung Nguyen và của bạn Phạm Cao Nguyên (natsukagami).*

Ngày hôm qua đọc blog của ErdemKizez, mình lại nhớ về mình ngày trước. Mình không thể nào ngủ được khi nghĩ về những thất bại của mình trong thi cử và trong cuộc sống. Nhưng mình nghĩ mình đã sống sót qua cái tao đoạn ấy, nên mình quyết định viết bài blog này...

# Backstory

Khi mình bắt đầu đi học (hồi 5-6 tuổi), mình khác biệt so với lũ trẻ xung quanh: mình làm mấy trò dị dị như nhớ số điện thoại hay là làm toán... Cộng thêm một việc nữa, ấy là mình là thằng bé con nhất trong lớp. Vậy nên tất nhiên mình trở thành mục tiêu của bọn bắt nạt. Mình vẫn nhớ cái cảm giác tệ hại khi bị bắt nạt, và còn tệ hơn nữa khi nghe giáo viên nói với mẹ mình về chuyện ấy: "Nhìn con bé con đáng yêu ấy xem, làm sao mà con bé ấy có thể bắt nạt ai được chứ."

Lên lớp 2, có một chuyện thần kì đã xảy ra: mình được điểm cao nhất ở trong lớp. Tự nhiên chuyện bắt nạt dừng lại hẳn. Mình nhận ra rằng khi mình trở thành học sinh số một ở trong lớp và được thầy cô để mắt tới, mình sẽ không còn bị bắt nạt nữa. Thế là mình quyết định sẽ luôn trở thành số một ở trong lớp... Mọi chuyện diễn ra được vài năm cho tới khi có môn Lịch sử và Địa lý.

Rồi mình lên lớp 8, nhà trường một số học sinh giỏi để tham dự cuộc thi Tin cấp Thành phố. Thế là bọn mình được dạy code bằng Pascal. Mình như được khai sáng vậy: "Wow, mình có thể làm cho máy tính chạy chương trình, rồi làm mấy cái input output ngầu ngầu như kiểu ASCII Art vậy :-O". Thế là mình bắt đầu luyện code xuyên ngày đên, và giành được một số giải thưởng trong cuộc thi cấp Thành phố.

# Cấp 3 và kì thi Quốc gia

![undefined](/img/uploads/lam-sao-de-khong-thi-tot-ma-van-song-1-1.jpg)

Mình đỗ được vào một trường Trung học Phổ thông tốt. Bài thi đầu vào lấy hai môn Toán và Văn học, nhưng mình vẫn đỗ được! Nếu xét về mặt Lập trình thi đấu, trường của mình có thể gọi là trường tốt nhất ở Việt Nam, vì từ đây nhà trường đã đào tạo được nhiều học sinh giành huy chương vàng IOI như ll931110, skyvn97, natsukagami, vân vân...

Mình vẫn code suốt ngày khi lên cấp 3, nhưng giờ mình đã có nhiều bạn bè từ các đội tuyển Tin Quốc gia khác để nói chuyện về lập trình và thuật toán. Hồi đó mọi người còn xài Yahoo ấy.

Bọn mình cũng có một OJ tiếng Việt là VOJ. Vì mình code suốt ngày nên mình trở thành số một ở khối 11 lúc đó và trở nên khá nổi tiếng. Mọi người bắt đầu nói rằng mình sẽ đi IOI. Mình cũng đứng ở top 4 trong kì thi Quốc gia Vòng 1, đứng đầu nhiều kì thi online khác, nên mình cũng tự tin lắm.

Trước khi kể chuyện tiếp, mình sẽ giải thích thêm về cơ chế thi chọn đội tuyển Quốc tế của Việt Nam vào thời đó (về sau đã có sự thay đổi). Có hai vòng thi:

* Vòng 1 là kì thi Quốc gia. Top 30 người đứng đầu sẽ thi vòng 2.
  * 1 ngày thi, 3 tiếng
  * 3 bài
  * Không có chấm thử
  * Không có time limit. Bạn phải tự đoán xem code của bạn có đủ nhanh hay không.
  * Điểm được tính theo số test bạn làm đúng. Chú ý là cách tính điểm này khác với IOI. Nếu bạn cày tham lam và đúng được 99% test, bạn sẽ được 99% số điểm.
* Vòng 2 là vòng chọn đội đi thi Quốc tế (IOI). Top 4 sẽ được đi thi IOI.
  * 2 ngày thi, 5 tiếng mỗi ngày
  * 3 bài mỗi ngày
  * Không có chấm thử
  * Tất nhiên là lại không có time limit rồi. Bạn phải tự đoán xem code của bạn có đủ nhanh hay không.
  * Điểm được tính theo số lượng test đúng.

Ở ngày thi đầu tiên của vòng 2, mình đọc đề bài 1 rất nhanh và phát hiện ra đây chỉ là một bài toán Dijkstra đơn giản. Thế là mình đâm đầu vào code ngay (sau đó thằng ngồi bên cạnh mình có đăng online như thế này "Vãi chưởng, hôm nay ngồi cạnh phải cái thằng code nhanh và khỏe ngay từ lúc đầu, sợ vãi."). Sau khi mình code xong rồi, tất nhiên là ra kết quả sai. Mình vẽ đồ thị ra giấy mà vẫn không hiểu tại sao lại có thể ra được cái output kia. Có một thằng ở trong phòng thi hỏi giám thị xem liệu đường đi có thể thăm lại đỉnh xuất phát và đỉnh kết thúc lần nữa không. Giám thị không biết, nhưng mình thì kiểu "WTF?", rồi nhận ra rằng nếu như đường đi có thể thăm lại đỉnh xuất phát, thì có thể cho ra output đúng. Nhưng mình lại không biết xử lý đỉnh kết thúc như thế nào. Thế là bài làm của mình thành ra đánh cược 50:50. Hai bài còn lại thì khá là dễ và không có gì đặc biệt. Sau khi thi xong, mình hỏi lại các bạn tham dự thì có vẻ mình là người duy nhất không xử lý thăm lại đỉnh kết thúc. F\*ck.

Thế là ngày hai mình bị tâm lý, rồi 3 bài đều khó hơn nhiều ngày thứ nhất. Mình giải được bài thứ nhất sau 1 tiếng đồng hồ. Sau khi đọc hai bài còn lại, mình nhận xét rằng bài thứ 3 là không thể làm được. Thế là mình dành cả 4 tiếng để code bài 2. Bài quá rắc rồi, code của mình thì đầy bug. Thi xong mình lại hỏi mọi người, và tất cả mọi người đều giải được bài 3 (sau khi giản lược đi thì bài toán trở thành một bài cây DFS đơn giản) và không có ai giải được bài 2.

Và thế là tất nhiên, mình không được đi IOI. Nhưng mình vẫn còn 1 năm nữa.

# Lớp 12

Năm này mình còn thảm hơn năm trước.

Mọi chuyện bắt đầu từ vòng 1. Mình làm xong hai bài đầu rất nhanh và có nhiều thời gian cho bài 3. Mình nghĩ rất là lâu về bài toán DP chữ số này và cảm giác thấy nó rất lạ lùng. Nếu như bạn đọc được tiếng Việt, [đây](http://vn.spoj.com/problems/TAXID/) chính là bài toán đó. Mình không giải được bài này, và cuối cùng phát hiện ra 9 người đã làm được và có điểm tuyệt đối. Đang hoảng loạn thì mình nhận ra bài 2 mình còn bị tràn số nguyên nữa.

Nhưng mà rồi cuối cùng mình vẫn gặp may, là người đứng thứ 30 vào được vòng 2. (Có tầm khoảng 10 người cùng điểm với mình, nên mình thật ra ở vị trí tầm 20-30).

Ở ngày thi đầu tiên, có 3 bài toán khá là dễ. Bài thứ hai có số lượng phép tính vào khoảng \\( 10 ^ 9 \\) và chạy phải mất 5s, nên mình dành rất nhiều thời gian tối ưu hóa code ở đây (nhớ rằng là bọn mình không biết time limit là bao nhiêu). Cuối cùng mình biết được là người ta đã đặt time limit của bài này thành 10s, nên không có ai bị TLE cả. Nhưng bài thứ nhất thì bị đặt vào tầm 0.5s nên tất cả mọi người đều bị TLE, trừ một hai bạn sử dụng heap thay vì segment tree: cùng độ phức tạp nhưng hằng số thấp hơn một chút.

Vào ngày thi thứ hai, mình nghĩ rằng vì mọi người đều điểm sàn sàn nhau sau ngày một rồi, nên mình phải cố để giải được hơn mọi người một bài trong ngày hôm nay. Rồi mình nghĩ mình lại gặp may mắn khi mình đọc bài thứ nhất của ngày hai: bài này có vẻ giống như một bài trên VOJ mà chỉ có mình giải được trước đó. (Đối với các bạn đọc người Việt, đó chính là [bài này](http://vn.spoj.com/problems/MTREECOL/)). Mình biết rằng ở trong bài tập này thì đồ thị là DAG chứ không phải là cây, và hàm chí phí là max thay vì là sum, nhưng mình nghĩ rằng mình có thể chỉnh sửa lại thuật một chút là có thể dùng được cho bài này. Gần 3,5 tiếng sau, mình vẫn không có thuật toán chạy được. Mình bắt đầu cảm thấy sợ hãi và chuyển sang hai bài còn lại. Bài thứ hai có vẻ là không khả thi, còn bài thứ 3 có vẻ khá là rõ ràng nhưng khó cài đặt, nên mình bắt đầu triển khai bài này. Mình code kịp thời gian còn lại, nhưng lại không có thời gian để test (và contest này không có chấm thử). Mình tin rằng lúc đó code của mình có rất nhiều bug. Sau khi thi xong, mình biết được là không có ai giải được bài 1 và 2. Tất cả mọi người giải được bài 3, một số thì viết solution cho các trường hợp nhỏ của bài 2. Không ai đụng tới bài 1 cả.

Và thế là mình lại trượt IOI, và tất cả đều là lỗi của mình. Lập trình là thứ duy nhất mình giỏi, là thứ duy nhất khiến mình hạnh phúc, và mình đã thất bại.

# ACM ở trường đại học

![undefined](/img/uploads/lam-sao-de-khong-thi-tot-ma-van-song-1-3.jpg)

Mình học đại học tại trường NTU ở Singapore. ktuan cũng học ở đây. ktuan là huyền thoại trong giới Lập trình thi đấu ở Việt Nam: người Việt Nam duy nhất đạt được nick đỏ (mọi người đang ở rating tầm 2500 thì anh ấy đã đạt tới trên 3000 rồi), người Việt Nam duy nhất từng đi Google Code Jam Final tới vài lần, và về nhì ở Facebook Hacker Cup Finals.

Dù sao thì, một hai tháng trước khi mình nhập học, anh ktuan có hỏi mình xem liệu mình có muốn tham dự đội ACM ICPC của anh ấy không. Anh ấy rất nghiêm túc về chuyện giành được huy chương ICPC nên muốn bắt đầu training ngay lập tức. Mình vừa mới thất bại trong kì thi chọn học sinh thi IOI, nên mình muốn nghỉ ngơi và từ chối lời đề nghị của anh ấy. Tất nhiên, đấy là cái "không" ngu nhất của mình và mình vẫn còn hối hận tới tận ngày hôm nay.

Đội của ktuan chỉ về thứ #17 năm đó.

Năm tiếp theo mình tham dự ICPC WF với người bạn thân nhất của mình là ConanKudo, cho dù mình bị dính bug ở vòng Regional khi khai báo mảng: mình tính nhầm 20 \* 30 = 60, nên mảng của mình bị quá bé. Ở vòng WF mình rất sợ bị dính bug ngu và sai thuật toán thêm nữa. Nhưng tất nhiên ở vòng này mình vẫn dính phải nhiều lỗi sai, bao gồm: hiểu sai đề, tràn số nguyên, cài đặt \\( O(2N \* N ^ 2) \\) thay vì \\( O(2N \* N) \\) và bị TLE, tối ưu hóa sai và bị WA thêm. Tất cả chỗ sai đó, chỉ trong bài dễ nhất của contest. Bạn có thể xem mình đã bị dính bao nhiêu WA ở bài C tại đây: [Bảng điểm World Final 2012](https://zibada.guru/finals/2012/). Nhìn vào top 20 và bạn sẽ nhanh chóng tìm ra người bị dính \+7. Các thành viên trong đội mình cũng không thi tốt trong ngày hôm dó và bọn mình chỉ có thể giải được 3 bài dễ (B, C, D) sau 3 tiếng thi đấu. Mình cảm thấy tuyệt vọng tới phát khóc - bọn mình tới tận vòng WF để mang huy chương về, và giờ thì mình làm mọi thứ ra thế này đây.

Thật thần kì là ConnanKudo đã giúp mình bình tĩnh lại và bọn mình giải được thêm 3 bài nữa trong 1,5 tiếng tiếp theo. "OMG có thể bọn mình giải được thêm 1 bài nữa là sẽ được huy chương!". Nhưng bọn mình không có đủ thời gian để cài đặt bài implementation I và chỉ có một số ý tưởng cho bài A. Bọn mình quyết định code A luôn, thay những cái chỗ mình không thể giải được bằng sinh random và duyệt cận. Và tất nhiên là bọn mình không giải được bài đó.

![undefined](/img/uploads/lam-sao-de-khong-thi-tot-ma-van-song-1-2.jpg)

Một lần nữa mình lại cảm thấy thật tồi tệ. Tới thời điểm hiện tại mình đã thất bại ở mọi thứ: không được đi IOI, không được huy chương ở ICPC WF.

Rồi vài tháng sau bạn gái đầu tiên chia tay mình.

Mình không thể chịu đựng nổi được. Trong vài tháng trời mình cảm thấy mọi thứ như địa ngục. mình cố gắng không để cảm xúc ảnh hưởng tới cuộc sống, nhưng nhiều lúc kể cả mình cũng nhận ra mình đang cư xử như thằng điên. Năm đó mình đi thi Regional ACM cùng với một thằng bạn nữa là technolt, và tất nhiên mình lại tạch Regional. Thế là cộng thêm với tình hình tâm lý của mình, mình phá hỏng mất tình bạn với technolt và nhiều người nữa. Lúc đó mình cảm giác như mình chẳng có ai làm bạn vậy. Có một thời gian dài mình ngủ tới 1 hay 2 giờ chiều, đi như một con zombie ra ăn trưa, về nhà, hầu như chả làm gì, đi ăn tối, lại hầu như chả làm gì tới 4 giờ sáng.

Ở tuần cuối cùng của tháng 11 năm 2012, mình cảm giác rằng đời mình đã chạm tới đáy. Thật sự rất thảm não. Nhưng không còn đường nào để đời mình trở nên tệ hơn nữa, nên mình nghĩ rằng có thể nó sẽ bắt đầu tốt lên chăng.

Mình bắt đầu hẹn hò với Hoang Yen từ đầu năm 2013 và điều này đã làm thay đổi cuộc đời mình. Nhưng mỗi lần đăng nhập vào Codeforces, mình lại nhớ lại tất cả những thất bại của mình, nên vào một lúc nào đó tầm giữa năm 2013 mình quyết định rằng mình ghét tài khoản cũ R_R_ tới nỗi mình quyết định lập ra tài khoản mới này. (Mình biết là rất sai trái khi có 2 tài khoản, và mình vẫn dùng cả hai lúc này lúc khác, nên mình vẫn cảm thấy rất tệ.)

# Kì thi ACM cuối

Vào một lúc nào đó giữa dòng đời xô đẩy, flashmt có nói với mình rằng một đội mà không thể thắng được vòng Regional không nên hy vọng tới huy chương ở ICPC WF. Điều đó khá là đúng và đội mình năm 2012 yếu tới mức bọn mình là đội cuối cùng vào được vòng WF ở khu vực. Nên mình quyết định sẽ tham dự ICPC WF một lần cuối với flashmt.

Mình lại quay lại luyện tập, nhưng có một vấn đề lớn: flashmt và mình học ở trường đại học khác nhau. Nên mình quyết định mình sẽ học bán thời gian ở NUS (National Unviersity of Singapore) để có thể thi đấu một lần cuối với flashmt. Bọn mình tìm được thêm một người từng giành huy chương IMO vào đội và tiến tới WF.

Mình luyện tập ròng rã trong hai năm cùng với flashmt dưới dự chỉ dạy của cao thủ lập trình thi đấu giỏi nhất Việt Nam hiện giờ là RR_PPAP. Mình lại tìm lại được tình yêu với contest thêm lần nữa. Tất nhiên, bọn mình không được huy chương ACM ICPC WF, nhưng mình cảm thấy nó cũng OK. Hai năm rèn luyện đã dạy mình nhiều thứ, bao gồm cả việc đối mặt với thất bại. Mình nhận ra rằng quãng thời gian luyện tập cho kì thi đem lại nhiều niềm vui hơn so với huy chương.

![undefined](/img/uploads/lam-sao-de-khong-thi-tot-ma-van-song-1-4.jpg)

Giờ đây mình không còn tham gia contest nữa - Mình sẽ làm đám cưới cuối năm nay *("Hú hú" - người dịch)* nên mình lúc nào cũng bận rộn. Nhưng mình đã bị mất rank đỏ trong contest vừa rồi và mình nhất định phải quay lại để lấy lại nó. Contest đã trở thành một phần không thể thiếu trong cuộc đời mình rồi.

# Bonus: Comment của natsukagami

Mình sẽ không viết cái comment này như là một lời hồi đáp cho bài viết của anh I_love_Hoang_Yen, nhưng là để bổ sung thêm cho bài viết của anh ấy, dưới góc nhìn của mình. Mình sẽ gọi anh ấy là RR (biệt danh của ảnh, anh ấy dùng ở mọi nơi, tất nhiên là trừ Codeforces rồi...).

Từ những câu chuyện mà bọn mình (các thành viên nhỏ tuổi hơn trong đội) đã dành nhiều đêm nghe anh kể trên Discord (yeah, bọn mình cũng có cả server Discord nữa), mình cho là anh ấy đã quên kể câu chuyện về RR_PPAP, một người bạn cực kì thân của anh ấy. Chắc chắn bạn cũng có thể thấy điều đó qua cái username rồi. Nhưng quan trọng hơn, RR_PPAP (đúng như qua lời kể của RR) là người đã đánh thức anh ấy khỏi những thất bại ở vòng chọn học sinh đi thi IOI hay ở vòng thi ACM WF lần đầu tiên. RR_PPAP, một con người kì lạ học môn Toán tìm tới Lập trình Thi đấu chỉ đề giải mấy bài toán khó cho vui, đã thay đổi cách suy nghĩ của RR về việc luyện tập để phát triển trong bộ môn này. Trước đó, RR (và chắc là nhiều học sinh trong cộng đồng Lập trình Thi đấu Việt Nam hồi ấy) chỉ muốn nhắm tới việc giải hết tất cả các bài tập trên VOJ. Tất nhiên là khi mà các bài khó đã hết dần, để đứng đầu tiếp thì phải làm các bài tập dễ và nhàm hơn. Đây là một sai lầm mà tất cả mọi người đều mắc phải, thay vì tiếp tục kiếm tìm các bài tập hay. RR lúc nào cũng cảnh báo bọn mình về việc này - về cách mà anh ấy tập trung quá nhiều vào code và code thay vì giải những bài toán thật sự yêu cầu suy nghĩ thật sự.

Đáng buồn là khi anh ấy nhận ra sai lầm của mình, cơ hội IOI của anh ấy đã không còn nữa, và anh giờ chỉ còn kì thi ACM-ICPC cuối cùng, và rồi câu chuyện tiếp tục giống như mọi người đã biết. Nhưng như là một người đàn anh, anh ấy luôn giúp đỡ các khóa dưới không đi theo vết xe đổ của mình. Mình cho rằng những huy chương vàng IOI mà Việt Nam đã giành được trong (ít nhất là) hai năm vừa qua, phần nào là nhờ những bài học của anh RR đã in sâu trong trí óc bọn mình. Mình cho rằng đây là một điều rất quý giá, khi bạn thất bại thì bạn nên biết là vì sao, và kể cả nếu như bạn không còn cơ hội để sửa đổi, bạn vẫn có nghĩa vụ phải giúp những người khác không đi vào cùng vết xe đổ của bạn nữa.

Nhưng câu chuyện của anh RR không kết thúc ở đây. "Contest đã trở thành một phần không thể thiếu trong cuộc đời mình rồi." - câu nói đó còn có ý nghĩa hơn khi bạn nhìn vào những gì mà RR đã làm cho cộng đồng lập trình thi đấu của Việt Nam. Anh ấy xây dựng nên forum VNOI dành cho dân lập trình thi đấu của Việt Nam - nhưng mà người ta không thích forum nữa, nên là trang dừng hoạt động chỉ sau vài tháng. Không chịu bỏ cuộc, anh ấy lập ra và tổ chức nhóm VNOI trên Facebook - một nơi "hợp thời" hơn chăng? - và biến nó thành một cộng đồng chia sẻ nổi tiếng. RR cũng là người xây dựng nên VNOI Wiki - trang web cung cấp các bản dịch và bài viết về giải thuật, cấu trúc dữ liệu và chiến lược thi đấu bằng tiếng Việt. Với những người không có vốn tiếng Anh dày dặn (mà phần lớn học sinh Việt Nam thì không có vốn tiếng Anh dày dặn), đây là nguồn thông tin tuyệt vời nhất để có thể bắt đầu sự nghiệp thi đấu. Trong một vài năm qua, mình cho rằng cộng đồng ở Việt Nam đã hoàn toàn thay đổi - không còn là một nhóm thi đua trên VOJ nữa, mà là một ngôi nhà lớn nơi mọi người chia sẻ và giảng dạy lẫn nhau, như một gia đình.

"Làm sao để không thi tốt mà vẫn sống"? Mình muốn đổi tên thành Làm sao để không thi tốt mà vẫn sống một cách BADASS. RR lúc nào cũng nói là anh ấy muốn thay đổi thế giới, thì đó, mình thấy anh ấy làm khá được mà.
