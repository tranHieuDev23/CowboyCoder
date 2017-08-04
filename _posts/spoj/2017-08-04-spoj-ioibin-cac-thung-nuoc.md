---
title: '[SPOJ] IOIBIN - Các thùng nước'
author: CVHvn
date: 2017-08-04T14:04:32.223Z
thumbnail: '/img/uploads/[SPOJ]IOIBIN-graph.png'
tags:
  - DSU
  - SPOJ
  - data-structure
---
## Link bài viết : [http://vn.spoj.com/problems/IOIBIN/](http://vn.spoj.com/problems/IOIBIN/)
## Đề bài :
Có N thùng nước được đánh số từ 1 đến N, giữa 2 thùng bất kỳ đều có một ống nối có một van có thể khóa hoặc mở. Ở trạng thái ban đầu tất cả các van đều đóng.
Bạn được cho một số yêu cầu, trong đó mỗi yêu cầu có 2 dạng:
Dạng X Y 1 có ý nghĩa là bạn cần mở van nối giữa 2 thùng X và Y.
Dạng X Y 2 có ý nghĩa là bạn cần cho biết với trạng thái các van đang mở / khóa như hiện tại thì 2 thùng X và Y có thuộc cùng một nhóm bình thông nhau hay không? Hai thùng được coi là thuộc cùng một nhóm bình thông nhau nếu nước từ bình nàycó thể chảy đến được bình kia qua một số ống có van đang mở.

# Input
Dòng đầu tiên ghi một số nguyên dương P là số yêu cầu.
Trong P dòng tiếp theo, mỗi dòng ghi ba số nguyên dương X, Y, Z với ý nghĩa có yêu cầu loại Z với 2 thùng X và Y.

# Output
Với mỗi yêu cầu dạng X Y 2 (với Z = 2) bạn cần ghi ra số 0 hoặc 1 trên 1 dòng tùy thuộc 2 thùng X và Y không thuộc hoặc thuộc cùng một nhóm bình.

# Giới hạn
1 ≤ N ≤ 10000
1 ≤ P ≤ 50000

# Solution : [http://dataurbia.com/OqS](http://dataurbia.com/OqS)
# Code : [http://dataurbia.com/PBz](http://dataurbia.com/PBz)
