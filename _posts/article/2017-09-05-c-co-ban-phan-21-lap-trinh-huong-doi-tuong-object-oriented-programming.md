---
title: '[C++ Cơ bản] Phần 21: Lập trình hướng đối tượng - Object Oriented Programming'
author: Admin Tổng Quản
date: 2017-09-05T12:22:27.760Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 20: Bài thực hành tổng hợp - Chương trình quản lý học sinh \(tiếp\)](http://cowboycoder.tech/article/c-co-ban-phan-20-bai-thuc-hanh-tong-hop-chuong-trinh-quan-ly-hoc-sinh-tiep)*

Trước khi bắt đầu bài viết, hãy cùng công nhận hai sự thật sau:

1. Viết lặp code là xấu
2. Code sẽ luôn luôn bị thay đổi

Điều đầu tiên là rõ ràng - nếu như có nhiều đoạn code cùng làm một chức năng trong chương trình, khi ta muốn chỉnh sửa sẽ phải chỉnh sửa tất cả các đoạn code như thế. Điều đó rất dễ sinh ra lỗi, hoặc ít nhất sẽ khiến bạn và những người phải đọc code của bạn vô cùng khó chịu. Đó cũng là lý do vì sao chúng ta phải sử dụng tới chương trình con.

Trừ khi bạn đang viết những chương trình "dùng một lần rồi bỏ", ngược lại thì điều thứ hai cũng đúng. Bạn sẽ luôn luôn phải mó đến code cũ để sửa bug hoặc nâng cấp chương trình, hoặc sửa bug vì nâng cấp chương trình, vân vân… Đời là bể khổ, viết code là quá trình viết ra bug mà ¯\\_(ツ)_/¯

Để thích nghi với hai điều trên, bắt đầu từ bài viết này chúng ta sẽ làm quen với một phương pháp lập trình mới rất quan trọng trong ứng dụng thực tế, đó là lập trình hướng đối tượng.

# Programming Paradigm - Mẫu hình lập trình

Giống như các vấn đề trong thực tế, các bài toán lập trình cũng có nhiều cách tiếp cận khác nhau. Ta gọi các cách tiếp cận tới bài toán lập trình là các mẫu hình lập trình - Programming Paradigm. Phần lớn các ngôn ngữ sẽ được viết theo một paradigm nhất định, nhưng cũng có các ngôn ngữ hỗ trợ nhiều paradigm như C++. Hai paradigm quan trọng nhất trong lập trình là lập trình thủ tục - Procedural Paradigm và lập trình hướng đối tượng - Object-oriented Paradigm.

## Procedural Programming (PP)

Lập trình thủ tục sử dụng các chương trình con để xử lý dữ liệu theo từng bước một. Cách tiếp cận bài toán là hình dung thông tin như dòng chảy từ input, di chuyển qua các thành phần xử lý trong chương trình, và đưa ra output. Chẳng đâu xa, từ đầu series bài viết tới giờ, chúng ta đã sử dụng PP rồi.

Phương pháp lập trình này rất trực quan, vì nó giống như cách mà một chiếc máy tính hoạt động: bằng cách cung cấp chỉ dẫn từng bước một cho nó. Vậy nên cũng dễ hiểu tại sao các ngôn ngữ lập trình đời đầu như Fortran, COBOL hay C đều là các ngôn ngữ PP.

## Object-oriented Programming (OOP)

Lập trình hướng đối tượng lại là một cách tiếp cận bài toán khác: Ta hình dung dữ liệu như các đối tượng, với các đặc tính và hành vi đặc trưng, và chương trình hoạt động bằng cách cho các đối tượng giao tiếp với nhau.

Ví dụ áp dụng bài thực hành tổng hợp khi trước: Ta có một kiểu dữ liệu ```Student``` lưu trữ thông tin của học sinh, một kiểu dữ liệu ```DatabaseProcessor``` có khả năng thực hiện các thao tác trên cơ sở dữ liệu, và một kiểu dữ liệu ```UserInterface``` quản lý giao diện người dùng của chương trình. Khi người dùng thực hiện các thao tác như click, nhập dữ liệu, đối tượng ```UserInterface``` sẽ thực hiện thay đổi lên đối tượng ```Student```, rồi đẩy đối tượng ```Student``` cho ```DatabaseProcessor``` để lưu trữ. Toàn bộ chương trình chính là một hệ thống định nghĩa các đối tượng này và cách mà chúng giao tiếp với nhau.

C++ ra đời nhằm mục đích bổ sung thêm khả năng lập trình OOP cho C (vì vậy ban đầu nó còn có tên là C with Class). Java là một ngôn ngữ lập trình hướng đối tượng phổ biến khác.

![undefined](/img/uploads/cpp-cơ-bản-21-1.jpg)
 
# OOP có những tính chất gì?

## Class và Object

Ở trong bài viết [Cú pháp C++ cơ bản](http://cowboycoder.tech/article/c-co-ban-phan-4-cu-phap-c-co-ban), chúng ta đã nói về Class và Object. Ta hiểu rằng object là các đối tượng trong chương trình, và class là định nghĩa cho các nhóm đối tượng đó. Các object có các thuộc tính (attribute) và phương thức (method) để giao tiếp với nhau. Việc viết chương trình OOP định nghĩa các class và quy định chúng giao tiếp với nhau như thế nào.

## Tính thừa kế (inheritance)

Giả sử chúng ta có class ```Animal```, bao gồm một số thông tin cơ bản về các loài động vật như là tên loài, thuộc nhóm nào, chi nào. Sau đó chúng ta lại muốn tạo ra một class ```Cat``` để mô tả loài mèo. Rõ ràng là mèo là một loài động vật rồi, nên nó cũng phải thừa hưởng tất cả các tính chất chung của động vật. Nếu mà copy code rồi paste ra thì không ổn, vi phạm quy tắc 1 ở trên. Bằng cách cho class ```Cat``` là một class con của ```Animal```, ```Cat``` sẽ thừa hưởng mọi đặc tính của ```Animal``` - đây chính là ví dụ của tính thừa kế.

![undefined](/img/uploads/cpp-cơ-bản-21-2.jpg)
 
## Tính trừu tượng (abstraction)

Lại nói tới chuyện class ```Animal```. Đã là động vật thì phải biết đi, vậy nên tất cả các loài động vật đều có chương trình con ```walk()```. Thế nhưng mỗi loài động vật lại có một cách đi riêng: Con mèo thi chạy bằng 4 chân, con rắn thì bò, con người thì bước bằng 2 chân…

Nếu bây giờ bạn có một object thuộc class ```Animal```, bạn chỉ muốn ra lệnh ```walk()``` cho nó, mà không hề muốn quan tâm gì tới cái phần ẩn phía dưới kia hết. Đó chính là tính trừu tượng - cung cấp phần quan trọng của đối tượng mà không cần quan tâm tới các yếu tố hậu trường.

## Tính đa hình (polymorphism)

Như ở trong ví dụ đi lại của động vật, ta thấy rõ ràng rằng với cùng một class ```Animal```, đối tượng này có thể có chương trình con ```walk()``` hoạt động như thế này, trong khi đối tượng khác có thể có ```walk()``` hoạt động kiểu khác. Đây chính là ví dụ của tính đa hình - cùng một chương trình con có thể có cách hoạt động khác nhau, tùy vào cài đặt object đang được gọi.

## Tính đóng gói (encapsulation)

Ta chuyển sang chuyện ăn uống của các loài động vật. Cũng giống như đi lại, các loài động vật chỉ cần cho thức ăn vào miệng và ăn, không cần quan trọng phía bên trong ruột rà xử lý ra làm sao (táy máy vào có khi còn lòi ruột). Trong lập trình cũng như thế, có những yếu tố của một đối tượng mà ta muốn che giấu khỏi người khác hoặc chương trình khác, để không bị xáo trộn lung tung gây hỏng hóc.

![undefined](/img/uploads/cpp-cơ-bản-21-3.jpg)
 
Ví dụ: Ta có một class ```Date```, dùng để biểu diễn ngày. Trong class ```Date``` có một biến ```int``` gọi là ```weekDay```, dùng để chỉ thị xem ngày đang được biểu diễn là thứ mấy, với giá trị từ 1 tới 7. Giả sử từ bên ngoài, ta có thể thay đổi được giá trị ```weekDay``` này. Thế thì ta có thể tha hồ gán giá trị lung tung cho ```weekDay```, như ```86400``` chẳng hạn, và làm hỏng cả hệ thống.

Tính đóng gói cho phép ta gói dữ liệu nội bộ bên trong class, giới hạn những gì có thể truy cập được từ bên ngoài (```public```) và những gì không (```private```), để dễ dàng kiểm soát đối tượng.

# Tại sao lại phải dùng OOP?

Quay trở về hai quy tắc ở đầu bài, ta thấy OOP chính là giải pháp đáp ứng phù hợp. Bằng việc thiết kế đối tượng một cách hợp lý, ta có thể tạo ra các cấu trúc thừa kế các tính chất của nhau, tránh việc phải lặp đi lặp lại code. Các class được thiết kế như các module nhỏ của chương trình, và chỉ cần lắp đặt khớp vào với nhau thì chương trình có thể dễ dàng nâng cấp hay chỉnh sửa.

![undefined](/img/uploads/cpp-cơ-bản-21-4.jpg)
 
Đó, xong phần lý thuyết rồi. Bài viết tiếp theo sẽ nói về cách triển khai OOP trong C++, bắt đầu với class và object.

*Phần sau: [\[C++ Cơ bản\] Phần 22: Class và Object](http://cowboycoder.tech/article/c-co-ban-phan-22-class-va-object)*
