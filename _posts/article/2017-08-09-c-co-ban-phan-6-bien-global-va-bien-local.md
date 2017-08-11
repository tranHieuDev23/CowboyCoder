---
title: '[C++ Cơ bản] Phần 6: Biến global và biến local'
author: Admin Tổng Quản
date: 2017-08-09T08:44:32.613Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 5: Biến và kiểu dữ liệu](http://cowboycoder.tech/article/c-co-ban-phan-5-bien-va-kieu-du-lieu)*

Ta định nghĩa scope (phạm vi) là các khu vực của một chương trình. Các biến của chương trình C++ có thể được định nghĩa tại 3 vị trí: 

* Bên trong một khối lệnh (ví dụ như hàm ```int main()``` của chương trình). Các biến như vậy được gọi là biến local (local variable, nhiều tài liệu sẽ dịch là biến địa phương).
* Trong phần định nghĩa của một hàm. Các biến như vậy được gọi là tham số của hàm đó (parameter).
* Ở bên ngoài tất cả các hàm. Các biến như vậy được gọi là biến global (global variable, nhiều tài liệu sẽ dịch là biến toàn cục).

Hàm, chương trình con và tham số của hàm sẽ được trình bày trong một bài viết khác. Trọng tâm của bài viết này là về biến global và local.

# Biến local

Biến local được định nghĩa trong một khối lệnh, và chỉ tồn tại bên trong khối lệnh đó. Khi khối lệnh được thực hiện xong thì biến local cũng sẽ biến mất. Biến local cũng không thể truy cập được từ bên ngoài khối lệnh của nó.

Ví dụ: Biến x ở đoạn code sau là biến local của hàm int main()

{% highlight c++ %}
#include <iostream>
using namespace std;
 
int main () {
   int x = 10;
   cout << x;
   return 0;
}
{% endhighlight %}

# Biến global

Biến global được định nghĩa bên ngoài các khối lệnh. Biến global có thể được định nghĩa ở bất cứ vị trí nào trong chương trình (tất nhiên, bên ngoài khối lệnh), tuy nhiên thường ta quy chuẩn đặt chúng ở đầu chương trình. Chúng sẽ giữ nguyên giá trị của mình trong suốt quá trình chạy của chương trình, và tất cả các hàm hay chương trình con của chương trình đều có thể truy cập vào chúng.

Ví dụ: Biến x trong đoạn code sau là biến global

{% highlight c++ %}
#include <iostream>
using namespace std;

int x = 10;
 
int main () {
   cout << x;
   return 0;
}
{% endhighlight %}

Trong một chương trình, ta có thể khai báo những biến local và global trùng tên nhau. Khi ta truy cập vào tên của chúng, biến local sẽ được sử dụng trong hàm mà nó được định nghĩa.

Ví dụ: Trong đoạn code sau, chương trình sẽ in ra giá trị của biến local

{% highlight c++ %}
#include <iostream>
using namespace std;

int x = 10;
 
int main () {
   int x = 20;
   cout << x;
   return 0;
}
{% endhighlight %}

Output:
```
20
```

# Giá trị mặc định của các biến
Khi một biến local được khởi tạo, chương trình C++ sẽ lấy một ô nhớ bất kỳ của hệ thống để dành cho nó. Điều này dẫn tới việc biến local không có giá trị mặc định cụ thể, và ta bắt buộc phải tự tay đặt giá trị cho chúng.

Khi một biến global được khởi tạo, tất cả các bit biểu diễn của nó sẽ có giá trị bằng 0. Điều này có nghĩa là:

* Các kiểu biến số có giá trị đều bằng 0
* Các kiểu chữ cái sẽ có giá trị đều bằng kí tự ```'\0'``` (kí tự null)
* Các con trỏ đều có địa chỉ NULL (sẽ nói trong các bài sau)
* Vân vân…

Tuy nhiên, việc khởi tạo các biến một cách hợp lệ vẫn là một điều nên làm, để tránh việc các tác nhân bên ngoài (ví dụ: một bộ dịch không theo quy chuẩn này) có thể làm ảnh hưởng tới chương trình.

*Phần sau: [[C++ Cơ bản] Phần 7: Input - Output](http://cowboycoder.tech/article/c-co-ban-phan-6-input-output)*

