---
title: >-
  [Lý thuyết đồ thị cơ bản] Phần 3: Tìm kiếm theo chiều sâu trên đồ thị -
  Depth-First Search (DFS)
author: Phương Nguyễn
date: 2017-08-07T15:25:31.183Z
thumbnail: /img/uploads/Lý thuyết đồ thị cơ bản - cover.jpg
tags:
  - lý-thuyết-đồ-thị-cơ-bản
  - graph
---
*Phần trước: [\[Lý thuyết đồ thị cơ bản\] Phần 2: Tìm kiếm theo chiều rộng trên đồ thị - Breadth-First Search \(BFS\)](http://cowboycoder.tech/article/ly-thuyet-do-thi-co-ban-tim-kiem-theo-chieu-rong-tren-do-thi-breadth-first-search-bfs)*

Bài này chúng ta sẽ tiếp tục với các thuật toán tìm kiếm trên đồ thị. Bài trước là BFS, bài này sẽ nói về DFS, tìm kiếm theo chiều sâu. Nó là một thuật toán đơn giản nhưng bạn sẽ làm được nhiều thứ tuyệt vời với nó. 

Như bình thường, chúng ta sẽ có một đồ thị có hướng liên thông G=\(V, E\), \|V\|=n, \|E\|=m và sẽ biểu diễn nó bằng một danh sách kề. Chúng ta sẽ sử dựng một mảng vector để lưu. Vector g\[u\] sẽ lưu một danh sách các đỉnh kề với u.

Và mục đích của chúng ta sẽ là "khám phá" đồ thị này. Chúng ta sẽ đi thăm tất cả các đỉnh của đồ thị, theo một thứ tự bất kì nào đó, mỗi đỉnh một lần.

Bằng việc sử dụng BFS, chúng ta sẽ duyệt đồ thị loang ra theo từng lớp từ một đỉnh xuất phát u và chúng ta sẽ tìm được những con đường ngắn nhất, những cách nhanh nhất để tới một đỉnh khác. Và BFS là một cách tốt để tìm xem đỉnh nào không thể tới được từ u. 

DFS tương tự như vậy. Tuy những con đường đi tới một đỉnh khác chúng ta tìm ra chưa chắc đã là ngắn nhất, nhưng xét trên phương diện cài đặt thì DFS đơn giản và gọn nhẹ hơn BFS nhiều.

# Ý Tưởng

Ý tưởng vô cùng đơn giản. Nó giống như việc bạn lạc vào một mê cung. Và bạn có một cái bánh mì. Cách tốt nhất để thoát khỏi mê cung trước khi bánh mì hết là: Bạn nhìn thấy một lối đi trước mặt, bạn đi theo lối đó, và vừa đi vừa rải những mẩu bánh mì nhỏ dọc theo con đường. Khi bạn tới một ngõ cụt, bạn quay lại con đường đã đi. Nếu bạn gặp ngã rẽ, bạn nhìn thấy bánh mì ở một con đường và bạn biết mình đã đi qua nó rồi, nó vô dụng, và bạn sẽ đi theo ngả khác. 

Và nếu bạn hết bánh mì, nó giống như việc bộ nhớ máy tính của bạn không đủ hoặc thời gian bạn có để giải quyết vấn đề đã hết vậy. Xin chúc mừng, bạn đã dùng hết thời gian và bánh mì để duyệt các đỉnh trong mê cung, và giờ bạn đã mắc kẹt và sẽ chết đói :v

![undefined](/img/uploads/ly-thuyet-do-thi-co-ban-3-1.jpg)

# Thuật Toán

1. Thăm đỉnh xuất phát, đỉnh u, đánh dấu đỉnh u.
2. Xét các đỉnh v kề với đỉnh hiện đang thăm
 * Nếu đỉnh v chưa được đánh dấu \(chưa thăm\), thăm đỉnh v.
 * Nếu đỉnh v đã được đánh đấu, bỏ qua.

![undefined](/img/uploads/ly-thuyet-do-thi-co-ban-3-2.gif)

# Cài đặt bằng ngôn ngữ C++

So sánh với BFS, chúng ta có thể cài đặt DFS dễ dàng với một hàm đệ quy.

Tùy theo những gì bạn cần làm trên đồ thị mà bạn có thể điều chỉnh code cho phù hợp. 

{% highlight c++ %}
vector g[maxn]; // vector lưu các đỉnh kề với các đỉnh

int dd[maxn]; // mảng đánh dấu

void dfs(int u)

{

    dd[u]=1; // đánh dấu đỉnh u đã đi qua

    for(int i = 0; i < g[u].size(); ++ i) // với mỗi đỉnh v kề với u

    {

        int v = g[u][i];

        if(dd[v] == 0) dfs(v); // nếu v chưa đánh dấu, tới thăm đỉnh u

    }
}
{% endhighlight %}

# Độ phức tạp

O\(\|V\| + \|E\| \) tương đương BFS

* DFS được gọi đúng 1 lần ứng với mỗi đỉnh.

* Mỗi cạnh được duyệt qua 1 lần với đồ thị có hướng. Nếu là đồ thị vô hướng thì mỗi cạnh được duyệt qua 2 lần.

# Ứng dụng

DFS được ứng dụng rất nhiều. Ví dụ như...

* Xác định các thành phần liên thông của đồ thị

* Sắp xếp tô-pô cho đồ thị

* Xác định các thành phần liên thông mạnh của đồ thị có hướng

* Kiểm tra một đồ thị có phải là đồ thị phẳng hay không

**Chú ý:** Với code đệ quy bằng ngôn ngữ C++, do C++ giới hạn bộ nhớ một chương trình con được phép sử dụng, đôi khi số lượng đỉnh lớn một chút sẽ làm bạn bị tràn lượng bộ nhớ đó, cần phải áp dụng cài đặt khử đệ quy để tránh trường hợp này. Tuy nhiên trong các cuộc thi lập trình thi đấu (và trong lập trình thực tế), bạn ít khi gặp phải trường hợp này. Cài đặt khử đệ quy cũng khó và dễ sai hơn so với đệ quy, nên cũng không đáng phải liều mạng tới mức đó.

# Một số bài tập vận dụng 

[http:\/\/vn.spoj.com\/problems\/ADS\/](http://vn.spoj.com/problems/ADS/)

[http:\/\/vn.spoj.com\/problems\/PWALK\/](http://vn.spoj.com/problems/PWALK/)
