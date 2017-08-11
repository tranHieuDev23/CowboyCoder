---
title: '[C++ Cơ bản] Phần 4: Cú pháp C++ cơ bản'
author: Admin Tổng Quản
date: 2017-08-07T06:25:14.815Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 3: Thiết lập môi trường làm việc - Giới thiệu về Code::Blocks](http://cowboycoder.tech/article/c-co-ban-phan-3-thiet-lap-moi-truong-lam-viec-gioi-thieu-ve-codeblocks)*

Một chương trình C++ cơ bản có cấu trúc giống như một tập hợp các đối tượng lập trình, giao tiếp với nhau bằng việc kích hoạt các phương thức giữa chúng. Cụ thể hơn thì:

* **Đối tượng (object):** Một đối tượng sẽ có các tính chất và phương thức. Ví dụ: một con chó thì có tính chất như màu lông, tuổi, tên, giống chó; có các phương thức như sủa, ăn, tiêu hóa thức ăn.
* **Lớp (class):** Class là định nghĩa của đối tượng. Một class sẽ được định nghĩa danh sách những tính chất và phương thức mà các đối tượng trong class đó sở hữu. Ví dụ: Cả loài chó nói chung sẽ có những tính chất như trên, trong khi con Milu nhà bạn sẽ có giá trị đặc biệt cho từng tính chất.
* **Phương thức (method):** Phương thức là những hành vi được định nghĩa của một đối tượng. Phương thức là nơi mà các biến được thay đổi, đối tượng giao tiếp với nhau, vân vân… Ví dụ: Khi một con chó sủa, biến “Cơ vòm họng” của nó sẽ co bóp để tạo âm thanh, đối tượng “Âm thanh” sẽ được tạo ra, và hàng xóm sẽ được kích hoạt phương thức “Cau có”.
* **Biến cá thể (instance variable):** Mỗi đội tượng sẽ có một số biến cá thể, định nghĩa các giá trị tính chất của nó.

![undefined](/img/uploads/cpp-cơ-bản-4-1.jpg)
 
# Cấu trúc chương trình C++

Hãy cùng nhìn lại chương trình HelloWorld lúc trước của chúng ta và cùng nhau tìm hiểu từng phần một:

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello world!" << endl;
    return 0;
}
{% endhighlight %}

* ```#include <iostream>```: Như đã nói ở trước, C++ có một hệ thống thư viện chứa các hàm và chương trình con quan trọng cho việc lập trình. Ở đây ta sử dụng cú pháp ```include``` để khai báo sử dụng thư viện ```iostream``` – một trong các thư viện nhập/xuất của C++.
* ```using namespace std;```: Dòng lệnh này khai báo sử dụng không gian tên std. Chúng ta tạm thời chưa cần quan tâm ở đây. 
* ```int main()```: Hàm ```main()``` là nơi chương trình C++ được triển khai. Hàm này trả lại một giá trị kiểu số nguyên (```int```) thông báo chương trình có được kết thúc một cách hợp lệ hay không.
* Ngoặc nhọn là đánh dấu phần nội dung của hàm ```main()```.
* ```cout << "Hello world!" << endl;```: Dòng lệnh này yêu cầu chương trình in ra xâu ký tự ```Hello world!``` cùng với việc xuống dòng.
* ```return 0;```: Báo hiệu kết thúc hàm ```main()```, trả về giá trị 0 (chương trình kết thúc hợp lệ, không có gì bất thường).

# Dấu chấm phẩy và khối lệnh ngoặc nhọn

Trong C++, tất cả các dòng lệnh đều phải kết thúc bằng dấu chấm phẩy. Nó đánh dấu kết thúc cho các hành động xử lý logic của chương trình.

Như ở trong ví dụ trên: các dòng ```using namespace std;```, ```cout << “Hello world!” << endl;``` và ```retun 0;``` đều phải kết thúc bằng dấu chấm phẩy.

Một khối lệnh là một nhóm lệnh được đóng trong hai ngoặc nhọn. Các lệnh trong khối lệnh sẽ được triển khai từ trên xuống dưới, từ trái qua phải. Ví dụ cho một khối lệnh là hàm ```main()``` ở trên:

{% highlight c++ %}
{
    cout << "Hello world!" << endl;
    return 0;
}
{% endhighlight %}

C++ không công nhận việc xuống dòng là kết thúc của một câu lệnh. Do đó ta có thể đặt dấu chấm phẩy ở bất kì đâu, hoặc viết nhiều câu lệnh trên cùng một dòng, mà không sinh ra lỗi. Đoạn code:

{% highlight c++ %}
{
    cout << "Hello world!" << endl
    ;
    return 0;
}
{% endhighlight %}

và

{% highlight c++ %}
{
    cout << "Hello world!" << endl; return 0;
}
{% endhighlight %}

đều là các đoạn code hợp lệ.

# Cách đặt tên trong C++

Các đối tượng trong C++ như biến, chương trình con, vân vân… đều cần có tên. C++ có một số quy tắc đặt tên như sau:

* Tên phải được bắt đầu bằng chữ cái tiếng anh (từ a tới z hoặc từ A tới Z), hoặc một dấu gạch dưới "_", có thể được nối tiếp bởi các chữ cái, dấu gạch dưới hoặc các số.
* Tên không được chứa các dấu câu, kí tự đặc biệt như @, %, $.
* Tên có sự phân biệt chữ hoa - chữ thường. Ví dụ, ```number``` và ```Number``` là hai tên gọi khác nhau trong một chương trình C++.
* Tên không được trùng với các từ khóa đã được C++ sử dụng. Danh sách các từ khóa có thể được tìm thấy ở <http://en.cppreference.com/w/cpp/keyword.>

**Chú ý:** Đừng lo ngại về số lượng từ khóa của C++! Mặc dù trông chúng có thể nhiều, nhưng các IDE hiện đại đều được tích hợp chức năng gợi ý từ. Bạn sẽ rất dễ dàng nhận ra được tên biến bạn định đặt có trùng với từ khóa nào không. Các bộ dịch cũng sẽ tự động báo lỗi khi dịch phải chương trình đặt tên biến có từ khóa.

![undefined](/img/uploads/cpp-cơ-bản-2-1.jpg)

# Khoảng trắng

Các kí hiệu không nhìn thấy được như dấu cách, kí tự xuống dòng, tab và các đoạn comment được gọi chung là khoảng trắng. Các khoảng trắng có tác dụng phân biệt các đối tượng trong một câu lệnh với nhau. Ví dụ khi khai báo hàm ```int main()```, khoảng trắng (dấu cách) là cần thiết. Trong các trường hợp khác, ví dụ như câu lệnh

{% highlight c++ %}
x = y + z;
{% endhighlight %}

Bản thân các dấu kí hiệu toán đã có khả năng phân biệt đối tượng, và các khoảng trắng chỉ được cho vào để đoạn code dễ đọc hơn.

# Comment

Ta cũng có thể cho thêm các đoạn bình luận để giải thích cho code. Ví dụ như đoạn code sau:

{% highlight c++ %}
#include <iostream>

using namespace std;

/* Hàm main() là nơi chương trình được thực hiện */

int main() 
{
    cout << "Hello world!" << endl; // In ra dòng chữ Hello World!
    return 0;
}
{% endhighlight %}

Có hai cách để comment trong code C++:
* Sử dụng ```/* */``` để dánh dấu khoảng comment.
* Sử dụng ```//```. Đoạn comment sẽ bắt đầu từ kí hiệu này tới hết dòng.

Trình dịch C++ sẽ bỏ qua tất cả các đoạn code được comment, vì vậy chúng không sinh ra lỗi.

Comment còn có một tác dụng khác, đó là tạm thời tắt một đoạn code đi nhằm mục đích sửa chữa - debug.

CodeBlocks hỗ trợ tổ hợp phím Ctrl + Shift + C để bỏ dòng code hiện tại, hoặc các dòng code được bôi đen, vào trong comment, cùng với Ctrl + Shift + X để bỏ dòng code ra khỏi comment.

*Phần sau: [\[C++ Cơ bản\] Phần 5: Biến và kiểu dữ liệu](http://cowboycoder.tech/article/c-co-ban-phan-5-bien-va-kieu-du-lieu)*

