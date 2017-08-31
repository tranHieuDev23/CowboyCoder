---
title: '[C++ Cơ bản] Phần 19: Bài thực hành tổng hợp - Chương trình quản lý học sinh'
author: Admin Tổng Quản
date: 2017-08-31T16:10:21.714Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 18: Cấu trúc dữ liệu - struct và class](http://cowboycoder.tech/article/c-co-ban-phan-18-cau-truc-du-lieu-struct-va-class)*

Học hành là phải vừa "học" lại vừa "hành". Trong bài viết này và bài viết sau, chúng ta sẽ tổng hợp lại các kiến thức đã học vào trong một bài viết thực hành lớn - phần mềm quản lý học sinh. Sau khi hoàn thành xong bài thực hành này, bạn có thể đem sản phẩm vào sử dụng trong thực tế - vẫn còn xa lắm mới tới được một chương trình với giao diện đẹp đẽ, nhưng cũng khá tốt rồi.

# Yêu cầu của bài thực hành

Trong bài viết này, chúng ta sẽ viết một chương trình quản lý học sinh có các khả năng sau:

* Đọc và lưu trữ dữ liệu của học sinh từ một file text. Thông tin của học sinh bao gồm tên, lớp, địa chỉ và điểm số 3 môn Toán, Văn, Anh.
* Cho phép thực hiện các hành động thêm học sinh mới và chỉnh sửa hoặc xóa học sinh cũ.
* Cho phép liệt kê tất cả học sinh, hoặc lọc học sinh theo tên, lớp, địa chỉ hoặc điểm số.

Khi ta chạy chương trình quản lý học sinh, phần mềm sẽ yêu cầu ta lựa chọn mở một file cũ, hoặc tạo một file mới, hoặc kết thúc chương trình bằng cách nhập lệnh vào màn hình console. 

Khi ta đã mở file hoặc tạo file, chương trình sẽ cho phép người dùng in ra toàn bộ học sinh, lọc lấy một số học sinh, thêm, chỉnh sửa, xóa thông tin học sinh, hoặc kết thúc công việc và đóng file.

Khi lọc học sinh theo thông tin dạng chữ, ta sẽ lấy các học sinh có thông tin trùng với giá trị nhập vào. Khi lọc theo thông tin dạng số, ta có thể lựa chọn lấy các giá trị bằng, lớn hơn, nhỏ hơn,…

Các bạn có thể download chương trình đã hoàn thành tại [đây](https://github.com/cowboycodervn/Basic-CPP---Exercise-1/raw/master/StudentManager.exe) để chạy thử.

Ok, với các thông tin đã có, chúng ta sẽ bắt tay vào thực hành!

# Cấu trúc dữ liệu ```Student```
Để có thể lưu trữ dữ liệu của học sinh, ta cần có cấu trúc dữ liệu để biểu diễn học sinh. Ta sẽ sử dụng ```struct``` để tạo ra kiểu dữ liệu ```Student``` bao gồm các biến
* ```string name``` - Tên của học sinh
* ```string inClass``` - Lớp của học sinh. Ta sử dụng ```inClass``` thay vì ```class```, do ```class``` là từ khóa của C++.
* ```string address``` - Địa chỉ
* ```double math```, ```literature```, ```english``` - Điểm số 3 bộ môn Toán, Văn, Anh
Hãy nhớ khai báo sử dụng thư viện ```string``` trước khi sử dụng class ```string```.

{% highlight c++ %}
struct Student
{
    string name, inClass, address;
    double math, literature, english;
};
{% endhighlight %}

Sau khi ta đã có cấu trúc dữ liệu ```Student```, ta có thể khai báo một mảng ```Student``` để lưu trữ các học sinh đang được xử lý. Ở đây ta gọi mảng ```Student``` là ```allStudent[]``` với \\( 10 ^ 5 \\) phần tử.

{% highlight c++ %}
Student allStudent[100000];
{% endhighlight %}

Ta cũng cần một biến ```int number```, là số lượng học sinh đang được xử lý. Các học sinh được đọc ra từ file sẽ được lưu trữ trong các phần tử mảng ```allStudent[]```, từ 1 tới ```number```.

# Cấu trúc của file đầu vào.

Ta cần phải quy định bố cục nội dung của file đầu vào, để chương trình có thể xử lý được file. Dưới đây là bố cục được sử dụng trong bài viết.

* Dòng đầu tiên chứa một số kiểu ```int```, là số lượng học sinh được lưu trữ trong file.
* Các nhóm dòng tiếp theo lưu trữ thông tin về học sinh. Trong mỗi nhóm dòng, mỗi dòng lần lượt sẽ là giá trị của các biến ```name```, ```inClass```, ```address```, ```math```, ```literature``` và ```english``` của học sinh.
* Do khi ta đọc vào một ```string```, C++ lấy các kí tự dấu cách làm ngắt từ, nên các string kí tự có nhiều từ sẽ bị cắt ra làm nhiều ```string```. Để giải quyết vần đề này, ta sẽ lưu lại vào file các dấu cách trong các giá trị string bằng kí tự ```$``` (Ví dụ ```Trần$Minh$Hiếu``` thay vì ```Trần Minh Hiếu```).

Ví dụ về một file đúng chuẩn

```
1
Trần$Minh$Hiếu
KT22
The$Internet
8.0
5.0
7.0
```

# Biểu diễn bố cục của chương trình trong hàm main

Đầu tiên, vì chương trình chạy liên tục cho tới khi ta ra lệnh dừng, nên ta sẽ đặt tất cả nội dung của chương trình trong một vòng lặp vô hạn, chỉ được thoát ra khi ta ra lệnh.

Chương trình của chúng ta có 2 trạng thái - khi chưa mở file nào ra, và khi đã mở file để chỉnh sửa. Ta sẽ quy định trạng thái của chương trình bằng biến ```bool``` global ```isEditing``` - ```true``` nếu chương trình đang chỉnh sửa file, ```false``` nếu ngược lại.

Khi chưa mở file nào ra, ta có 3 lựa chọn là tạo file mới, mở file cũ, hoặc kết thúc chương trình. Ta sẽ yêu cầu người dùng nhập vào số 1, 2 hoặc 0, tương ứng với lệnh cần thực hiện.

![undefined](/img/uploads/cpp-cơ-bản-19-1.jpg)
 
Vấn đề nảy sinh ra: Làm sao để chắc chắn người dùng sẽ nhập vào đúng 3 giá trị này? Ta sẽ viết một hàm ```getIntRange()```, bắt người dùng phải nhập vào một giá trị int cho tới khi giá trị này nằm đúng trong khoảng đã cho. Vòng lặp vô hạn sẽ có tác dụng ở đây:

{% highlight c++ %}
int getIntRange(int low, int high)
{
    int input;
    while(true)
    {
        cin >> input;
        if (input < low || input > high)
            cout << "Gia tri khong hop le, xin hay nhap lai!\n";
        else
            break;
    }
    return input;
}
{% endhighlight %}

Khi đó ta sẽ biểu diễn trạng thái lúc chưa chỉnh sửa file nào như sau:

{% highlight c++ %}
int main()
{
    int input;
    while (true)
    {
        if (!isEditing) // Nếu như chưa có file nào được mở
        {
            cout << "Hien chua co file nao duoc mo, ban muon lam gi?\n";
            cout << "1: Tao file moi\n";
            cout << "2: Mo file cu\n";
            cout << "0: Ket thuc chuong trinh\n";

            input = getIntRange(0, 2);

            switch(input)
            {
                case 1: // Tạo file mới
                    newFile();
                    break;

                case 2: // Mở file cũ
                    openFile();
                    break;

                case 0: // Kết thúc chương trình
                    return 0;
            }
        }
{% endhighlight %}

Các chương trình con ```newFile()``` và ```openFile()``` sẽ được chúng ta thêm vào về sau. 

Khi chương trình đang mở file để chỉnh sửa, ta cũng sẽ sử dụng cấu trúc tương tự để rẽ hướng chương trình:

{% highlight c++ %}
        else
        {
            cout << "Ban muon lam gi voi file?\n";
            cout << "1: In ra tat ca hoc sinh\n";
            cout << "2: Loc hoc sinh theo thong tin\n";
            cout << "3: Them hoc sinh moi\n";
            cout << "4: Chinh sua thong tin hoc sinh\n";
            cout << "5: Xoa thong tin hoc sinh\n";
            cout << "6: Luu\n";
            cout << "7: Dong file hien tai\n";

            input = getIntRange(1, 7);

            switch(input)
            {
                case 1: // In ra tất cả học sinh
                    printAllStudent();
                    break;

                case 2: // Lọc học sinh theo thông tin
                    searchStudent();
                    break;

                case 3: // Thêm học sinh mới
                    addStudent();
                    break;

                case 4: // Chỉnh sửa thông tin học sinh
                    editStudent();
                    break;

                case 5: // Xóa thông tin học sinh
                    deleteStudent();
                    break;

                case 6: // Lưu
                    saveFile();
                    break;

                case 7:
                    exitFile();
                    break;
            }
        }
    }
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-19-2.jpg)

Toàn bộ chương trình con ```main()``` sẽ có bố cục như sau

{% highlight c++ %}
int main()
{
    int input;
    while (true)
    {
        if (!isEditing) // Nếu như chưa có file nào được mở
        {
            cout << "Hien chua co file nao duoc mo, ban muon lam gi?\n";
            cout << "1: Tao file moi\n";
            cout << "2: Mo file cu\n";
            cout << "0: Ket thuc chuong trinh\n";

            input = getIntRange(0, 2);

            switch(input)
            {
                case 1: // Tạo file mới
                    newFile();
                    break;

                case 2: // Mở file cũ
                    openFile();
                    break;

                case 0: // Kết thúc chương trình
                    return 0;
            }
        }
        else
        {
            cout << "Ban muon lam gi voi file?\n";
            cout << "1: In ra tat ca hoc sinh\n";
            cout << "2: Loc hoc sinh theo thong tin\n";
            cout << "3: Them hoc sinh moi\n";
            cout << "4: Chinh sua thong tin hoc sinh\n";
            cout << "5: Xoa thong tin hoc sinh\n";
            cout << "6: Luu\n";
            cout << "7: Dong file hien tai\n";

            input = getIntRange(1, 7);

            switch(input)
            {
                case 1: // In ra tất cả học sinh
                    printAllStudent();
                    break;

                case 2: // Lọc học sinh theo thông tin
                    searchStudent();
                    break;

                case 3: // Thêm học sinh mới
                    addStudent();
                    break;

                case 4: // Chỉnh sửa thông tin học sinh
                    editStudent();
                    break;

                case 5: // Xóa thông tin học sinh
                    deleteStudent();
                    break;

                case 6: // Lưu
                    saveFile();
                    break;

                case 7:
                    exitFile();
                    break;
            }
        }
    }
    return 0;
}
{% endhighlight %}

# Tạo file mới

Như trong các chương trình soạn thảo văn bản hay vẽ tranh, chương trình đều cung cấp cho chúng ta khả năng lưu vào file đang mở, hoặc lưu vào một file mới. Ta sẽ cần phải lưu lại tên của file đang mở, để tiện dùng sau này.

Do hàm ```ofstream.open()``` chỉ chấp nhận kiểu biểu diễn string bằng mảng ```char``` mà không chấp nhận class ```string```, nên ta sẽ tạo một biến global kiểu mảng ```char``` ```currentFile[100]``` để lưu tên file.

Khi ta ra lệnh tạo file mới, thực chất ta chỉ cần làm ba việc: gán giá trị ```number = 0``` (tức là chưa có một học sinh nào trong danh sách cả), gán ```currentFile[]``` thành string rỗng (dữ liệu chưa được lưu vào file nào) và chuyển trạng thái ```isEditing``` thành ```true```.

{% highlight c++ %}
void newFile()
{
    // Chưa có học sinh nào trong danh sách
    number = 0;
    // File chưa được lưu, do đó không có tên file
    strcpy(currentFile, "");
    // Thông báo đã có file đang được chỉnh sửa
    isEditing = true;
}
{% endhighlight %}

# Đọc dữ liệu từ file 

Do dữ liệu trong file mã hóa các dấu cách, nên ta cần phải giải mã chúng khi đọc file.

Ta sẽ viết hai hàm ```decode()``` và ```encode()``` để giải mã và mã hóa string - chỉ cần duyệt qua toàn bộ string, và thay các kí tự ```$``` bằng dấu cách.

{% highlight c++ %}
string decode(string s)
{
    for(int i = 0; i < s.size(); i ++)
        if (s[i] == '$')
            s[i] = ' ';
    return s;
}

string encode(string s)
{
    for(int i = 0; i < s.size(); i ++)
        if (s[i] == ' ')
            s[i] = '$';
    return s;
}
{% endhighlight %}

Ok, có mã hóa và giải mã rồi, giờ ta sẽ bắt tay vào viết hàm ```void openFile()```.

{% highlight c++ %}
char currentFile[100];
void openFile()
{
    // Lưu tên file lại để dùng về sau
    cout << "Hay nhap vao ten file: ";
    cin >> currentFile;

    // Mở file
    ifstream input;
    input.open(currentFile);
{% endhighlight %}

Sau khi đã mở file ra, ta sẽ đọc file theo đúng bố cục đã trình bày ở trên.

{% highlight c++ %}
    // Đọc dữ liệu
    input >> number;
    for (int i = 1; i <= number; i ++)
    {
        input >> allStudent[i].name;
        allStudent[i].name = decode(allStudent[i].name);
        input >> allStudent[i].inClass;
        allStudent[i].inClass = decode(allStudent[i].inClass);
        input >> allStudent[i].address;
        allStudent[i].address = decode(allStudent[i].address);

        input >> allStudent[i].math;
        input >> allStudent[i].literature;
        input >> allStudent[i].english;
    }
{% endhighlight %}

Cuối cùng, ta đóng stream input lại, và chuyển trạng thái ```isEditing``` thành ```true```.

{% highlight c++ %}
    // Đóng file
    input.close();

    // Thông báo đã có file đang được chỉnh sửa
    isEditing = true;
}
{% endhighlight %}

Toàn bộ nội dung của chương trình con ```openFile()``` như sau:

{% highlight c++ %}
void openFile()
{
    // Lưu tên file lại để dùng về sau
    cout << "Hay nhap vao ten file: ";
    cin >> currentFile;

    // Mở file
    ifstream input;
    input.open(currentFile);

    // Đọc dữ liệu
    input >> number;
    for (int i = 1; i <= number; i ++)
    {
        input >> allStudent[i].name;
        allStudent[i].name = decode(allStudent[i].name);
        input >> allStudent[i].inClass;
        allStudent[i].inClass = decode(allStudent[i].inClass);
        input >> allStudent[i].address;
        allStudent[i].address = decode(allStudent[i].address);

        input >> allStudent[i].math;
        input >> allStudent[i].literature;
        input >> allStudent[i].english;
    }

    // Đóng file
    input.close();

    // Thông báo đã có file đang được chỉnh sửa
    isEditing = true;
}
{% endhighlight %}

# Thêm học sinh và chỉnh sửa thông tin

Quá trình thêm học sinh bao gồm việc nhập thông tin học sinh mới vào danh sách.

Quá trình chỉnh sửa thông tin học sinh bao gồm việc chỉ định học sinh nào sẽ bị chỉnh sửa, và nhập thông tin mới trong học sinh.

Vậy nên chả có lý do gì ta lại không dùng chung một chương trình con để nhập dữ liệu chung cho hai thao tác này cả. Việc thêm học sinh thì cũng chỉ là việc chỉnh sửa học sinh thứ ```number + 1``` thôi mà :)) Cụ thể ở đây ta sẽ viết một hàm ```inputStudentInfo(int id)```, cho phép nhập dữ liệu để lưu trữ vào phần tử vị trí ```id``` của mảng ```allStudent[]```.

Ở trên chúng ta được biết rằng C++ sử dụng kí tự dấu cách để phân cách ```string```, nên ta phải tránh việc lưu tên học sinh có dấu cách bằng việc mã hóa. Nhưng khi đưa tới người dùng sử dụng, ta lại nhất thiết cần phải có dấu cách để có thể nhập thông tin trực quan.

Để giải quyết vấn đề này, ta sẽ sử dụng hàm ```getline()``` của thư viện ```fstream```. Hàm này nhận hai tham số, một luồng input để lấy dữ liệu và một biến kiểu class ```string```, và hàm này sẽ đọc nốt tất cả thông tin còn lại trên dòng của input để gán vào string. Lệnh

{% highlight c++ %}
getline(cin, s);
{% endhighlight %}

có nghĩa là ta sẽ nhập hết dữ liệu còn lại trên dòng hiện tại ở ```cin```, và gán vào biến ```s```.

{% highlight c++ %}
void inputStudentInfo(int id)
{
    string temp; getline(cin, temp);
    cout << "Ten cua hoc sinh?\n";
    getline(cin, allStudent[id].name);
{% endhighlight %}

Tại sao ta lại cần phải đọc vào biến ```temp``` trước? Vì ở trên dòng input cuối cùng, trước dòng có tên học sinh, vẫn còn một kí hiệu xuống dòng ```'\n'``` nữa. Ta phải thêm một dòng ```getline()``` vào ```temp``` để quét nốt dòng này, trước khi xuống tới tên. Đối với lớp và địa chỉ thì lại không cần nữa, vì các dòng ```getline()``` đã lấy hết dòng trước hộ rồi.

{% highlight c++ %}
    getline(cin, allStudent[id].inClass);
    cout << "Dia chi?\n";
    getline(cin, allStudent[id].address);
{% endhighlight %}

Cuối cùng, ta nhập vào điểm 3 môn như bình thường.

{% highlight c++ %}
    cout << "Diem mon Toan?\n"; cin >> allStudent[id].math;
    cout << "Diem mon Van?\n"; cin >> allStudent[id].literature;
    cout << "Diem mon Anh?\n"; cin >> allStudent[id].english;
}
{% endhighlight %}

Toàn bộ nội dung hàm ```inputStudentInfo()``` như sau:

{% highlight c++ %}
void inputStudentInfo(int id)
{
    string temp; getline(cin, temp);
    cout << "Ten cua hoc sinh?\n";
    getline(cin, allStudent[id].name);
    cout << "Lop?\n";
    getline(cin, allStudent[id].inClass);
    cout << "Dia chi?\n";
    getline(cin, allStudent[id].address);
    cout << "Diem mon Toan?\n"; cin >> allStudent[id].math;
    cout << "Diem mon Van?\n"; cin >> allStudent[id].literature;
    cout << "Diem mon Anh?\n"; cin >> allStudent[id].english;
}
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-19-3.jpg)

Sau khi đã có hàm này, ta chỉ cần viết hai hàm ```addNewStudent()``` và ```editStudent()``` rất ngắn gọn. Chú ý ```editStudent()``` còn có một đoạn kiểm tra xem mã số học sinh nhập vào có hợp lệ hay không.

{% highlight c++ %}
void addStudent()
{
    number ++;
    inputStudentInfo(number);
}

void editStudent()
{
    int id;
    cout << "Hay nhap ma so hoc sinh: ";
    cin >> id;
    if (id < 1 || id > number)
    {
        cout << "Ma so hoc sinh khong hop le!\n";
        return;
    }

    inputStudentInfo(id);
}
{% endhighlight %}

# Xóa thông tin học sinh

Hàm xóa thông tin học sinh ta viết trong ```main()``` là ```deleteStudent()```. Để xóa thông tin học sinh, ta cần phải nhập vào mã số học sinh cần xóa. Đoạn này giống như với ```editStudent()```.

{% highlight c++ %}
void deleteStudent()
{
    int id;
    cout << "Hay nhap ma so hoc sinh: ";
    cin >> id;
    if (id < 1 || id > number)
    {
        cout << "Ma so hoc sinh khong hop le!\n";
        return;
    }
{% endhighlight %}

Khi đã có mã số học sinh cần xóa hợp lệ, ta sẽ xóa thông tin của học sinh đó đi, bằng cách dồn các học sinh ở sau về phía trước, gán đè lên giá trị của người bị xóa.

{% highlight c++ %}
    // Đẩy các học sinh phía sau về đúng chỗ
    for (int i = id + 1; i <= number; i ++)
        allStudent[i - 1] = allStudent[i];
    number --; // Bớt đi một học sinh
}
{% endhighlight %}

Toàn bộ nội dung của hàm ```deleteStudent()``` như sau

{% highlight c++ %}
void deleteStudent()
{
    int id;
    cout << "Hay nhap ma so hoc sinh: ";
    cin >> id;
    if (id < 1 || id > number)
    {
        cout << "Ma so hoc sinh khong hop le!\n";
        return;
    }
    // Đẩy các học sinh phía sau về đúng chỗ
    for (int i = id + 1; i <= number; i ++)
        allStudent[i - 1] = allStudent[i];
    number --; // Bớt đi một học sinh
}
{% endhighlight %}

Ok, chúng ta đã hoàn thành xong việc thêm, sửa và xóa thông tin học sinh. Bài thực hành sẽ tiếp tục ở phần sau, với việc tìm kiếm học sinh theo thông tin, và lưu lại dữ liệu lên file.


