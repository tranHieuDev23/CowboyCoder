---
title: Bài viết thử nghiệm
author: Admin Tổng quản
date: 2017-07-30T12:55:02.646Z
thumbnail: /img/uploads/bai-viet-thu-nghiem.jpg
tags:
  - testing
---
Bài viết này sẽ chỉ ra những tính năng của trang web Cowboy Coder mà các thành viên trong ban quản trị cần biết.

1. Làm sao để viết bài?

Để được cho phép viết bài, đầu tiên người dùng cần phải tạo một tài khoản GitHub và được sự cho phép của một admin trong trang. Admin sẽ thêm tài khoản mới và vai trò của tài khoản này trên trang[ Netlify App](https://app.netlify.com/) - hệ thống quản lý nội dung của trang web. Khi đã được sự phê duyệt, người dùng phải đi tới trang [cowboycoder.tech/admin](https://www.cowboycoder.tech/admin) và đăng nhập bằng tài khoản GitHub của mình.

![Đăng nhập bằng GitHub](/img/uploads/Untitled-1.png)

Sau khi đăng nhập thành công thì sẽ chuyển sang giao diện quản lý bài viết, gồm 3 cột Draft (bản thảo đang chỉnh sửa), Waiting for Review (bài viết đang đợi phê duyệt) và Waiting to go live (bài viết đang đợi đăng). Để viết bài cho một chuyên mục, ta tìm tên của chuyên mục đó ở bên cạnh và ấn dấu cộng.

![Giao diện quản lý bài viết](/img/uploads/Untitled-2.jpg)

Cuối cùng là thực hiện viết bài ở giao diện viết bài và ấn Save.

![Giao diện viết bài.](/img/uploads/Untitled-3.jpg)

Việc phê duyệt bài viết và đăng bài viết sẽ diễn ra ở giao diện quản lý.

1. Syntax Highlighting (tô màu code)

Để tô màu code, thêm dòng “highlight \[tên ngôn ngữ\]” bên trong ngoặc đặc biệt (sẽ không viết ở đây vì sẽ sinh lỗi) ở đầu đoạn code và thêm “endhighlight” bên trong ngoặc ở cuối đoạn code. Ví dụ về việc tô màu code":

![Syntax Highlighting](/img/uploads/Capture.PNG)

{% highlight c++ %}

\#include <stdio.h>

int main()

{

cout << “Hello World!”;

return 0;

}

{% endhighlight %}

Chú ý sẽ có 1 số kí tự bị ẩn đi do quy tắc của Markdown. Đoạn này hãy tìm các kí tự HTML thay thế bằng Google :)).

Còn 1 vài cái nữa nhưng sẽ nói sau.

