---
title: Phép nhân Ấn Độ và phép tính lũy thừa
author: Phương Nguyễn
date: 2017-08-04T17:06:51.544Z
thumbnail: /img/uploads/Phép nhân Ấn Độ và phép tính lũy thừa.jpg
tags:
  - algorithm
  - math
---
Cho một bài toán đơn giản sau: Tính giá trị của \[(3 * 10 ^ 9) * (3 * 10 ^ 9)\], lấy mod \[10 ^ 9\]. Ta có thể nhanh chóng tính ra kết quả của phép toán này bằng việc mod cả hai giá trị cho \[10 ^ 9\], rồi sau đó nhân chúng lại với nhau và mod lại thêm lần nữa.

Nhưng nếu giá trị lấy mod là \[10 ^ 18\] thì sao? Khi đó phép nhân của hai thừa số sẽ vượt quá khả năng biểu diễn của kiểu số nguyên 64 bit, phép toán sẽ sai hoàn toàn. Phương pháp nhân Ấn Độ sẽ được dùng để giải quyết những trường hợp như vậy.

# Phép nhân Ấn Độ

Thuật toán đơn giản như sau: để tính \[a * b\] ta sẽ tính

* \[ a * \frac{b}{2} + a * \frac{b}{2} \] nếu b chẵn
* \[ a * \frac{b}{2} + a * \frac{b}{2} + a \] nếu b lẻ 

Có rất nhiều cách code. Dưới đây là một cách viết đệ quy:

{% highlight c++ %}
//C++
long long nhan(long long a,long long b)
{
    if (b == 0) 
        return 0;
    long long t = nhan(a, b / 2);     	
    t = (t + t) % mod; 
    if (b % 2 == 1) 
        t = (t + a) % mod;
} 
{% endhighlight %}

Khi đó, để tính giá trị /[a * b/] ta chỉ cần gọi hàm ```nhan(a, b)```.

## Đánh giá độ phức tạp

Do sau mỗi lần gọi hàm ```nhan```, giá trị của b bị giảm đi một nửa, nên thuật toán chỉ mất thời gian /[O(log2(b))/].

# Phép tính lũy thừa

Bằng việc sửa đổi code, phương pháp này có thể được áp dụng để giải một bài toán tương tự, đó là tìm số mũ cực lớn của một số cho trước.

Để tính \[a ^ b\] ta sẽ tính

* \[ a ^ \frac{b}{2} * a ^ \frac{b}{2} \] nếu b chẵn
* \[ a ^ \frac{b}{2} * a ^ \frac{b}{2} * a \] nếu b lẻ 

{% highlight c++ %}
//C++
long long mu(long long a,long long b)
{
    if (b == 0) 
        return 0;
    long long t = mu(a, b / 2);     	
    t = (t * t) % mod; 
    if (b % 2 == 1) 
        t = (t * a) % mod;
} 
{% endhighlight %}

Độ phức tạp của thuật toán này cũng chỉ là /[O(log2(b))/]. Chú ý nếu lấy số mod lớn thì phải áp dụng nhân Ấn Độ thay vì phép nhân thông thường, độ phức tạp sẽ trở thành /[O(log2(b) ^ 2)/].

