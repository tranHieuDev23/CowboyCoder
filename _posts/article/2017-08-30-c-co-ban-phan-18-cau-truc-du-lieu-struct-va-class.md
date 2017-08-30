---
title: '[C++ Cơ bản] Phần 18: Cấu trúc dữ liệu - struct và class'
author: Admin Tổng Quản
date: 2017-08-30T16:56:49.228Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 17: Tham chiếu và con trỏ. Tác dụng của con trỏ.](http://cowboycoder.tech/article/c-co-ban-phan-17-tham-chieu-va-con-tro-tac-dung-cua-con-tro)*

Bài toán đặt ra từ bài viết về vòng lặp và mảng, đó là lưu trữ thông tin của cư dân thành phố Hà Nội. Ta có thể thiết kế một vài mảng ```string name[]``` - tên, ```string phoneNumber[]``` - số điện thoại, ```string address[]``` - địa chỉ, vân vân…

Vấn đề phát sinh là khi ta cần gán giá trị của một người người vào một biến, ta sẽ phải thực hiện nhiều dòng lệnh gán

{% highlight c++ %}
name[x] = name[y];
phoneNumber[x] = phoneNumber[y];
address[x] = address[y];
…
{% endhighlight %}

Rất dài và rất dễ gây sai sót trong quá trình viết lệnh. Truyền thông tin của một người vào trong hàm cũng sẽ nảy sinh nhiều phức tạp tương tự.
Phương án để giải quyết vấn đề này là tự định nghĩa một kiểu cấu trúc dữ liệu ```person``` với khả năng

* Lưu trữ các thông tin cá nhân của đối tượng trên biến đó và cho phép truy cập hoặc thay đổi các thông tin.
* Dễ dàng gán giá trị vào các biến như các kiểu dữ liệu thông thường.

Trong C++, chúng ta có hai cách để tự định nghĩa cấu trúc dữ liệu. 

# ```struct```

Để khai báo một kiểu cấu trúc dữ liệu mới với ```struct```, ta sử dụng cú pháp

```
struct tên_của_cấu_trúc
{
   định nghĩa các biến thành phần và hàm của cấu trúc dữ liệu;
} [khai báo biến thuộc cấu trúc dữ liệu này];
```

* Tên của cấu trúc dữ liệu chính là tên của kiểu dữ liệu ta đang tạo ra - giống như ```int```, ```float``` là tên của các kiểu dữ liệu nguyên thủy.
* Định nghĩa các biến thành phần và hàm giống như ta định nghĩa biến và hàm trong chương trình.
* Việc khai báo biến ngay sau khi định nghĩa cấu trúc dữ liệu là không bắt buộc, ta có thể khai báo về sau.

Ví dụ: Để tạo cấu trúc dữ liệu ```person``` như bài toán yêu cầu ở trên

{% highlight c++ %}
struct person
{
    string name, phoneNumber, address;
};
{% endhighlight %}

Sau khi định nghĩa xong kiểu dữ liệu ```person```, ta có thể sử dụng nó như các kiểu dữ liệu thông thường.

{% highlight c++ %}
person peopleOfHanoi[100000];
{% endhighlight %}

# Truy cập vào các biến thành phần của ```struct```

Để truy cập vào các biến thành phần của một dữ liệu kiểu ```struct```, ta sử dụng toán tử ```.```.

Ví dụ minh họa:

{% highlight c++ %}
#include <iostream>

using namespace std;

struct person
{
    string name, phoneNumber, address;
};

int main()
{
    person admin;

    // Gán giá trị vào biến thành phần
    admin.name = "Admin Tong Quan";
    admin.phoneNumber = "113";
    admin.address = "The Internet";

    // In ra giá trị của biến thành phần
    cout << admin.name << '\n';
    cout << admin.phoneNumber << '\n';
    cout << admin.address << '\n';
    return 0;
}
{% endhighlight %}

Output

```
Admin Tong Quan
113
The Internet
```

Chú ý: C++ chỉ hỗ trợ output cho các kiểu dữ liệu nguyên thủy như ```int```, ```float```, ```char```, vân vân… Muốn có thể output ra kiểu dữ liệu tự tạo, ta cần phải tự viết hàm in ra cho mình, không được sử dụng ```cout``` trực tiếp.

# Hàm trong ```struct```

Giả sử ta muốn mỗi đối tượng của cấu trúc dữ liệu có khả năng triển khai một hàm ```printData()``` có khả năng in các giá trị của cấu trúc dữ liệu đó. Ta có thể định nghĩa hàm ở trong ```struct``` như các hàm hay chương trình con bình thường của chương trình.

{% highlight c++ %}
struct people
{
    string name, phoneNumber, address;
    void printAddress()
    {
        cout << name << '\n' << phoneNumber << '\n' << address << '\n';
    }
}
{% endhighlight %}

Khi đó ta chỉ cần truy cập vào hàm ```printAddress()``` của mỗi đối tượng kiểu ```person``` để in ra dữ liệu của ```person``` đó.

{% highlight c++ %}
#include <iostream>

using namespace std;

struct person
{
    string name, phoneNumber, address;

    void printData()
    {
        cout << name << '\n' << phoneNumber << '\n' << address << '\n';
    }
};

int main()
{
    person admin;

    // Gán giá trị vào biến thành phần
    admin.name = "Admin Tong Quan";
    admin.phoneNumber = "113";
    admin.address = "The Internet";

    // In ra giá trị của biến thành phần
    admin.printData();
    return 0;
}
{% endhighlight %}

# Hàm khởi tạo cấu trúc dữ liệu (constructor)

Như trong ví dụ trên, để khởi tạo cả ba giá trị của cấu trúc ```person```, ta cần tới ba lệnh gán giá trị ở bên ngoài. Để thực hiện việc này một cách gọn gàng hơn, ta cần viết hàm khởi tạo cấu trúc dữ liệu.

Hàm khởi tạo cấu trúc dữ liệu có cấu trúc

```
tên_cấu_trúc_dữ_liệu(các tham số)
{
    nội dung;
}
```

Ví dụ: Đối với cấu trúc ```person``` như trên, ta cần khởi tạo giá trị của ```person``` từ ba ```string``` tên, số điện thoại và địa chỉ.

{% highlight c++ %}
#include <iostream>

using namespace std;

struct person
{
    string name, phoneNumber, address;

    person(string _name, string _phoneNumber, string _address)
    {
        name = _name;
        phoneNumber = _phoneNumber;
        address = _address;
    }

    void printData()
    {
        cout << name << '\n' << phoneNumber << '\n' << address << '\n';
    }
};

int main()
{
    person admin = person("Admin Tong Quan", "113", "The Internet");

    // In ra giá trị của biến thành phần
    admin.printData();
    return 0;
}
{% endhighlight %}

Như ở ví dụ trên, ta có thể nhanh chóng khai báo một giá trị ```person``` mới, bằng việc cung cấp 3 giá trị tham số vào hàm khởi tạo.

Nếu như hàm khởi tạo không có tham số, nó sẽ được sử dụng như là hàm khởi tạo mặc định của cấu trúc dữ liệu. Khi ta khai báo

{% highlight c++ %}
person admin;
{% endhighlight %}

Việc khai báo này cũng tương đương việc gọi lệnh

```
person admin = person();
```

# Con trỏ và cấu trúc dữ liệu

Như các cấu trúc dữ liệu khác, cấu trúc dữ liệu định nghĩa bởi ```struct``` cũng được cung cấp cho một ô bộ nhớ, và địa chỉ của ô bộ nhớ này có thể truy cập bằng một biến kiểu con trỏ.

Để truy cập vào các biến và hàm của cấu trúc dữ liệu thông qua con trỏ, ta sử dụng toán tử ```->``` thay vì toán tử ```.```. Ví dụ:

{% highlight c++ %}
person admin = person("Admin Tong Quan", "113", "The Internet");
person *pointer = &admin; // Gán địa chỉ bộ nhớ của admin cho pointer
pointer->printData();
{% endhighlight %}

Hành động này cũng tương tự như việc sử dụng cú pháp

{% highlight c++ %}
(*pointer).printData();
{% endhighlight %}

# Cấp phát bộ nhớ động

Trong các bài viết trước, ta khai báo các biến cần được sử dụng trong chương trình, trước khi bắt đầu chương trình. Điều này xác định số lượng biến có thể được sử dụng trong chương trỉnh.

Trong thực tế, có những lúc ta cần phải yêu cầu thêm biến tùy vào hoàn cảnh của chương trình. Bằng cách sử dụng con trỏ, ta có thể yêu cầu tạo thêm biến mới để sử dụng về sau.

Ví dụ: Ta cần xây dựng một danh sách ```int``` linh động có hai chương trình con sau

* ```put(int x)```: Chèn một giá trị ```x``` vào cuối danh sách.
* ```printAll()```: In ra tất cả các giá trị trong danh sách.

Ta sẽ xây dựng một cấu trúc danh sách móc nối (Linked List) cho bài toán này: Mỗi một phần tử trong danh sách sẽ lưu trữ hai giá trị: ```value``` là giá trị được lưu trữ trong phần tử này, và ```next``` là con trỏ tới phần tử tiếp theo. Đối với phần tử cuối cùng của danh sách, ```next``` sẽ bằng ```NULL```.

{% highlight c++ %}
struct LinkedListItem
{
    int value;
    LinkedListItem *next;
}
{% endhighlight %}

Chú ý một điều: Các biến dạng con trỏ trong cấu trúc dữ liệu không được khởi tạo trước. Mỗi lần gọi một con trỏ thì một biến mới sẽ được tạo ra, và biến mới đó lại có con trỏ mới, tiếp tục tạo thành vòng vô hạn và gây tràn bộ nhớ. Để phòng tránh việc này, ta cần phải viết hàm khởi tạo cho cấu trúc ```LinkedListItem```.

{% highlight c++ %}
LinkedListItem()
{
    value = 0;
    next = NULL;
}
{% endhighlight %}

Khi ta cần phải chèn thêm giá trị mới vào danh sách, ta bắt đầu từ phần tử đầu tiên, và đi theo ```next``` để đi tới phần tử cuối cùng. Tại đây ta cần phải tạo một phần tử ```LinkedListItem``` mới, với giá trị ```value``` bằng giá trị cần chèn, và gán con trỏ của nó cho ```next```.

Để tạo ra một giá trị mới và trả lại con trỏ của nó, ta sử dụng từ khóa ```new```.

{% highlight c++ %}
void put(int x)
{
    if (next != NULL) // Nếu chưa phải phần tử cuối cùng
    {
        next->put(x); // Đẩy việc chèn phần tử cho phần tử tiếp theo
        return;
    }
    next = new LinkedListItem();
    next->value = x;
}
{% endhighlight %}

Để in ra tất cả các giá trị trong danh sách, ta cũng bắt đầu đi từ phần tử đầu tiên, in ra ```value``` của nó, và di chuyển tiếp tới phần tử tiếp theo trong danh sách.

{% highlight c++ %}
void printAll()
{
    cout << value << '\n';
    if (next != NULL)
        next->printAll();
}
{% endhighlight %}

Ok, hai chương trình con cần thiết đã hoàn thành xong, nhưng giờ lại nảy sinh ra vấn đề: Cả hai chương trình này đều yêu cầu có phần tử đầu tiên. Lúc ban đầu chưa có phần tử nào thì ta làm như thế nào?

Giải pháp là ta sử dụng thêm một cấu trúc dữ liệu nữa - ```LinkedList```. Cấu trúc này sẽ lưu trữ con trỏ của phần tử đầu tiên - ```NULL``` nếu chưa có phần tử nào. Khi ta cần chèn vào một phần tử, ta sẽ kiểm tra xem phần tử đầu tiên đã có chưa. Nếu chưa có, ta thực hiện gán giá trị cho phần tử đầu tiên. Nếu có rồi, ta sử dụng hàm ```put()``` của phần tử này. Tương tự với việc in các phần tử vậy.

{% highlight c++ %}
struct LinkedList
{
    LinkedListItem *firstItem;
    LinkedList()
    {
        firstItem = NULL;
    }

    void put(int x)
    {
        if (firstItem == NULL)
        {
            firstItem = new LinkedListItem();
            firstItem->value = x;
        }
        else
            firstItem->put(x);
    }

    void printAll()
    {
        if (firstItem != NULL)
            firstItem->printAll();
    }
};
{% endhighlight %}

Vậy là cấu trúc ```LinkedList``` đã được hoàn thành và có thể đem vào sử dụng

{% highlight c++ %}
#include <iostream>

using namespace std;

struct LinkedListItem
{
    int value;
    LinkedListItem *next;

    LinkedListItem()
    {
        value = 0;
        next = NULL;
    }

    void put(int x)
    {
        if (next != NULL) // Nếu chưa phải phần tử cuối cùng
        {
            next->put(x); // Đẩy việc chèn phần tử cho phần tử tiếp theo
            return;
        }
        next = new LinkedListItem();
        next->value = x;
    }

    void printAll()
    {
        cout << value << '\n';
        if (next != NULL)
            next->printAll();
    }
};

struct LinkedList
{
    LinkedListItem *firstItem;

    LinkedList()
    {
        firstItem = NULL;
    }

    void put(int x)
    {
        if (firstItem == NULL)
        {
            firstItem = new LinkedListItem();
            firstItem->value = x;
        }
        else
            firstItem->put(x);
    }

    void printAll()
    {
        if (firstItem != NULL)
            firstItem->printAll();
    }
};

int main()
{
    LinkedList list;
    list.put(1);
    list.put(2);
    list.printAll();
    list.put(5);
    list.printAll();
    return 0;
}
{% endhighlight %}

Output

```
1
2
1
2
5
```

# Class

Để khai báo cấu trúc với ```class```, ta sử dụng cú pháp

```
class tên_của_class
{
    định nghĩa các biến và hàm của class;
} [Khai báo một số biến kiểu class này];
```

Nó có khác gì so với ```struct```?

![undefined](/img/uploads/cpp-cơ-bản-18-1.gif)
 
Thật ra là có, ở một số điểm sau:
* Quyền truy cập các biến và hàm của ```struct``` mặc định là ```public``` - tất cả mọi thứ đều có thể truy cập được. Của ```class``` là ```private``` - giới hạn trong nội bộ ```class```. Điều này có ý nghĩa gì, ta sẽ học trong các bài sau.
* Về mặt ngữ nghĩa của mã nguồn: ```struct``` thường được gắn liền với các kiểu dữ liệu [Plain Old Data (POD)](https://en.wikipedia.org/wiki/Passive_data_structure) - kiểu dữ liệu chỉ bao gồm các biến dữ liệu được gom lại trong cùng một cấu trúc. Trong khi đó ```class``` được gắn liền với việc lập trình hướng đối tượng và các kiểu dữ liệu phức tạp hơn, có bao gồm các hàm và chương trình con trong đó.

```class``` cũng có hàm bên trong cấu trúc dữ liệu, con trỏ, cấp phát bộ nhớ động, tất cả mọi thứ mà ```struct``` có. Các template trong thư viện STL của C++ được triển khai như là các class. Class cũng là thuật ngữ trong lập trình hướng đối tượng.

Do đó, ở trong các bài viết sau về Lập trình hướng đối tượng với C++, chúng ta sẽ đi sâu hơn về class, và sử dụng ```class``` cho mọi trường hợp thay vì ```struct```.

