---
title: '[SPOJ] VMTRIP - Dời Đô xứ Dừa'
author: itsjustwinds
date: 2017-08-11T07:00:52.256Z
thumbnail: /img/uploads/VMTRIP_graph.jpg
tags:
  - dfs
  - bfs
  - spoj
---
## đề: [http://vn.spoj.com/problems/VMTRIP/](http://vn.spoj.com/problems/VMTRIP/)

Sau khi thống nhất vương quốc dừa một thời gian, vị vua mới là Pirakute lại ăn ngủ không yên vì tình trạng đất nước vẫn chưa được ổn định, lạm phát dừa làm cho đất nước ngày một yếu đi, trái dừa lại dần có nguy cơ bị lạm dụng trở thành vũ khí để chọi nhau như ngày nào… Một đêm nọ Pirakute nằm mơ, thấy rằng một trong những hòn đảo xa xôi trong vương quốc của mình bỗng mọc lên một cây dừa vàng khổng lồ. Thế là sáng hôm sau tỉnh dậy, Pirakute đã nghĩ rằng : “Có thể rằng kinh đô trên hòn đảo mà ta đang ở có phong thủy không được tốt nên đất nước mới suy yếu, lẽ chăng ta nên dời đô đến hòn đảo mà ta đã nhìn thấy trong mơ !?”

Thế là ngay lập tức Pirakute đã cho triệu hồi quân thần và bàn kế sách dời đô. Sau khi nghiên cứu toàn bộ hệ thống đảo trên vương quốc dừa thì hiện toàn vương quốc có tổng cộng N đảo, được đánh số từ 1 tới N. Ngoài ra còn có M cây cầu dừa, mỗi cây cầu dừa nối một cặp hòn đảo với nhau để mọi người có thể đi từ hòn đảo này đến hòn đảo khác. Trong các hòn đảo của vương quốc, S là hòn đảo kinh đô hiện tại của vương quốc, và T chính là hòn đảo mà Pirakute đã mơ thấy và sẽ dời đô đến. Một hành trình đi từ S đến T qua các cây cầu dừa có độ dài bằng số lượng hòn đảo phân biệt phải đi qua trên hành trình đó. Để tiết kiệm chi phí dời đô, Pirakute quyết định sẽ chọn một hành trình dời đô có độ dài ngắn nhất. Tuy nhiên Pirakute nhận thấy rằng có rất nhiều cách chọn hành trình như vậy. Vốn rất thích các dãy số hoán vị nên sau một hồi suy nghĩ Pirakute đã nghĩ ra cách để chọn hành trình dời đô thích hợp:

* Gọi K là số hòn đảo phải đi qua trên hành trình dời đô ngắn nhất đi từ S đến T.
* Pirakute sẽ chọn một dãy hoán vị các số từ1 đến K: p\[1\], p\[2\], …, p\[K\]. Gọi là dãy hoán vị p
* Trong các hành trình dời đô ngắn nhất\(đi qua đúng K đỉnh\) từ S đến T. Pirakute sẽ chọn hành trình có thứ tự từ điển nhỏ nhất theo dãy hoán vị p.
* Nếu gọi a\[1\], a\[2\], …, a\[K\]là chỉ số của các hòn đảo phải đi qua của hành trình A. b\[1\], b\[2\], …,b\[K\]là chỉ số các hòn đảo phải đi qua của hành trình B. Khi đó ta nói hành trình A có thứ tự từ điển theo nhỏ hơn theo dãy hoán vị p so với hành trình B khi và chỉ khi tồn tại một số i\(1 ≤i≤K\)sao cho:
* a\[p\[1\]\] = b\[p\[1\]\]; a\[p\[2\]\] = b\[p\[2\]\]; … a\[p\[i-1\]\] = b\[p\[i-1\]\];

* a\[p\[i\]\] &lt; b\[p\[i\]\];



Tuy nhiên do có quá nhiều cách chọn hành trình dời đô nên Pirakute không thể tìm ra được hành trình dời đô thích hợp. Bạn hãy giúp Pirakute tìm ra hành trình dời đô này nhé.

## Input

* Dòng đầu tiên gồm 4 số N, M, S và T
* M dòng tiếp theo, mỗi dòng gồm 2 số u và v là chỉ số của 2 hòn đảo mà có cây cầu nối với nhau
* Dòng cuối cùng là K số của dãy hoán vị p. \(Chú ý giá trị K sẽ không được cho trước mà bạn cần phải tìm ra theo yêu cầu của bài toán\).
* Dữ liệu luôn đảm bảo:
* Có nhiều nhất một cây cầu dừa nối trực tiếp giữa 2 hòn đảo bất kì.
* Tồn tại ít nhất một đường đi từ S đến T.


## Output

* Dòng duy nhất gồm K số là chỉ số của các hòn đảo phải đi qua theo thứ tự của hành trình dời đô từ S đến T.

## Giới hạn:

* Trong 20% số test: 1 ≤N ≤ 5000; 1 ≤M ≤ 10000;
* Trong tất cả các test: 1 ≤N ≤ 100000; 1 ≤M ≤ 300000;
* 1 ≤S ≤N;
* 1 ≤T ≤N;
* S luôn khác với T.

## Chấm điểm

* Bài của bạn sẽ được chấm trên thang điểm 100. Điểm mà bạn nhận được sẽ tương ứng với % test mà bạn giải đúng.
* Trong quá trình thi, bài của bạn sẽ chỉ được chấm với 1 test ví dụ có trong đề bài.
* Khi vòng thi kết thúc, bài của bạn sẽ được chấm với bộ test đầy đủ.


## Example

```
Input:9 9 1 9
1 2
1 3
2 5
3 4
3 7
5 8
6 7
6 9
8 9
4 1 2 5 3
Output:
1 3 7 6 9
```

## Hướng dẫn

[http://viahold.com/1SJF](http://viahold.com/1SJF)

## code

[http://viahold.com/1SJV](http://viahold.com/1SJV)

