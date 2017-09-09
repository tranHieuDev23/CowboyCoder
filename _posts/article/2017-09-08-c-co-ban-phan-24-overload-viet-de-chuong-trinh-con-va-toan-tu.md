---
title: '[C++ Cơ bản] Phần 24: Overload - Viết đè chương trình con và toán tử'
author: Admin Tổng Quản
date: 2017-09-08T14:26:14.182Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 23: Tính thừa kế - Class con (subclass)](http://cowboycoder.tech/article/c-co-ban-phan-23-tinh-thua-ke-class-con-subclass)*

Chúng ta đều biết hai kiểu dữ liệu số nguyên ```int``` và ```long long int``` đều có giới hạn về khoảng biểu diễn. Sẽ xảy ra trường hợp ta cần phải tự triển khai một kiểu dữ liệu số riêng để vượt qua các giới hạn ấy. Ý tưởng là tạo một class biểu diễn số bằng một string các kí tự chữ số. Vậy làm thế nào để có thể viết toán tử cộng trừ nhân chia cho class mới này?

Trong bài viết này chúng ta sẽ học về overload - khả năng viết đè các chương trình con và toán tử đã định nghĩa từ trước.

# Overload chương trình con trong chương trình C++

C++ cho phép chúng ta có nhiều chương trình con có cùng tên với nhau, với điều kiện là các biến tham số của mỗi một cá thể phải khác nhau - có thể khác nhau về số lượng hoặc về kiểu dữ liệu của tham số.

Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;

void print(int x)
{
    cout << "Int: " << x << '\n';
}

void print(double x)
{
    cout << "Double: " << x << '\n';
}

void print(string x)
{
    cout << "String: " << x << '\n';
}

int main()
{
    print(1);
    print(3.14);
    print("Hello world!");
    return 0;
}
{% endhighlight %}

Output

```
Int: 1
Double: 3.14
String: Hello world!
```

Bộ dịch C++ sẽ tự động quyết định cá thể nào của chương trình con sẽ được chạy, dựa vào kiểu dữ liệu của tham số được cung cấp.

# Overload chương trình con của class cha

Giả sử chúng ta có hai class ```Shape``` (hình nói chung) và ```Rectangle``` (hình chữ nhật), trong đó ```Rectangle``` là subclass của ```Shape```. Hai class này đều có một hàm ```printArea()``` để in diện tích của hình.

Đối với class ```Shape```, do không có thông số cụ thể để định nghĩa hình, nên ta sẽ in ra dòng chữ ```"No data"``` rồi xuống dòng.

Đối với class ```Rectangle```, ta có hai biến ```private``` kiểu ```double width``` và ```height``` - chiều rộng và chiều dài của hình chữ nhật. Khi gọi hàm ```printArea()``` ta sẽ in ra diện tích của hình chữ nhật bằng ```width * height```.

Ta triển khai chương trình như sau:

{% highlight c++ %}
#include <iostream>

using namespace std;

class Shape
{
    public:
        void printArea()
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

int main()
{
    Shape* rec = new Rectangle(2, 3);
    rec -> printArea();
    return 0;
}
{% endhighlight %}

Output

```
No data
```

Hãy quan sát con trỏ object ```rec``` ở dưới - không ổn lắm nhỉ. Đúng đây là một object thuộc class ```Shape``` rồi, nhưng đây cũng là một object dạng ```Rectangle```. Khi ra lệnh chạy hàm ```printArea()``` mà in ra ```No data``` thì không được, ta muốn nó phải in ra như của class ```Rectangle``` cơ.

Giải pháp là overload hàm ```printArea()``` của class ```Shape```. Để quy định một hàm trong class là hàm có thể overload được ở subclass, ta sử dụng từ khóa ```virtual```. Khi ta gọi một hàm từ con trỏ hoặc tham chiếu của một object, chương trình C++ sẽ xem xét class gốc của con trỏ hoặc tham chiếu là gì, và quyết định sử dụng hàm nào để chạy.

Chỉ cần thêm từ khóa vào trước ```void printArea()``` của class ```Shape```

{% highlight c++ %}
virtual void printArea()
{% endhighlight %}

Rồi chạy chương trình. Output sẽ ra ```6``` - kết quả của việc chạy hàm ```printArea()``` trên class ```Rectangle```.

Đây chính là cách polymorphism - tính đa hình của OOP - được biểu diễn trong C++.

Chú ý là tính chất này chỉ xảy ra khi chạy hàm thông qua con trỏ hoặc tham chiếu - một khi đã gán vào một object thuộc superclass, object đó trở thành một object hoàn toàn độc lập, thuộc hẳn về superclass, nên sẽ chạy hàm gốc chứ không chạy hàm overload.

# Overload toán tử

Ta cũng có thể định nghĩa lại hoặc định nghĩa mới phần lớn các toán tử trong C++, để áp dụng vào các class ta tạo ra. Để overload toán tử ta sử dụng từ khóa ```operator```. 

Lấy ví dụ với class ```BigInt``` như ở đầu bài viết yêu cầu. Có hai phương pháp overload operator.

* Overload bên trong class. Khi đó ta chỉ cần cung cấp giá trị bên phải toán tử làm tham số.

{% highlight c++ %}
class BigInteger
{
    BigInteger operator + (BigInteger x)
    {
        return x;
    }
};
{% endhighlight %}

Overload bên ngoài class, như một hàm của chương trình lớn. Khi đó ta cần cung cấp giá trị hai bên toán tử.

{% highlight c++ %}
class BigInteger
{
    //nội dung;
};

BigInteger operator + (BigInteger x, BigInteger y)
{
    //nội dung;
}
{% endhighlight %}

Hãy để ý rằng các phép toán tử này cũng có kiểu dữ liệu trả về, giống như một chương trình con bình thường vậy - thực chất chúng cũng là chương trình con, nhưng được gọi bằng các toán tử thay vì bằng tên.

Ta có thể overload tất cả các toán tử trong C++, trừ toán tử truy cập scope ```::```, toán tử truy cập yếu tố trong class ```.```, toán tử điều kiện ```?:``` và toán tử tham chiếu yếu tố của class ```.*``` (mà bạn chưa cần phải quan tâm ở đây).

Subclass sẽ không được thừa hưởng các toán tử được overload của superclass.

*Phần sau: [\[C++ Cơ bản\] Phần 25: Abstract class - Class trừu tượng](http://cowboycoder.tech/article/c-co-ban-phan-25-abstract-class-class-truu-tuong)*

