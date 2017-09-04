---
title: >-
  [C++ Cơ bản] Phần 20: Bài thực hành tổng hợp - Chương trình quản lý học sinh
  (tiếp)
author: Admin Tổng Quản
date: 2017-09-05T00:00:18.000Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
  - cpp-cơ-bản
---
*Phần trước: [\[C++ Cơ bản\] Phần 19: Bài thực hành tổng hợp - Chương trình quản lý học sinh](http://cowboycoder.tech/article/c-co-ban-phan-19-bai-thuc-hanh-tong-hop-chuong-trinh-quan-ly-hoc-sinh)*

Ở trong bài trước, chúng ta đã hoàn thành các chức năng tạo file mới, mở file cũ và thêm - sửa - xóa thông tin của học sinh. Trong bài viết này chúng ta sẽ hoàn thành các chức năng còn lại là liệt kê toàn bộ học sinh, lọc học sinh theo thông tin và lưu dữ liệu vào file.

# Liệt kê toàn bộ học sinh

Ta sẽ thống nhất sử dụng một mẫu output chung cho thông tin học sinh, bao gồm 5 dòng:
* Dòng đầu tiên là mã số học sinh, chính là chỉ số phần tử của học sinh đó trong mảng
* Dòng thứ hai là tên, lớp và địa chỉ của học sinh
* 3 dòng tiếp theo là điểm số 3 môn của học sinh

![undefined](/img/uploads/cpp-cơ-bản-20-1.jpg)
 
Và tất nhiên, vì ta phải in thông tin học sinh ra nhiều lần, sẽ tiện lợi hơn nếu ta viết một hàm ```printStudentInfo(int id)``` để in thông tin của học sinh ở chỉ số ```id```.

{% highlight c++ %}
void printStudentInfo(int id)
{
    cout
    << "Ma so hoc sinh: " << id << '\n'
    << allStudent[id].name << ", hoc sinh lop " << allStudent[id].inClass << ", song tai " << allStudent[id].address
    << '\n'
    << "Diem mon Toan: " << allStudent[id].math
    << '\n'
    << "Diem mon Van: " << allStudent[id].literature
    << '\n'
    << "Diem mon Anh: " << allStudent[id].english
    << '\n';
}
{% endhighlight %}

Bây giờ để in tất cả học sinh trong danh sách ra, ta chỉ cần duyệt các phần tử từ 1 tới ```number```, và gọi hàm ```printStudentInfo()``` thôi.

{% highlight c++ %}
void printAllStudent()
{
    for (int i = 1; i <= number; i ++)
        printStudentInfo(i);
}
{% endhighlight %}

# Lọc học sinh theo thông tin

Đều đầu tiên khi lọc học sinh theo thông tin là phải hỏi người dùng muốn dùng thông tin nào để lọc ra.

![undefined](/img/uploads/cpp-cơ-bản-20-2.jpg)

{% highlight c++ %} 
void searchStudent()
{
    cout << "Ban muon tim kiem hoc sinh theo thong tin nao?\n";
    cout << "1: Ten\n";
    cout << "2: Lop\n";
    cout << "3: Dia chi\n";
    cout << "4: Diem Toan\n";
    cout << "5: Diem Van\n";
    cout << "6: Diem Anh\n";
    int byWhat = getIntRange(1, 6);
{% endhighlight %}

Ok, giờ nảy sinh ra một vấn đề như thế này: 3 thông tin đầu tiên sẽ là dữ liệu kiểu ```string```, trong khi ba thông tin sau là dữ liệu kiểu ```double```. Đối với dữ liệu kiểu số, ta còn phải hỗ trợ khả năng tìm kiếm các học sinh có giá trị lớn hơn, nhỏ hơn, vân vân… chứ không chỉ là các học sinh có điểm số bằng một mức nào đó. Ta sẽ viết riêng việc tìm kiếm theo các giá trị ```string``` và việc tìm kiếm các giá trị số thành hai chương trình con riêng - ```searchStudentByString()``` và ```searchStudentByScore()```.

Đối với việc tìm kiếm học sinh theo ```string```, ta chỉ cần đọc vào một giá trị tìm kiếm ```data``` nữa.

{% highlight c++ %}
    if (byWhat <= 3) // Ba thông tin kiểu string
    {
        cout << "Nhap gia tri can tim: ";
        string data; getline(cin, data); getline(cin, data);
        searchStudentByString(byWhat, data);
    }
{% endhighlight %}

Đối với việc tìm kiếm học sinh theo điểm số, ngoài giá trị so sánh ```data```, ta còn phải đọc thêm một giá trị ```compare```, là lựa chọn của người dùng về phép so sánh.

![undefined](/img/uploads/cpp-cơ-bản-20-3.jpg)

{% highlight c++ %}
    else // Ba thông tin kiểu số
    {
        cout << "Nhap gia tri can tim: ";
        double data; cin >> data;

        cout << "Ban muon so sanh nhu the nao?\n";
        cout << "1: =\n";
        cout << "2: >\n";
        cout << "3: <\n";
        cout << "4: >=\n";
        cout << "5: <=\n";
        int compare = getIntRange(1, 5);

        searchStudentByScore(byWhat, data, compare);
    }
}
{% endhighlight %}

Toàn bộ nội dung của hàm ```searchStudent()``` như sau

{% highlight c++ %}
void searchStudent()
{
    cout << "Ban muon tim kiem hoc sinh theo thong tin nao?\n";
    cout << "1: Ten\n";
    cout << "2: Lop\n";
    cout << "3: Dia chi\n";
    cout << "4: Diem Toan\n";
    cout << "5: Diem Van\n";
    cout << "6: Diem Anh\n";
    int byWhat = getIntRange(1, 6);

    if (byWhat <= 3) // Ba thông tin kiểu string
    {
        cout << "Nhap gia tri can tim: ";
        string data; getline(cin, data); getline(cin, data);
        searchStudentByString(byWhat, data);
    }
    else // Ba thông tin kiểu số
    {
        cout << "Nhap gia tri can tim: ";
        double data; cin >> data;

        cout << "Ban muon so sanh nhu the nao?\n";
        cout << "1: =\n";
        cout << "2: >\n";
        cout << "3: <\n";
        cout << "4: >=\n";
        cout << "5: <=\n";
        int compare = getIntRange(1, 5);

        searchStudentByScore(byWhat, data, compare);
    }
}
{% endhighlight %}

## Tìm kiếm học sinh theo ```string```

Việc tìm kiếm học sinh theo ```string``` khá là đơn giản - ta chỉ cần duyệt qua tất cả học sinh, lấy giá trị phù hợp theo yêu cầu ```byWhat``` được đưa ra, và so sánh với giá trị yêu cầu ```value```.  Nếu bằng nhau, ta in ra thông tin của học sinh.

{% highlight c++ %}
void searchStudentByString(int byWhat, string value)
{
    for (int i = 1; i <= number; i ++)
    {
        // Lấy dữ liệu phù hợp
        string data;
        switch(byWhat)
        {
            case 1: // Tìm theo tên
                data = allStudent[i].name;
                break;
            case 2: // Tìm theo lớp
                data = allStudent[i].inClass;
                break;
            case 3: // Tìm theo địa chỉ
                data = allStudent[i].address;
                break;
        }

        // So sánh với yêu cầu
        if (data == value)
            printStudentInfo(i);
    }
}
{% endhighlight %}

## Tìm kiếm học sinh theo điểm số

Việc tìm kiếm học sinh theo điểm số về cơ bản là giống với tìm kiếm bằng ```string```, nhưng ta cần thêm một bước trung gian là thực hiện phép so sánh phù hợp với giá trị ```compare``` nhập vào. Ta sẽ đặt biến ```bool check``` là kết quả của việc kiểm tra, và nếu ```check``` bằng ```true```, ta in ra thông tin của học sinh.

{% highlight c++ %}
void searchStudentByScore(int byWhat, double value, int compare)
{
    for (int i = 1; i <= number; i ++)
    {
        // Lấy dữ liệu phù hợp
        double data;
        switch(byWhat)
        {
            case 4: // Tìm theo điểm môn Toán
                data = allStudent[i].math;
                break;
            case 5: // Tìm theo điểm môn Văn
                data = allStudent[i].literature;
                break;
            case 6: // Tìm theo điểm môn Anh
                data = allStudent[i].english;
                break;
        }

        bool check;

        // So sánh phù hợp với phép toán
        switch (compare)
        {
            case 1: // =
                check = (data == value);
                break;
            case 2: // >
                check = (data > value);
                break;
            case 3: // <
                check = (data < value);
                break;
            case 4: // >=
                check = (data >= value);
                break;
            case 5: // <=
                check = (data <= value);
                break;
        }

        // Kiểm tra kết quả
        if (check)
            printStudentInfo(i);
    }
}
{% endhighlight %}

# Lưu thông tin học sinh vào file

Như đã nói ở bài trước, việc lưu thông tin vào file có thể được lưu vào file đang được mở ra, hoặc lưu vào file mới. Do đó trước khi bắt đầu lưu, ta cần kiểm tra xem hiện tại đang có file mở ra hay không, và nếu có thì phải hỏi ý kiến người dùng trước khi lưu.

![undefined](/img/uploads/cpp-cơ-bản-20-4.jpg)
 
{% highlight c++ %}
void saveFile()
{
    if (strcmp(currentFile, "") != 0) // Nếu như có file hiện tại đang được mở
    {
        cout << "Ban muon luu vao file cu, hay tao file moi?\n";
        cout << "1: File cu\n";
        cout << "2: File moi\n";
        int input = getIntRange(1, 2);
        if (input == 2)
        {
            cout << "Hay nhap ten file ban muon tao moi: ";
            cin >> currentFile;
        }
    }
{% endhighlight %}

Nếu như không có file nào được mở cả, thì ta chỉ đơn giản hỏi người dùng tên của file muốn lưu ra.

{% highlight c++ %}
    else
    {
        cout << "Hay nhap ten file ban muon tao moi: ";
        cin >> currentFile;
    }
{% endhighlight %}

Ok, giờ file mục tiêu đã có, việc còn lại là viết các thông tin ra theo đúng tiêu chuẩn đã quy định ở bài trước. Nhớ phải mã hóa các dấu cách như đã quy định bằng hàm ```encode()``` ở bài trước nhé.

{% highlight c++ %}
    // Mở file
    ofstream output;
    output.open(currentFile);

    // Viết ra file phù hợp với tiêu chuẩn
    output << number << '\n';

    for (int i = 1; i <= number; i ++)
    {
        output << encode(allStudent[i].name) << '\n';
        output << encode(allStudent[i].inClass) << '\n';
        output << encode(allStudent[i].address) << '\n';
        output << allStudent[i].math << '\n';
        output << allStudent[i].literature << '\n';
        output << allStudent[i].english << '\n';
    }

    // Đóng file
    output.close();
}
{% endhighlight %}

Toàn bộ nội dung của chương trình con ```saveFile()``` như sau

{% highlight c++ %}
void saveFile()
{
    if (strcmp(currentFile, "") != 0) // Nếu như có file hiện tại đang được mở
    {
        cout << "Ban muon luu vao file cu, hay tao file moi?\n";
        cout << "1: File cu\n";
        cout << "2: File moi\n";
        int input = getIntRange(1, 2);
        if (input == 2)
        {
            cout << "Hay nhap ten file ban muon tao moi: ";
            cin >> currentFile;
        }
    }
    else
    {
        cout << "Hay nhap ten file ban muon tao moi: ";
        cin >> currentFile;
    }

    // Mở file
    ofstream output;
    output.open(currentFile);

    // Viết ra file phù hợp với tiêu chuẩn
    output << number << '\n';

    for (int i = 1; i <= number; i ++)
    {
        output << encode(allStudent[i].name) << '\n';
        output << encode(allStudent[i].inClass) << '\n';
        output << encode(allStudent[i].address) << '\n';
        output << allStudent[i].math << '\n';
        output << allStudent[i].literature << '\n';
        output << allStudent[i].english << '\n';
    }

    // Đóng file
    output.close();
}
{% endhighlight %}

# Đóng file hiện tại và kết thúc chương trình

Chức năng cuối cùng ta phải làm cho chương trình, đó là đóng file hiện tại lại và chuyển về trạng thái ban đầu (```isEditing``` bằng ```false```). 

Phép lịch sự tối thiểu bao giờ cũng phải là hỏi người dùng có muốn lưu trữ file hiện tại không, phòng ngừa việc ấn nhấm mà tắt đi không lưu lại.

{% highlight c++ %}
void exitFile()
{
    cout << "Ban co muon luu file hien tai?\n";
    cout << "1: Yes\n";
    cout << "0: No\n";
    int input = getIntRange(0, 1);
    if (input == 1)
        saveFile();
{% endhighlight %}

Sau khi đã đảm bao file được lưu rồi, ta chỉ cần chuyển ```isEditing``` về ```false```, là kết thúc phiên làm việc với file.

{% highlight c++ %}
    // Đóng file
    output.close();
}
{% endhighlight %}

Đó, vậy là chương trình của chúng ta đã hoàn tất!

# Bình luận

Trong lập trình thực tế, chúng ta sẽ muốn lưu trữ các thông tin như trong ví dụ này bằng các cơ sở dữ liệu, với khả năng hỗ trợ tìm kiếm trực quan và hiệu quả hơn. Nhưng để phục vụ mục đích của bài viết là luyện tập tổng hợp, bài thực hành sử dụng cách đọc và viết ra file mà ta đã biết.

Chương trình sau khi hoàn thành cũng rất dài, tới gần 400 dòng. Trong lập trình thực tế ta sẽ muốn tránh việc viết một file quá dài dòng như thế này, mà thay vào đó là viết chương trình ra thành các module nhỏ, và gọi các module nhỏ trong một file lớn. Điều này giúp cho việc bảo trì chương trình dễ dàng hơn. Đó cũng chính là một chức năng quan trọng của việc lập trình hướng đối tượng - Object Oriented Programming - mà chúng ta sẽ bắt đầu đề cập tới kể từ bài viết tiếp theo.

Tới đây là kết thúc bài thực hành tổng hợp rồi. Các bạn có thể xem code mẫu và download chương trình hoàn trình trên [repository GitHub](https://github.com/cowboycodervn/Basic-CPP---Exercise-1/tree/master) của nhóm Cowboy Coder.



