---
title: "[C++ Cơ bản] Phần 26: Bài thực hành - Game đố vui"
author: Admin Tổng Quản
date: 2017-09-10T07:35:26.160Z
thumbnail: /img/uploads/C++ Co ban - Thumbnail.jpg
tags:
    - cpp-cơ-bản
    - programming
---

_Phần trước: [\[C++ Cơ bản\] Phần 25: Abstract class - Class trừu tượng](http://cowboycoder.vercel.app/article/c-co-ban-phan-25-abstract-class-class-truu-tuong)_

_Chào mừng các bạn đến với chương trình Ai là Cốt đơ trên trang Cowboy Coder. Để có thể giành được giải thưởng 100 triệu cái hắt hơi của chương trình, các bạn sẽ phải trả lời một vài câu hỏi. Các câu hỏi sẽ có 3 dạng: Câu hỏi trắc nghiệm, Câu hỏi đúng sai và Câu hỏi nhập số. Nào, hãy cùng nhau bắt đầu chương trình!_

![undefined](/img/uploads/cpp-cơ-bản-26-1.jpg)

Yeah, chả ai quan tâm đâu.

Nhưng nếu bây giờ bạn phải triển khai phần mềm cho chương trình trên, bạn sẽ làm như thế nào? Bài thực hành này sẽ giúp bạn tạo được một chương trình đố vui bằng C++, đồng thời cũng giúp bạn tổng quát lại các kết thức về Lập trình hướng đối tượng với C++.

# Yêu cầu của bài thực hành

Khi chương trình khởi động, ta sẽ chỉ định chương trình đọc file chứa câu hỏi. File chứa câu hỏi sẽ có nội dung như sau:

-   Dòng đầu tiên chứa một số `n` - số lượng câu hỏi.
-   Các nhóm dòng tiếp theo chứa nội dung các câu hỏi. Dòng đầu tiên là một chữ cái biểu diễn loại câu hỏi - `M` (Multiple Choice) là câu hỏi trắc nghiệm 4 đáp án, `T` (True/False) là câu hỏi đúng sai và `N` (Number) là câu hỏi nhập đáp án dạng số.
-   Đối với câu hỏi dạng `M`, 4 dòng tiếp theo chứa nội dung của 4 đáp án `A`, `B`, `C`, `D`. Sau 4 dòng này là một dòng thứ 5, chứa đáp án được viết dưới dạng chữ in hoa.
-   Đối với câu hỏi dạng `T`, dòng tiếp theo chứa đáp án `T` hoặc `F` (đúng hoặc sai).
-   Đối với câu hỏi dạng `N`, dòng tiếp theo chứa đáp án là một số thực.

Sau khi đọc hết `n` câu hỏi, chương trình sẽ lần lượt hiện ra các câu hỏi đã đọc vào. Người dùng sẽ trả lời các câu hỏi bằng kí tự in hoa (đối với câu hỏi dạng `M` hoặc `T`), hoặc bằng số thực (nếu là câu hỏi dạng `N`). Chương trình sẽ thông báo người dùng có trả lời đúng hay không, và nếu trả lời sai, thì đáp án đúng là gì. Kết thúc chương trình, chương trình sẽ thông báo số lượng câu trả lời người dùng đã trả lời đúng.

Để cho đơn giản, ta mặc định người dùng luôn luôn nhập vào đúng kiểu đáp án, để không phải mất công kiểm tra.

Các bạn có thể download chương trình đã hoàn thiện ở [đây](https://github.com/cowboycodervn/Basic-C---Exercise-2/raw/master/Quiz.exe), cùng với file câu hỏi mẫu ở [đây](https://github.com/cowboycodervn/Basic-C---Exercise-2/blob/master/INPUT.TXT).

# Interface `Question`

Chắc hẳn các bạn cũng đã có thể _nghe nhạc hiệu đoán được chương trình_ rồi: Chúng ta sẽ sử dụng một interface `Question` chung cho 3 loại câu hỏi trên, để có thể chung đường xử lý cho cả 3 dạng câu hỏi.

Một câu hỏi có 3 chức năng cần cài đặt: đọc vào nội dung câu hỏi từ file input, in ra nội dung câu hỏi, và nhận vào câu trả lời. Do đó interface `Question` sẽ cần phải cài đặt 3 hàm abstract `readFromFile()`, `printQuestion()` và `getAnswer()` tương ứng, để các subclass triển khai sau.

-   `readFromFile()` nhận một tham số truyền biến là một object thuộc class `ifstream` - luồng vào từ file cần nhập - và đọc nội dung câu hỏi vào object. Nhớ là tham số truyền biến, sử dụng toán tử `&`, nếu không sẽ sinh lỗi khi dịch.
-   `printQuestion()` in ra nội dung câu hỏi theo mẫu có sẵn.
-   `getAnswer()` là một hàm kiểu `bool`, đợi người dùng nhập câu trả lời vào, in ra thông báo phù hợp và trả lại `true` nếu người dùng trả lời đúng, `false` nếu trả lời sai.

{% highlight c++ %}
class Question
{
public:
virtual void readFromFile(ifstream &fileInput) =0;
virtual void printQuestion() =0;
virtual bool getAnswer() =0;
};
{% endhighlight %}

Đừng quên thêm thư viện fstream vào để có thể sử dụng được ifstream nhé.

Sau khi có interface `Question` rồi, ta có thể dễ dàng hình dung ra nội dung của hàm `int main()` ở dưới thành các bước sau:

-   Đọc file câu hỏi vào một mảng con trỏ interface `Question`
-   Mở file câu hỏi, sử dụng câu lệnh điều kiện để quyết định dùng loại class câu hỏi nào
-   Duyệt qua từng câu hỏi một, in ra nội dung, và nhận lại câu trả lời từ người dùng
-   In ra số lượng câu trả lời đúng, và kết thúc chương trình

Tạm thời ta sẽ bỏ trống phần đọc nội dung câu hỏi tới khi cài đặt xong class của 3 dạng câu hỏi về sau.

{% highlight c++ %}
char fileName[100];
int n, correctAnswer = 0; /_ correctAnswer là số lượng câu trả lời đúng _/
Question \*allQuestion[1000];

int main()
{
cout << "Hay nhap file cau hoi: ";
cin >> fileName;

    ifstream fileInput; fileInput.open(fileName);
    fileInput >> n;
    /* Đọc vào nội dung các câu hỏi */

    for (int i = 1; i <= n; i ++)
    {
        allQuestion[i]->PrintQuestion();
        if (allQuestion[i]->GetAnswer())
            correctAnswer ++;
    }

    cout << "So luong cau tra loi dung: " << correctAnswer;
    return 0;

}
{% endhighlight %}

# Class `MultipleQuestion` - câu hỏi trắc nghiệm

Dạng câu hỏi đầu tiên ta triển khai sẽ là câu hỏi trắc nghiệm - class `MultipleQuestion`. Trước khi làm bất cứ thao tác gì, đừng quên tuyên bố class này là subclass của interface `Question`.

{% highlight c++ %}
class MultipleQuestion: public Question
{% endhighlight %}

Câu hỏi trắc nghiệm thì cần có 1 nội dung lớn, 4 lựa chon và 1 đáp án đúng. Ta sẽ lưu trữ chúng trong các object `string` là `question` (câu hỏi), mảng `string choice[]` (lựa chọn) và biến `char correctAnswer` (đáp án đúng). Chẳng có lý do gì mà ta muốn công khai các nội dung này ra cả, nên ta sẽ để chúng là `private`.

{% highlight c++ %}
class MultipleQuestion: public Question
{
private:
string question, choice[4];
char correctAnswer;
{% endhighlight %}

Giờ tới lúc triển khai việc đọc. Nội dung câu hỏi và các đáp án chiếm trọn một dòng và bao gồm cả dấu cách. Ta cần cách đọc hết cả một dòng mà không bỏ qua dấu cách. Còn nhớ hàm `getline()` ở bài thực hành trước chứ?

{% highlight c++ %}
public:
void readFromFile(ifstream &fileInput)
{
getline(fileInput, question);
for (int i = 0; i < 4; i ++)
getline(fileInput, choice[i]);
fileInput >> correctAnswer;
}
{% endhighlight %}

Việc đọc câu hỏi vào rất đơn giản, việc in nội dung ra cũng vậy. Chỉ có một điều khác biệt, đó là ta cần in ra các chữ cái đại diện cho đáp án. Trong bảng mã ASCII mà C++ sử dụng, các chữ cái `A`, `B`, `C`, `D` được đặt liền nhau. Do đó ta sẽ cộng biến đếm vào giá trị của kí tự `'A'`, để trả lại chữ cái in ra phù hợp - biến `label`.

{% highlight c++ %}
void printQuestion()
{
cout << question << '\n';
for (int i = 0; i < 4; i ++)
{
char label = 'A' + i;
cout << label << ": " << choice[i] << '\n';
}
}
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-26-2.jpg)

Cuối cùng là việc đọc đáp án. Công việc này cũng rất đơn giản - chỉ cần `cin` đáp án vào một biến dạng `char`, và kiểm tra xem đáp án có bằng với `correctAnswer` hay không để in ra thông báo phù hợp.

{% highlight c++ %}
bool getAnswer()
{
char answer; cin >> answer;
if (answer == correctAnswer)
{
cout << "Cau tra loi dung!\n";
return true;
}
else
{
cout << "Cau tra loi sai! Cau tra loi dung la " << correctAnswer << '\n';
return false;
}
}
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-26-3.jpg)

Nội dung hoàn chỉnh của class `MultipleQuestion` sẽ là như sau

{% highlight c++ %}
class MultipleQuestion: public Question
{
private:
string question, choice[4];
char correctAnswer;

    public:
        void readFromFile(ifstream &fileInput)
        {
            getline(fileInput, question);
            for (int i = 0; i < 4; i ++)
                getline(fileInput, choice[i]);
            fileInput >> correctAnswer;
        }

        void printQuestion()
        {
            cout << question << '\n';
            for (int i = 0; i < 4; i ++)
            {
                char label = 'A' + i;
                cout << label << ": " << choice[i] << '\n';
            }
        }

        bool getAnswer()
        {
            char answer; cin >> answer;
            if (answer == correctAnswer)
            {
                cout << "Cau tra loi dung!\n";
                return true;
            }
            else
            {
                cout << "Cau tra loi sai! Cau tra loi dung la " << correctAnswer << '\n';
                return false;
            }
        }

};
{% endhighlight %}

# Class `TrueFalse` (câu hỏi đúng sai) và class `NumberQuestion` (câu hỏi dạng số)

Dạng câu hỏi đúng sai giống hệt như dạng câu hỏi `MultipleQuestion`, nhưng chỉ khác là từ 4 lựa chọn ta chỉ có 2 (`T` hoặc `F`). Do đó cách triển khai cũng chỉ khác ở việc đọc nội dung vào và ở cách nội dung được in ra mà thôi.

{% highlight c++ %}
class TrueFalse: public Question
{
private:
string question;
char correctAnswer;

    public:
        void readFromFile(ifstream &fileInput)
        {
            getline(fileInput, question);
            fileInput >> correctAnswer;
        }

        void printQuestion()
        {
            cout << question << " (T/F)\n";
        }

        bool getAnswer()
        {
            char answer; cin >> answer;
            if (answer == correctAnswer)
            {
                cout << "Cau tra loi dung!\n";
                return true;
            }
            else
            {
                cout << "Cau tra loi sai! Cau tra loi dung la " << correctAnswer << '\n';
                return false;
            }
        }

};
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-26-4.jpg)

Class `NumberQuestion` thì giống hệt class `TrueFalse`, nhưng chỉ khác là phải chuyển `correctAnswer` từ một kí tự thành một số thôi. Ta chỉ cần copy lại class này, đổi tên class và đổi kiểu dữ liệu của `correctAnswer` thành `double`, thế là xong.

{% highlight c++ %}
class NumberQuestion: public Question
{
private:
string question;
double correctAnswer;

    public:
        void readFromFile(ifstream &fileInput)
        {
            getline(fileInput, question);
            fileInput >> correctAnswer;
        }

        void printQuestion()
        {
            cout << question << " (T/F)\n";
        }

        bool getAnswer()
        {
            double answer; cin >> answer;
            if (answer == correctAnswer)
            {
                cout << "Cau tra loi dung!\n";
                return true;
            }
            else
            {
                cout << "Cau tra loi sai! Cau tra loi dung la " << correctAnswer << '\n';
                return false;
            }
        }

};
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-26-5.jpg)

# Áp dụng 3 dạng câu hỏi vào chương trình

Sau khi cài đặt xong 3 dạng câu hỏi, ta chỉ còn một chi tiết cuối, đó là đọc nội dung của chúng từ file. Ta sẽ sử dụng câu lệnh điều kiện `if` cho việc này - nếu như biến dạng `char type` (loại, tức loại của câu hỏi) đọc vào có giá trị là `'M'`, câu hỏi sẽ là câu hỏi trắc nghiệm và con trỏ tương ứng phải chỉ vào một đối tượng class `MultipleQuestion`. Tương tự với hai dạng kia.

{% highlight c++ %}
int main()
{
cout << "Hay nhap file cau hoi: ";
cin >> fileName;

    ifstream fileInput; fileInput.open(fileName);
    fileInput >> n;
    for (int i = 1; i <= n; i ++)
    {
        char questionType;
        fileInput >> questionType;
        string temp; getline(fileInput, temp); /* Dọn dẹp phần còn lại của dòng để xuống dòng */
        if (questionType == 'M')
            allQuestion[i] = new MultipleQuestion;
        if (questionType == 'T')
            allQuestion[i] = new TrueFalse;
        if (questionType == 'N')
            allQuestion[i] = new NumberQuestion;

{% endhighlight %}

Cuối cùng là việc đọc nội dung câu hỏi vào đối tượng.

{% highlight c++ %}
allQuestion[i]->readFromFile(fileInput);
}
{% endhighlight %}

![undefined](/img/uploads/cpp-cơ-bản-26-6.jpg)

Vậy là chương trình của chúng ta đã xong rồi! Các bạn có thể xem lại code của chương trình tại [đây](https://github.com/cowboycodervn/Basic-C---Exercise-2/blob/master/Quiz.cpp).

# Bình luận

OOP thật sự rất tiện lợi cho việc lắp đặt và nâng cấp - với interface `Question` đã được định nghĩa sẵn, ta có thể thêm vào chương trình bất cứ loại câu hỏi nào mà ta có thể nghĩ ra, với điều kiện phải overload lại 3 hàm abstract cần thiết. Giả sử ta có một class phụ trách việc hiển thị câu hỏi lên giao diện đồ họa, ta cũng có thể điều chỉnh chương trình này lại sao cho phù hợp với cấu trúc của class kia, và lắp đặt lại thành một trò chơi câu hỏi đẹp mắt.

Bài thực hành này kết thúc phần học về lập trình hướng đối tượng với C++. Bài viết tiếp theo sẽ giúp các bạn làm quen với STL - thư viện template của C++ và các class quan trọng trong thư viện này.

_Phần sau: [\[C++ Cơ bản\] Phần 27: Template. Thư viện template chuẩn của C++.](http://cowboycoder.vercel.app/article/c-co-ban-phan-27-template-thu-vien-template-chuan-cua-c)_
