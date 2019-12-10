---
title: '[C++ Cơ bản] Phần 8: Input và Output (tiếp)'
author: Admin Tổng Quản
date: 2017-08-10T09:45:29.641Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C\+\+ Cơ bản\] Phần 7: Input - Output](http://cowboycoder.tech/article/c-co-ban-phan-6-input-output)*

Trong phần trước, chúng ta đã nói về các đọc và viết ra màn hình console. Bài viết này sẽ nói về việc đọc và viết từ file.

**Cảnh báo**: Bài viết này sẽ có rất nhiều nội dung mới, chưa được giải thích về trước, và sẽ được giải thích trong các phần về sau.

![undefined](/img/uploads/cpp-c%C6%A1-b%E1%BA%A3n-2-1.jpg)

# File path

Mỗi file và folder đều có một địa chỉ xác định, địa chỉ này được biểu diễn bằng một string (xâu ký tự), được gọi là đường dẫn (path). Đường dẫn bao gồm tên các folder dẫn tới file, phân cách nhau bằng dấu gạch chéo (`/` hoặc `\\`, tùy thuộc vào hệ điều hành).

Đường dẫn có hai dạng: Đường dẫn tuyệt đối (absolute) và tương đối (relative)

* Đường dẫn tuyệt đối sẽ chỉ định tới một địa chỉ cố định. Ví dụ: `C:\\user\\docs\\Letter.txt` sẽ chỉ định tới file `Letter.text`, nằm trong thư mục `docs` của thư mục `user`, trong ổ `C`. Đường dẫn tuyệt đối bắt buộc phải có tên của ổ đĩa hoặc thư mục gốc (root).
* Đường dẫn tương đối sẽ chỉ định tới một địa chỉ tương đối so với file của chương trình. Ví dụ: Chương trình được đặt trong thư mục `C:\\Program Files\\My Program`. Khi đó thay vì sử dụng đường dẫn tuyệt đối để truy cập vào file ở địa chỉ `C:\\Program Files\\My Program\\Stuff\\xyz.txt`, ta chỉ sử dụng đường dẫn tương đối `Stuff\\xyz.txt`.

Bản thân tên của một file cũng là đường dẫn tương đối của nó, so với thư mục chứa nó.

Khi ta chạy một dự án C\+\+ trên CodeBlocks, đường dẫn tương đối được so với thư mục của dự án, thay vì là thư mục của file chương trình. Tuy nhiên khi ta chạy đơn lẻ file chương trình sau khi build ra mà không thông qua CodeBlocks, đường dẫn tương đối sẽ là so với thư mục chứa file chương trình như mặc định.

# Thư viện `fstream`

C\+\+ cung cấp thư viện `fstream` dành cho việc nhập - xuất với file. Thư viện này định nghĩa ba class mới:

<table class="table table-striped table-bordered">
<tr>
<th>Class</th>
<th>Chức năng</th>
</tr>
<tr>
<td><code class="highlight-rouge">ofstream</code></td>
<td>Class biểu diễn output file stream và được sử dụng để tạo mới và viết ra file.</td>
</tr>
<tr>
<td><code class="highlight-rouge">ifstream</code></td>
<td>Class biểu diễn input file stream và được sử dụng để đọc thông tin từ file.</td>
</tr>
<tr>
<td><code class="highlight-rouge">fstream</code></td>
<td>Class biểu diễn các stream liên quan tới file nói chung, và bao gồm khả năng của cả <code class="highlight-rouge">ofstream</code> và <code class="highlight-rouge">ifstream</code>.</td>
</tr>
</table>

Để xử lý file với C\+\+, ta cần phải khai báo sử dụng hai thư viện `iostream` và `fstream`

{% highlight c++ %}
\#include <iostream>
\#include <fstream>
{% endhighlight %}

# Khai báo file

Trước khi đọc hoặc viết một file bất kì, ta phải khai báo file stream dành cho file đó trong chương trình.

Việc khai báo file stream mới cũng giống như khai báo một biến mới - ở đây ta đặt tên biến file stream là `myFile`:

{% highlight c++ %}
fstream myFile;
{% endhighlight %}

Sau đó, ta cần gọi lệnh `open()` của đối tượng `fstream`, để mở file và hướng file stream vào file mục tiêu.

**Chú ý:** Các kiến thức về hàm và lệnh của đối tượng, cũng như các nội dung về lập trình hướng đối tượng nói chung, sẽ được giải thích trong các bài viết sau. Hiện tại, hãy tạm thời làm theo chỉ dẫn của bài viết.

Cú pháp của lệnh `open()` là:

{% highlight c++ %}
stream_variable.open(const char \*filename, ios::openmode mode);
{% endhighlight %}

* `filename` là file path của file mục tiêu. Biến này có kiểu dữ liệu `const char \*`, là kiểu dữ liệu con trỏ cố định chỉ tới một biến kiểu `char`. Phần nội dung về biến cố định (hằng số) và con trỏ sẽ được nói tới một bài viết khác. Hiện tại, ta sẽ sử dụng địa chỉ của file nằm trong ngoặc kép (`""`) như là địa chỉ của file.
* `mode` là một giá trị kiểu bitmask không bắt buộc. Nó cho phép người dùng cài đặt chế độ mở file. Các giá trị có thể thiết lập là:

<table class="table table-striped table-bordered">
<tr>
<th>Mode Flag</th>
<th>Chức năng</th>
</tr>
<tr>
<td><code class="highlight-rouge">ios::app</code></td>
<td>Chế độ nối tiếp. Khi mở một file để viết dữ liệu vào, tất cả phần nội dung mới sẽ được viết vào cuối file.</td>
</tr>
<tr>
<td><code class="highlight-rouge">ios::ate</code></td>
<td>Mở một file ra để viết nội dung mới vào, và di chuyển con trỏ viết tới cuối file này.</td>
</tr>
<tr>
<td><code class="highlight-rouge">ios::in</code></td>
<td>Mở file ra để đọc</td>
</tr>
<tr>
<td><code class="highlight-rouge">ios::out</code></td>
<td>Mở file ra để viết</td>
<tr>
</tr>
<td><code class="highlight-rouge">ios::trunc</code></td>
<td>Mở file ra để viết. Nếu như file mục tiêu đã tồn tại trước đó và ta cần viết nội dung vào file, nó sẽ bị xóa sạch nội dung cũ trước khi viết nội dung mới.</td>
</tr>
</table>

`mode` là một giá trị kiểu bitmask, do đó ta có thể sử dụng toán tử OR (`|`) để áp dụng nhiều mode vào cùng một lúc.

**Chú ý:** OR và các toán tử khác liên quan tới toán học và xử lý bit sẽ được đề cập ở các bài viết sau.

Ví dụ: Mở file `myFile.txt` ra để viết bằng luồng `myFile` ở trên, và nếu file đõ đã tồn tại thì xóa nội dung của nó đi:

{% highlight c++ %}
myFile.open("myFile.txt", ios::out | ios:: trunc);
{% endhighlight %}

Một ví dụ khác: Mở file `myFile.txt` ra để đọc và viết cùng lúc:

{% highlight c++ %}
myFile.open("myFile.txt", ios::in | ios::out);
{% endhighlight %}

Cả hai đoạn code này sẽ mở ra file `myFile.txt` ở trong thư mục của chương trình, do đường dẫn được sử dụng là đường dẫn tương đối.

Chú ý: `mode` là giá trị không bắt buộc phải có.

* Đối với các biến dạng `fstream`, `mode` được đặt mặc định bằng `ios::in | ios::out`.
* Đối với các biến dạng `ofstream`, `mode` được đặt mặc định là `ios::out`.
* Đối với các biến dạng `ifstream`, `mode` được đặt mặc định bằng `ios::in`.

Do đó nếu không có nhu cầu đặc biệt, ta có thể bỏ qua giá trị của `mode`.

Ví dụ: Mở file `myFile.txt` để đọc bằng input file stream `myFile`

{% highlight c++ %}
ifstream myFile;
myFile.open("myFile.txt");
{% endhighlight %}

Nếu như luồng đang được chỉ địng tới một file nào đó mà chưa được đóng lại, lệnh này sẽ thất bại, và việc nhập/xuất sẽ bị sai.

# Đọc và viết vào file

Để đọc và viết vào file, ta chỉ cần sử dụng toán tử `>>` và `<<` lên các luồng, tương tự như với `cin` và `cout`.

Ví dụ: Đọc một số từ file `INPUT.TXT`, và in số đó ra file `OUTPUT.TXT`

{% highlight c++ %}
\#include <iostream>
\#include <fstream>

using namespace std;

int main()
{
ifstream input; input.open("INPUT.TXT");
ofstream output; output.open("OUTPUT.TXT");
int x; input >> x;
output << x;
input.close(); output.close(); // Đóng file
return 0;
}
{% endhighlight %}

# Đóng file

Khi một chương trình C\+\+ kết thúc, nó sẽ tự động giải phóng buffer và các vùng bộ nhớ tạm thời, và đóng tất cả các file đang mở lại. Tuy nhiên, việc đóng các file lại trước khi kết thúc chương trình cũng là một việc nên làm, tránh sự ảnh hưởng từ bên ngoài chương trình.

Như trong ví dụ trên, để đóng một file lại, ta sử dụng cú pháp

{% highlight c++ %}
stream_variable.close();
{% endhighlight %}

# Di chuyển con trỏ đọc/viết

Class `istream` cung cấp lệnh `seekg` ("seek get") để di chuyển con trỏ đọc luồng input. Cú pháp của lệnh này là

    luồng.seekg(long long int pos, ios_base::seekdir way);

* `pos` là số byte cần di chuyển.
* `way` là một giá trị không bắt buộc, chỉ định địa điểm bắt đầu di chuyển. Giá trị phù hợp của way là `ios::beg` (từ điểm bắt đầu của luồng/file, mặc định), `ios::cur` (từ vị trí hiện tại) và `ios::end` (từ điểm kết thúc của luồng/file).

Ví dụ:

{% highlight c++ %}
// Di chuyển tới byte thứ n của fileObject
fileObject.seekg( n );

// Di chuyển thêm n byte nữa trong fileObject
fileObject.seekg( n, ios::cur );

// Di chuyển tới byte thứ n từ cuối lên
fileObject.seekg(- n, ios::end );

// Di chuyển tới cuối
fileObject.seekg( 0, ios::end );
{% endhighlight %}

Class `ofstream` cũng cung cấp lệnh `seekp` ("seek put") với cú pháp tương tự.

# `freopen`

`freopen` được sử dụng nhiều bởi giới lập trình thi đấu, vì trong lập trình thi đấu thì ta không có nhu cầu phải đọc hoặc in với nhiều file một lúc. Sau khi áp dụng `freopen`, ta có thể sử dụng `cin` và `cout` để đọc viết trên file - điều này rất có ích khi ta muốn copy đoạn code mẫu từ nơi này tới nơi khác, mà không phải lo về tên biến luồng dữ liệu.

`freopen` là một lệnh được định nghĩa trong thư viện `stdio.h` của C. Nó cho phép người dùng chuyển hướng của luồng dữ liệu `input` hoặc `output` sang một file khác, nhằm đọc và viết trên file đó.

Cú pháp của `freopen` là:

{% highlight c++ %}
freopen(const char \*filename, const char \*mode, FILE \*stream);
{% endhighlight %}

* `filename` là địa chỉ của file mục tiêu. Giá trị này thuộc kiểu `const char \*`, giống như `filename` trong hàm `open` của `fstream`.
* `mode` là chế độ mở file. Các giá trị phù hợp ở đây là:

<table class="table table-striped table-bordered">
<tr>
<th>Giá trị</th>
<th>Ý nghĩa</th>
</tr>
<tr>
<td><code class="highlight-rouge">"r"</code></td>
<td>Mở file để đọc. File cần mở phải tồn tại trước đó.</td>
</tr>
<tr>
<td><code class="highlight-rouge">"w"</code></td>
<td>Mở file để viết. Nếu file đã tồn tại trước đó, thì nội dung của nó sẽ bị xóa trắng trước khi mở. Nếu không, nó sẽ được tạo mới.</td>
</tr>
<tr>
<td><code class="highlight-rouge">"a"</code></td>
<td>Mở file để viết. Nếu file đã tồn tại trước đó, nội dung mới sẽ được viết tiếp vào cuối file. Nếu không, nó sẽ được tạo mới.</td>
</tr>
<tr>
<td><code class="highlight-rouge">"r\+"</code></td>
<td>Mở một file để vừa đọc và viết. File phải tồn tại trước đó.</td>
</tr>
<tr>
<td><code class="highlight-rouge">"w\+"</code></td>
<td>Tạo một file rỗng mới để vừa đọc vừa viết.</td>
</tr>
<tr>
<td><code class="highlight-rouge">"a\+"</code></td>
<td>Mở một file để vừa đọc và viết. Nội dung mới sẽ được nối vào cuối file cũ.</td>
</tr>
</table>

* `stream` là luồng dữ liệu cần chuyển. Giá trị ở đây có thể là `stdin` (luồng vào chuẩn) hoặc `stdout` (luồng ra chuẩn), hoặc các luồng vào và luồng ra khác.

Sau khi gọi lệnh này với `stdin` hoặc `stdout`, ta có thể đọc và viết với file bằng luồng `cin` và `cout` sẵn có.

Ví dụ: Khi áp dụng vào chương trình ở trên:

{% highlight c++ %}
\#include <iostream>
\#include <stdio.h>

using namespace std;

int main()
{
freopen("INPUT.TXT", "r", stdin);
freopen("OUTPUT.TXT", "w", stdout);
int x;
cin >> x;
cout << x;
return 0;
}
{% endhighlight %}

*Phần sau: [\[C\+\+ Cơ bản\] Phần 9: Toán tử](http://cowboycoder.tech/article/c-co-ban-phan-9-toan-tu)*
