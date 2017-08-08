---
title: '[C++ Cơ bản] Phần 2: Giới thiệu về C++'
author: Admin Tổng Quản
date: 2017-08-05T09:52:29.738Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 1: Bản chất của lập trình](http://cowboycoder.tech/article/c-co-ban-phan-1-ban-chat-cua-lap-trinh)*



Định nghĩa C\+\+ của trang [tutorialspoint.com](http://www.tutorialspoint.com/) là:

***C\+\+ là một ngôn ngữ lập trình định kiểu tĩnh, biên dịch, đa chức năng, đa hình và phân biệt chữ thường - chữ hoa, hỗ trợ lập trình thủ tục, lập trình hướng đối tượng và dữ liệu trừu tượng.***

![undefined](/img/uploads/cpp-cơ-bản-2-1.jpg)

Hãy cùng giải thích từng phần một của định nghĩa trên:

* **Ngôn ngữ lập trình định kiểu tĩnh (statically typed)**: là ngôn ngữ lập trình xác định tất cả các kiểu dữ liệu trong mã nguồn vào thời điểm dịch. Nếu xảy ra sai sót về kiểu dữ liệu (ví dụ: gán giá trị là 1 xâu kí tự - string cho một biến kiểu số nguyên) thì bộ dịch sẽ báo lỗi và chương trình sẽ không được dịch. C\+\+ là ngôn ngữ lập trình định kiểu tĩnh, trong khi một số ngôn ngữ khác như Javascript là ngôn ngữ định kiểu động - các biến trong chương trình có thể có bất cứ kiểu dữ liệu nào.
* **Biên dịch (complied)**: là ngôn ngữ phải đi qua một bộ dịch (complier) trước khi trở thành một chương trình hệ điều hành có thể dùng. Biên dịch khác với thông dịch là ngôn ngữ thông dịch sẽ đi qua một trình thông dịch (interpreter) theo từng dòng code một trong thời gian thực để thực hiện chương trình. C\+\+ là ngôn ngữ biên dịch, Javascript là ngôn ngữ thông dịch.
* **Đa chức năng (general-purpose)**: là ngôn ngữ có thể sử dụng cho nhiều mục đích, do cấu trúc của nó không bắt buộc nó phải chạy trong một môi trường cụ thể nào cả.
* **Đa hình (free-form)**: là ngôn ngữ không quan trọng về vấn đề sắp đặt các kí tự trong mã nguồn, miễn là chúng đúng cú pháp. Các dấu cách và kí tự xuống dòng không ảnh hưởng tới quá trình dịch, chúng chỉ có tác dụng chia cách các đối tượng trong mã nguồn và để mã nguồn dễ đọc hơn. Do đó, việc đặt nhiều dấu cách hay xuống dòng đúng chỗ là không bắt buộc, cho dù được khuyến khích để code dễ đọc, dễ bảo trì hơn.
* **Phân biệt chữ thường - chữ hoa (case-sensitive)**: các yếu tố trong ngôn ngữ có phân biệt chữ thường - hoa. Ví dụ abc và ABC là hai tên biến của 2 biến khác nhau.
* **Lập trình thủ tục (procedural programming)**: là mô hình lập trình mà chương trình được tổ chức như là các thủ tục xử lý dòng dữ liệu từ trên xuống dưới.
* **Lập trình hướng đối tượng (object oriented programming)**: là mô hình lập trình mà chương trình được tổ chức như là một tập hợp các đối tượng, mỗi đối tượng có các tính chất (dữ liệu) và phương thức (chương trình con) để giao tiếp với chính nó và với các đối tượng khác.
* **Dữ liệu trừu tượng (generic programming)**: là khả năng lập trình cho phép người dùng đặt các kiểu dữ liệu sẽ-được-xác-định-về-sau trong thuật toán. Ví dụ: khi viết cấu trúc vector để lưu trữ dữ liệu, ta có thể đặt kiểu dữ liệu trừu tượng cho cấu trúc vector ban đầu, và khai báo kiểu dữ liệu được lưu trữ riêng cho từng cá thể vector về sau.

C\+\+ được đánh giá là ngôn ngữ bậc trung, vì nó có các tính chất và chức năng của cả ngôn ngữ bậc thấp và cao.

C\+\+ được phát triển bởi Bjarne Stroustrup từ năm 1979 tại Bell Labs, Murray Hill, New Jersey, để cải tiến cho ngôn ngữ C và được đặt tên ban đầu là C có Class, nhưng về sau đổi thành C\+\+ vào năm 1983.

C\+\+ là một tập hợp cha của C, và bất cứ chương trinh C hợp lệ nào cũng là chương trình C\+\+ hợp lệ.

# Các thư viện chuẩn

Ngôn ngữ C\+\+ tiêu chuẩn bao gồm 3 phần:

* Phần ngôn ngữ gốc bao gồm các yếu tố cấu thành nên chương trình như các biến, kiểu dữ liệu, toán tử, vân vân…
* Thư viện C\+\+ chuẩn (Standard Library, viết tắt là std) cung cấp các hàm và lệnh liên quan tới xử lý file, string, vân vân…
* Thư viện Template C\+\+ chuẩn (Standard Template Library, viết tắt là STL) cung cấp các cấu trúc dữ liệu như set, vector, map, …

# Phương pháp học C\+\+

Điều quan trọng nhất khi học C\+\+ là tập trung vào các khái niệm, thay vì vào các chi tiết kĩ thuật. Nên nhớ rằng ngôn ngữ cũng chỉ là cách giải thích thuật toán của con người để máy tính có thể hiểu được - nắm vững khái niệm sẽ giúp ta nhanh chóng chuyển đổi kiến thức từ ngôn ngữ này sang ngôn ngữ khác, thay vì nhớ một cách máy móc cách câu lệnh.

Đừng chỉ đọc lý thuyết, hãy đem những kiến thức mới học vào thực hành. Bắt đầu từ những chương trình nhỏ và đơn giản; tới khi kết thúc series này, bạn sẽ có đủ kiến thức để áp dụng C\+\+ vào những công việc phức tạp hơn như lập trình thi đấu hoặc sản xuất ứng dụng.

Điều cuối cùng nhưng không kém phần quan trọng, đó là đừng ngại ngần đem những thắc mắc của mình lên các diễn đàn lớn để hỏi, hoặc tìm kiếm trên Google. Bạn cũng có thể comment những thắc mắc của mình ở ngay dưới mục comment của bài viết để được nhóm trợ giúp.

# Ứng dụng của C\+\+

C\+\+ được sử dụng bởi hàng nghìn lập trình viên trên nhiều lĩnh vực khác nhau. Một ứng dụng quan trọng của C\+\+ là để viết các chương trình điều khiển phần cứng (driver) hoặc các ứng dụng xử lý trực tiếp phần cứng trong thời gian thực.

C\+\+ cũng được sử dụng rộng rãi để giảng dạy và nghiên cứu, vì cấu trúc gọn gàng của nó rất tốt cho việc giải thích các khái niệm cơ bản của lập trình.

Bất cứ ai đã sử dụng các thiết bị Macintosh của Apple hoặc PC chạy Windows đều đã gián tiếp sử dụng C\+\+, vì giao diện người dùng chính của các hệ điều hành này đều được viết bằng C\+\+.

C\+\+ được đánh giá là ngôn ngữ lập trình phổ biến thứ 4, theo [đánh giá của spectrum.ieee.org](https://spectrum.ieee.org/computing/software/the-2017-top-programming-languages).

*Phần sau: [\[C++ Cơ bản\] Phần 3: Thiết lập môi trường làm việc - Giới thiệu về Code::Blocks](http://cowboycoder.tech/article/c-co-ban-phan-3-thiet-lap-moi-truong-lam-viec-gioi-thieu-ve-codeblocks)*
