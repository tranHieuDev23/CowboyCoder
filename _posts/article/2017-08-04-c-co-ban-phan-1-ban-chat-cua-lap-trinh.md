---
title: '[C++ Cơ bản] Phần 1: Bản chất của lập trình'
author: Admin Tổng Quản
date: 2017-08-04T06:38:22.100Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 0: Giới thiệu series bài viết](http://cowboycoder.tech/article/c-co-ban-phan-0-gioi-thieu-series-bai-viet)*

Trước khi bắt đầu vào nội dung chính của series, mình muốn
nói qua một chút về bản chất của công việc lập trình, hay cụ thể hơn là *Làm thế nào mà máy tính của bạn hiểu được
chương trình của bạn*.

Câu trả lời ngắn: Chương trình máy tính đưa ra chỉ thị để
máy tính của bạn làm việc. Câu trả lời này đúng, nhưng nếu chỉ tới đó thôi thì
chưa đủ để giải thích nhiều hiện tượng trong lập trình.

Câu trả lời dài sẽ là như thế này:

Máy tính của bạn chỉ hiểu được đúng hai trạng thái bật và tắt.
Một chiếc máy tính thật ra chỉ là một tập hợp tầm vài tỷ transistor, và bất cứ
những gì nó có thể làm được đều là nhờ việc bật tắt các transistor một cách hợp
lý. Chúng ta sử dụng mã nhị phân (binary code) 0 và 1 để mã hóa các trạng thái
bật và tắt đó - mỗi tập hợp 8 bit 0 - 1 sẽ tương ứng với 8 transistor và bằng 1
byte.

![null](/img/uploads/cpp-co-ban-1-1.jpg)

Tất nhiên, vấn đề nảy sinh là chúng ta không thể viết hết chỗ
binary code bằng sức trâu được. Và đây lý do tại sao các ngôn ngữ lập trình ra
đời.

# Ngôn ngữ lập trình

Đây là ví dụ cho một đoạn code C\+\+

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello World!";
    return 0;
}
{% endhighlight %}

Định nghĩa đơn giản thì một ngôn ngữ lập trình là một tập hợp
các quy tắc ngữ pháp quy định cách viết code theo ngôn ngữ đó. Hàng nghìn ngôn
ngữ lập trình ra đời giúp cho chúng ta có thể viết ra ứng dụng, trang web, chế
tạo robot, vân vân… một cách đơn giản và tiện lợi thay vì phải đụng chạm tới
binary code.

# Ngôn ngữ bậc thấp và ngôn ngữ bậc cao

Ngôn ngữ bậc thấp thì đơn giản và gần hơn so với binary
code, trong khi ngôn ngữ bậc cao lại phức tạp hơn và có nhiều tính năng hơn.
Ngôn ngữ bậc thấp viết ra chương trình chạy nhanh hơn, trong khi ngôn ngữ bậc
cao thì dễ viết hơn vì chúng gần gũi hơn với ngôn ngữ tự nhiên của con người.

Phần lớn ngôn ngữ lập trình dùng trong sản xuất là ngôn ngữ
bậc cao. C\+\+ được đánh giá là ngôn ngữ bậc trung, vì nó bao gồm tính năng của cả
hai chuẩn ngôn ngữ trên.

# Tại sao chúng ta có nhiều ngôn ngữ lập trình đến thế?

![undefined](/img/uploads/cpp-co-ban-1-2.jpg)

Lý do đầu tiên, đó là do mỗi ngôn ngữ có điểm mạnh và điểm yếu
của nó. Ruby và Javascript thích hợp cho việc phát triển website. Java và C\+\+
thường được sử dụng cho việc phát triển ứng dụng kinh doanh - kiểm toán. Python
và R được sử dụng trong phân tích dữ liệu, vân vân…

Lý do thứ hai, một ngôn ngữ phát triển được là nhờ có cộng đồng
xung quanh hộ trợ cho nó. Stack Overflow sử dụng C#, vì đó là ngôn ngữ mà các
nhà sáng lập ra trang web biết. Các ngôn ngữ như Java hay C\+\+ được sử dụng nhiều,
bởi vì có một số lượng khổng lồ thư viện và công cụ xây dựng xung quanh chúng,
bởi những người sử dụng chúng. Các tổ chức và công ty công nghệ cũng chi tiền để
đầu tư cho các ngôn ngữ lập trình của riêng họ. Kết quả là số lượng ngôn ngữ lập
trình ngày càng gia tăng.

Lý do cuối cùng, đó là sở thích của mỗi lập trình viên. Ngôn
ngữ lập trình suy cho cùng cũng là một ngôn ngữ để con người diễn đạt ý tưởng của
mình cho máy tính hiểu. Chỉ riêng với công việc làm web thôi, bạn có thể sử dụng
Ruby, Java, Python, C#, Go, JavaScript, nhiều lắm… Mỗi người có một khẩu vị
khác nhau, và điều đó giúp cho các ngôn ngữ lập trình đa dạng hơn.

# Chương trình

Một chương trình máy tính thực chất chỉ là một file văn bản,
được viết bằng một ngôn ngữ lập trình. Đoạn code trong chương trình máy tính được
gọi là mã nguồn (source code). Mỗi ngôn ngữ lập trình có một số định dạng mở rộng
nhất định cho file chương trình của mình, ví dụ như .cpp của C\+\+ hoặc .py của
Python.

Để viết một file chương trình, bạn chỉ cần một chương trình
soạn thảo văn bản đơn giản (như Notepad – trình soạn thảo văn bản cài sẵn trên hệ
điều hành Windows), viết source code vào đó và lưu lại ở định dạng tương ứng.

Trong lập trình thực tế, chúng ta sử dụng các IDE (Integrated development environment, phần mềm
môi trường phát triển tích hợp) để viết chương trình một cách tiện lợi. Các
chương trình IDE thường tích hợp các tính năng như trình dịch chương trình
\(complier), trình debug, gợi ý cú pháp, vân vân… ngay trong chương trình để người
dùng có thể soạn thảo chương trình dễ dàng hơn. Một số IDE nổi tiếng bao gồm
Visual Studio của Microsoft, IntelliJ IDEA hay PyCharm của JetBrains, vv…

Trong series bài
viết này, chúng ta sử dụng Code::Blocks IDE để viết chương trình C\+\+.

![undefined](/img/uploads/cpp-co-ban-1-3.jpg)

# Làm sao để chạy các chương trình được viết ra?

Điều này tùy vào
từng ngôn ngữ lập trình. Ví dụ, một chương trình JavaScript sẽ được chạy trực
tiếp trên các trình duyệt như Chrome, chương trình PHP sẽ được chạy trên web server
như LAMP, trong khi chương trình C\+\+ sau khi được biên dịch (comply) sẽ trở
thành một file chương trình mà hệ điều hành có thể sử dụng ngay được (như file
.exe đối với Windows).

# Chuyện gì xảy ra khi chương trình được chạy?

Như đã nói ở
trên, chương trình máy tính không hiểu trực tiếp ngôn ngữ lập trình. Khi ta chạy
một chương trình, máy tính sẽ phải:

1\.      
Dịch
chương trình máy tính từ ngôn ngữ lập trình sang ngôn ngữ Assembly. Assembly là
một ngôn ngữ lập trình ở mức độ cực thấp, sử dụng các từ ngữ và số để biểu diễn
các dãy bit. Tùy vào ngôn ngữ, bước này sẽ được thực hiện bởi một trình biên dịch
\(complier) - chương trình dịch toàn bộ file lệnh cùng một lúc - hoặc thông dịch
\(interpreter) - chương trình dịch từng dòng code một, theo thời gian thực.

2\.      
Dịch
từ ngôn ngữ Assembly sang ngôn ngữ máy. Ngôn ngữ máy là một loạt các chỉ thị được
xử lý trực tiếp bởi CPU của thiết bị để thực hiện các hành động trên máy.

3\.      
Dịch
từ ngôn ngữ máy sang binary code.

Điều thú vị của quá trình này là nó đảm bảo rằng **công việc lập trình sẽ không bao giờ biến mất, ngay kể cả khi chúng ta có những trí tuệ nhân tạo có khả năng viết thuật toán tốt hơn con người**. Ngay kể cả khi điều đó xảy ra, mọi thứ cũng chỉ giống như khi chúng ta di chuyển từ ngôn ngữ bậc thấp lên ngôn ngữ bậc cao - con người vẫn sẽ là tác nhân giải thích và quyết định chức năng của phần mềm, dù cho là bằng ngôn ngữ lập trình hay bằng ngôn ngữ con người đi chăng nữa.

*Bài viết có dựa vào nguồn tham khảo tại [http://www.codeconquest.com/what-is-coding/how-does-coding-work/](http://www.codeconquest.com/what-is-coding/how-does-coding-work/)
và [https://stackoverflow.blog/2015/07/29/why-are-there-so-many-programming-languages/](https://stackoverflow.blog/2015/07/29/why-are-there-so-many-programming-languages/)*

*Phần sau: [\[C++ Cơ bản\] Phần 2: Giới thiệu về C++](http://cowboycoder.tech/article/c-co-ban-phan-2-gioi-thieu-ve-c)*
