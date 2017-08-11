---
title: '[Lý thuyết đồ thị cơ bản] Phần 5: DAG và sắp xếp topo trên đồ thị'
author: Phương Nguyễn
date: 2017-08-11T16:37:17.762Z
thumbnail: /img/uploads/Lý thuyết đồ thị cơ bản - cover.jpg
tags:
  - ly-thuyet-do-thi-co-ban
---
*Phần trước: [\[Lý thuyết đồ thị cơ bản\] Phần 4: Đường đi ngắn nhất trên đồ thị và thuật toán Dijkstra](http://cowboycoder.tech/article/ly-thuyet-do-thi-co-ban-phan-4-duong-di-ngan-nhat-tren-do-thi-va-thuat-toan-dijkstra)*

# Chu trình

Theo wikipedia, trong lý thuyết đồ thị, chu trình trong đồ thị là một dây chuyền đóng. Đồ thị chỉ gồm một chu trình với \\(n\\) đỉnh được gọi là đồ thị vòng, ký hiệu \\(Cn\\).

## Các loại chu trình:

![undefined](/img/uploads/ly-thuyet-do-thi-co-ban-5-1.svg)

* Chu trình chẵn: là chu trình có độ dài chẵn.
* Chu trình lẻ: là chu trình có độ dài lẻ.
* Chu trình có hướng: là một chu trình đơn mà mọi cung trong đó đều cùng hướng, nghĩa là mọi đỉnh đều có bậc trong và bậc ngoài bằng 1. Có thể gọi đơn giản là chu trình khi ngữ cảnh rõ ràng.
* Chu trình đơn: là chu trình không chứa cùng một cạnh quá một lần. Trong đồ thị ở hình trên, \\( (1, 5, 2, 1) \\) là một chu trình đơn. Nếu không chỉ rõ, chu trình thường được hiểu là một chu trình đơn. (Nó có thể đi qua một điểm nhiều lần)
* Chu trình Euler: là chu trình qua tất cả các cạnh, mỗi cạnh đúng một lần.
* Chu trình bao trùm: là cách gọi khác của chu trình Hamilton.

Ở đây chúng ta sẽ nhắc đến chu trình có hướng và cách phát hiện ra chu trình trên đồ thị có hướng bằng DFS (có rất nhiều cách để phát hiện chu trình nhưng DFS thông dụng nhất, và một cách khác sẽ được nói ở mục dưới). Trong một số bài giảng, thường sẽ phân loại cạnh thu được sau DFS và sẽ có hai loại gọi là tree edge và backedge, nhưng mình sẽ nói đơn giản cách kiểm tra một đồ thị có hướng có tồn tại chu trình hay không.

Thuật toán đơn giản là, trong quá trình DFS thăm tới đỉnh \\( u \\), nếu khi ta xét tới một đỉnh \\( v \\) kề với đỉnh \\( u \\) mà đã được thăm rồi và quá trình thăm chưa kết thúc, khi đó đồ thị sẽ tồn tại chu trình. 

Dễ dàng chứng minh tính đúng đắn của thuật toán. Phương pháp cài đặt được trình bày ở dưới.

# DAG \(Directed Acyclic Graph\)

Một đồ thị có hướng \\( G = (V, E) \\) được gọi là một DAG khi đồ thị đó không có chu trình có hướng.

## Sắp xếp topo trên đồ thị

### Công việc

Cho đồ thị có hướng không chu trình (DAG). Tìm cách sắp xếp thứ tự các đỉnh sao cho với mọi cung từ \\( u \\) đến \\( v \\) trong đồ thị, \\( u \\) luôn nằm trước \\( v \\).

### Thuật toán
Thuật toán để tìm thứ tự topo gọi là thuật toán sắp xếp topo. Mỗi DAG luôn có ít nhất một thứ tự topo và có thuật toán tuyến tính để tìm nó. 

#### Cách 1:

Ý tưởng: Thêm ngẫu nhiên một đỉnh \\( u \\) không có cung vào ở trạng thái hiện tại của đồ thị vào trong mảng topo, bỏ tất cả các cung đi ra từ \\( u \\) đi và lặp lại như bước đầu cho tới khi tập đỉnh của đồ thị hiện tại rỗng.
	
Xem xét:
* Thuật toán này được phát hiện bởi Kahn vào năm 1962.
* Khi ta thêm một đỉnh \\( u \\) ngẫu nhiên không có cung vào ở trạng thái hiện tại của đồ thị vào mảng topo, tất cả các cung vào \\( u \\) ở đồ thị ban đầu đều xuất phát từ các đỉnh đứng trước \\( u \\) trong mảng topo đi tới \\( u \\) do bước bỏ các cung đi ra từ một đỉnh đã được sắp xếp.
* Nếu đồ thị tồn tại trạng thái không tồn tại một đỉnh không có cung vào mà tập cạnh khi đó khác rỗng, hoặc số lượng đỉnh trong mảng topo khác \\( \mid V \mid \\) thì chứng tỏ đồ thị có chu trình, và không phải một DAG.

Độ phức tạp của thuật toán là \\( O( \mid V \mid + \mid E \mid) \\).
	
Cài đặt bằng C++:

{% highlight c++ %}
vector<int> g[maxn];
int n, m;                                   //số lượng đỉnh và cạnh
int deg[maxn];                              //lưu số lượng cung vào.
int x[maxn], slx, q[maxn], R;   //x là mảng thứ tự topo, q là hàng đợi chứa các đỉnh 
                                //không có cung vào ở trạng thái hiện tại
void sxtopo()
{
    for(int u=1; u<=n; ++u) if(deg[u]==0) q[++R]=u;
    while(R)
    {
        int u=q[R--];
        x[++slx]=u;
        for(int i=0; i<g[u].size(); ++i)
        {
            int v=g[u][i];
            --deg[v];
            if(deg[v]==0) q[++R]=v;
        }
    }
    if(slx<n) cout<< "!DAG";
}
{% endhighlight %}
	
#### Cách 2:

Ý tưởng: Sau khi duyệt DFS trên đồ thị, ta sẽ có một mảng kết quả lưu các đỉnh theo thứ tự thăm xong trước tới sau, mảng này chính là trật tự topo.

Xem xét: 
* Tìm kiếm theo chiều sâu trên đồ thị (DFS) có thể dùng giải thuật này để tạo một danh sách tuyến tính các đỉnh của một đồ thị. Có ba cách hiện thực phương pháp này, một trong số đó là duyệt đảo hậu thứ tự (reverse postordering). Với các đồ thị có hướng không có chu trình, cách duyệt đảo hậu thứ tự cho ra một trật tự topo của đồ thị đó.
* Với phương pháp sắp xếp topo bằng DFS, nếu đồ thị không phải là DAG thì ta vẫn có một thứ tự, nhưng ta lại có thế dùng DFS để kiểm tra luôn xem đồ thị có là DAG hay không.
* Chứng minh thứ tự nhận được thỏa mản là một trật tự topo: Giả sử tồn tại một đỉnh \\( u \\) đứng trước một đỉnh \\( v \\) trong mảng kết quả mà có cung đi từ \\( v \\) tới \\( u \\). Khi đó do quá trình DFS \\( u \\) được thăm trước \\( v \\), nên khi thăm tới \\( v \\), ta xét các đỉnh kề với đỉnh \\( v \\), trong đó \\( u \\) được đánh dấu đã thăm -> đồ thị không phải một DAG -> trái với giả thuyết.

Độ phức tạp của thuật toán là \\( O( \mid V \mid + \mid E \mid) \\).
	
Cài đặt bằng C++:

{% highlight c++ %}

vector<int> g[maxn];
int x[maxn], slx;
int dd[maxn], kt[maxn];
void DFS(int u)
{
    dd[u]=1;
    for(int i=0; i<g[u].size(); ++i)
    {
        int v=g[u][i];
        if(dd[v] && !kt[v]) 
        {
            cout<< "!DAG"; 
            exit(0);
        }
        DFS(v);
    }
    x[++slx]=u;
    kt[u]=1;
}
{% endhighlight %}

### Ứng dụng

Sắp xếp topo có rất nhiều ứng dụng quan trọng, đặc biệt là áp dụng quy hoạch động trên mảng trật tự topo.

#### Bài toán tổng số đường đi

Cho đồ thị có hướng không chu trình và 2 đỉnh \\( s \\), \\( t \\). Cho biết có bao nhiêu đường đi từ \\( s \\) đến \\( t \\). (2 đường đi khác nhau nếu thứ tự các đỉnh trên chúng khác nhau)

Thuật toán: DFS từ \\( s \\). Gọi ```f[u]``` là số đường đi từ \\( u \\) tới \\( t \\). Khi đó ```f[t]=1```.

Nếu có một cung đi từ \\( u \\) tới \\( v \\), ```f[u] += f[v]```.

Cài đặt bằng C++:

{% highlight c++ %}
DFS(s);
f[t]=1;
for(int i=n; i>=1; --i) 
{
    int u=x[i];
    for(int j=0; j<g[u].size(); ++j)
    {
        int v=g[u][j];
        f[u]+=f[v];
    }
}
{% endhighlight %}

#### Bài toán đường đi dài nhất

Cho đồ thị có hướng, không có chu trình, có trọng số và 2 đỉnh \\( s \\), \\( t \\). Tìm đường đi dài nhất từ \\( s \\) tới các đỉnh khác.

Thuật toán: DFS từ \\( s \\). Gọi ```f[u]``` là đường đi dài nhất từ \\( s \\) tới \\( u \\). Khi đó ```f[s]=0```.

Nếu có một cung đi từ \\( u \\) tới v, ```f[v]=max(f[v], f[u]+ trọng số cạnh (u,v))``.
	
Cài đặt bằng C++:

{% highlight c++ %}
DFS(s);
f[t]=1;
for(int i=n; i>=1; --i) 
{
    int u=x[i];
    for(int j=0; j<g[u].size(); ++j)
    {
        int v=g[u][j];
        f[u]+=f[v];
    }
}
{% endhighlight %}

# Một số bài tập thực hành

[TOPO2509](http://www.spoj.com/KSTN/problems/TOPO2509/) - Bài tập của trường Đại học Bách Khoa Hà Nội.

[NKLEAGUE](http://vn.spoj.com/problems/NKLEAGUE/) (SPOJ). Lời giải có tại [đây](http://cowboycoder.tech/spoj/spoj-nkleague-giai-bong-da).

[KCOLLECT](http://vn.spoj.com/problems/KCOLLECT/) (SPOJ).
