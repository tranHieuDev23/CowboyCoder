---
title: '[C++ Cơ bản] Phần 13: Vòng lặp'
author: Admin Tổng Quản
date: 2017-08-18T18:33:51.888Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 12: Câu lệnh điều kiện](http://cowboycoder.tech/article/c-co-ban-phan-12-cau-lenh-dieu-kien)*

Bài toán được đặt ra: Hãy viết các số từ 1 tới 5.

Chắc chắn bạn sẽ làm trâu từ 1 tới 5 rồi, có gì to tát đâu nhỉ.

![undefined](/img/uploads/cpp-cơ-bản-13-1.jpg)
 
Thế bây giờ bảo bạn in ra các số từ 1 tới 1 triệu, liệu bạn có thể làm được trâu không?

![undefined](/img/uploads/cpp-cơ-bản-13-2.jpg)
 
Tính tới năm 2015, dân số của Thủ đô Hà Nội là 7,58 triệu người. Nếu lưu trữ tên, họ, địa chỉ, số điện thoại, nguyên quán, vân vân… của tất cả dân Hà Nội trong một hệ thống, bạn hoàn toàn không thể dùng sức người để xử lý không được.

Để có thể yêu cầu máy tính thực hiện một công việc lặp đi lặp lại, ta sử dụng vòng lặp. Vòng lặp cho phép ta chạy một hoặc nhiều lệnh liên tục, cho tới khi nào một điều kiện đặt ra được thỏa mãn. C++ có 3 kiểu vòng lặp mà bài viết này sẽ đề cập tới.

# Vòng lặp ```for```

Vòng lặp ```for``` có cú pháp

```
for (lệnh khởi tạo; điều kiện kiểm tra; lệnh biến đổi) // chú ý không có dấu chấm phẩy ở sau for
{
    nội dung thực hiện;
}
```

Chương trình sẽ thực hiện vòng lặp ```for``` theo thứ tự sau:

* Đầu tiên, lệnh khởi tạo sẽ được gọi. Thường đây là nơi để ta khai báo các giá trị được sử dụng trong vòng lặp - ví dụ như một biến ```int``` có chức năng đếm số lần lặp, nhằm kết thúc vòng lặp sau một số lần nhất định.
* Tiếp theo, nếu điều kiện kiểm tra được thỏa mãn, phần nội dung thực hiện sẽ được triển khai. Nếu như không, vòng lặp sẽ được kết thúc. Ví dụ về điều kiện triển khai là việc biến đếm số lần lặp nhỏ hơn một số lần nhất định.
* Sau khi phần nội dung thực hiện xong một lần, lệnh biến đổi sẽ được triển khai. Điều kiện kiểm tra sẽ lại được kiểm tra, và vòng lặp sẽ tiếp tục nếu như điều kiện vẫn còn đúng. Lệnh biến đổi có thể là việc tăng giá trị của biến đếm, thay đổi điều kiện trong vòng lặp, vân vân…

Nếu như phần nội dung chỉ bao gồm một lệnh, ta không cần phải sử dụng ngoặc nhọn, giống như đối với từ khóa ```if```.

Ví dụ: Đây là vòng lặp nhằm in ra các giá trị số nguyên từ 1 tới 1000000

{% highlight c++ %}
for (int i = 1; i <= 1000000; x ++)
    cout << i << endl;
{% endhighlight %}

Một ví dụ khác: Đây là vòng lặp nhằm in ra các giá trị số lẻ từ 1 tới 100

{% highlight c++ %}
for (int i = 1; i <= 100; i ++)
{
    if (i % 2 == 1)
        cout << i << endl;
}
{% endhighlight %}

Hoặc

{% highlight c++ %}
for (int i = 1; i <= 100; i += 2)
    cout << i << endl;
{% endhighlight %}

Thông thường, ta sẽ hay thấy vòng lặp ```for``` được sử dụng để duyệt qua các giá trị trong một khoảng, hoặc thực hiện một công việc cho đủ một số lần nhất định, cho dù thực tế với cấu trúc của ```for``` thì ta có thể cài đặt bất cứ cấu trúc lặp nào.

## Biến trong vòng ```for```

Khi ta khai báo biến trong các lệnh khởi tạo và biến đổi của vòng lặp ```for```, các biến này cũng sẽ giống như biến local của một chương trình con - chúng chỉ tồn tại bên trong vòng ```for```, và ta không thể truy cập vào chúng từ bên ngoài. Quy tắc đặt tên của chúng cũng giống như đối với biến local.

Khi tham gia lập trình nhiều, các bạn có thể sẽ thắc mắc tại sao tên biến đếm trong vòng lặp for thường được đặt là ```i```, mà không phải là các từ có nghĩa hơn. ```i``` ở đây viết tắt cho index - chỉ số, ám chỉ số lần lặp hoặc phần tử hiện đang được lặp. Đây là một quy chuẩn bất thành văn của lập trình viên trên thế giới. Bạn không cần phải tuân thủ quy chuẩn này, nhưng nó giúp code của bạn dễ đọc và chuyên nghiệp hơn.

## Lồng vòng lặp vào nhau

Giả sử bạn muốn in ra bảng cửu chương. Ta sẽ cần phải thực hiện hai vòng lặp lồng nhau:

* Đầu tiên, ta duyệt thừa số đầu tiên từ 1 tới 9
* Với mỗi thừa số được duyệt, ta phải duyệt thừa số thứ 2 cũng từ 1 tới 9, và in ra tích của chúng.

Cũng giống như các lệnh if có thể lồng vào nhau, các vòng lặp nói chung cũng có thể được lồng vào nhau. Chương trình in ra bảng cửu chương sẽ như sau:

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    for (int i = 1; i <= 9; i ++)
        for (int j = 1; j <= 9; j ++)
            cout << i << " * " << j << " = " << i * j << endl;
    return 0;
}
{% endhighlight %}

Biến đếm trong vòng lặp thường được đặt là ```i```. Khi tên biến ```i``` bị lấy mất, ta thường sử dụng tiếp các chữ cái tiếp theo của bảng chữ cái tiếng Anh - ```j```, ```k```, vân vân… Đây cũng chỉ là một quy chuẩn bất thành văn mà bạn được khuyến khích làm theo.

Khi viết code, ta cũng thường hay thấy các dòng lệnh được viết lùi sang phải bằng kí tự tab. Điều này giúp cho các khối lệnh trở nên rõ ràng hơn, giúp code đẹp và dễ đọc hơn.

## Bỏ trống nội dung các phần của vòng lặp for

Nếu như ta bỏ trống hai phần lệnh khởi tạo và lệnh biến đổi, sẽ không có chuyện gì xảy ra khi vòng lặp cần phải gọi hai lệnh này cả.

Nếu như ta bỏ trống phần điều kiện biến đổi, điều kiện biến đổi được mặc định là đúng, và vòng lặp sẽ không bao giờ tự kết thúc (người dùng phải sử dụng các lệnh khác để kết thúc vòng lặp).

Ví dụ: Vòng lặp sau đây không có khởi tạo, điều kiện hay biến đổi gì, và sẽ diễn ra vô tận vì điều kiện được mặc định là đúng.

{% highlight c++ %}
for (;;)
{
    cout << "Help! I am an infinity loop!" << endl;
}
{% endhighlight %}

# Vòng lặp ```while```
Cú pháp của vòng lặp ```while``` là

```
while (điều kiện kiểm tra) // không có dấu chấm phẩy ở đây
{
    nội dung thực hiện;
}
```

Vòng lặp này kiểm tra điều kiện đã cho, và chừng nào điều kiện này còn đúng, thì nội dung của vòng lặp còn được chạy. Điều đó có nghĩa là vòng lặp ```while``` sẽ tương tự như vòng lặp

```
for (; điều kiện kiểm tra;)
{
    nội dung thực hiện;
}
```

Ví dụ: Viết ra các số nguyên chia hết cho 6, bắt đầu từ một số ```x``` được nhập bởi người dùng, và không vượt quá 100

{% highlight c++ %}
int x; cin >> x;
while (x <= 100)
{
    if (x % 6 == 0)
        cout << x << endl;
    x ++;
}
{% endhighlight %}

Chú ý rằng nếu như điều kiện bị sai ngay từ đầu, vòng lặp sẽ hoàn toàn không được chạy. Hãy thử nhập vào một giá trị lớn hơn 100 và xem chuyện gì sẽ xảy ra.

Tương tự như vòng lặp ```for```, vòng lặp ```while``` cũng có thể lồng vào các vòng lặp khác hoặc các khối lệnh khác bên trong nội dung của nó.

Vòng lặp ```while``` thường sẽ được sử dụng khi ta muốn lặp đi lặp lại một hành động nào đó, cho tới khi một điều kiện nào đó được thỏa mãn - cho dù tương tự như vòng lặp ```for```, ```while``` cũng có thể sử dụng để viết bất cứ kiểu vòng lặp nào.

# Vòng lặp ```do - while```
Vòng lặp ```do - while``` có cấu trúc

```
do
{
    nội dung vòng lặp;
}
while (điều kiện kiểm tra); // chú ý có dấu chấm phẩy ở đây
```

Tương tư như vòng lặp ```while```, vòng lặp ```do - while``` sẽ thực hiện phần nội dung cho tới khi nào điều kiện kiểm tra bị sai. Tuy nhiên khác với ```while```, ```do - while``` sẽ thực hiện lần lặp đầu tiên trước khi kiểm tra lần đầu tiên. Điều này có nghĩa là cho dù điều kiện bị sai ngay từ đầu, vòng lặp vẫn sẽ được chạy một lần.

Ví dụ: Hãy thay đoạn code in ra các số nguyên chia hết cho 6 trong ví dụ trên thành

{% highlight c++ %}
do
{
    if (x % 6 == 0)
        cout << x << endl;
    x ++;
}
while (x <= 100);
{% endhighlight %}

Sau đó nhập vào một giá trị lớn hơn 100 mà chia hết cho 6 (ví dụ: 123). Ta thấy giá trị vẫn sẽ được in ra 1 lần, cho dù nó có lớn hơn 100.

# Vòng lặp vô hạn

Nếu như vòng lặp luôn luôn thỏa mãn điều kiện kiểm tra, nó sẽ không bao giờ có thể kết thúc, và sẽ diễn ra tới vô hạn :D Cách đơn giản nhất để có vòng lặp vô hạn là sử dụng ```for(;;)``` như hướng dẫn như trên, hoặc sử dụng ```while(true)``` (dịch sang tiếng Việt: chừng nào giá trị ```true``` còn đúng).

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    while (true)
    {
        cout << "This is an infinity loop!";
    }
    return 0;
}
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-13-3.jpg)
 
Vòng lặp vô hạn sẽ khiến cho chương trình luôn dừng lại ở một chỗ, lặp đi lặp lại liên tục. Điều này có thể tốt hoặc xấu.

Về mặt tích cực, đây là cơ sở cho các hệ điều hành - bản thân chúng là một vòng lặp vô hạn nơi chương trình luôn được tính toán - hoặc các ứng dụng. Có thể giải thích đơn giản vòng lặp của ứng dụng là

```
while (true)
{
    tính_toán_trong_ứng _dụng();
    vẽ_ra_hình_ảnh_ứng_dụng();
}
```

Nếu như điều kiện kiểm tra của vòng lặp quá phức tạp và bạn cảm thấy việc đặt nó trong một biểu thức ```bool``` là không thể, thì ta có thể đặt vòng lặp là vô hạn, và kiểm tra điều kiện ở bên trong.

```
while (true)
{
    tính toán một tí;
    if (điều kiện thứ nhất)
        kết thúc vòng lặp;
    tính toán thêm nữa;
    if (điều kiện thứ hai)
        kết thúc vòng lặp;
    …;
}
```

Về mặt tiêu cực, nếu bạn không yêu cầu vòng lặp vô hạn, chương trình của bạn sẽ đơn giản dừng lại ở đó và không chạy tiếp được nữa ¯\\_(ツ)_/¯.

# Điều khiển vòng lặp

Để có thể điểu khiển diễn biến của vòng lặp, ta sử dụng các từ khóa ```break```, ```continue``` và ```goto```.

Khi từ khóa ```break``` được gọi trong vòng lặp, nó sẽ kết thúc hoàn toàn vòng lặp đó.

Ví dụ: In ra các số chia hết cho 6 từ 1 tới 100, nhưng nếu ta tìm được một số chia hết cho 13 trong khoảng này, ta sẽ dừng luôn vòng lặp vì quá xúi quẩy.

{% highlight c++ %}
for (int i = 1; i <= 100; i ++)
{
    if (i % 13 == 0)
        break;
    if (i % 6 == 0)
        cout << i << endl;
}
{% endhighlight %}

Output

```
6
12
```

Khi từ khóa ```continue``` được gọi trong vòng lặp, lần lặp hiện tại sẽ bị kết thúc, và nếu như điều kiện kiểm tra được thỏa mãn thì lần lặp kế tiếp sẽ bắt đầu.

Ví dụ: Duyệt biến ```x``` với các giá trị từ 1 tới 5, và in ra ```"Episkey"``` với mỗi một số. Nếu ```x``` là số chẵn, in ra thêm dòng chữ ```"Avada Kedavra"```.

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    for (int i = 1; i <= 5; i ++)
    {
        cout << "Episkey" << endl;
        if (i % 2 == 1) // nếu i lẻ
            continue;
        cout << "Avada Kedavra" << endl;
    }
    return 0;
}
{% endhighlight %}

Output

```
Episkey
Episkey
Avada Kedavra
Episkey
Episkey
Avada Kedavra
Episkey
```

Lệnh ```goto``` có cú pháp xấu, khiến cho code trở nên vô cùng khó đọc, và [được giới lập trình viên khuyến cáo không nên sử dụng](https://www.quora.com/Is-GOTO-still-considered-harmful). Vì lý do đó, bài viết này sẽ không nói tới từ khóa này.

# Còn cách nào khác để điều khiển vòng lặp nữa không?

Nếu như vòng lặp được gọi trong một chương trình con, và chương trình con đó được kết thúc bằng lệnh ```return```, vòng lặp cũng sẽ được kết thúc ngay tại đó. Hãy lợi dụng điều này để kết thúc vòng lặp hợp lý, tránh phải duyệt qua các giá trị thừa thãi và làm chậm chương trình.

Ví dụ: Số nguyên tố là số tự nhiên lớn hơn 1 chỉ có ước số tự nhiên là 1 và chính nó. Ta sẽ viết hàm kiểm tra xem một số ```x``` có phải số nguyên tố không, bằng cách duyệt qua các giá trị ```i``` từ 2 tới ```x - 1```, và nếu như ```x``` chia hết cho một trong các giá trị ```i``` này, hàm sẽ trả lại giá trị ```false``` ngay lập tức.

{% highlight c++ %}
#include <iostream>

using namespace std;

bool laSoNguyenTo(int x)
{
    if (x < 2)
        return false;
    for (int i = 2; i < x; i ++)
        if (x % i == 0)
            return false;
    return true;
}

int main()
{
    int x; cin >> x;
    if (laSoNguyenTo(x))
        cout << "So nguyen to!";
    else
        cout << "Khong phai so nguyen to!";
    return 0;
}
{% endhighlight %}



