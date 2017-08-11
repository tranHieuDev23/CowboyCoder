---
title: '[C++ Cơ bản] Phần 9: Toán tử'
author: Admin Tổng Quản
date: 2017-08-11T06:15:07.722Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
Toán tử (operator) là các ký hiệu nhằm yêu cầu chương trình thực hiện các phép xử lý toán học, logic, vân vân… Toán tử có thể chia làm 6 loại:

* Các kí hiệu phép tính đại số
* Các kí hiệu so sánh
* Các toán tử logic
* Các toán tử trên bit
* Các toán tử gán
* Các toán tử đặc biệt

Bài viết này sẽ đề cập tới ba loại toán tử đầu tiên, đó là các kí hiệu phép tính đại số, các kí hiệu so sánh và các toán tử logic.

# Kí hiệu phép tính đại số

Đây là loại kí hiệu gần gũi nhất với chúng ta - chúng chính là các dấu cộng, trừ, nhân, chia hằng ngày, cùng với một vài phép tính nữa.

Giả sử chúng ta có hai giá trị ```x = 20``` và ```y = 16```. Các phép tính đại số trong C++ bao gồm:

<table class="table table-striped table-bordered">
    <tr>
        <th>Toán tử</th>
        <th>Ý nghĩa</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code class="highlight-rouge">+</code></td>
        <td>Cộng</td>
        <td><code class="highlight-rouge">x + y</code> cho ra kết quả 36</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">-</code></td>
        <td>Trừ</td>
        <td><code class="highlight-rouge">x - y</code> cho ra kết quả 4</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">*</code></td>
        <td>Nhân</td>
        <td><code class="highlight-rouge">x * y</code> cho ra kết quả 320</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">/</code></td>
        <td>Chia. Đối với số nguyên, giá trị trả lại sẽ bằng phần nguyên của kết quả. Đối với số thực, giá trị trả lại sẽ là đầy đủ kết quả.</td>
        <td>Nếu như <code class="highlight-rouge">x</code> và <code class="highlight-rouge">y</code> thuộc kiểu số nguyên, <code class="highlight-rouge">x / y</code> cho ra kết quả 1<br/>Nếu như <code class="highlight-rouge">x</code> hoặc <code class="highlight-rouge">y</code> thuộc kiểu số thực, <code class="highlight-rouge">x / y</code> cho ra kết quả 1.25</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">%</code></td>
        <td>Lấy phần dư của phép chia với số nguyên</td>
        <td><code class="highlight-rouge">x % y</code> cho ra kết quả 4</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">++</code></td>
        <td>Phép toán cộng 1 lên đối tượng. Có thể đặt trước, hoặc đặt sau đối tượng, nhưng sẽ có sự khác nhau.</td>
        <td><code class="highlight-rouge">x++</code> cho ra kết quả 21. Giá trị của <code class="highlight-rouge">x</code> trở thành 21.</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">--</code></td>
        <td>Phép toán trừ 1 lên đối tượng. Có thể đặt trước, hoặc đặt sau đối tượng, nhưng sẽ có sự khác nhau.</td>
        <td><code class="highlight-rouge">x--</code> cho ra kết quả 19. Giá trị của <code class="highlight-rouge">x</code> trở thành 19.</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">()</code></td>
        <td>Dấu ngoặc trong phép tính	</td>
        <td></td>
    </tr>
</table>

## Kiểu dữ liệu trong phép tính

C++ sẽ cố gắng chuyển đổi kiểu dữ liệu trong phép toán để tránh sự xung đột trong nội bộ phép toán (ví dụ khi nhân số nguyên với số thực, nhân giá trị kiểu ```int``` với giá trị kiểu ```long long int```).

Ví dụ thứ nhất: Chạy chương trình sau đây

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int x = 300000;
    int y = 200000;
    cout << x * y;
    return 0;
}
{% endhighlight %}

Output

```
-129542144
```

Tại sao lại ra kết quả như vậy? Ta thấy trong phép nhân này, các giá trị được sử dụng đều là kiểu ```int``` - giá trị trả lại sẽ là kiểu ```int```. Do kết quả giới hạn biểu diễn của ```int```, phép toán cho ra kết quả sai.

Để cho ra kết quả đúng, ta phải chỉnh lại kiểu dữ liệu của phép toán thành ```long long int```:

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int x = 300000;
    long long int y = 200000;
    cout << x * y;
    return 0;
}
{% endhighlight %}

Output
```
60000000000
```

Ví dụ thứ hai: Phép chia hai số nguyên

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int x = 3;
    int y = 2;
    cout << x / y;
    return 0;
}
{% endhighlight %}

Output

```
1
```

Lý do kết quả của phép chia chỉ có phần nguyên, là do kiểu dữ liệu của cả hai biến đều là ```int```, do đó phép chia sẽ trả lại kết quả kiểu ```int``` và bị cắt bỏ phần thập phân. 

Để có kết quả có phần thập phân, ta phải thực hiện phép chia có số thực

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int x = 3;
    double y = 2;
    cout << x / y;
    return 0;
}
{% endhighlight %}

Output

```
1.5
```

## Phép toán ```++``` và ```--```

Phép toán ```++``` và ```--``` cho phép viết tắt phép cộng và trừ 1 một cách nhanh chóng. Hai toán tử này có thể được đặt ở trước hoặc ở sau giá trị cần thay đổi, tuy nhiên

* Khi đặt trước giá trị cần thay đổi, giá trị của đối tượng sẽ được tăng lên hoặc giảm đi, **trước khi** mọi phép toán khác diễn ra.
* Khi đặt trước giá trị cần thay đổi, giá trị của đối tượng sẽ được tăng lên hoặc giảm đi, **sau khi** mọi phép toán khác diễn ra.

Ví dụ minh họa:

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int x = 10, y = 10;
    // In ra giá trị khi thực hiện phép toán
    cout << "Before: x = " << ++ x << "; y = " << y ++ << endl;
    // In ra giá trị sau khi thực hiện phép toán
    cout << "After: x = " << x << "; y = " << y << endl;
    return 0;
}
{% endhighlight %}

Output

```
Before: x = 11; y = 10
After: x = 11; y = 11
```

# Các kí hiệu so sánh

Các toán tử so sánh được dùng để so sánh hai giá trị với nhau. Chúng sẽ trả lại giá trị kiểu ```bool```: ```true``` nếu như mệnh đề là đúng, và ```false``` nếu là sai.

Với hai giá trị ```x = 20``` và ```y = 16``` như trước, ta có:

<table class="table table-striped table-bordered">
    <tr>
        <th>Toán tử</th>
        <th>Ý nghĩa</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code class="highlight-rouge">==</code></td>
        <td>Bằng nhau</td>
        <td><code class="highlight-rouge">x == y</code> cho ra kết quả <code class="highlight-rouge">false</code></td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">!=</code></td>
        <td>Khác nhau</td>
        <td><code class="highlight-rouge">x != y</code> cho ra kết quả <code class="highlight-rouge">true</code></td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">></code></td>
        <td>Lớn hơn</td>
        <td><code class="highlight-rouge">x > y</code> cho ra kết quả <code class="highlight-rouge">true</code></td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">&lt</code></td>
        <td>Nhỏ hơn</td>
        <td><code class="highlight-rouge">x &lt y</code> cho ra kết quả <code class="highlight-rouge">false</code></td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">>=</code></td>
        <td>Lớn hơn hoặc bằng</td>
        <td><code class="highlight-rouge">x >= y</code> cho ra kết quả <code class="highlight-rouge">true</code></td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">&lt=</code></td>
        <td>Nhỏ hơn hoặc bằng</td>
        <td><code class="highlight-rouge">x &lt= y</code> cho ra kết quả <code class="highlight-rouge">false</code></td>
    </tr>
</table>

# Toán tử logic

Khi ta muốn kết hợp nhiều giá trị ```bool``` lại với nhau - ví dụ khi ta muốn kiểm tra nếu cả hai mệnh đề đều đúng, hoặc ít nhất một trong hai mệnh đề là đúng, vân vân… ta sử dụng các phép toán logic.

Với hai giá trị ```x = 20``` và ```y = 16``` như trước, ta có các phép toán logic:

<table class="table table-striped table-bordered">
    <tr>
        <th>Toán tử</th>
        <th>Ý nghĩa</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code class="highlight-rouge">&&</code> (AND)</td>
        <td>Nếu như cả hai mệnh đề đều <code class="highlight-rouge">true</code>, toán tử này trả lại giá trị <code class="highlight-rouge">true</code>, ngược lại trả lại giá trị <code class="highlight-rouge">false</code></td>
        <td><code class="highlight-rouge">(x > 15) && (y > 10)</code> cho ra kết quả <code class="highlight-rouge">true</code><br/>
        <code class="highlight-rouge">(x &lt 15) && (y > 10)</code> cho ra kết quả <code class="highlight-rouge">false</code><br/>
        <code class="highlight-rouge">(x &lt 15) && (y &lt 10)</code> cho ra kết quả <code class="highlight-rouge">false</code><br/>
        </td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">||</code> (OR)</td>
        <td>Nếu như có một trong hai mệnh đề là <code class="highlight-rouge">true</code>, toán tử này trả lại giá trị <code class="highlight-rouge">true</code>, ngược lại trả lại giá trị <code class="highlight-rouge">false</code></td>
        <td><code class="highlight-rouge">(x > 15) || (y > 10)</code> cho ra kết quả <code class="highlight-rouge">true</code><br/>
        <code class="highlight-rouge">(x &lt 15) || (y > 10)</code> cho ra kết quả <code class="highlight-rouge">true</code><br/>
        <code class="highlight-rouge">(x &lt 15) || (y &lt 10)</code> cho ra kết quả <code class="highlight-rouge">false</code><br/>
        </td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">!</code> (NOT)</td>
        <td>Đảo ngược giá trị của mệnh đề (<code class="highlight-rouge">true</code> trả về <code class="highlight-rouge">false</code>, <code class="highlight-rouge">false</code> trả về <code class="highlight-rouge">true</code>)</td>
        <td><code class="highlight-rouge">!(x > 15)</code> cho ra kết quả <code class="highlight-rouge">false</code></td>
    </tr>
</table>

Các toán tử so sánh và logic sẽ trở nên vô cùng quan trọng khi ta nghiên cứu tới các lệnh rẽ nhánh (```if/else```) và vòng lặp của chương trình.
