---
title: "[C++ Cơ bản] Phần 11: Hàm - Chương trình con"
author: Admin Tổng Quản
date: 2017-08-14T18:43:26.984Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
    - cpp-cơ-bản
    - programming
---

_Phần trước: [\[C++ Cơ bản\] Phần 10: Toán tử (tiếp)](http://cowboycoder.vercel.app/article/c-co-ban-phan-10-toan-tu-tiep)_

Có một bài toán được đặt ra: Cho hai giá trị số `a` và `b`. Ta cần phải đảo giá trị của chúng - đặt `a` bằng `b` và đặt `b` bằng `a`.

Ta không thể đặt thẳng giá trị của chúng như vậy được - nếu như ta viết

{% highlight c++ %}
a = b;
b = a;
{% endhighlight %}

thì giá trị của `a` sẽ bằng giá trị của `b` lúc ban đầu, và dòng code thứ hai sẽ không có tác dụng gì hết.

Giải pháp là sử dụng một biến tạm thời để lưu trữ giá trị cũ của `a`, để gán về sau cho `b`.

{% highlight c++ %}
int temp = a;
a = b;
b = temp;
{% endhighlight %}

Nhưng nếu ta phải thực hiện công việc tầm 10 lần trong chương trình thì sao? Việc viết ba dòng code này mỗi khi cần đảo giá trị là một điều rất bất hợp lý - code sẽ dài và không trực quan (không có chỗ nào trong 3 dòng code ghi là đây là lệnh để đảo giá trị `a` và `b` cả). Hơn nữa, nếu phải sửa một chỗ nào đó trong việc đảo giá trị - ví dụ kiểm tra hai giá trị được đảo có cùng kiểu dữ liệu không chẳng hạn - ta sẽ phải sửa hàng chục lần.

Giải pháp là sử dụng hàm (function, hay còn được gọi là chương trình con).

# Định nghĩa hàm

Hàm là một nhóm lệnh, yêu cầu chương trình phải hoàn thành một công việc nào gì đó.

Hàm có thể được yêu cầu trả lại một giá trị nào đó (ví dụ: hàm tính lũy thừa của một số), hoặc không (hàm trả lại kiểu `void` - ví dụ như hàm `open()` của `fstream`). `int main()` là một hàm tiêu biểu, trả lại kiểu `int` là kết quả chạy của chương trình.

Người dùng có thể tự định nghĩa hàm mới trong chương trình của mình.

# Cách định nghĩa hàm mới

Cú pháp để định nghĩa hàm mới là

```
kiểu_dữ_liệu_trả_về tên_của_hàm(các_tham_số_của_hàm)
{
    nội_dung_của_hàm;
}
```

## Kiểu dữ liệu trả về

Hàm có thể chỉ thực hiện thao tác lên giá trị mà không trả về kiểu gì cả - khi đó kiểu dữ liệu trả về được đặt là `void` (không giá trị).

Hàm cũng có thể sử dụng để thực hiện phép tính toán và trả lại kết quả - có thể là các kiểu dữ liệu nguyên thủy như `int`, `double`, `char`,… hay các kiểu dữ liệu người dùng định nghĩa (sẽ được nói tới trong các bài sau).

## Tên của hàm

Quy tắc đặt tên của hàm cũng giống như quy tắc đặt tên biến - trừ trong trường hợp overloading (viết đè hàm). Overloading sẽ được giải thích trong các bài viết sau.

## Các tham số của hàm

Một hàm có thể được truyền vào một hoặc nhiều biến tham số để hoạt động. Ví dụ: hàm `open()` của `fstream` cần có một xâu kí tự là địa chỉ của file cần mở, và một giá trị bitmask `mode` không bắt buộc.

Các tham số của hàm được định nghĩa theo cú pháp như khai báo biến - `kiểu_dữ_liệu tên_biến` - và được phân cách nhau bằng dấu phẩy (`,`).

Các tham số giống như biến local của hàm - chúng chỉ tồn tại bên trong hàm, và sẽ không thể truy cập được từ bên ngoài. Nếu như có biến global trùng tên, thì biến tham số của hàm sẽ được sử dụng trong hàm của nó.

Ta không được phép đặt tên biến local trùng tên biến tham số của hàm.

Hàm không bắt buộc phải có tham số - ví dụ như hàm `int main()`. Khi đó ta bỏ qua mục này trong ngoặc tròn.

Tham số của hàm có 3 dạng - các dạng của tham số sẽ được nói rõ hơn ở phần sau của bài viết.

## Nội dung của hàm

Nội dung của hàm là những việc ta cần hàm thực hiện, được biểu diễn trong khối lệnh ngoặc nhọn.

Ví dụ: Nội dung của hàm có khả năng in ra giá trị của một số

{% highlight c++ %}
void printNumber(int value)
{
cout << value;
}
{% endhighlight %}

Đối với các hàm có giá trị trả về (khác `void`), ta cần phải sử dụng lệnh `return giá_trị;` để thông báo kết thúc chương trình và giá trị trả về.

Ví dụ: Nội dung của hàm có khả năng trả về tổng của hai số

{% highlight c++ %}
int tong(int a, int b)
{
return a + b;
}
{% endhighlight %}

Từ khóa `return` sẽ thông báo kết thúc hàm ngay lập tức, và trả về giá trị nếu có.

Một hàm được định nghĩa trả về một kiểu giá trị khác `void` mà kết thúc không có `return` sẽ khiến chương trình bị lỗi `undefined behavior`. Các bộ dịch không nhất thiết cần phải thông báo lỗi này (nhưng thường sẽ có cảnh báo), và chương trình vẫn có thể được dịch thành công kể cả khi có lỗi này. Khi đó giá trị trả về có thể là bất cứ giá trị nào. Để tránh sai sót, hãy luôn kết thúc các hàm một cách hợp lệ.

Từ khóa `return` cũng có thể sử dụng trong hàm kiểu `void` để kết thúc hàm đó. Trong trường hợp này, ta không cần có phần giá trị trả về.

Ví dụ:

{% highlight c++ %}
void testing()
{
cout << "Dong nay se duoc in ra!";
return;
cout << "Dong nay se khong duoc in ra, vi chuong trinh con ket thuc roi!";
}
{% endhighlight %}

# Sử dụng hàm đã được định nghĩa

Sau khi đã định nghĩa hàm, ta có thể sử dụng hàm bằng cách gọi tên của hàm cùng với giá trị của các tham số của nó (nếu có).

Ví dụ thứ nhất: Chương trình sau đây gọi ra hàm `testing` vừa rồi ở trong `int main()`, để kiểm tra tính năng của từ khóa `return`

{% highlight c++ %}
#include <iostream>

using namespace std;

void testing()
{
cout << "Dong nay se duoc in ra!";
return;
cout << "Dong nay se khong duoc in ra, vi chuong trinh con ket thuc roi!";
}

int main()
{
testing();
return 0;
}
{% endhighlight %}

Output

```
Dong nay se duoc in ra!
```

Ví dụ thứ hai: Chương trình sau đây sẽ in ra tổng của hai giá trị được tính toán bằng hàm `tinhTong()`

{% highlight c++ %}
#include <iostream>

using namespace std;

int tinhTong(int a, int b)
{
return a + b;
}

int main()
{
cout << tinhTong(1, 2);
return 0;
}
{% endhighlight %}

# Các kiểu tham số của hàm

Ok, giờ ta có thể áp dụng hàm vào chương trình đảo hai số như đầu bài viết đặt ra! Ta chỉ cần viết một hàm `daoSo()` như sau

{% highlight c++ %}
void daoSo(int a, int b)
{
int temp = a;
a = b;
b = temp;
}
{% endhighlight %}

Rồi sau đó gọi hàm này ở dưới khi nào cần đảo số:

{% highlight c++ %}
#include <iostream>

using namespace std;

void daoSo(int a, int b)
{
int temp = a;
a = b;
b = temp;
}

int main()
{
int a = 10, b = 20;
daoSo(a, b);
cout << "a = " << a << "\n";
cout << "b = " << b;
return 0;
}
{% endhighlight %}

Output

```
a = 10
b = 20
```

![undefined](/img/uploads/cpp-cơ-bản-11-1.jpg)

Tại sao giá trị của `a` và `b` vẫn chưa đảo?

Có 3 dạng tham số của hàm

## Tham số truyền giá trị

Đây là kiểu tham số mặc định của hàm. Khi ta gọi hàm, chương trình sẽ **tạo ra các biến mới, copy giá trị được truyền vào biến**, và **tất cả các thay đổi sẽ chỉ diễn ra trên các biến mới này**. Hàm `daoSo()` ta vừa viết rơi vào trường hợp này - chỉ có giá trị của hai biến tham số `a` và `b` thay đổi, `a` và `b` ở bên ngoài vẫn không có gì thay đổi cả.

## Tham số truyền biến

Để khai báo một biến tham số truyền biến, ta sử dụng cú pháp khai báo tham số

```
kiểu_dữ_liệu &tên biến // đặt dấu & ở trước tên biến
```

Kiểu tham số này thực hiện mọi thay đổi trực tiếp lên biến mà không thông qua bản copy nào.

Ví dụ, ta viết lại hàm `daoSo()` như sau

{% highlight c++ %}
void daoSo(int &a, int &b)
{
int temp = a;
a = b;
b = temp;
}
{% endhighlight %}

Cho chạy chương trình với đoạn code sửa đổi, ta được output

```
a = 20
b = 10
```

Hàm đảo số đã thực hiện thay đổi trực tiếp lên hai biến `a` và `b`, và nhờ đó mà giá trị của chúng đã được đảo thành công.

Khi sử dụng hàm có tham số truyền biến, các tham số này bắt buộc phải là một biến - khác với tham số truyền giá trị chỉ cần truyền giá trị. Do đó nếu hàm có dạng

```
int example(int &a…
```

Thì tham số `a` chỉ có thể là một biến kiểu `int` hoặc tương đương. Trong khi đó nếu hàm có dạng

```
int example(int a…
```

Thì tham số `a` có thể là 1 biến, 1 biểu thức cho ra kiểu `int` hoặc tương đương, hoăc một giá trị số cụ thể.

## Tham số truyền con trỏ

Để khai báo một biến tham số truyền con trỏ, ta sử dụng cú pháp khai báo tham số

```
kiểu_dữ_liệu *tên biến // đặt dấu * ở trước tên biến
```

Kiểu dữ liệu này sẽ truyền giá trị địa chỉ ô nhớ của biến vào hàm.
Kiểu tham số này, cùng với những kiến thức về con trỏ, sẽ được giải thích kĩ hơn ở các bài viết sau.

# Đệ quy

Giả sử ta định nghĩa giai thừa của một số nguyên `x` như sau

$$ 0! = 1 $$

$$ x! = (x - 1)! \* x \ \forall x > 0 $$

Đây là một cách định nghĩa kiểu quy nạp - ta định nghĩa một giá trị cơ sở, và các giá trị quy nạp sẽ được định nghĩa từ các giá trị cơ sở trước nó.

Trong chương trình, ta cũng có thể tự gọi một hàm ở ngay bên trong nó - hành động này được gọi là đệ quy. Ví dụ với hàm tính lũy thừa của một số theo định nghĩa trên

{% highlight c++ %}
long long int giaiThua(int x)
{
return (x == 0? 1 : giaiThua(x - 1) \* x);
}
{% endhighlight %}

Dòng lệnh trên sử dụng toán tử điều kiện - nếu như `x` bằng 0, giai thừa sẽ trả lại 1. Nếu `x` khác 0, giai thừa sẽ bằng giai thừa của `x - 1` nhân với `x`.

Chú ý rằng hành động đệ quy có thể sinh ra lặp vô hạn. Ví dụ như hàm sau

{% highlight c++ %}
int infinityLoop(int x)
{
return infinityLoop(x - 1) \* x;
}
{% endhighlight %}

Hàm kia sẽ liên tục lấy hàm `infinityLoop` của `x - 1` nhân với `x`, mà không hề có điểm dừng. Nếu gọi hàm này, chương trình hoặc sẽ không thể chạy được tiếp (do hàm này không bao giờ kết thúc), hoặc sẽ sinh lỗi tràn bộ nhớ (do phải tạo ra vô hạn biến tham số x cho mỗi lần gọi hàm).

# Giá trị mặc định cho tham số

Như hàm open của `fstream` có giá trị mặc định cho `mode`, ta cũng có thể đặt giá trị mặc định cho các tham số của hàm.

```
kiểu_dữ_liệu tên_biến = giá_trị_mặc định
```

Giá trị mặc định sẽ được sử dụng khi không có giá trị nào được truyền vào tham số tương ứng.

Ví dụ: Chương trình sau sẽ gọi ra hàm tính tổng hai số mà không truyền hai số vào. Vì đã có giá trị mặc định từ trước, nên phép toán vẫn được thực hiện với hai giá trị mặc định.

{% highlight c++ %}
#include <iostream>

using namespace std;

int tinhTong(int a = 10, int b = 20)
{
return a + b;
}

int main()
{
cout << tinhTong();
return 0;
}
{% endhighlight %}

Output

```
30
```

_Phần sau: [\[C++ Cơ bản\] Phần 12: Câu lệnh điều kiện](http://cowboycoder.vercel.app/article/c-co-ban-phan-12-cau-lenh-dieu-kien)_
