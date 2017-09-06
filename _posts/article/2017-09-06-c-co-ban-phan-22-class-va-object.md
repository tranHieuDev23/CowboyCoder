---
title: '[C++ Cơ bản] Phần 22: Class và Object'
author: Admin Tổng Quản
date: 2017-09-06T16:50:37.640Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 21: Lập trình hướng đối tượng - Object Oriented Programming](http://cowboycoder.tech/article/c-co-ban-phan-21-lap-trinh-huong-doi-tuong-object-oriented-programming)*

Ở phần trước chúng ta đã đề cập tới định nghĩa và các tính chất của Lập trình Hướng đối tượng (OOP). Trong phần này chúng ta sẽ bắt đầu ứng dụng những lí thuyết ấy vào thực hành với C++.

# Định nghĩa class

Hãy đọc lại bài [Cấu trúc dữ liệu - struct và class](http://cowboycoder.tech/article/c-co-ban-phan-18-cau-truc-du-lieu-struct-va-class). Cài đặt ```class``` cũng gần giống như ```struct```, ta sử dụng cú pháp sau:

```
class tên_class 
{
    khai báo các biến, hàm của đối tượng thuộc class;
} [khai báo đối tượng thuộc class, không bắt buộc];
```

Ví dụ

{% highlight c++ %}
class Cat
{
    string type;
    int age;

    void increaseAge()
    {
        age ++;
    }
};
{% endhighlight %}

Vậy có gì khác biệt giữa ```struct``` và ```class```? Có 2 sự khác biệt ở đây

* Về mặt ngữ nghĩa, ```struct``` thường được sử dụng để định nghĩa các kiểu dữ liệu [Plain-Old-Data](https://en.wikipedia.org/wiki/Plain_Old_Data_Structures) (dữ liệu không, không bao gồm các chương trình con hay các yếu tố đóng gói). ```class``` thường được sử dụng trong lập trình OOP đầy đủ.
* Quyền truy cập mặc định tới các yếu tố trong ```struct``` là ```public```, còn với ```class``` là ```private```.

```struct``` có thể chỉnh sửa được thành ```class``` và ngược lại, và có thể sử dụng được các yếu tố của OOP như nhau. Để thống nhất, từ nay trở đi ta sẽ chỉ sử dụng ```class```.

Sau khi định nghĩa class xong, ta có thể định nghĩa các object như các biến thông thường.

{% highlight c++ %}
Cat cat1, cat2, cat3;
{% endhighlight %}

Ta cũng truy cập các yếu tố ```public``` của object bằng toán tử dấu chấm ```.```.

# Quyền truy cập

Ở trên ta có nhắc tới quyền truy cập. Đối với các yếu tố trong ```class```, quyền truy cập mặc định là ```private``` - các yếu tố trong ```class``` chỉ có thể được truy cập từ nội bộ bên trong ```class```, và từ bên ngoài không thể gọi vào.

Ngoài ```private``` ra, còn có 2 kiểu quyền truy cập khác:

* ```public```: Yếu tố ```public``` có thể được truy cập từ bên ngoài đối tượng.
* ```protected```: Yếu tố ```protected``` không thể được truy cập từ bên ngoài đối tượng, nhưng có thể truy cập được từ các đối tượng thuộc class con của class hiện tại. Class con và sự thừa kế sẽ được đề cập kĩ hơn trong các bài viết sau.

Để có thể thiết lập quyền truy cập cho đối tượng, ta sử dụng các từ khóa ```private```, ```public``` và ```protected``` đi kèm cùng dấu hai chấm ```:```. Các yếu tố tiếp theo sau từ khóa sẽ được áp dụng quyền truy cập tương ứng, cho tới khi có một từ khóa mới xuất hiện.

{% highlight c++ %}
class Cat
{
    private:
        void privateVoid()
        {

        }

    public:
        void publicVoid()
        {

        }

    protected:
        void protectedVoid()
        {

        }
};
{% endhighlight %}

Trong class ví dụ ở trên, ```void privateVoid()``` chỉ có thể được gọi từ bên trong đối tượng thuộc vào class ```Cat```, ```void publicVoid()``` có thể gọi được từ bất kì đâu, còn ```void protectedVoid()``` chỉ có thể gọi từ bên trong đối tượng thuộc class ```Cat```, hoặc các đối tượng thuộc vào class con của ```Cat```.

Đây chính là encapsulation - tính đóng gói của lập trình hướng đối tượng. Với cách đặt quyền truy cập cho các yếu tố trong class, ta có thể giới hạn sử dụng của class tới những chức năng cần thiết đối với bên ngoài.

# Hàm khởi tạo (constructor) và hàm phá hủy (destructor)

Tương tự đối với ```struct```, ta cũng có thể viết hàm khởi tạo để khởi tạo các yếu tố của object thuộc class. Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;

class Cat
{
    public:
        string name;
        int age;

        Cat(string _name, int _age)
        {
            name = _name;
            age = _age;
        }
};

int main()
{
    Cat cat = Cat("Tom", 3);
    cout << cat.name << ' ' << cat.age;
    return 0;
}
{% endhighlight %}

Output

```
Tom 3
```

Hàm phá hủy (destructor) là một loại chương trình con đặc biệt khác, được gọi ra khi object bị phá hủy (ví dụ: khi chương trình kết thúc và bộ nhớ được giải phóng). Hàm phá hủy được định nghĩa theo cú pháp

```
~tên_class()
{
    nội dung;
}
```

Ví dụ như khi áp dụng vào class ```Cat``` ở trên:

{% highlight c++ %}
#include <iostream>

using namespace std;

class Cat
{
    public:
        string name;
        int age;

        Cat(string _name, int _age)
        {
            name = _name;
            age = _age;
        }

        ~Cat()
        {
            cout << "Object dang bi pha huy!";
        }
};

int main()
{
    Cat cat = Cat("Tom", 3);
    cout << cat.name << ' ' << cat.age << '\n';
    return 0;
}
{% endhighlight %}

Output

```
Tom 3
Object dang bi pha huy!
```

Ta có thể sử dụng destructor để dọn dẹp dữ liệu sau khi đối tượng bị phá hủy, lưu trữ thông tin quan trọng, vân vân…

# Hàm gán (copy constructor)

Copy constructor là một loại hàm khởi tạo đặc biệt - nó được gọi ra khi một object của class được gán giá trị bằng một object khác (ví dụ như khi gán bằng nhau, khi đặt giá trị cho tham số của hàm, vân vân). Khi đó ta có thể sử dụng copy constuctor để can thiệp vào quá trình gán đó.

Một class thường không bắt buộc phải có copy constructor - trình dịch sẽ tự động xử lý việc gán nếu như không có, tuy nhiên các class có biến kiểu con trỏ và có khả năng cấp phát bộ nhớ động thì bắt buộc phải có copy constructor.

Cú pháp của copy constructor là

```
tên_class(const tên_class& đối_tượng)
{
    nội dung;
}
```

```const``` là từ khóa hằng số - nó mang ý nghĩa rằng biến được khai báo sau nó là hằng số và sẽ không bao giờ bị thay đổi. Chú ý kiểu dữ liệu ở đây là truyền tham biến (toán tử ```&```).

Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;

class Cat
{
    public:
        string name;
        int age;

        Cat(string _name, int _age)
        {
            name = _name;
            age = _age;
        }

        Cat(const Cat& cat)
        {
            cout << "Copy constructor!\n";
            name = cat.name;
            age = cat.age;
        }
};

int main()
{
    Cat cat = Cat("Tom", 3);
    cout << cat.name << ' ' << cat.age << '\n';
    Cat secondCat = cat;
    cout << secondCat.name << ' ' << secondCat.age;
    return 0;
}
{% endhighlight %}

Output

```
Tom 3
Copy constructor!
Tom 3
```
# Con trỏ với class - ```this```

Tất cả các object thuộc class đều có thể truy cập tới giá trị con trỏ bộ nhớ của mình thông qua từ khóa ```this```. Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;

class Cat
{
    public:
        string name;
        int age;

        Cat(string _name, int _age)
        {
            name = _name;
            age = _age;
        }

        void printThis()
        {
            cout << this << '\n';
        }
};

int main()
{
    Cat cat = Cat("Tom", 3);
    cat.printThis();
    Cat secondCat = cat;
    secondCat.printThis();
    return 0;
}
{% endhighlight %}

Hai giá trị được in ra sẽ khác nhau, do hai đối tượng được lưu ở hai vị trí bộ nhớ khác nhau.

Các thao tác đối với con trỏ bộ nhớ trên ```class``` cũng tương tự như với ```struct```.

# Các yếu tố tĩnh (```static```) của class

Giả sử bây giờ ta muốn đếm số lượng object ```Cat``` đã được sử dụng trong chương trình. Ta có thể sử dụng một biến global ```catNumber```, và mỗi khi chạy hàm khởi tạo một object ```Cat``` thì ta tăng ```catNumber``` lên một. Tuy nhiên mỗi khi sử dụng class ```Cat```, ta sẽ lại phải khai báo bên ngoài một biến ```catNumber```, trong khi rõ ràng biến ```catNumber``` này vẫn luôn luôn gắn kèm về mặt ý nghĩa với class ```Cat```. Điều này có thể sinh ra nhiều rắc rồi trong tương lai.

Giải phải là thay vì để ```catNumber``` là một biến global, ta sẽ khai báo ```catNumber``` thành một biến tĩnh - ```static``` - của class. Các yếu tố ```static``` hoàn toàn độc lập với các object của class - cho dù có bao nhiêu object thuộc class trong chương trình, các yếu tố ```static``` sẽ luôn luôn chỉ có một, và có thể truy cập thông qua toán tử ```::``` (toán tử truy cập scope).

{% highlight c++ %}
class Cat
{
    static int catNumber;
}

int Cat::catNumber = 0;
{% endhighlight %}

Các biến ```static``` sẽ được khởi tạo cùng với object đầu tiên được tạo ra của ```class```. Nếu như chưa có object nào được tạo ra, nhưng ta vẫn muốn truy cập vào biến ```static```, ta phải khai báo giá trị của biến ```static``` ở bên ngoài, sử dụng toán tử ```::```.

Tương tự, ta cũng có thể định nghĩa các chương trình con ```static``` độc lập với toàn bộ object của class bằng từ khóa ```static```.

Ví dụ:

{% highlight c++ %}
#include <iostream>

using namespace std;

class Cat
{
    static int catNumber;

    public:
        string name;
        int age;

        Cat(string _name, int _age)
        {
            catNumber ++;
            name = _name;
            age = _age;
        }

        static void printCatNumber()
        {
            cout << catNumber << '\n';
        }
};

int Cat::catNumber = 0;

int main()
{
    Cat cat = Cat("Tom", 3);
    Cat secondCat = Cat("Jerry", 1);
    Cat::printCatNumber();
    return 0;
}
{% endhighlight %}

Output

```
2
```

Một ứng dụng quan trọng của các yếu tố ```static``` là Design Pattern Singleton - thiết kế chương trình đảm bảo chỉ có một object của class tồn tại trong suốt quá trình chạy của chương trình. 

Giả sử ta có một class rất to và nặng, chỉ cần tạo ra một lần trong toàn bộ chương trình (ví dụ như database). Khi đó ta sẽ lưu một object của class đó dưới dạng ```static```, và cho phép gán giá trị của object static này cho các đối tượng thông qua một hàm ```getInstance()``` thay vì phải khởi tạo lại từ đầu.

{% highlight c++ %}
#include <iostream>

using namespace std;

class Cat
{
    private:
        static Cat *instance;

    public:

        static Cat getInstance()
        {
            if (instance == NULL)
                instance = new Cat();
            return *instance;
        }
};

Cat *Cat::instance = NULL;

int main()
{
    Cat cat = Cat::getInstance();
    return 0;
}
{% endhighlight %}
