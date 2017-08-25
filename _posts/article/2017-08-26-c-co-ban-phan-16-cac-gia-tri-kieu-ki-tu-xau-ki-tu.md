---
title: '[C++ Cơ bản] Phần 16: Các giá trị kiểu kí tự. Xâu kí tự.'
author: Admin Tổng Quản
date: 2017-08-26T06:55:43.940Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 15: Các giá trị kiểu số. Thư viện toán học cmath.](http://cowboycoder.tech/article/c-co-ban-phan-15-cac-gia-tri-kieu-so-thu-vien-toan-hoc-lesscmathgreater)*

# Biểu diễn giá trị kiểu ```char```

Các giá trị kiểu ```char``` sẽ được đặt trong dấu ngoặc đơn ```''```. Nếu như giá trị kiểu char có tiền tố ```L```, giá trị đó thuộc kiểu ```wchar_t```. Nếu không có thì giá trị mặc định thuộc kiểu ```char```.

Bên trong ngoặc đơn có thể là kí tự được biểu diễn (ví dụ ```'x'```), một kí tự đặc biệt (ví dụ ```'\n'```), hoặc một kí tự thuộc chuẩn UCS (mà bạn tạm thời chưa cần phải quan tâm vội).

## Kí tự đặc biệt

Muốn thể hiện kí tự thường thì sử dụng ```''```. Vậy nếu muốn thể hiện kí tự ngoặc đơn ```'``` thì làm như thế nào?

![undefined](/img/uploads/cpp-cơ-bản-2-1.jpg)

Để thể hiện một số kí tự đặc biệt, ta sử dụng escape sequence - dịch thô ra là "dãy kí tự thoát", nhưng ở đây sẽ sử dụng cách gọi gốc. Escape sequence bắt đầu bằng kí tự ```\```, tiếp theo là một hoặc nhiều kí tự khác. Các escape sequence mang ý nghĩa đặc biệt.

Ví dụ cho một số escape sequence:

<table class="table table-striped table-bordered">
    <tr>
        <th>Escape sequence</th>
        <th>Ý nghĩa</th>
    </tr>
    <tr>
        <td><code>\\</code></td>
        <td>Kí tự <code>\</code></td>
    </tr>
    <tr>
        <td><code>\'</code></td>
        <td>Kí tự ngoặc đơn <code>'</code></td>
    </tr>
    <tr>
        <td><code>\"</code></td>
        <td>Kí tự ngoặc kép <code>"</code></td>
    </tr>
    <tr>
        <td><code>\?</code></td>
        <td>Dấu hỏi <code>?</code></td>
    </tr>
    <tr>
        <td><code>\n</code></td>
        <td>Kí tự xuống dòng</td>
    </tr>
    <tr>
        <td><code>\b</code></td>
        <td>Backspace (Kí tự xóa)</td>
    </tr>
</table>

# ```endl``` và ```'\n'```

*"Khoan khoan khoan, sao lại có thêm một kí tự xuống dòng ở kia?"*

Tuy cùng có khả năng xuống dòng cho output, tuy nhiên ```endl``` và ```'\n'``` lại có chức năng khác nhau.

```endl``` khi được đẩy vào output sẽ output ra kí tự xuống dòng (```'\n'```) và giải phóng buffer (flush).

```'\n'``` thì chỉ là kí tự xuống dòng.

Trong lập trình thi đấu, việc flush buffer nhiều cũng sẽ làm giảm tốc độ của chương trình đi. Vậy nên đối với các bạn tham gia lập trình thi đấu, mình khuyến cáo sử dụng ```'\n'``` thay cho ```endl```.

Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()

{
    cout << 10 << '\n' << 20;
    return 0;
}
{% endhighlight %}

Output

```
10
20
```

# String

String hay còn gọi là xâu kí tự, chuỗi kí tự, vân vân… là một tập hợp kí tự. Chúng hình thành nên câu, từ, đoạn văn, vân vân…

Để biểu diễn một string, ta đặt một chuỗi kí tự trong ngoặc kép ```""```. Dòng chữ ```"Hello world!"``` mặc định của chương trình CodeBlocks cũng là một string.

C++ hỗ trợ hai phương pháp biểu diễn dữ liệu string - phương pháp biểu diễn bằng mảng ```char``` của C, và class ```string``` mới trong C++.

# Phương pháp mảng char

Ngôn ngữ C sử dụng mảng các giá trị kiểu ```char``` để biểu diễn một string. Mảng này bao gồm các kí tự của string, cộng thêm với một kí tự kết thúc null ```'\0'```.

Ví dụ: Ta có thể khai báo string ```hello``` như sau

{% highlight c++ %}
char hello[] = "Hello World";
{% endhighlight %}

Việc khai báo này cũng tương đương với đoạn code sau:

{% highlight c++ %}
char hello[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '\0'};
{% endhighlight %}

Ta có thể in ra string ```hello``` bằng các lệnh in dữ liệu thông thường.

{% highlight c++ %}
cout << hello;
{% endhighlight %}

C++ cung cấp thư viện ```cstring``` để thực hiện các thao tác phức tạp hơn với kiểu dữ liệu string được biểu diễn bằng mảng ```char```. Một số hàm quan trọng của thư viện này là:

<table class="table table-striped table-bordered">
    <tr>
        <th>Hàm</th>
        <th>Chức năng</th>
    </tr>
    <tr>
        <td><code>strcpy(s1, s2)</code></td>
        <td>Gán giá trị của string <code>s2</code> cho <code>s1</code></td>
    </tr>
    <tr>
        <td><code>strcat(s1, s2)</code></td>
        <td>Gắn string <code>s2</code> vào cuối <code>s1</code></td>
    </tr>
    <tr>
        <td><code>strlen(s1)</code></td>
        <td>Trả về độ dài của string <code>s1</code></td>
    </tr>
    <tr>
        <td><code>strcmp(s1, s2) </code></td>
        <td>Trả về 0 nếu string <code>s1</code> bằng <code>s2</code>. Trả về một giá trị số nguyên bé hơn 0 nếu <code>s1</code> nhỏ hơn <code>s2</code>, và lớn hơn 0 nếu <code>s1</code> lớn hơn <code>s2</code>.</td>
    </tr>
    <tr>
        <td><code>strchr(s1, ch)</code></td>
        <td>Trả lại con trỏ bộ nhớ của vị trí đầu tiên trong string <code>s1</code> có sự xuất hiện của kí tự <code>ch</code></td>
    </tr>
    <tr>
        <td><code>strstr(s1, s2)</code></td>
        <td>Trả lại con trỏ bộ nhớ của vị trí đầu tiên trong string <code>s1</code> có sự xuất hiện của string <code>s2</code></td>
    </tr>
</table>

**Chú ý:** Một string ```s1``` được gọi là bé hơn string ```s2```, nếu như kí tự đầu tiên khác nhau giữa hai string từ trái qua ở string ```s1``` có giá trị nhỏ hơn ở string ```s2``` - hiểu nôm na thì ```s1``` có thứ tự trong từ điển đứng trước ```s2```.

Ví dụ:

* String ```"abcabc"``` có thứ tự từ điển đứng trước ```"acb"```
* String ```"abc"``` có thứ tự từ điển đứng trước ```"abcabc"``` Chi tiết đầy đủ về các hàm của thư viện này có thể được tìm thấy ở đây.

Class string

C++ cũng cung cấp class/kiểu dữ liệu ```string``` để quản lý xâu kí tự. Để sử dụng class này, ta cần phải khai báo thư viện ```string```.

Ưu điểm của class ```string``` là khả năng sử dụng các toán tử - ta có thể sử dụng toán tử ```+``` để ghép hai string lại với nhau, hay sử dụng các toán tử so sánh để so sánh các đối tượng string với nhau, thay vì phải sử dụng hàm như phương pháp mảng ```char```.

```string``` ngang hàng với kiểu dữ liệu xâu kí tự mảng ```char``` về nhiều mặt - giá trị của hai kiểu dữ liệu có thể được gán cho nhau, và chúng có thể được đặt chung trong một phép toán. Chú ý rằng mảng ```char``` không thể được áp dụng các toán tử với nhau như ```string```, mà phải có giá trị kiểu string trong phép toán.

Ví dụ: Chương trình sau đây yêu cầu bạn nhập tên của mình vào, và in ra một câu chào hỏi.

{% highlight c++ %}
#include <iostream>
#include <string>

using namespace std;

int main()

{
    cout << "Hay nhap ten cua ban: ";
    string name;
    cin >> name;
    cout << "Xin chao " + name << "!";
    return 0;
}
{% endhighlight %}

Để truy cập vào kí tự của một đối tượng class ```string```, ta cũng sử dụng ngoặc vuông như đối với mảng ```char```. Ví dụ ```ViDu[3]``` là kí tự thứ 4 của string ```ViDu```.

Thư viện ```cstring``` không thể áp dụng lên các đối tượng class ```string```, thay vào đó bản thân đối tượng ```string``` có những hàm để hỗ trợ cho chính bản thân mình.

Lấy ví dụ với biến ```string s = "Hello"```, một số hàm quan trọng của ```string``` bao gồm:

<table class="table table-striped table-bordered">
    <tr>
        <th>Hàm</th>
        <th>Chức năng</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code>đối_tượng.size()</code> và <code>đối_tượng.length()</code></td>
        <td>Trả về độ dài của đối tượng</td>
        <td><code>s.size()</code> trả về 5</td>
    <tr>
    <tr>
        <td><code>đối_tượng.clear()</code></td>
        <td>Xóa hết nội dung của string</td>
        <td></td>
    <tr>
    <tr>
        <td><code>đối_tượng.empty()</code></code></td>
        <td>Kiểm tra xem string có phải là string rỗng không (string độ dài bằng 0)</td>
        <td><code>s.empty()</code> trả về <code>false</code></td>
    <tr>
    <tr>
        <td><code>đối_tượng.substr(int, int)</code></td>
        <td>Trả về string con của string đối tượng. Tham số đầu tiên là chỉ số bắt đầu của string con cần lấy, tham số thứ hai là độ dài cần lấy.</td>
        <td><code>s.substr(1, 3)</code> trả về <code>"ell"</code></td>
    <tr>
<table>

Chú ý: Kiến thức về class, object và lập trình hướng đối tượng sẽ được giải thích rõ ràng trong các bài viết sau.


