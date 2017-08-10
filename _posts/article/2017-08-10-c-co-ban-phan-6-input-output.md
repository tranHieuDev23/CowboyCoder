---
title: '[C++ Cơ bản] Phần 6: Input - Output'
author: Admin Tổng Quản
date: 2017-08-10T02:48:49.357Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\]](http://cowboycoder.tech/article/c-co-ban-phan-6-bien-global-va-bien-local) Phần 6: Biến global và biến local*

Nhập và xuất là hai yếu tố vô cùng cơ bản của một chương trình. Trong những bài viết trước của C++ Cơ bản, chúng ta đã sử dụng cout để in thông tin ra màn hình console. Bài viết này và bài viết sau sẽ dành ra để giải thích cụ thể về input và output trong C++.

# Tóm tắt nhanh về thư viện ```stdio.h``` của C

Thư viện ```stdio.h``` và các hàm ```scanf()```, ```printf()``` là phương pháp input - output tiêu chuẩn của C. C++ thừa hưởng tất cả các tài nguyên của C, do đó chúng cũng có thể được sử dụng trong C++. Tuy nhiên series bài viết này sẽ không đi sâu vào thư viện này vì:

* Cú pháp của các hàm ```scanf()``` và ```printf()``` phức tạp hơn so với ```cin``` và ```cout``` của C++.
* ```cin``` và ```cout``` là phương pháp input và output chuẩn của C++.

Bạn có thể nghe nói rằng ```cin``` và ```cout``` chậm hơn ```scanf()``` và ```printf()```. [Điều này là đúng](http://codeforces.com/blog/entry/5217), bởi vì chúng phải đồng bộ hóa luồng nhập xuất với thư viện ```stdio.h``` để chương trình có thể sử dụng cả hai thư viện của C và C++. Tuy nhiên trong áp dụng thực tế, chênh lệch này là không đáng kể, trừ khi bạn thật sự cần tốc độ xử lý cao (như khi lập trình thi đấu). Khi đó bạn có thể tắt đồng bộ hóa bằng việc sử dụng lệnh:

```
iostream::sync_with_stdio(false);
```

# Các thư viện nhập/xuất của C++

Nhập/xuất của C++ diễn ra theo các stream (dòng), là các dãy byte được gửi tới (từ thiết bị nhập xuất, từ các file, vv…) và gửi đi (tới các thiết bị hiển thị như màn hình, loa, vv…) từ chương trình.

C++ có ba thư viện quan trọng cho việc nhập/xuất:

<table class="table table-stripped table-bordered">
    <tr>
        <th>Thư viện</th>
        <th>Chứng năng</th>
    </tr>
    <tr>
        <td><code class="highlighted-rouge">iostream</code></td>
        <td>Định nghĩa các đối tượng <code class="highlighted-rouge">cin</code>, <code class="highlighted-rouge">cout</code>, <code class="highlighted-rouge">cerr</code>, <code class="highlighted-rouge">clog</code>, tương ứng với các stream input, output, stream báo lỗi không buffer và có buffer.</td>
    </tr>
    <tr>
        <td><code class="highlighted-rouge">iomanip</code></td>
        <td>Định nghĩa các hàm để tùy chỉnh lại dữ liệu nhập xuất, ví dụ như chỉnh sửa độ chính xác của số thập phân được in ra, chỉnh sửa hệ cơ số của số được in ra (thập phân, bát phân, …), vân vân…</td>
    </tr>
    <tr>
        <td><code class="highlighted-rouge">fstream</code></td>
        <td>Thư viện này liên quan tới việc xử lý với file. Sẽ được giải thích trong bài viết sau.</td>
    </tr>
</table>

## Buffer là gì?

Buffer là một vùng nhớ tạm thời của hệ thống, dành cho việc tạm thời lưu trữ dữ liệu của chương trình trước khi di chuyển tới một vùng khác. Đối với input và output, buffer giống như việc lưu trữ tất cả các nội dung cần được nhập và xuất, trước khi được nhập vào hoặc xả ra.

# ```cout```

```cout``` là một đối tượng thuộc class ```osteam```. cout được kết nối với các đối tượng đầu ra tiêu chuẩn, ví dụ như màn hình console của hệ điều hành. Ta sử dụng cout với toán tử chèn dữ liệu vào stream (stream insertion) ```<<``` (hai dấu nhỏ hơn).

Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;
 
int main( ) {
   cout << "Xin chào " << "Việt Nam" << endl;
}
{% endhighlight %}

Output:
```
Xin chào Việt Nam
```

Toán tử ```<<``` có thể được sử dụng nhiều lần trong một câu lệnh ```cout```, như ở ví dụ trên.

C++ cho phép người dùng in ra các giá trị thuộc các kiểu dữ liệu có sẵn ```int```, ```float```, ```double```, ```char```, ```string``` và các giá trị con trỏ.

# cin

```cin``` là một đối tượng thuộc class ```istream```. cin được kết nối với các đối tượng đầu vào tiêu chuẩn, ví dụ như bàn phím. Ta sử dụng cin với toán tử lấy dữ liệu từ stream (stream extraction) ```>>``` (hai dấu lớn hơn).

Ví dụ: chương trình sau sẽ yêu cầu bạn nhập vào một số, và in ra số bạn đã nhập vào.

{% highlight c++ %}
#include <iostream>
using namespace std;

int number;
int main()
{
    cout << "Nhap vao mot so: ";
    cin >> number;
    cout << "So ban nhap vao la: " << number;
    return 0;
}
{% endhighlight %}

Bộ dịch C++ sẽ tự động nhận ra kiểu dữ liệu của biến được đặt sau toán tử, và lựa chọn phương pháp nhập dữ liệu phù hợp với kiểu dữ liệu đó.

Toán tử ```>>``` cũng có thể được sử dụng nhiều lần trong một câu lệnh.

# ```cerr``` và ```clog```

```cerr``` và ```clog``` là hai đối tượng của class ```ostream``` giống như ```cout```. Về mặc định, chúng cũng được kết nối với các đối tượng đầu ra tiêu chuẩn như ```cout```, và cũng sử dụng chung toán tử ```<<``` như ```cout```.

Điểm khác biệt giữa ```cerr``` và ```clog``` là ```cerr``` không được buffer, còn ```clog``` thì có. Điều này có nghĩa là tất cả nội dung của ```cerr``` sẽ được in ra ngay lập tức, trong khi ```clog``` sẽ được lưu trữ lại cho tới khi buffer đầy hoặc được giải phóng (do người dùng tự giải phóng, khi có dữ liệu xuất ra mới và cần in ra dữ liệu cũ, hoặc khi chương trình kết thúc).

```cerr``` và ```clog``` được sử dụng nhiều vào việc in ra các thông báo lỗi. Khi xây dựng các dự án lớn với C++, chúng sẽ trở nên vô cùng quan trọng, vì ta có thể thay đổi luồng ra của output (```cout```) ra riêng với các thông báo lỗi (```cerr``` và ```clog```) để quan sát riêng rẽ.




