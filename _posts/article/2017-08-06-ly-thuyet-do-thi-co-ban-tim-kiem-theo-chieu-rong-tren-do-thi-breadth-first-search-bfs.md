---
title: >-
  [Lý thuyết đồ thị cơ bản] Tìm kiếm theo chiều rộng trên đồ thị - Breadth-First
  Search (BFS)
author: Phương Nguyễn
date: 2017-08-05T17:19:14.455Z
thumbnail: /img/uploads/Lý thuyết đồ thị cơ bản - cover.jpg
tags:
  - lý-thuyết-đồ-thị-cơ-bản
  - graph
---
Phần trước: [\[Lý thuyết đồ thị cơ bản\] Phần 1: Giới thiệu](http://cowboycoder.tech/article/ly-thuyet-do-thi-co-ban-phan-1-gioi-thieu)

Lấy một bài toán đơn giản: ta có một trạng thái của khối rubik 3 * 3. 

![undefined](/img/uploads/ly-thuyet-do-thi-co-ban-2-1.jpg)

Ta muốn thực hiện ít bước nhất để hoàn thành khối rubik này. Vậy phải làm sao?

![undefined](/img/uploads/ly-thuyet-do-thi-co-ban-2-2.jpg)

Ta sẽ quy đổi bài toán này thành một bài toán trên đồ thị: mỗi một đỉnh trên đồ thị là một trạng thái của rubik, và hai đỉnh được nối với nhau bởi một cạnh không trọng số nếu như từ trạng thái này có thể trực tiếp chuyển sang trạng thái kia. Vậy ta cần tìm đường đi ngắn nhất từ nút hiện tại tới nút kết quả.

Rơi vào trường hợp khác ta lại muốn biết tất cả các đường đi từ u tới v. Hoặc có thể là tìm tất cả đường đi từ u tới một nút nào đó khác. Hoặc ta muốn duyệt tất cả các nút của đồ thị hay các cạnh của đồ thị...

Các vấn đề này sẽ được giải quyết bằng các thuật toán tìm kiếm trên đồ thị. Có nhiều thuật toán tìm kiếm trên đồ thị, bài viết này sẽ nói về thuật toán tìm kiếm theo chiều rộng (Breadth-First Search - BFS). 

Thuật toán tìm kiếm theo chiều rộng thường dùng cho hai mục đích: tìm kiếm đường đi từ một đỉnh gốc tới một đỉnh khác hoặc ngược lại, hoặc tìm kiếm đường đi từ một đỉnh gốc tới tất cả các đỉnh khác. Trong đồ thị không có trọng số hoặc tất cả trọng số bằng nhau, đường đi này sẽ là ngắn nhất có thể. Thuật toán này còn được dùng để tìm các thành phần liên thông của đồ thị, hoặc kiểm tra đồ thị hai phía, ...

# Thuật toán:

Thuật toán sử dụng một cấu trúc dữ liệu hàng đợi (queue) để lưu trữ thông tin trung gian thu được trong quá trình tìm kiếm. Queue là một cấu trúc cho phép lưu trữ các dữ liệu vào và xuất dữ liệu ra theo thứ tự đi vào (first-in, first-out - FIFO):

1. Thêm đỉnh gốc vào queue và đánh dấu đỉnh gốc.
2. Nếu queue chưa rỗng, lấy ra đỉnh u đầu tiên khỏi queue. Xét các đỉnh v kề với đỉnh u
* Nếu đỉnh v đã được đánh dấu thì bỏ qua.
* Nếu v chưa được đánh dấu thì thêm đỉnh v vào queue và đánh dấu đỉnh v.
3. Nếu queue rỗng, dừng quá dình tìm kiếm.

![undefined](/img/uploads/ly-thuyet-do-thi-co-ban-2-3.jpg)

Cài đặt bằng C++:

{% highlight c++ %}
vector<int> g[maxn]; // vector lưu trữ đỉnh kề
queue<int> s; // hàng đợi
int cl[maxn]; // mảng đánh dấu

void bfs(int u) // u là đỉnh xuất phát
{
    s.clear(); // dọn sạch hàng đợi
    s.push(u); // bỏ đỉnh xuất phát vào
    cl[u] = 1; // đánh dấu đỉnh xuất phát
    while(!s.empty()) // chừng nào hàng đợi còn chưa rỗng
    {
        int u = s.front(); // lấy ra đỉnh ở đầu queue
        s.pop(); // bỏ đỉnh ở đầu queue ra khỏi queue
        for(int v : g[u]) // với mỗi đỉnh v kề với đỉnh u
        {
            if(cl[v]==0) // nếu đỉnh v chưa được đánh dấu
            {
                s.push_back(v); // bỏ đỉnh v vào queue
                cl[v]=1; // đánh dấu đỉnh v
            }
	}
    }
}
{% endhighlight %}

Khi áp dụng, tùy theo yêu cầu xử lí đồ thị mà người lập trình cần sửa đổi cho phù hợp.

# Phân tích thuật toán:
* Không gian: Nếu V là tập hợp của đồ thị và |V| là số đỉnh của đồ thị thì không gian cần dùng của thuật toán là 2|V| ô nhớ.
* Thời gian: Nếu V và E là tập hợp các đỉnh và cung của đồ thị, thì thời gian thực thi của thuật toán là O(|E|+|V|) vì trong trường hợp xấu nhất, mỗi đỉnh và cung của đồ thị được thăm đúng một lần. O(|E|+|V|) nằm trong khoảng từ O(|V|) đến O(|V|^2), tùy theo số cung của đồ thị.

# Hệ quả:
Sau khi BFS để tìm đường đi từ một đỉnh u tới tất cả các đỉnh v khác trong đồ thị, nếu ta gọi pre[v] là nút dẫn tới đỉnh v trong quá trình bfs với mọi v là một đỉnh thuộc đồ thị, ta sẽ có được đường đi từ

pre[v] -----> v
pre[pre[v]] -----> v	
pre[pre[pre[v]]] -----> v
...
u -----> v

là ngắn nhất.
