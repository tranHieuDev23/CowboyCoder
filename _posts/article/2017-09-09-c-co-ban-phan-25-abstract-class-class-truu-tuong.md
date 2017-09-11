---
title: '[C++ Cơ bản] Phần 25: Abstract class - Class trừu tượng'
author: Admin Tổng Quản
date: 2017-09-09T00:16:12.113Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 24: Overload - Viết đè chương trình con và toán tử](http://cowboycoder.tech/article/c-co-ban-phan-24-overload-viet-de-chuong-trinh-con-va-toan-tu)*

Ở trong các bài viết trước về tính thừa kế và overload, chúng ta có nói đến ví dụ về class ```Shape``` và ```Rectangle```. Class ```Shape``` có một chương trình con là ```printArea()```, cho phép chương trình in ra diện tích của hình đang được biểu diễn bởi object. Tuy nhiên chi tiết hình được biểu diễn như thế nào, phải tới subclass ```Rectangle``` mới có. Nếu ta gọi ```printArea()``` ở ```Shape```, ta chỉ in ra kết quả là ```No data```.

{% highlight c++ %}
class Shape
{
    public:
        virtual void printArea()
        {
            cout << "No data\n";
        }
};

class Rectangle: public Shape
{
    private:
        double width, height;
    public:
        Rectangle(double _width, double _height)
        {
            width = _width;
            height = _height;
        }

        void printArea()
        {
            cout << width * height << '\n';
        }
};
{% endhighlight %}

Giờ chúng ta muốn thiết kế lại class ```Shape``` như sau: Đằng nào thì cũng không biết hình được biểu diễn như thế nào rồi, ta không cho class ```Shape``` có chương trình con ```printArea()``` nữa. Tất cả các subclass của ```Shape``` phải được thừa kế và phải overload lại ```printArea()``` (vì bây giờ chúng có biểu diễn hình cụ thể rồi). Để có thể làm được như vậy, chúng ta sử dụng abstract class - class trừu tượng.

# Nhắc lại về tính trừu tượng - abstraction của OOP

Ở trong bài viết giới thiệu về OOP, chúng ta biết rằng abstraction là tính chất cho phép các hàm và chương trình con của chương trình có thể được gọi mà không cần quan tâm về mặt cài đặt ở phía sau. Tính chất này được biểu diễn qua hai điều sau:

* Thứ nhất, việc ta có thể cài đặt quyền truy cập của các yếu tố trong class, giúp ta có thể công khai các yếu tố mặt tiền của object mà vẫn giấu đi các chi tiết cài đặt ở sau. Ví dụ như ở class ```string```, ta có thể gọi hàm ```substr()``` để lấy một ```string``` con của ```string```, mà không cần quan tâm hàm này cài đặt ra sao.
* Thứ hai, việc ta có thể chỉ định một hàm/chương trình con ở superclass là abstract (trừu tượng) - không có thông tin về nội dung thực hiện - và bắt buộc các subclass phải overload lại hàm này để có nội dung cụ thể. Khi ta tạo một object thuộc subclass, overload các hàm abstract của superclass, và gọi hàm đã được overload thông qua superclass (ví dụ như khi ta gán con trỏ object này cho một con trỏ object superclass), hàm đã được overload ở subclass sẽ được gọi.

Bài viết này sẽ xoay quanh yếu tố thứ hai.

# Abstract function (hàm trừu tượng)

Để tuyên bố một hàm trong class là abstract, ta thêm ```=0``` vào sau định nghĩa của hàm đó, và bỏ qua phần nội dung cài đặt. Chú ý là hàm đó phải có thể overload được (sử dụng từ khóa ```virtual```) và có dấu chấm phẩy ở cuối định nghĩa.

```
virtual kiểu_dữ_liệu_trả_lại tên_hàm(các tham số) =0;
```

Ví dụ: Để định nghĩa chương trình con ```printArea()``` trong class ```Shape``` là abstract:

{% highlight c++ %}
class Shape
{
    public:
        virtual void printArea() =0;
};
{% endhighlight %}

Một class có hàm abstract được gọi là một interface (giao diện), trong khi class không có hàm abstract (tất cả đều được định nghĩa) được gọi là concrete class (class cụ thể). Ta không thể tạo ra một object thuộc vào class interface được, nhưng ta có thể tạo ra subclass của chúng. 

Subclass của interface hoặc phải overload lại tất cả các hàm abstract, hoặc các hàm không được overload sẽ được coi là abstract, và subclass mới sẽ trở thành một interface khác. Nếu như subclass là concrete class, ta có thể tạo ra các object mới thuộc về subclass đó. 

{% highlight c++ %}
class Shape
{
    public:
        virtual void printArea() =0;
};

class Rectangle: public Shape
{
    private:
        double width, height;
    public:
        Rectangle(double _width, double _height)
        {
            width = _width;
            height = _height;
        }

        void printArea()
        {
            cout << width * height << '\n';
        }
};

Rectangle rec = Rectangle(2, 3);
{% endhighlight %}

Các con trỏ của interface, chỉ tới các đối tượng có superclass là interface, cũng có thể được tạo ra và truy cập vào.

{% highlight c++ %}
Shape *objectPointer;
{% endhighlight %}

Ví dụ thực hành: Ta có class ```Shape``` và ```Rectangle``` như ở trên, ngoài ra ta còn cài đặt thêm hai class nữa là ```Circle``` (hình tròn) và ```Triangle``` (hình tam giác). ```Circle``` có một biến ```double radius``` (bán kính) và diện tích của ```Circle``` sẽ được tính bằng ```radius * radius * 3.14```. ```Triangle``` có ba biến ```a```, ```b```, ```c```, đại diện cho 3 cạnh của tam giác, và diện tích sẽ tính bằng [công thức Heron](https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron).

Sau khi cài đặt hai class trên, ta sẽ tạo ra một mảng con trỏ ```allShape[]```, để truy cập tới các đối tượng ```Rectangle```, ```Circle``` và ```Triangle```, và chạy hàm ```printArea()``` của chúng.

{% highlight c++ %}
#include <iostream>
#include <cmath> /* Để sử dụng hàm tính căn sqrt() */

using namespace std;

class Shape
{
    public:
        virtual void printArea() =0;
};

class Rectangle: public Shape
{
    private:
        double width, height;
    public:
        Rectangle(double _width, double _height) /* Constructor */
        {
            width = _width;
            height = _height;
        }

        void printArea()
        {
            cout << width * height << '\n';
        }
};

class Circle: public Shape
{
    private:
        double radius;

    public:
        Circle(double _radius) /* Constructor */
        {
            radius = _radius;
        }

        void printArea()
        {
            cout << radius * radius * 3.14 << '\n';
        }
};

class Triangle: public Shape
{
    private:
        double a, b, c;

    public:
        Triangle(double _a, double _b, double _c) /* Constructor */
        {
            a = _a; b = _b; c = _c;
        }

        void printArea()
        {
            double p = (a + b + c) / 2;
            cout << sqrt(p * (p - a) * (p - b) * (p - c)) << '\n'; /* Công thức Heron */
        }
};

Shape *allShape[] = {
    new Rectangle(3, 4),
    new Circle(1),
    new Triangle(3, 4, 5)
};
int n = 3; /* Số lượng phần tử trong mảng */

int main()
{
    for (int i = 0; i < n; i ++)
        allShape[i]->printArea();
    return 0;
}
{% endhighlight %}

Output

```
12
3.14
6
```

# Tại sao phải sử dụng abstract function và interface?

Lý do thứ nhất là vì với interface, ta có thể bắt buộc các subclass của interface phải cài đặt gì, đảm bảo tính đồng bộ. Giả sử bạn tạo ra một cái TV có cổng video, mà bạn không quy định cổng video đó hoạt động như thế nào, các nhà sản xuất đầu kĩ thuật số sẽ mỗi người một nẻo, cuối cùng một cái TV mà có hàng trăm kiểu đầu vào khác nhau, thế là không được. Trong lập trình cũng như vậy.

Lý do thứ hai là interface cho ta khả năng nâng cấp và mở rộng - không cần biết class của anh cài đặt như thế nào, miễn class của anh thừa hưởng cái interface như thế này, thì class của anh có thể lắp vào hoạt động với class của tôi - giống như với đầu vào video của TV vậy.

Lý do thứ ba là với interface, ta có thể gom chung các đối tượng cùng thừa hưởng interface với nhau (ví dụ như các hình học trong ví dụ trên đã được gom chung vào một mảng con trỏ ```allShape[]```) để xử lý chung.

Tới đây là kết thúc phần lập trình hướng đối tượng với C++ rồi. Bài viết tiếp theo sẽ là một bài thực hành, để các bạn có thể tổng hợp lại tất cả kiến thực hướng đối tượng với C++.

*Phần sau: [\[C++ Cơ bản\] Phần 26: Bài thực hành - Game đố vui](http://cowboycoder.tech/article/c-co-ban-phan-26-bai-thuc-hanh-game-do-vui)*
