---
title: '[C++ Cơ bản] Phần 10: Toán tử (tiếp)'
author: Admin Tổng Quản
date: 2017-08-12T03:18:10.370Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 9: Toán tử](http://cowboycoder.tech/article/c-co-ban-phan-9-toan-tu)*

# Toán tử trên bit

Như đã giải thích trong các phần trước, dữ liệu trên máy tính được lưu trữ dưới dạng dãy bit nhị phân. Các toán tử trên bit cho phép người dùng có thể thực hiện thay đổi trực tiếp trên dãy bit của giá trị.

Trong các ví dụ sau đây, ta sử dụng hai biến ```int x = 12``` và ```int y = 6```. Để dễ quan sát, dãy bit biểu diễn của hai giá trị này sẽ được rút ngắn lại thành ```1100``` và ```110```.

<table class="table table-striped table-bordered">
    <tr>
        <th>Toán tử</th>
        <th>Ý nghĩa</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code class="highlight-rouge">&</code> (AND)</td>
        <td>Trên dãy bit kết quả, ví trị nào mà cả hai dãy bit đều có giá trị là 1 sẽ mang giá trị là 1, ngược lại mang giá trị 0.</td>
        <td><code class="highlight-rouge">x & y</code> cho kết quả bằng 4 (<code class="highlight-rouge">100</code>, do cả hai dãy bit chỉ có chung bit 1 ở vị trí thứ 3 từ phải qua).</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">|</code> (OR)</td>
        <td>Trên dãy bit kết quả, vị trí nào mà một trong hai dãy bit có giá trị là 1 thì sẽ mang giá trị là 1, ngược lại mang giá trị 0.</td>
        <td><code class="highlight-rouge">x | y</code> cho kết quả bằng 14 (<code class="highlight-rouge">1110</code>, do cả hai dãy bit có bit 1 ở các vị trị 4, 3, 2 từ phải qua).</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">^</code> (XOR)</td>
        <td>Trên dãy bit kết quả, vị trí nào mà chỉ một trong hai dãy bit có giá trị bằng 1 thì sẽ mang giá trị là 1, ngược lại mang giá trị 0 (phép cộng không nhớ trên hệ nhị phân).</td>
        <td><code class="highlight-rouge">x ^ y</code> cho kết quả bằng 10 (<code class="highlight-rouge">1010</code>, do vị trí thứ 3 từ trái qua của hai giá trị có chung bit 1).</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">~</code> (NOT)</td>
        <td>Đảo toàn bộ dãy bit.</td>
        <td><code class="highlight-rouge">~ x</code> cho kết quả bằng -13 (<code class="highlight-rouge">111…1110011‬</code>).</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge"><<</code> (NOT)</td>
        <td>Phép dịch bit sang trái. Tất cả các bit của giá trị ở bên trái toán tử sẽ được đẩy sang trái một số bit được chỉ định ở bên phải, các vị trí mới sẽ mang giá trị bằng 0.</td>
        <td><code class="highlight-rouge">x << 2</code> cho kết quả bằng 48 (<code class="highlight-rouge">110000</code>).</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">>></code> (NOT)</td>
        <td>Phép dịch bit sang phải. Tất cả các bit của giá trị ở bên trái toán tử sẽ được đẩy sang phải một số bit được chỉ định ở bên phải, các vị trí mới sẽ mang giá trị bằng 0.</td>
        <td><code class="highlight-rouge">x >> 2</code> cho kết quả bằng 3 (<code class="highlight-rouge">11</code>).</td>
    </tr>
</table>

## Tại sao kết thức này lại quan trọng?

Các phép tính trên bit có vẻ rất lạ đời và không giống như những phép toán phổ thông, nhưng chúng lại rất quan trọng trong lập trình thực tế vì một vài lý do sau:

* Thứ nhất, các dãy bit có thể được sử dụng để lưu trữ các giá trị cài đặt. Một giá trị ```int``` có tất cả 32 bit, điều này có nghĩa là ta có thể lưu trữ giá trị của 32 giá trị ```true/false``` khác nhau, thay vì sử dụng nhiều giá trị ```bool```. Vì lý do đó, các dãy bit có thể được truyền vào các hàm và chương trình con để tùy chỉnh cho hàm và chương trình con đó. Lệnh ```fstream.open()``` được đề cập trong các bài trước sử dụng mode là một giá trị bitmask, sử dụng phép toán bit để cài đặt cho hàm.
* Thứ hai, các phép toán trên bit có vận tốc cao hơn rất nhiều so với các phép toán bình thường - do chúng trực tiếp xử lý trên bit, thay vì đi qua các bước trung gian. Các phép tính ```<<``` và ```>>``` có thể được sử dụng thay thế phép nhân lũy thừa của 2 và chia lũy thừa của 2 (bạn đọc tự chứng minh tính đúng đắn ở đây). Nếu ta muốn xét một số là số lẻ hay số chẵn, thay vì kiểm tra bằng phép toán ```x % 2 == 0``` (phép tính mod là một trong những phép tính chậm nhất của chương trình), ta có thể kiểm tra ```x & 1 == 0```. Nếu bạn tham gia lập trình thi đấu, tốc độ là một yếu tố vô cùng quan trọng.
* Thứ ba, các bài tập về bit cũng là một trong những dạng bài tập thường thấy của lập trình thi đấu.

# Toán tử gán

Các phép gán cho phép ta đặt giá trị cho biến.

Với giá trị ```x = 10```, ta có các phép gán sau:

<table class="table table-striped table-bordered">
    <tr>
        <th>Toán tử</th>
        <th>Ý nghĩa</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code class="highlight-rouge">=</code></td>
        <td>Gán giá trị bên trái bằng giá trị bên phải.</td>
        <td><code class="highlight-rouge">x = 20</code> sẽ đặt giá trị của <code class="highlight-rouge">x</code> thành 20</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">+=</code></td>
        <td>Thực hiện phép cộng với giá trị ở bên phải, sau đó gán cho giá trị ở bên trái (hay có thể hiểu là "tăng giá trị ở bên trái lên bằng bên phải").</td>
        <td><code class="highlight-rouge">x += 10</code> có ý nghĩa giống như <code class="highlight-rouge">x = x + 10</code>.</td>
    </tr>
    <tr>
        <td><code class="highlight-rouge">-=</code>, <code class="highlight-rouge">*=</code>, <code class="highlight-rouge">/=</code>, <code class="highlight-rouge">%=</code>, <code class="highlight-rouge"><<=</code>, <code class="highlight-rouge">>>=</code>, <code class="highlight-rouge">&=</code>, <code class="highlight-rouge">|=</code>, <code class="highlight-rouge">^=</code></td>
        <td>Tương tự với phép gán cộng, các phép gán này sẽ thực hiện phép toán rồi gán cho giá trị ở bên trái.</td>
        <td></td>
    </tr>
</table>

# Các toán tử đặc biệt

Ngoài các loại toán tử được liệt kê ở trên, ta còn một số toán tử đặc biệt:

* ```sizeof()```: Trả lại kích cỡ của giá trị bên trong ngoặc, tính theo byte. Ví dụ:

{% highlight c++ %}
int a;
cout << sizeof(a);
{% endhighlight %}

Output:

```
4
```
* ```giá_trị_bool? x : y```: Nếu như giá trị ```bool``` trước dấu hỏi là ```true```, toán tử này trả lại giá trị thứ nhất. Nếu là ```false```, trả lại giá trị thứ hai. Ví dụ

{% highlight c++ %}
int a = 10;
cout << (a > 5? "Bigger" : "Smaller");
{% endhighlight %}

Output:

```
Bigger
```

* ```,```: Cho phép thực hiện một loạt các biểu thức trong cùng một câu lệnh. Giá trị của cả nhóm biểu thức sẽ bằng giá trị của biểu thức cuối cùng. Ví dụ:

{% highlight c++ %}
int a = 10;
cout << (a *= 2, a ++, a -= 3);
{% endhighlight %}

Output

```
18
```

* ```.``` và ```->```: Cho phép truy cập vào các yếu tố của cấu trúc dữ liệu và class. Sẽ được giải thích trong các bài viết sau.
* ```&```: Khi được đặt trước một biến, ```&``` trở thành toán tử địa chỉ, trả lại địa chỉ của ô bộ nhớ (con trỏ) của biến.
* ```*```: Khi được đặt trước một biến con trỏ, ```*``` trở thành toán tử địa chỉ, trả lại giá trị trong ô bộ nhớ đó. Hai toán tử con trỏ sẽ được giải thích trong các bài viết sau.

# Thứ tự tính toán

Giống như trong môn toán có thứ tự thực hiện phép tính, các toán tử trong C++ cũng có thứ tự thi hành.

Các toán tử toán bình thường sẽ thực hiện đúng theo thứ tự trong toán học bình thường (nhân chia trước, công trừ sau). 

Phép tính ```%``` sẽ ngang hàng với phép nhân chia.

Phép toán ```++``` và ```--``` được đặt trước giá trị sẽ được thực hiện trước mọi phép toán khác.

Các phép toán con trỏ, ```sizeof()```, các phép NOT sẽ được thực hiện sau ```++``` và ```--```, nhưng trước các phép toán bình thường.

Các phép toán bit và logic sẽ thực hiện sau phép toán thường.

```,``` sẽ được thực hiện sau mỗi phép toán nó phân cách.

```++``` và ```--``` được đặt sau giá trị sẽ được thực hiện sau khi dòng lệnh kết thúc.

