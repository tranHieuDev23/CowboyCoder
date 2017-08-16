---
title: '[C++ Cơ bản] Phần 12: Câu lệnh điều kiện'
author: Admin Tổng Quản
date: 2017-08-17T00:00:05+07:00
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 11: Hàm - Chương trình con](http://cowboycoder.tech/article/c-co-ban-phan-11-ham-chuong-trinh-con)*

Không cần phải giải thích nhiều về tầm quan trọng của câu lệnh điều kiện - câu lệnh điều kiện trao cho chương trình máy tính sự linh hoạt, vào trường hợp này phải xử lý như thế này, vào trường hợp kia phải xử lý như thế kia, vân vân… Nếu không có câu lệnh điều kiện, sẽ không có những chương trình máy tính hiện đại mà chúng ta sử dụng.

Bài viết này sẽ nói về các cách triển khai câu lệnh điều kiện trong C++

# Toán tử điều kiện
Như đã nói trong bài viết về toán tử, toán tử điều kiện là cấu trúc có dạng

```
giá_trị_bool? giá_trị_thứ_nhất : giá_trị_thứ_hai
```

Nếu như giá trị ```bool``` là ```true```, toán tử này sẽ trả về giá trị thứ nhất. Nếu là ```false```, toán tử sẽ trả lại giá trị thứ hai.

Ví dụ: Chương trình sau có một hàm ```isEven()```, trả về ```true``` nếu tham số là chẵn và ngược lại. Ta sẽ sử dụng toán tử điều kiện để in ra ```"True"``` nếu hàm trả về ```true``` và ```"False"``` nếu hàm trả về ```false```.

{% highlight c++ %}
#include <iostream>

using namespace std;

bool isEven(int x)
{
    return x % 2 == 0;
}

int main()
{
    int x; cin >> x;
    cout << (isEven(x)? "True" : "False");
    return 0;
}
{% endhighlight %}

Hãy thử nhập ```x``` với các giá trị khác nhau và xem kết quả.

# Từ khóa ```if```

Trong phần lớn trường hợp, khi điều kiện được thỏa mãn thì ta cần phải thực hiện một hoặc một nhóm các hành động, thay vì trả lại một giá trị nào đó. 

Ví dụ: Nhà bạn đang nuôi một bé doge. Hằng ngày bé doge sẽ vui chơi, mệt và bị đói. **Khi bị đói, bé doge sẽ sủa đòi ăn.** Đó là ví dụ về một hành động xảy ra khi điều kiện được thỏa mãn.

![undefined](/img/uploads/cpp-cơ-bản-12-1.jpg)
 
Để có thể thực hiện một lệnh/nhóm lệnh khi có một điều kiện được thỏa mãn, ta sử dung từ khóa ```if```.

Cấu trúc của câu lệnh điều kiện với ```if``` là

```
if (biểu thức bool)
{
    nội dung thực hiện;
}
```

Nếu biểu thức ```bool``` đúng, khối lệnh tiếp theo sau ```if``` sẽ được thực hiện.

Chú ý câu lệnh ```if``` (biểu thức ```bool```) không cần có dấu chấm phẩy kết thúc.

Nếu nội dung thực hiện chỉ gồm 1 câu lệnh, ta không bắt buộc phải sử dụng ngoặc nhọn.

Ví dụ thực hành: Dưới đây là một chương trình tính toán đơn giản. Bạn cần phải nhập vào hai số ```a``` và ```b```, cùng với một kí tự dấu phép tính cộng, trừ, nhân, chia. Chương trình sẽ in ra kết quả của phép tính bạn nhập vào.

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int a, b;
    char dau;
    cin >> a >> dau >> b;
    if (dau == '+')
        cout << a + b;
    if (dau == '-')
        cout << a - b;
    if (dau == '*')
        cout << a * b;
    if (dau == '/')
    {
        if (b == 0)
            cout << "Phep chia cho 0!";
        if (b != 0)
            cout << a / b;
    }
    if (dau != '+' && dau != '-' && dau != '*' && dau != '/')
        cout << "Phep tinh khong hop le!";
    return 0;
}
{% endhighlight %}

Như trong ví dụ trên, các câu lệnh ```if``` với phép tính cộng, trừ, nhân chỉ cần một lệnh in ra kết quả, do đó phần nội dung điều kiện không cần phải có ngoặc nhọn. Phép chia cần có thêm một lệnh kiểm tra phép tính có bị chia cho 0 hay không, do đó sử dụng nhóm lệnh ngoặc nhọn. 

Từ ví dụ trên, ta cũng thấy rằng ta có thể lồng nhiều câu lệnh ```if``` vào nhau, để có được tính năng mà ta muốn, giống như khả năng phát hiện chia cho 0 trong chương trình trên.

# Từ khóa ```else```

Tiếp túc với câu chuyện về bé doge. **Khi đói, bé doge sẽ kêu và đòi ăn. Nhưng nếu không, bé doge sẽ tiếp tục vui chơi thưởng thức cuộc sống.** Đó là ví dụ về chức năng của từ khóa ```else``` - thực hiện một đoạn lệnh khi biểu thức ```bool``` bị sai.

![undefined](/img/uploads/cpp-cơ-bản-12-2.jpg)
 
Cấu trúc của đoạn lệnh ```if``` có sử dụng ```else``` là

```
if (biểu thức bool)
{
    nội dung khi đúng;
}
else
{
    nội dung khi sai;
}
```

Ví dụ: Trong đoạn code dành cho phép chia của chương trình trên, ta có thể sửa lại phần kiểm tra chia cho 0 thành

{% highlight c++ %}
if (b == 0)
    cout << "Phep chia cho 0!";
else
    cout << a / b;
{% endhighlight %}

# Từ khóa ```switch```

Nhà bạn nào nuôi doge rồi chắc cũng biết - doge có rất nhiều nhu cầu, không chỉ có mỗi việc ăn. Khi doge đói, khát, chán, thất tình,… mỗi công việc lại có một hướng xử lý khác nhau. Ta có thể sử dụng nhiều lệnh ```if``` để giải quyết từng trường hợp một, hoặc sử dụng từ khóa ```switch``` để xử lý với nhiều trường hợp khác nhau.
Cấu trúc của cụm lệnh ```switch``` là

```
switch (giá trị cần kiểm tra)
{
    case trường hợp 1:
        nội dung;
        break; // không bắt buộc
    case trường hợp 2:
        nội dung;
        break; // không bắt buộc
    case trường hợp 3:
        nội dung;
        break; // không bắt buộc
    ...
    default:
        nội dung; // phần default là không bắt buộc
}
```

* Giá trị cần kiểm tra: Giá trị này ở đây có thể là một biến, một biểu thức, vân vân… Giá trị này sẽ được so sánh với từng trường hợp một trong nhóm lệnh ```switch```.

* Các trường hợp: Mỗi một trường hợp đều bắt đầu bằng dòng ```case (giá trị):```. Nếu như giá trị cần kiểm tra bằng giá trị của trường hợp, phần nội dung của trường hợp này sẽ được triển khai.

* ```break```: Từ khóa ```break``` khi được sử dụng trong khối lệnh ```switch``` mang ý nghĩa thông báo kết thúc phần nội dung của một trường hợp. Phần này là không bắt buộc - nếu không có từ khóa này, các dòng lệnh của các trường hợp về sau sẽ được chạy tiếp (cho dù không thỏa mãn trường hợp về sau) cho tới khi nào tìm thấy một từ khóa ```break``` hoặc kết thúc khối lệnh ```switch```.

* ```default```: Khi giá trị cần kiểm tra không thỏa mãn trường hợp nào, nội dung ở phần ```default``` sẽ được triển khai. Phần này là không bắt buộc.

Ví dụ: Ta có thể chỉnh sửa lại chương trình tính toán đơn giản ở trên bằng nhóm lệnh ```switch``` cho biến ```dau```.

{% highlight c++ %}
#include <iostream>

using namespace std;

int main()
{
    int a, b;
    char dau;
    cin >> a >> dau >> b;
    switch (dau)
    {
        case '+':
            cout << a + b;
            break;
        case '-':
            cout << a - b;
            break;
        case '*':
            cout << a * b;
            break;
        case '/':
            if (b == 0)
                cout << "Phep chia cho 0!";
            if (b != 0)
                cout << a / b;
        default:
            cout << "Phep tinh khong hop le!";
    }
    return 0;
}
{% endhighlight %}

Trong ví dụ với ```switch```, ta thấy điều tiện lợi nhất là việc không cần hẳn biểu thức ```bool``` dài dòng như ví dụ với ```if``` để kiểm tra giá trị của dau có khác với tất cả các giá trị cho phép hay không. 

Tùy vào trường hợp, chúng ta sẽ sử dụng ```if```, ```else``` và ```switch``` sao cho phù hợp với nhu cầu của chương trình.

