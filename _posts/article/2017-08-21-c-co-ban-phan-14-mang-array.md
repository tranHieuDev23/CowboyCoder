---
title: '[C++ Cơ bản] Phần 14: Mảng - Array'
author: Admin Tổng Quản
date: 2017-08-22T14:25:31.000Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
Trong phần trước, chúng ta đã đặt ra bài toán Lưu trữ thông tin cá nhân của người dân thành phố Hà Nội, và đúc kết ra rằng phải sử dụng các vòng lặp mới có thể duyệt qua và xử lý hết số lượng thông tin như vậy.

Tương tự, ta cũng không thể tự tay tạo ra từng biến để lưu trữ thông tin của người dân Hà Nội được - ta sẽ phải tạo tới hơn 7 triệu biến, ai có tưng đấy thời gian cơ chứ? Bài viết này sẽ đề cập tới mảng - một cách để khai báo nhiều biến có cùng kiểu giá trị.

# Định nghĩa mảng

Mảng (array) là một cấu trúc dữ liệu có kích cỡ cố định, dùng để lưu trữ nhiều đối tượng có cùng kiểu dữ liệu. Thay vì phải tạo ra từng biến ```person1```, ```person2```, ```person3```, vân vân, ta chỉ cần tạo ra một mảng ```people``` và truy cập vào từng phần tử ```people[0]```, ```people[1]```, ```people[2]```,…

Các biến trong array được lưu trữ tại các địa chỉ ô nhớ liên tiếp - phần tử đầu tiên ở vị trí đầu tiên, phần tử thứ hai ở vị trí thứ hai,… Thông tin này sẽ có ích khi ta học tới con trỏ bộ nhớ, còn giờ tạm thời hãy ghi nhớ lại điều đó đã.

# Khai báo mảng

Việc khai báo mảng cũng giống như việc khai báo biến, tuy nhiên ta cần phải cung cấp thêm kích cỡ các chiều (số lượng phần tử) của mảng vào trong ngoặc vuông đặt sau tên mảng.

Ví dụ:

{% highlight c++ %}
int array1[100];
int x, array2[100]; /* có thể khai báo mảng cùng với các biến khác /*
int arrayTwoD[100][100]; /* mảng hai chiều */

{% endhighlight %}

Chiều của mảng là gì? Ta có thể hình dung mảng nhiều chiều là mảng chứa các mảng - mảng hai chiều là mảng với các phần tử là mảng 1 chiều, mảng 3 chiều là mảng với các phần tử là mảng 2 chiều, vân vân… Ví dụ thực tế của mảng nhiều chiều là một bảng dữ liệu, bao gồm các hàng và cột giống như mảng hai chiều.

# Truy cập vào phần tử của mảng

Để có thể truy cập vào phần tử của mảng, ta gọi tên của mảng kèm theo với chỉ số nằm trong ngoặc nhọn đặt sau tên của mảng.

Ví dụ

{% highlight c++ %}
array1[0] = 0; /* đặt phần tử đầu tiên của mảng array1 bằng 0 */
array2[4] ++; /* tăng phần tử thứ 5 của mảng array2 lên 1 */
cout << arrayTwoD[2][3]; /* in ra phần tử ở ví trí (2, 3) của mảng hai chiều arrayTwoD */

{% endhighlight %}

Chỉ số của các phần tử trong mảng bắt đầu từ số 0 - một mảng có ```n``` phần tử sẽ có các chỉ số 0, 1, 2,… tới ```n - 1```. Để thuận tiện hơn, ta sẽ hình dung chỉ số của phần tử là số phần tử nằm giữa phần tử đó, với phần tử đầu tiên.

# Khởi tạo giá trị cho phần tử của mảng

Khi khai báo mảng, các phần tử của mảng chưa được khởi tạo giá trị.

Để khai báo mảng với giá trị khởi tạo cho các phần tử, ta gán mảng bằng các giá trị khởi tạo trong ngoặc nhọn, phân cách bởi dấu phẩy. Ví dụ

{% highlight c++ %}
double arr[5] = {1, 2.0, 3.0, 3.14, 2.23};
{% endhighlight %}

Ta cũng có thể khai báo mảng mà không có số lượng phần tử, nếu như ta đã khởi tạo giá trị cho các phần tử trong mảng. Khi đó số lượng phần tử của mảng sẽ bằng số lượng giá trị đã được khởi tạo.

{% highlight c++ %}
double arr[] = {1, 2.0, 3.0, 3.14, 2.23}; /* mảng có 5 phần tử */

{% endhighlight %}

Để khởi tạo giá trị cho mảng nhiều chiều, ta cũng đặt mảng giá trị khởi tạo của các phần tử trong ngoặc nhọn. Ví dụ về việc khởi tạo mảng 2 chiều:

{% highlight c++ %}
int arr[][] = {
{1, 2, 3},
{2, 3, 4}
};
{% endhighlight %}

# Bài tập áp dụng: Quy hoạch động

Quy hoạch động (Dynamic Programming, gọi tắt là DP) là một phương pháp giải quyết các vấn đề trong toán học, tin học và kinh tế, bằng cách chia nhỏ vấn đề ra và tính toán các kết quả của trường hợp lớn hơn bằng kết quả của các trường hợp nhỏ hơn. Mảng là một công cụ đắc lực để giải các bài toán DP, và ta sẽ áp dụng nó ở trong ví dụ kế tiếp.

*Các bạn cũng có thể tìm kiếm các bài toán quy hoạch động khác thông qua tag [dp](http://cowboycoder.tech/tags/dp) trên trang Cowboy Coder.*

## Đề bài

Cho một dãy số nguyên \\(A\\) có \\(n\\) phần tử (\\(n <= 1000\\)). Hãy tìm số lượng phần tử lớn nhất trên dãy \\(A\\), sao cho khi giữ nguyên thứ tự của các phần tử này như trên dãy số gốc, thì phần tử sau lớn hơn phần tử trước. Các phần tử không nhất thiết phải kề nhau.

Bài toán này còn được gọi là bài toán dãy con tăng dài nhất (Longest Increasing Subsequence - LIS)

**Input**

Đọc từ file ```INPUT.TXT```. Dòng đầu tiên của file là một số \\(n\\) - số lượng phần tử của dãy số \\(A\\).
Dòng tiếp theo có \\(n\\) số nguyên là các phần tử của dãy số \\(A\\).
\\(n \le 10 ^ 3 \\), các số thuộc dãy \\(A\\) thuộc kiểu ```int```.

**Output**

Viết ra file ```OUTPUT.TXT``` một số nguyên duy nhất là số lượng phần tử lớn nhất tìm được.

**Ví dụ**

```
INPUT.TXT
5
1 3 2 4 5
```

```
OUTPUT.TXT
4
```

## Cách giải

Ta định nghĩa hàm số \\( f(i) \\) là số lượng phần tử lớn nhất có thể lựa chọn được, nếu ta lấy phần tử thứ \\( i \\) là phần tử cuối cùng được chọn. Kết quả của bài toán sẽ là giá trị lớn nhất của các \\( f(x) \\) từ 1 tới n.

Khi ta lấy phần tử thứ \\( x \\) làm phần tử cuối cùng, có hai trường hợp xảy ra
* Nếu chỉ có phần tử \\(x\\) được chọn, độ dài của dãy sẽ là 1
* Nếu như có phần tử \\(y\\) được chọn ở vị trí áp chót trước phần tử \\(x\\), độ dài của dãy \\(x\\) sẽ bằng \\(f(y) + 1\\) (do có thêm phần tử \\(x\\))

Vậy với mỗi phần tử \\( x \\), ta đặt \\( f(x) = 1 \\), và duyệt qua các phần tử \\( i \\) từ 1 tới \\( x - 1 \\). Nếu \\( a[i] < a[x] \\) và \\( f(i) + 1 > f(x) \\), ta cập nhật giá trị của \\( f(x) \\) bằng giá trị mới.

{% highlight c++ %}
f[x] = 1;
for (int i = 1; i < x; i ++)
        if (a[i] < a[x] && f[i] + 1 > f[x])
            f[x] = f[i] + 1;
{% endhighlight %}

## Code mẫu

{% highlight c++ %}
#include <iostream>
#include <fstream>

using namespace std;
int n, a[1003], f[1003], answer = 0;

int main()
{
    // Mở file input và output
    ifstream input; input.open("INPUT.TXT");
    ofstream output; output.open("OUTPUT.TXT");

    // Đọc vào dữ liệu đề bài
    input >> n;
    for (int i = 1; i <= n; i ++)
        input >> a[i];

    // Tính toán mảng f[]
    for (int x = 1; x <= n; x ++)
    {
        f[x] = 1;
        for (int i = 1; i < x; i ++)
            if (a[i] < a[x] && f[i] + 1 > f[x])
                f[x] = f[i] + 1;

        // Nếu như f[x] lớn hơn đáp án, ta cập nhật đáp án
        if (f[x] > answer)
            answer = f[x];
    }

    // In ra đáp án
    output << answer;
    return 0;
}
{% endhighlight %}

Bài toán này còn có cách giải nhanh hơn, nhưng trong khuôn khổ của bài viết này, chúng ta sẽ chỉ tìm hiểu cách làm này.





