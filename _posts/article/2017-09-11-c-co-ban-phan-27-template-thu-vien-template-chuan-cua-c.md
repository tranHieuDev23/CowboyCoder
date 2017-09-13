---
title: '[C++ Cơ bản] Phần 27: Template. Thư viện template chuẩn của C++.'
author: Admin Tổng Quản
date: 2017-09-11T13:11:39.042Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 26: Bài thực hành - Game đố vui](http://cowboycoder.tech/article/c-co-ban-phan-26-bai-thuc-hanh-game-do-vui)*

Giả sử ta muốn tạo ra một hàm lấy max của hai số nguyên, ta sẽ viết như sau

{% highlight c++ %}
int Max(int x, int y)
{
    return (x > y? x : y);
}
{% endhighlight %}

Cũng trong cùng một chương trình đó, ta muốn lấy max của hai ```string```, ta sẽ phải viết thêm một hàm mới

{% highlight c++ %}
string Max(string x, string y) // Overload
{
    return (x > y? x : y);
}
{% endhighlight %}

Nếu như chỉ tới đây thôi thì không sao. Đằng này chương trình lại còn cần phải lấy max của hai giá trị kiểu ```char```, rồi ```double```, của giá trị kiểu class mà ta thiết kế ra… Chả lẽ lại viết lại hết tất cả các hàm có cùng một nội dung lặp đi lặp lại? Template ra đời nhằm mục giải quyết các vấn đề như vậy.

# Template và Generic programming

Generic programming là khả năng cho phép lập trình viên có thể viết chương trình có khả năng thích nghi với nhiều kiểu dữ liệu, thay vì một kiểu dữ liệu cố định. Kiểu dữ liệu được sử dụng sẽ được cung cấp khi chương trình gọi tới hàm hoặc class cài đặt generic. Trong C++, ta có thể áp dụng generic thông qua từ khóa ```template``` (kiểu mẫu) và các tham số template. Tham số template là một kiểu tham số đặc biệt, có khả năng truyền kiểu dữ liệu/class vào để dùng trong hàm hoặc class generic.

Để áp dụng generic, ta chèn thêm nội dung sau vào trước hàm hoặc class cần cài đặt:

{% highlight c++ %}
template </* danh sách tham số */>
{% endhighlight %}

Trong đó danh sách tham số được liệt kê giống như tham số của hàm, trừ một điểm: kiểu dữ liệu có thể được truyền vào làm tham số, nếu kiểu dữ liệu của tham số này là ```typename``` hoặc ```class```. Hai từ khóa này có giá trị như nhau trong template, nên bạn có thể sử dụng cái nào cũng được.

Sau khi khai báo tham số template, ta có thể sử dụng tên của các tham số trong hàm hoặc class mục tiêu.

Ví dụ với hàm max ở trên, ta muốn áp dụng generic để có một hàm max đa năng với mọi kiểu dữ liệu. Ta sẽ làm như sau:

{% highlight c++ %}
template <typename T> T Max(T x, T y)
{
    return (x > y? x : y);
}
{% endhighlight %}

Về sau chỉ cần gọi hàm ```Max()``` với kiểu dữ liệu làm tham số template ```T```, chương trình sẽ tự động thay ```T``` bằng kiểu dữ liệu được cung cấp trong ngoặc ```<>```, và chạy chương trình bình thường.

{% highlight c++ %}
#include <iostream>

using namespace std;

template <typename T> T Max(T x, T y)
{
    return (x > y? x : y);
}

int main()
{
    cout << Max<int>(2, 3) << ' ' << Max<string>("abc", "adc");
    return 0;
}
{% endhighlight %}

Output

```
3 adc
```

Ví dụ khi áp dụng với class: Một class với biến ```value``` được cung cấp kiểu dữ liệu về sau, thông qua template.

{% highlight c++ %}
#include <iostream>

using namespace std;

template <typename T> class Container
{
    public:
        T value;
};

int main()
{
    Container<string> stringContainer;
    stringContainer.value = "Hello world!";
    Container<int> intContainer;
    intContainer.value = 100;
    cout << stringContainer.value << ' ' << intContainer.value;
    return 0;
}
{% endhighlight %}

Output

```
Hello world! 100
```

Chú ý rằng trong trường hợp với hàm ```Max()``` ở trên, nếu như kiểu dữ liệu được cung cấp vào không hỗ trợ toán tử ```>``` (ví dụ như một class không được overload toán tử này), hàm sẽ không thể hoạt động và chương trình sẽ báo lỗi khi dịch.

# Ngoài kiểu dữ liệu ra, ta có thể truyền thông tin khác vào template được không?

Hoàn toàn có thể! Ta chỉ cần thay ```typename``` hoặc ```class``` bằng kiểu dữ liệu bình thường là được. Chú ý tham số được cung cấp vào phải hoàn toàn xác định vào thời điểm dịch chương trình (có thể là các giá trị được viết thẳng như ```100```, ```'a'```, ```"abc"```, hoặc các biến được đánh dấu là hằng số bằng từ khóa ```const```). Nếu không, chương trình sẽ báo lỗi khi dịch.

Ví dụ áp dụng: Class sau sẽ có một mảng có kiểu dữ liệu và kích cỡ được cung cấp về sau qua template.

{% highlight c++ %}
template <typename T, int size> class Example
{
    public:
        T arr[size];
};

Example<int, 100> a;
{% endhighlight %}

# Thư viện template chuẩn STL của C++
Như các bạn đã thấy, template cho phép chúng ta tạo ra các đoạn code đa năng, sử dụng được với nhiều kiểu dữ liệu và trong nhiều trường hợp khác nhau. Bản thân ngôn ngữ C++ cũng cung cấp cho chúng ta hệ thống thư viện STL - Standard Template Library - với rất nhiều template hàm và cấu trúc dữ liệu mạnh mẽ, sẵn sàng đáp ứng các yêu cầu của dự án lập trình.

STL rất rộng lớn, để có thể bao quát được hết các thư viện sẽ mất nhiều thời gian và đòi hỏi phải áp dụng nhiều trong thực tế để có thể thuần thục được. Các bạn có thể nghiên cứu thêm về hệ thống thư viện STL trong tài liệu [C++ STL for newbies](http://www.mediafire.com/download/5o1gllos4gjkz3k/STL.pdf) của tác giả Điêu Xuân Mạnh.


*Phần sau: [\[C++ Cơ bản\] Phần 28: Áp dụng C++ vào lập trình thực tế \(phần cuối\)](http://cowboycoder.tech/article/c-co-ban-phan-27-ap-dung-c-vao-lap-trinh-thuc-te-phan-cuoi)*
