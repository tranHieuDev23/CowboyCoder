---
title: '[C++ Cơ bản] Phần 15: Các giá trị kiểu số. Thư viện toán học cmath.'
author: Admin Tổng Quản
date: 2017-08-23T17:04:45.000Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 14: Mảng - Array](http://cowboycoder.tech/article/c-co-ban-phan-14-mang-array)*

Chúng ta đã sử dụng rất nhiều giá trị số trong series này, nhưng bài viết này sẽ cung cấp cho bạn những kiến thức cụ thể hơn về giá trị kiểu số, cũng như về thư viện toán học ```cmath``` của C++.

# Biểu diễn giá trị số

## Các kiểu số nguyên

Xét ví dụ sau:

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    cout << 300000 * 200000 << endl;
    cout << 300000ll * 200000 << endl;
    return 0;
}
{% endhighlight %}

Output

```
-129542144
60000000000
```

Tại sao cũng cùng là biểu thức đó, mà biểu thức trên lại sai trong khi biểu thức dưới lại đúng?

Hãy nhớ lại về giới hạn của ```int```: ```int``` có thể biểu diễn được các số tới \\( 2 ^ {31} - 1 \\). Phép tính ở trên đã bị tràn giới hạn, và cho ra kết quả sai.

Trong phép toán ở dưới, số ```300000ll``` có thêm một phần hậu tố (đuôi) ```ll``` nữa. Phần hậu tố này khai báo rằng giá trị ```300000``` ở đây thuộc kiểu ```long long int```, thay vì là ```int``` như mặc định.

Ngoài hậu tố ```ll```, chúng ta còn sử dụng thêm ```u``` để chỉ định một giá trị nào đó là ```unsigned``` (không có dấu).

{% highlight c++ %}
10 /* int */
10ll /* long long int */
10u /* unsigned int */
10ull /* unsigned long long int */
{% endhighlight %}

Ta cũng có thể biểu diễn một số dưới dạng bát phân hoặc thập lục phân, bằng cách thêm một phần tiền tố phía trước giá trị của số đó. ```0``` là tiền tố của số bát phân, ```0x``` hoặc ```0X``` là tiền tố của số thập lục phân.

{% highlight c++ %}
cout << 072 << endl; /* Bát phân */
cout << 0xA << endl; /* Thập lục phân */
{% endhighlight %}

Output

```
58
10
```

Đối với các bạn học về xử lý hình ảnh, số thập lục phân là một kiểu số rất quan trọng, vì nó liên quan tới Hex Color Code (biểu diễn màu sắc bằng mã thập lục phân).

## Các kiểu số thực

Mặc định tất cả các số thực trong C++ đều mang kiểu dữ liệu ```double```. Nếu như muốn định nghĩa một giá trị kiểu ```float```, ta phải thêm phần hậu tố ```f``` vào sau giá trị.

Một số thực trong C++ có thể được biểu diễn bằng hai cách: cách biểu diễn thập phân và cách biểu diễn nhân lũy thừa của 10.

Đối với kiểu biểu diện thập phân, giá trị số bắt buộc phải có dấu chấm thập phân (chú ý là dấu chấm, không phải dấu phẩy như cách biểu diễn toán học của Việt Nam).

Nếu phần nguyên hoặc phần thập phân bị bỏ trống, giá trị của nó bằng 0. 

Ví dụ:

{% highlight c++ %}
10.0 /* biểu diễn đúng, giá trị kiểu double */
10.0f /* biểu diễn đúng, giá trị kiểu float */
.01 /* biểu diễn đúng, giá trị kiểu double và bằng 0.01 */
21f /* biểu diễn sai, không có dấu chấm và phần thập phân */
21.f /* biểu diễn đúng, giá trị kiểu float và bằng 21.0 */
{% endhighlight %}

Đối với kiểu biểu diễn nhân lũy thừa của 10, giá trị số bắt buộc phải có phần nguyên hoặc phần thập phân. Phần nhân lũy thừa của 10 sử dụng hậu tố ```e``` hoăc ```E```, đi liền là số mũ của 10.

Ví dụ:

{% highlight c++ %}
314e-3 /* biểu diễn đúng, giá trị bằng 3.14 */
.01E2 /* biểu diễn đúng, giá trị bằng 1 */
e10 /* biểu diễn sai, thiếu cả phần nguyên và phần thập phân. */
{% endhighlight %}

# Thư viện toán học ```cmath```

Các toán tử cung cấp cho chúng ta những công cụ cơ bản để thực hiện phép toán với các dữ liệu kiểu số, nhưng để thực hiện các công việc phức tạp hơn, ta sẽ cần tới các hàm được định nghĩa trong thư viện ```cmath``` - thư viện toán học của C++.

Để sử dụng thư viện ````cmath```, ta cần khai báo sử dụng nó trong mã nguồn của chương trình

{% highlight c++ %}
#include <cmath>
{% endhighlight %}

Sau khi khai báo thư viện, ta có thể sử dụng các hàm được cài đặt trong thư viện. Một số hàm quan trọng của thư viện này là

<table class="table table-striped table-bordered">
    <tr>
        <th>Hàm</th>
        <th>Chức năng</th>
        <th>Ví dụ</th>
    </tr>
    <tr>
        <td><code>double cos(double)</code></td>
        <td>Hàm tính <code>cos</code>. Nhận vào một giá trị kiểu <code>double</code> là số đo của góc (tính theo radian) và trả lại giá trị cos của góc đó kiểu <code>double</code>.</td>
        <td><code>cos(0)</code> trả lại giá trị 1</td>
    </tr>
    <tr>
        <td><code>double sin(double)</code> và <code>double tan(double)</code></td>
        <td>Tương tự như hàm tính cos, hai hàm này tính giá trị sin và tan của góc.</td>
        <td></td>
    </tr>
    <tr>
        <td><code>double log(double)</code></td>
        <td>Hàm tính \(ln\) của một số thực.</td>
        <td><code>log(1)</code> trả lại giá trị 0</td>
    </tr>
    <tr>
        <td><code>double pow(double, double)</code></td>
        <td>Hàm tính lũy thừa của một số. Tham số thứ nhất là số cần được lũy thừa, tham số thứ hai là số mũ.</td>
        <td><code>pow(2, 4)</code> trả lại 16</td>
    </tr>
    <tr>
        <td><code>double sqrt(double)</code></td>
        <td>Hàm tính căn bậc hai của một số thực.</td>
        <td><code>sqrt(4)</code> trả lại 2</td>
    </tr>
    <tr>
        <td><code>int abs(int)</code></td>
        <td>Hàm tính giá trị tuyệt đối của một số nguyên.</td>
        <td><code>abs(-10)</code> trả lại 10</td>
    </tr>
    <tr>
        <td><code>double floor(double)</code></td>
        <td>Hàm tính phần nguyên của một số thực - số nguyên lớn nhất nhỏ hơn số đã cho.</td>
        <td><code>floor(2.4)</code> trả lại 2<br/><code>floor(-2.4)</code> trả lại 3</td>
    </tr>
</table>

Để biết tất cả các hàm có sẵn trong thư viện ```cmath```, bạn có thể xem tại [đây](http://en.cppreference.com/w/cpp/header/cmath).

# Sinh số ngẫu nhiên

Bạn muốn đỏ đen một chút với bạn bè? Trong C++, có tới hai cách để bạn sinh ra số ngẫu nhiên. Cách thứ nhất là sử dụng thư viện ```random```, một thư viện chuyên dụng cho việc sinh ra giá trị ngẫu nhiên. Thư viện này khá là phức tạp, mình sẽ không nói tới trong bài viết này.

![undefined](/img/uploads/cpp-cơ-bản-15-1.jpg)
 
Cách thứ hai đơn giản hơn là sử dụng hàm ```srand()``` và ```rand()``` của thư viện ```cstdlib```. ```cstdlib``` là thư viện công cụ phổ biến của C++, bao gồm các hàm hỗ trợ việc quản lý bộ nhớ động, sinh số ngẫu nhiên, giao tiếp với môi trường lập trình, vân vân… 

Hàm ```rand()``` không thực sự sinh ra một số ngẫu nhiên - nó sử dụng một số nguyên gọi là seed (hạt giống), cùng với một vài phép toán khác để sinh ra các số trông có vẻ không hề có quy luật. Nếu như chạy chương trình với seed giống nhau, các giá trị của hàm ```rand()``` trả lại cũng sẽ giống nhau.

Nếu bạn muốn biết thêm về cơ chế random với seed, cũng như các cơ chế sinh random khác, đoạn video sau sẽ cung cấp lời giải thích rõ ràng hơn cho bạn.

{% include youtube-video.html src="https://www.youtube.com/embed/9rIy0xY99a0" %}

Ok, vậy ta cần phải liên tục thay đổi seed sau mỗi lần chạy, để chương trình không sinh ra các số giống nhau. Giải pháp là sử dụng thời điểm chạy chương trình làm seed!

Máy tính sử dụng một giá trị số nguyên để đếm số giây đã trôi qua kể từ thời điểm Unix Time (nửa đêm ngày 1 tháng 1 năm 1970 theo múi giờ UTC, còn được gọi là epoch time). Ta có thể lấy giá trị này bằng hàm ```time()``` của thư viện ```ctime```.

Hàm time() có một tham số mang kiểu giá trị con trỏ số nguyên, sẽ trả lại số giây đã trôi qua kể từ Unix Time, và nếu như con trỏ không phải là giá trị ```NULL```, hàm này sẽ gán giá trị đó cho ô bộ nhớ của con trỏ. Ở đây ta không cần chức năng gán giá trị, nên ta chỉ cần gọi hàm ```time(NULL)```.
Để đặt seed cho hàm ```rand()```, ta sử dụng hàm ```srand()```.

Chương trình sau sẽ in ra 10 số ngẫu nhiên, sử dụng hàm ```rand()```

{% highlight c++ %}
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    srand(time(NULL));
    for(int i = 1; i <= 10; i ++)
        cout << rand() << endl;
    return 0;
}
{% endhighlight %}

*Phần sau: [\[C++ Cơ bản\] Phần 16: Các giá trị kiểu kí tự. Xâu kí tự.](http://cowboycoder.tech/article/c-co-ban-phan-16-cac-gia-tri-kieu-ki-tu-xau-ki-tu)*
