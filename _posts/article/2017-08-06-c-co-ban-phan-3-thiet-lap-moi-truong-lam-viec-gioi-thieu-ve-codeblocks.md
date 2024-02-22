---
title: >-
    [C++ Cơ bản] Phần 3: Thiết lập môi trường làm việc  - Giới thiệu về
    Code::Blocks
author: Admin Tổng Quản
date: 2017-08-06T09:03:11.173Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
    - cpp-cơ-bản
    - programming
---

_Phần trước: [\[C++ Cơ bản\] Phần 2: Giới thiệu về C++](http://cowboycoder.vercel.app/article/c-co-ban-phan-2-gioi-thieu-ve-c)_

Như đã nói ở trong phần 1, bạn thậm chí chỉ cần tới một trình soạn thảo văn bản (text editor) để viết file mã nguồn C++. Tuy nhiên để tiện lợi, chúng ta sẽ sử dụng IDE trong series bài viết này. IDE được chọn là [Code::Blocks IDE](http://www.codeblocks.org/) (ở đây gọi tắt là CodeBlocks), viết bởi The Code::Blocks Team. Lý do mình chọn IDE này cho series bài viết đơn giản là vì sự đơn giản mà mạnh mẽ của nó, và vì đây là cũng là IDE đầu tiên mình sử dụng để học C++ :))

# Cài đặt CodeBlocks

Mục này hướng dẫn cài đặt CodeBlocks trên HĐH Windows, đối với các bạn sử dụng hệ điều hành nhân Linux có thể áp dụng gần như tương tự, hoặc sử dụng Terminal để cài đặt CodeBlocks.

Để cài đặt CodeBlocks, bạn cần phải tìm tới [trang chủ của dự án CodeBlock](http://www.codeblocks.org/) và lựa chọn mục Download. Tại đây bạn có 3 lựa chọn để download CodeBlocks về máy tính của mình. Để đơn giản nhất, ta chọn Download the Binary Release (Tải về bản cài đặt phát hành chính thức).

![undefined](/img/uploads/cpp-cơ-bản-3-1.jpg)

Link download ở trong các danh sách liệt kê ở dưới. Tùy vào hệ điều hành của bạn, hãy lựa chọn phiên bản CodeBlocks phù hợp để download. Chú ý đối với người dùng Windows là phải download phiên bản có mingw-setup để download CodeBlocks có kèm theo bộ dịch GNU C++.
Tiếp theo chúng ta chạy file cài đặt CodeBlocks. Đối với nội dung của series này thì chỉ cần để lại các cài đặt như mặc định là đủ.

![undefined](/img/uploads/cpp-cơ-bản-3-2.jpg)

Khi cài đặt hoàn tất và bạn khởi động CodeBlocks lần đầu, phần mềm sẽ hỏi bạn sử dụng bộ dịch gì cho chương trình. Hãy để mặc định (GNU CCC Complier) và click Next.

![undefined](/img/uploads/cpp-cơ-bản-3-3.jpg)

Giao diện của IDE sẽ hiện thị - quá trình cài đặt hoàn tất:

![undefined](/img/uploads/cpp-cơ-bản-3-4.jpg)

# Tạo chương trình C++ mới với CodeBlock

Để tạo chương trình C++ mới, bạn cần phải tạo project (dự án) mới trong CodeBlocks.

Bạn có thể tạo project mới bằng đường dẫn hiển thị ở màn hình khởi động (Create a new project), hoặc bằng việc lựa chọn File/New/Project… Trên thanh công cụ.

![undefined](/img/uploads/cpp-cơ-bản-3-5.jpg)

Màn hình tạo project mới hiển thị, bạn phải lựa chọn loại chương trình bạn muốn viết ở đây. Trong các ví dụ của series bài viết này, chúng ta sẽ sử dụng chương trình màn hình console (Console application). Ta click chọn vào Console application và nhấn Go, hoặc click đúp chuột vào Console application.

![undefined](/img/uploads/cpp-cơ-bản-3-6.jpg)

Ở mục ngôn ngữ, ta chọn C++ và ấn Next.

![undefined](/img/uploads/cpp-cơ-bản-3-7.jpg)

Ở mục tiếp theo, ta phải lựa chọn tiêu đề của dự án và folder nơi chứa thư mục của dự án. Tất cả các file của dự án sẽ nằm trong một folder con của folder này, được đặt tên là tên của dự án. Lấy ví dụ hình dưới, mình muốn tạo ra một dự án có tên là HelloWorld, được đặt ở trong thư mục `D:\Class`:

![undefined](/img/uploads/cpp-cơ-bản-3-8.jpg)

Ta nhấn Next để tiếp tục. Ở mục tiếp theo chứa các cài đặt về trình dịch và môi trường làm việc của dự án, ta tạm thời không phải quan tâm ở đây, click Finish.

![undefined](/img/uploads/cpp-cơ-bản-3-9.jpg)

Dự án đã được tạo thành xong. Ở phía bên trái của màn hình là bố cục của dự án. Khi khởi điểm, mục này chỉ bao gồm 1 file duy nhất là file main.cpp, file mã nguồn C++ của dự án, nằm trong mục Sources:

![undefined](/img/uploads/cpp-cơ-bản-3-10.jpg)

Ta click đúp chuột để mở file này. Bên trong là một chương trình C++ đơn giản:

![undefined](/img/uploads/cpp-cơ-bản-3-11.jpg)

Hãy thử click vào nút được khoanh đỏ để build và chạy chương trình này:

![undefined](/img/uploads/cpp-cơ-bản-3-12.jpg)

Xin chúc mừng, bạn vừa chạy thành công một chương trình C++ đơn giản :)) Hello World được coi như là bài tập khởi đầu với mọi ngôn ngữ lập trình, khi bạn phải viết một chương trình in ra dòng chữ đầu tiên. Mọi kiến thức về một ngôn ngữ sẽ từ đó mà nảy nở :))

# Dịch và chạy chương trình C++

Bên cạnh nút build và chạy chương trình như trên, còn có hai nút quan trọng khác là chỉ build và chỉ chạy chương trình:

![undefined](/img/uploads/cpp-cơ-bản-3-13.jpg)

-   Nút đầu tiên từ trái qua sẽ build chương trình, nhưng không chạy nó. Nếu chương trình không có thay đổi, sẽ không có gì xảy ra.
-   Nút thứ hai sẽ chạy chương trình, theo như lần cuối cùng nó được build. Có nghĩa là mọi thay đổi từ lần build cuối sẽ không có ảnh hưởng gì tới chương trình chạy.
-   Nút thứ ba, chúng ta vừa sửa dụng, là nút build và chạy chương trình vừa được build xong.

Tại sao ta phải biết 3 nút này? Bạn sẽ nhanh chóng nhận ra quá trình build khá là lâu, mất vài giây. Đôi khi bạn chỉ muốn kiểm tra chương trình mà cũng phải mất thời gian chờ đợi dự án build xong, thật rách việc. Vậy nên ta chỉ cần chạy chương trình không bằng nút chạy, không mất thời gian chờ đợi nữa.

Để nhanh gọn hơn, 3 nút này có 3 phím tắt trên bàn phím, lần lượt là Ctrl + F9, Ctrl + F10 và F9.

Tới đây là kết thúc phần chuẩn bị cho series bài viết. Ở bài viết tiếp theo, chúng ta sẽ tới nội dung chính của series – ngôn ngữ C++!

_Phần sau: [\[C++ Cơ bản\] Phần 4: Cú pháp C++ cơ bản](http://cowboycoder.vercel.app/article/c-co-ban-phan-4-cu-phap-c-co-ban)_
