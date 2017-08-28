---
title: '[C++ Cơ bản] Phần 17: Tham chiếu và con trỏ. Tác dụng của con trỏ.'
author: Admin Tổng Quản
date: 2017-08-28T12:49:24.338Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 16: Các giá trị kiểu kí tự. Xâu kí tự.](http://cowboycoder.tech/article/c-co-ban-phan-16-cac-gia-tri-kieu-ki-tu-xau-ki-tu)*

Trong bài viết về hàm và chương trình con, chúng ta đã biết tới hai kiểu tham số là tham số truyền biến và tham số truyền con trỏ. Bài viết này sẽ giải thích rõ hơn về hai khái niệm tham chiếu và con trỏ - bản chất của hai loại tham số trên.

# Định nghĩa

Các biến thông thường khi được khai báo sẽ copy giá trị được khởi tạo, và trở thành một biến riêng biệt. Bất cứ hành động nào xảy ra trên biến mới đều không liên quan tới biến cũ nữa. Ví dụ đoạn code sau

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int a = 10;
    int b = a;
    b = 20;
    cout << a << ' ' << b;
    return 0;
}
{% endhighlight %}

sẽ cho ra output

```
10 20
```

Tham chiếu (reference) là một biến được chỉ định đại diện cho một biến hiện đã tồn tại - toàn bộ các thao tác ta làm với biến mới, thực chất là thực hiện trên biến cũ. Thật lòng mà nói, cách dịch "tham chiếu" khá là tối nghĩa so với từ gốc tiếng Anh, nhưng vì nhiều tài liệu sử dụng cách dịch này nên bài viết sẽ áp dụng đồng bộ.

Để khai báo một biến là biến tham chiếu, ta đặt toán tử ```&``` trước tên biến khi khai báo. Ví dụ

{% highlight c++ %}
int &a = b; // Biến a là tham chiếu tới biến b
{% endhighlight %}

Giả sử ban đầu nếu biến ```b``` có giá trị là 10, biến ```a``` cũng sẽ có giá trị là 10. Nếu biến ```a``` bị gán giá trị 20, giá trị của ```b``` cũng trở thành 20.

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int a = 10;
    int &b = a;
    b = 20;
    cout << a << ' ' << b;
    return 0;
}
{% endhighlight %}

Output

```
20 20
```

Con trỏ (pointer) là biến có kiểu số nguyên thập lục phân, lưu trữ lại địa chỉ ô bộ nhớ của một biến khác.

Để khai báo một biến là kiểu con trỏ, ta đặt toán tử ```*``` trước tên biến. Để lấy giá trị địa chỉ con trỏ bộ nhớ của một biến, ta đặt toán tử ```&``` trước tên biến đó. Ví dụ

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int a = 10;
    int *b = &a;
    cout << a << ' ' << b;
    return 0;
}
{% endhighlight c++ %}

Output

```
10 0x6afef8
```

Giá trị thứ hai sẽ khác biệt sau mỗi lần chạy, do chương trình sẽ sử dụng ô nhớ khác nhau cho biến vào các thời điểm khác nhau.

Chức năng của biến tham chiếu ta đã thấy trong bài viết về hàm, cũng như trong ví dụ trên - đó là khả năng thực hiện thay đổi trực tiếp lên biến gốc. Bài viết sẽ tập trung hơn tới chức năng của con trỏ bộ nhớ.

# Thực hiện thay đổi trực tiếp lên ô bộ nhớ

Ta cũng có thể sử dụng con trỏ bộ nhớ để thực hiện thay đổi trực tiếp lên giá trị của biến trong ô nhớ, tương tự như biến tham chiếu. Toán tử ```*``` khi được đặt trước một biến dạng con trỏ, sẽ trả lại tham chiếu trực tiếp lên biến của ô nhớ đó, mà ta có thể thực hiện thay đổi lên được

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int a = 10;
    int *b = &a;
    *b = 20; // Đặt giá trị của biến trong ô nhớ mà b biểu diễn bằng 20
    cout << a;
    return 0;
}
{% endhighlight %}

Output

```
20
```

# Truyền mảng vào làm tham số của chương trình con bằng con trỏ

Đối với một mảng, nếu ta viết tên của mảng đó mà không có ngoặc vuông, nó sẽ trả lại địa chỉ ô nhớ của phần tử đầu tiên.

{% highlight c++ %}
#include <iostream>

using namespace std;
int a[10];

int main()
{
    cout << a;
    return 0;
}
{% endhighlight %}

Output trả lại sẽ là một giá trị con trỏ.

Hãy nhớ lại kiến thức của bài mảng: Các biến trong mảng được lưu trữ tại các địa chỉ ô nhớ liên tiếp, phần tử đầu tiên ở vị trí đầu tiên, phần tử thứ hai ở vị trí thứ hai,… Lợi dụng điều này, ta có thể sử dụng tham số là biến dạng con trỏ, để truyền mảng làm tham số chương trình con.

Đối với một biến dạng con trỏ, đặt một giá trị ```x``` trong ngoặc vuông phía sau tên biến sẽ trả lại tham chiếu tới biến cách nó ```x``` ô nhớ, giống hệt như sử dụng mảng.

Ví dụ: Hàm số ```getMax(int, int*)``` sau đây nhận hai tham số - giá trị thứ nhất là số lượng phần tử trong mảng, giá trị thứ hai là mảng cần xét - để tìm ra giá trị lớn nhất trong mảng.

{% highlight c++ %}
#include <iostream>

using namespace std;
int a[] = {1, 2, 3, 4, 5};

int getMax(int n, int* a)
{
    int answer = a[1];
    for (int i = 2; i <= n; i ++)
        if (answer < a[i])
            answer = a[i];
    return answer;
}

int main()
{
    cout << getMax(5, a);
    return 0;
}
{% endhighlight %}

Output

```
5
```

Hãy để ý cách hàm ```getMax()``` duyệt qua các phần tử, giống như duyệt qua mảng.

**Chú ý:** Còn nhớ hàm ```fstream.open()``` chứ? Tham số đầu tiên - tên file cần mở - là một biến có kiểu dữ liệu con trỏ của biến ```char``` (```char*```), hay nói cách khác là một mảng các phần tử kiểu ```char``` - một ```string```. Bài viết trước đã giải thích về cơ chế biểu diễn ```string``` bằng mảng ```char``` của ngôn ngữ C, bạn có thể tham khảo lại.

# Cộng trừ lên con trỏ

Bởi vì con trỏ có bản chất là kiểu giá trị số nguyên, nên ta có thể thực hiện phép cộng trừ lên con trỏ tương tự như với số nguyên. Hãy áp dụng các tính chất sắp đặt vị trí ô bộ nhớ của các cấu trúc dữ liệu như mảng để có thể áp dụng hiệu quả nhất.

# Con trỏ ```NULL```

```NULL``` là một giá trị con trỏ hằng số đặc biệt - nó có nghĩa là con trỏ hiện thời đang không được chỉ tới đâu cả. Ta có thể gán giá trị này cho các biến kiểu con trỏ. Ví dụ:

{% highlight c++ %}
char *pointer = NULL;
{% endhighlight %}

