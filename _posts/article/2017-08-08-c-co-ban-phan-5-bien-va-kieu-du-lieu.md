---
title: "[C++ Cơ bản] Phần 5: Biến và kiểu dữ liệu"
author: Admin Tổng Quản
date: 2017-08-08T02:05:22.426Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
    - cpp-cơ-bản
    - programming
---

_Phần trước: [\[C++ Cơ bản\] Phần 4: Cú pháp C++ cơ bản](http://cowboycoder.vercel.app/article/c-co-ban-phan-4-cu-phap-c-co-ban)_

Khi lập trình, chúng ta cần phải sử dụng biến để lưu trữ dữ liệu của chương trình. Các biến được lưu trữ trên bộ nhớ của hệ thống - khi ta khai báo một biến trong chương trình, ta đang yêu cầu hệ thống trích ra một khoảng bộ nhớ để lưu trữ thông tin của biến đó.

C++ là ngôn ngữ đặt kiểu dữ liệu tĩnh (statically typed), có nghĩa là mỗi biến và hàm của chương trình đều có một kiểu dữ liệu cố định trong quá trình chạy chương trình. Kiểu dữ liệu quyết định kích thước bộ nhớ mà biến hoặc hàm chiếm trên hệ thống, khoảng giá trị mà biến hoặc hàm có thể biểu diễn, và những thao tác xử lý ta có thể thực hiện lên giá trị của chúng.

# Các kiểu dữ liệu nguyên thủy

<table class="table table-striped table-bordered">
<tr>
    <th>Kiểu dữ liệu</th>
    <th>Từ khóa</th>
</tr>
<tr>
    <td><b>Boolean</b><br/>Kiểu dữ liệu đúng sai (true/false)</td>
    <td><code class="highlighter-rouge">bool</code></td>
</tr>
<tr>
    <td><b>Character</b><br/>Kiểu kí tự</td>
    <td><code class="highlighter-rouge">char</code></td>
</tr>
<tr>
    <td><b>Integer</b><br/>Kiểu số nguyên</td>
    <td><code class="highlighter-rouge">int</code></td>
</tr>
<tr>
    <td><b>Floating point</b><br/>Kiểu số thực</td>
    <td><code class="highlighter-rouge">float</code></td>
</tr>
<tr>
    <td><b>Double floating point</b><br/>Kiểu số thực, với khoảng biểu diễn và độ chính xác cao hơn</td>
    <td><code class="highlighter-rouge">double</code></td>
</tr>
<tr>
    <td><b>Valueless</b><br/>Không trả giá trị gì về cả. Kiểu dữ liệu này thường thấy khi ta muốn tạo ra một chương trình con - một hàm chỉ thực hiện thao tác trên các đối tượng, mà không trả lại gì cả.</td>
    <td><code class="highlighter-rouge">void</code></td>
</tr>
<tr>
    <td><b>Wide character</b><br/>Kiểu kí tự, với khoảng biểu diễn rộng hơn</td>
    <td><code class="highlighter-rouge">wchar_t</code></td>
</tr>
</table>

Một số kiểu dữ liệu nguyên thủy còn có thể được tùy chỉnh bằng các từ khóa:

-   `signed`: Khi đặt trước các kiểu số, nó cho biết kiểu số này có dấu (khoảng giá trị bao gồm cả số âm). Thường vô dụng và không dùng tới.
-   `unsigned`: Khi đặt trước các kiểu số, nó cho biết kiểu số này không có dấu (chỉ bao gồm số không âm). Điều này làm tăng giá trị cực đại của khoảng biểu diễn lên.
-   `short`: Đặt trước kiểu int để đặt kiểu giá trị số nguyên, với khoảng biểu diễn và khoảng bộ nhớ chiếm chỗ giảm một nửa. Có thể viết `short` thay vì `short int`.
-   `long`: Sử dụng `long long int` để đặt kiểu giá trị số nguyên, với khoảng biểu diễn và khoảng bộ nhớ chiếm chỗ tăng gấp đôi. Có thể viết `long long` thay vì `long long int`. `long int` không có khác biệt gì so với `int`.

# Khoảng giá trị và bộ nhớ chiếm chỗ của các kiểu dữ liệu

_"Cái đm, lại phải nhớ một đống số nữa à?"_

![undefined](/img/uploads/cpp-cơ-bản-2-1.jpg)

Thật ra là không. Đúng, khoảng giá trị của các biến là hằng số, nhưng ta không cần phải nhớ một cách máy móc. Lấy ví dụ như kiểu `int`:

Như chúng ta đã biết, các dữ liệu trong máy tính được lưu trữ bằng dãy bit nhị phân 0 - 1. 8 bit nhị phân thì bằng 1 byte. Cứ \\( 2 ^ {10} \\) (1024) byte thì bằng 1 kB, \\( 2 ^ {10} \\) kB thì bằng 1 MB, vân vân… `int` là kiểu dữ liệu số nguyên 4 byte, vậy nên nó sẽ được biểu diễn bằng 32 bit.

Nếu biểu diễn số nguyên bằng cả 32 bit thì sẽ không thể biểu diễn số âm được. Vậy người ta quy ước bit đầu tiên của giá trị `int` sẽ mang giá trị \\( - 2 ^ {31} \\), thay vì \\( 2 ^ {31} \\) như bình thường. Ví dụ:

-   Số 7 sẽ được biểu diễn là 0000 0000 0000 0000 0000 0000 0000 0111 (3 bit 1 ở cuối, tổng bằng 7)
-   Số 100 sẽ được biểu diễn là 0000 0000 0000 0000 0000 0000 ‭0110 0100‬‬‬
-   Số -1 sẽ được biểu diễn là ‭1111111111111111111111111111111111111111111111111111111111111111‬ (tất cả đều là số 1, giá trị bằng \\( - 2 ^ {31} + 2 ^ {30} + 2 ^ {29} + 2 ^ {28} + ...\\))‬‬

Vậy khoảng giá trị của `int` là từ \\( - 2 ^ {31} \\) tới \\( 2 ^ {31} - 1 \\).

`short` có kích cỡ bằng một nửa `int`, vậy nó sẽ chiếm 2 byte, khoảng giá trị là \\( - 2 ^ {15} \\) tới \\( 2 ^ {15} - 1 \\).

`long` có kích cỡ bằng gấp đôi `int`, vậy nó sẽ chiếm 8 byte, khoảng giá trị là \\( - 2 ^ {63} \\) tới \\( 2 ^ {63} - 1 \\).

Khi các biến dạng số được gắn thêm `unsigned`, chúng sẽ không biểu diễn số âm nữa, do đó tất cả các bit của chúng đều sẽ được dùng để biểu diễn số nhị phân – việc tính toán khoảng của chúng cũng đơn giản như vậy.

Ta chỉ cần nhớ dữ liệu được lưu trữ bằng bao nhiêu byte, là có thể suy ra khoảng của chúng.

Đối với các kiểu dữ liệu kí tự, kí tự biểu diễn được còn phụ thuộc vào bảng mã chương trình sử dụng.

Các bạn có thể xem kích cỡ và khoảng của các kiểu dữ liệu tại [đây](https://msdn.microsoft.com/en-us/library/s3f49ktz.aspx).

## Tại sao kiến thức này lại quan trọng?

Đầu tiên, việc biết giới hạn biểu diễn của các kiểu dữ liệu là cực kì quan trọng, để tránh việc thực hiện tính toán tràn khả năng biểu diễn dẫn tới sai sót. Việc thực hiện tính toán trên các kiểu dữ liệu sẽ được đề cập rõ hơn trong các bài viết về toán tử.

Như đã nói trong các bài viết trước, C++ được sử dụng nhiều trong việc lập trình điều khiển phần cứng. Không phải phần cứng nào cũng có nhiều dung lượng bộ nhớ - các thiết bị như đèn nháy, máy giặt làm sao có thể lắp RAM 4 GB như laptop được.

Kể cả khi dung lượng không phải là vấn đề, việc tiết kiệm bộ nhớ của chương trình và đem đến trải nghiệm tốt hơn cho người dùng cũng là một việc nên làm.

Đối với các bạn sử dụng C++ để lập trình thi đấu, việc sử dụng quá nhiều bộ nhớ cũng sẽ gây sinh ra lỗi Memory Limit Exceeded (MLE) và bài làm của các bạn có thể bị đánh fail, vậy nên phải biết cách sử dụng bộ nhớ hợp lý.

# Khai báo biến trong C++

Để khai báo biến, ta sử dụng cú pháp:

```
kiểu_dữ_liệu danh_sách_các_biến;
```

Ví dụ:

{% highlight c++ %}
int i, j, k;
char c, ch;
float f, salary;
double d;
{% endhighlight %}

Các biến cũng có thể được gán giá trị khởi tạo bằng cú pháp:

```
kiểu_dữ_liệu tên_biến = giá_trị;
```

Ví dụ:

{% highlight c++ %}
int d = 3, f = 5;
char x = 'x';
{% endhighlight %}

Giá trị khởi tạo của các biến khi không được người dùng đặt trước sẽ được nói trong một bài khác, tuy nhiên việc tự khởi tạo giá trị cho biến là một việc nên làm, tránh những thay đổi ở bên ngoài chương trình có thể làm giá trị này khác đi.

# Đặt giá trị cho biến

Sau khi được khai báo, giá trị của biến có thể được thay đổi lại bằng cú pháp:

```
tên_biên = giá_trị;
```

Ví dụ:

{% highlight c++ %}
int x;
x = 20;
{% endhighlight %}

Nếu đặt giá trị cho một biến chưa tồn tại trước đó, trình dịch sẽ báo lỗi.

# Chương trình ví dụ

Chương trình sau đây sẽ khởi tạo một số biến và in ra giá trị của chúng

{% highlight c++ %}
#include <iostream>
using namespace std;  
int main () {
// Khai báo biến
int a, b = 10;
int c;
float f;

// Đặt giá trị cho biến
a = 10;
b = 20;
c = a + b;
cout << c << endl ;

f = 70.0/3.0;
cout << f << endl ;
return 0;
}
{% endhighlight %}

Output:

```
30
23.3333
```

# Viết tắt kiểu dữ liệu bằng `typedef`

Từ khóa `typedef` cho phép ta đặt cách gọi khác cho một kiểu dữ liệu. Ví dụ, ta muốn sử dụng cách gọi `ULL` để gọi tên cho kiểu dữ liệu `unsigned long long int`, ta sử dụng cú pháp:

{% highlight c++ %}
typedef unsigned long long int ULL;
{% endhighlight %}

Khi đó ta có thể khai báo các biến kiểu `unsigned long long int` bằng cách sử dụng tên kiểu dữ liệu `ULL`:

{% highlight c++ %}
ULL x = 1000;
{% endhighlight %}

_Phần sau: [\[C++ Cơ bản\] Phần 6: Biến global và biến local](http://cowboycoder.vercel.app/article/c-co-ban-phan-6-bien-global-va-bien-local)_
