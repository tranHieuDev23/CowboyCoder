---
title: '[C++ Cơ bản] Phần 5: Biến và kiểu dữ liệu'
author: Admin Tổng Quản
date: 2017-08-08T02:05:22.426Z
thumbnail: /img/uploads/C++ Cơ bản - Thumbnail.jpg
tags:
  - cpp-cơ-bản
  - programming
---
*Phần trước: [\[C++ Cơ bản\] Phần 4: Cú pháp C++ cơ bản](http://cowboycoder.tech/article/c-co-ban-phan-4-cu-phap-c-co-ban)*

Khi lập trình, chúng ta cần phải sử dụng biến để lưu trữ dữ liệu của chương trình. Các biến được lưu trữ trên bộ nhớ của hệ thống - khi ta khai báo một biến trong chương trình, ta đang yêu cầu hệ thống trích ra một khoảng bộ nhớ để lưu trữ thông tin của biến đó.

C++ là ngôn ngữ đặt kiểu dữ liệu tĩnh (statically typed), có nghĩa là mỗi biến và hàm của chương trình đều có một kiểu dữ liệu cố định trong quá trình chạy chương trình. Kiểu dữ liệu quyết định kích thước bộ nhớ mà biến hoặc hàm chiếm trên hệ thống, khoảng giá trị mà biến hoặc hàm có thể biểu diễn, và những thao tác xử lý ta có thể thực hiện lên giá trị của chúng.

# Các kiểu dữ liệu nguyên thủy

<table>
<tr>
    <th>Kiểu dữ liệu</th>
    <th>Từ khóa</th>
</tr>
<tr>
    <td>Boolean<br/>Kiểu dữ liệu đúng sai (true/false)</td>
    <td>bool</td>
</tr>
<tr>
    <td>Character<br/>Kiểu kí tự</td>
    <td>char</td>
</tr>
<tr>
    <td>Integer<br/>Kiểu số nguyên</td>
    <td>int</td>
</tr>
<tr>
    <td>Floating point<br/>Kiểu số thực</td>
    <td>float</td>
</tr>
<tr>
    <td>Double floating point<br/>Kiểu số thực, với khoảng biểu diễn và độ chính xác cao hơn</td>
    <td>double</td>
</tr>
<tr>
    <td>Valueless<br/>Không trả giá trị gì về cả. Kiểu dữ liệu này thường thấy khi ta muốn tạo ra một chương trình con - một hàm chỉ thực hiện thao tác trên các đối tượng, mà không trả lại gì cả.</td>
    <td>void</td>
</tr>
<tr>
    <td>Wide character<br/>Kiểu kí tự, với khoảng biểu diễn rộng hơn</td>
    <td>wchar_t</td>
</tr>
</table>







