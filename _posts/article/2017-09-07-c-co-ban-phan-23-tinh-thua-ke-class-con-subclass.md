---
title: '[C++ Cơ bản] Phần 23: Tính thừa kế - Class con (subclass)'
author: Admin Tổng Quản
date: 2017-09-07T12:47:07.599Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 22: Class và Object](http://cowboycoder.tech/article/c-co-ban-phan-22-class-va-object)*

Tính thừa kết giúp chúng ta tiết kiệm công sức viết code, bằng cách để cho các class con (subclass) thừa hưởng các tính chất của class cha (superclass). Trong bài viết này chúng ta sẽ tìm hiểu về cách triển khai tính thừa kế trong C++.

# Định nghĩa subclass

Để định nghĩa subclass, ta sử dụng cú pháp

```
class tên_class: kiểu_thừa_kế_1 tên_superclass_1, kiểu_thừa_kế_2 tên superclass_2,…
{
    nội dung;
}
```

Trong đó kiểu thừa kế có thể là ```public```, ```protected```, hoặc ```private```.

Ví dụ: Chương trình sau có 2 class ```Animal``` và ```Cat```, trong đó ```Cat``` là subclass của ```Animal```, do đó ```Cat``` thừa hưởng hai biến ```type``` và ```area``` của ```Animal```.

{% highlight c++ %}
#include <iostream>

using namespace std;

class Animal
{
    protected:
        string type, area;
};

class Cat: public Animal
{
    private:
        string name;
        int age;

    public:

        string getType()
        {
            return type;
        }

        void setType(string _type)
        {
            type = _type;
        }
};

int main()
{
    Cat cat;
    cat.setType("Cat");
    cout << cat.getType();
    return 0;
}
{% endhighlight %}

Output

```
Cat
```

Sau khi định nghĩa subclass xong, ta lại có thể tiếp tục định nghĩa subclass của nó nữa. Ví dụ như class ```MeoTamThe``` sau đây là subclass của ```Cat```.

{% highlight c++ %}
class MeoTamThe: public Cat
{
    public:
        string color[3];
};
{% endhighlight %}

Một object khi thuộc về một class thì cũng sẽ thuộc về tất cả các superclass của class đó. Để dễ hình dung thì "Nếu đây là một con mèo, thì đây cũng là một con động vật".

```
Animal cat = Cat();
```

![undefined](/img/uploads/cpp-cơ-bản-22-1.jpg)
 
# Quyền truy cập

Subclass có quyền truy cập tới tất cả các yếu tố ```public``` và ```protected``` của superclass.

# Quyền thừa kế

Quyền truy cập của các yếu tố mà subclass được thừa kế sẽ phụ thuộc vào kiểu thừa kế của subclass đối với superclass.

* Nếu kiểu thừa kế là ```public```, tất cả các yếu tố ```public``` và ```protected``` của superclass sẽ giữ nguyên quyền truy cập khi thừa kế xuống subclass.
* Nếu kiểu thừa kế là ```protected```, tất cả các yếu tố ```public``` và ```protected``` của superclass sẽ trở thành ```protected``` của subclass.
* Nếu kiểu thừa kế là ```private```, tất cả các yếu tố ```public``` và ```protected``` của superclass sẽ trở thành ```private``` của subclass.

Kiểu thừa kế giống như là việc co gọn quyền truy cập khi xuống tới subclass vậy.

Subclass sẽ không được thừa hưởng các yếu tố sau:

* constructor, destructor và copy constructor của superclass.
* Các toán tử đã bị viết đè (overload) ở class cha. Ta sẽ nghiên cứu thêm về overload trong bài viết tiếp theo.

# Thừa kế từ nhiều class

Một class trong C++ có thể được thừa kế từ nhiều superclass, chỉ cần liệt kê danh sách các class thừa kế ở trong định nghĩa của nó.

Ví dụ ở trong chương trình sau, class ```MyClass``` được thừa kế từ hai class ```SuperClassOne``` và ```SuperClassTwo```, nên có thể sử dụng được hai biến ```intOne``` và ```intTwo```.

{% highlight c++ %}
#include <iostream>

using namespace std;

class SuperClassOne
{
    protected:
        int intOne;
};

class SuperClassTwo
{
    protected:
        int intTwo;
};

class MyClass: public SuperClassOne, public SuperClassTwo
{
    public:
        MyClass(int _intOne, int _intTwo)
        {
            intOne = _intOne;
            intTwo = _intTwo;
        }

        int getSum()
        {
            return intOne + intTwo;
        }
};

int main()
{
    MyClass myObject = MyClass(1, 1);
    cout << myObject.getSum();
    return 0;
}
{% endhighlight %}

Output

```
2
```

*Phần sau: [\[C++ Cơ bản\] Phần 24: Overload - Viết đè chương trình con và toán tử](http://cowboycoder.tech/article/c-co-ban-phan-24-overload-viet-de-chuong-trinh-con-va-toan-tu)*

