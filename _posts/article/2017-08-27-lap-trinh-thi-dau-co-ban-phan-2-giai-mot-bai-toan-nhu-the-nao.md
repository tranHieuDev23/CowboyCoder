---
title: '[Lập trình thi đấu cơ bản] Phần 2: Giải một bài toán như thế nào?'
author: Nam Phương Đại Hiệp
date: 2017-08-27T13:43:33.152Z
thumbnail: /img/uploads/comp.png
tags:
  - competive programing
  - cp
---
Như chúng ta đã biết, mục tiêu của lập trình thi đấu chính là giải nhưng bài toán được đưa ra một cách hoàn hảo nhất. Vì vậy hôm nay mình sẽ nói về những nguyên tắc cơ bản khi giải một bài toán trong lập trình thi đấu.
## Hiểu và nắm rõ bài toán được đưa ra
Thông thường, một bài toán trong lập trình sẽ được chia ra thành một số phần như sau:
- Background: Đây thường là một đoạn văn được đưa vào để cho bài toán thêm màu mè và cũng thường chả liên quan, nhưng đôi khi chúng lại là nguyên nhân chính khiến cho người đọc bị nhiễu thông tin, hay hiểu sai đề. Do đó, bạn cần tỉnh táo để tóm tắt và nắm bắt chính xác cái mà đề bài yêu cầu ta phải làm.
- Yêu cầu đề bài: Đây là phần chúng ta nên tập trung quan tâm nhiều nhất. Bời vì nó chính là cái chúng ta cần giải quyết trong những phút tiếp theo. Thông thường đề bài sẽ chia phần này với phần background ở trên thành những phần riêng biệt để thí sinh dễ phân biệt. Tuy nhiên, người ta cũng có thể đưa ra yêu cầu một cách gián tiếp. Khi đó, những yêu cầu được ẩn dưới câu chuyện được đưa ra và ta phải tinh ý để không bỏ sót một chi tiết nào trong đó.
- Dữ liệu vào/ra: Là phần rất quan trọng. Chúng cho ta biết dữ liệu vào được bố trí như thế nào và phải xuất ra kết quả ra sao mới đúng. Và thêm nữa đó là giới hạn hoặc mô tả các subtask của dữ liệu vào để ta biết cần phải giải quyết bằng cách nào là hợp lí.
- Ví dụ: Đây sẽ là phần ta hay nghiên cứu nhất trên đề. Nó là minh họa cho bài toán, cho yêu cầu đặt ra. Cho nên, hiểu rõ các ví dụ, cũng như giải thích được chúng là một lợi thế rất lớn.

Bạn có thể xem một bài toán mẫu ở đây: http://vn.spoj.com/problems/QBSELECT/
##Triển khai các ý tưởng
Công việc tiếp theo sau khi đã hiểu được bài toán muốn nói gì chắc chắn là phải bắt tay vào việc nghĩ bài. Đầu tiên, ta phải nhận xét được bài toán đề ra có những đặc điểm gì và chia chúng ra thành những bài toán nhỏ. Giai đoạn này phần nhiều dựa vào kinh nghiệm cũng như sự nhạy bén của bạn. Vì suy nghĩ đúng hướng thì sẽ tiết kiệm được rất nhiều thời gian cũng như trở ngại khi bắt đầu code. Do đó, bạn nên cố gắng làm càng nhiều bài tập càng tốt và rút được càng nhiều kinh nghiệm từ chúng càng tốt. Một điều phải nhớ, đó là thuật toán bạn đưa ra phải chạy tốt trong thời gian cho phép. Vì máy tính hiện đại có thể chạy được tầm khoảng 100000000 phép tính trên một giây, nên những thuật toán O(N^2) với N khoảng 1000000 là không chấp nhận được, do đó phải tìm thuật toán có thời gian chạy từ O(NlogN) trở xuống là hợp lí. Tương tự như vậy, hãy ước lượng cho đúng thuật toán của mình để có thể ăn được càng nhiều test càng tốt. Vì độ phức tạp tính toán là một vấn đề phức tạp, nên chúng ta sẽ không bàn sâu hơn ở đây.
![undefined](/img/uploads/0202.jpg)
##Coding
 Vâng, đây có lẽ vừa là phần hứng thú nhất cũng là phần khó chịu nhất. Bạn phải code thật không ngoan và khoa học nếu không muốn dính phải bug và ngồi loay hoay để tìm nó. Tuy nhiên nói vậy chứ trong khi code khó lòng có ai đủ tỉnh táo để làm một phát ăn ngay được. Do đó, có một số số nguyên tắc để giúp code của bạn trong sáng và dễ "gỡ bug" hơn:
- Đặt tên biến, function theo một hệ thống nhất định: Hãy cố gắng để quản lí các biến, function của mình một cách hiệu quả. Sao cho để nhìn vào chúng, bạn biết được chúng có chức năng gì cũng như giá trị của nó.
- Hiểu rõ những gì mình đã code, đang code và sắp code. Ví dụ, khi đang code function solve() thì hãy suy nghĩ về function output(). Phải làm sao để chúng đồng nhất và kết quả được lưu như thế nào để lúc xuất ra được hiệu quả.
- Hiểu rõ những cấu trúc mình đang sử dụng: Điều này khá quan trọng nhất là với những bạn hay code bằng C++. C++ cung cấp khá nhiều cấu trúc dữ liệu trừu tượng, do đó đôi khi lúc sử dụng chúng chúng ta tạo ra bug mà không hề hay biết. Và những cấu trúc đó thì lại vô cùng khó debug. Nên tốt nhất ta phải hiều những gì ta đang làm là chắc ăn nhất.  
