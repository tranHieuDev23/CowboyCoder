---
title: Lập trình thi đấu hiệu quả hơn với Codeforces Bookmark!
author: rknguyen
date: 2017-08-13T05:18:17.771Z
thumbnail: /img/uploads/codeforces-bookmark-image.jpg
tags:
  - codeforces
  - bookmark
  - code-faster
---
## Codeforces Bookmark và lời nói đầu
* **Ý tưởng**: Bắt nguồn từ những screencast của Petr mà mình xem ở Youtube, một extension có thể tự động khởi tạo bài tập từ template có sẵn và tự động kiểm tra các test mẫu.
* **Tại sao mình không làm extension mà lại là bookmark?** Vì kiến thức của mình còn hạn hẹp không thể viết được extension cho cả các trình duyệt Firefox và các trình duyệt khác, và thức sự thì bookmark đã có mặt ở các trình duyệt tiên tiến hiện nay nên việc sử dụng bookmark sẽ không khó khăn để có thể sử dụng ở các loại trình duyệt.
* **Chức năng của Codeforces-Bookmark này?**
 * Tạo file bài tập theo ID của bài tập đó dựa vào template có sẵn do bạn tuỳ chỉnh.
 * Kiểm tra bài tập của bạn với những test mẫu chỉ trong 1 nốt nhạc.

## Hình ảnh khi sử dụng

![undefined](/img/uploads/codeforces-bookmark-demo-image.png)

## Các bước cài đặt
* Tải và cài đặt Ampps
 * Tải về Ampps tại trang chủ [tại đây](http://www.ampps.com/download)
 * Nếu bạn vẫn còn không biết cách cài đặt Ampps thì hãy coi hướng dẫn ở cuối trang.
* Tải về và thiết lập để sử dụng Codeforces Bookmark.
* Cài đặt phím tắt để sử dụng nhanh trên CodeBlocks.
* Hướng dẫn sử dụng chi tiết và hiệu quả trên Codeblocks.

## Lưu ý khi sử dụng Ammps mỗi lần làm bài tập
Nếu sau khi cài đặt nó chạy thì hãy tắt nó bằng cách chọn dấu mũi tên lên dưới navbar, sau đó chuột phải vào icon Ampps và chọn Quit

![undefined](/img/uploads/arrow-up-codeforces-bookmark-image.png)

Sau đó mở Ammps bằng quyền Admin

Mỗi lần sử dụng hãy mở Ampps bằng quyền Admin mới có thể hoạt động ổn định với Codeforces Bookmark

![undefined](/img/uploads/open-ampps-with-admin.png)

## Hướng dẫn tải về và thiết lập
**Bước 1:** Vào [đây](https://github.com/rknguyen/codeforces-bookmark) để tải về các file cần thiết về để bắt đầu thiết lập.

![undefined](/img/uploads/download-zip-image.png)

**Bước 2:** Vào nơi cài đặt Ampps, đối với
* 7/8/8.1/10 64bit: `C:\Program Files (x86)\Ampps`
* 7/8/8.1/10 32bit: `C:\Program Files\Ampps`

Vào thư mục `www` tạo một thư mục mới tên là `codeforces`, sau đó chép toàn bộ trong ZIP đã tải ở trên vào trong thư mục vừa tạo.

![undefined](/img/uploads/extract-zip-to-codeforces-bookmark-folder.png)

**Bước 3:** Mở file `config.php` sẽ có dạng
```
&ltphp
$CONFIG = Array(
    'PATH' => '',
    'DIR_SAVE_TEST' => 'tests',
);
?>

```
Ví dụ thư mục bạn lưu trữ các bài tập codeforces là `C:\CodeBlocks\CodeForces` thì bạn sẽ thay thế nó bằng
```
&lt?php
$CONFIG = Array(
    'PATH' => 'C:\CodeBlocks\CodeForces',
    'DIR_SAVE_TEST' => 'tests',
);
?>

```
Sau đó lưu lại.

**Bước 4:** 
Mở file bookmark.txt, sao chép đoạn mã trong đó.

Mở trình duyệt lên và thêm bookmark
* Tên: Các bạn có thể đặt theo tên các bạn thích
* URL: Dán đoạn mã vừa sao chép ở trên vào

Lưu lại.

![undefined](/img/uploads/codeforces-bookmark-form-image.png)

## Thiết lập phím tắt để sử dụng nhanh trên CodeBlocks
**Bước 1:** Nhìn trên thanh công cụ, chọn Tools -> Configure tools...

Nhìn trên bảng vừa hiện ra, chọn Add

* Name: check
* Executable: $(TARGET_OUTPUT_DIR)$(TARGET_OUTPUT_BASENAME)checkExamTest.exe
* Working Directory: $(TARGET_OUTPUT_DIR)

Nhấn OK để lưu

![undefined](/img/uploads/edit-tool-codeblocks-image.png)

**Bước 2:**
Tiếp tục tại thanh công cụ, chọn Settings -> Editor...

Nhìn bên tay trái, kéo xuống chọn Keyboard shortcuts. Nhìn vào commands, chọn dấu `+` tại Tools rồi nhấn vào check (cái tên nãy đặt cho Tool)

Nhìn sang phải, ô New shortcut. Ở đây bạn muốn phím tắt nào thì hãy bấm vào. Ví dụ muốn Ctrl-E thì tại đó bấm vào nút Ctrl và nút E cùng lúc nó sẽ tự nhận.

Sau đó bấm Add bên dưới và nhấn vào OK để lưu.

![undefined](/img/uploads/keyboard-shorcut-image.png)

**Lưu ý:** Mỗi lần bạn muốn sử dụng chấm thử test ví dụ hãy bấm F9 (tức là compile & run) file bài tập mà bạn đang làm để nó nhận diện thư mục hiện tại sau đó tắt đi (chỉ cần làm duy nhất 1 lần với file mới, khi chuyển file bài khác thì làm lại).
Sau đó mỗi lần code xong bấm phím tắt mà bạn đã cài đặt ở trên để chạy trình chấm. Ở trình chấm mình đã làm phần compile nên các bạn sau khi đã F9 như trên thì sau đó chỉ cần phím tắt để nó compile và chấm luôn. Nếu có lỗi nó sẽ hiện ở màn hình console.

## Hướng dẫn cài đặt Ampps
Mở file cài đặt Ampps lên

Nhấn vào Next, tiếp tục tick vào dòng chữ `I accept the agreement`, sau đó tiếp tục nhấn Next cho đến khi nó cài đặt, đợi thành tiến trình chạy xong bỏ tick ở dòng Launch Ampps và bấm Finish

Với các bảng hiện lên hỏi sau đó bạn hãy chọn `Allow access`

## Kết thúc
* Nếu có vấn đề gì xảy ra khi sử dụng các bạn hãy bình luận ở bên dưới để mình biết nhé!
* Ngoài ra nếu các bạn thấy hay thì hãy bấm Like để theo dõi các bài viết của bọn mình và share để nhiều người biết đến bọn mình hơn nhé!
* Mọi sự ủng hộ từ các bạn là động lực rất lớn để nhóm mình ra thêm nhiều bài viết hay - bổ ích và các lời giải bài tập trên SPOJ và Codeforces nhanh chóng hơn!
