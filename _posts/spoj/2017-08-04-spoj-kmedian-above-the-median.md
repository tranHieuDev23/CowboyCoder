---
title: '[SPOJ] KMEDIAN - Above the Median'
author: Nicky.Rio
date: 2017-08-04T14:01:42.468Z
thumbnail: /img/uploads/KMEDIAN.JPG
tags:
  - spoj
  - bit
  - dp
---
# Link gốc
[http://vn.spoj.com/problems/KMEDIAN/](http://vn.spoj.com/problems/KMEDIAN/)

# Đề bài (tiếng Anh, không nói cũng biết =)) )

Farmer John has lined up his N (1 ≤ N ≤ 100,000) cows in a row to measure their heights; cow i has height H_i (1 ≤ H_i ≤ 1,000,000,000) nanometers. FJ believes in precise measurements! He wants to take a picture of some contiguous subsequence of the cows to submit to a bovine photography contest at the county fair.

The fair has a very strange rule about all submitted photos: a photograph is only valid to submit if it depicts a group of cows whose median height is at least a certain threshold X (1 ≤ X ≤ 1,000,000,000).

For purposes of this problem, we define the median of an array A[0...K] to be A[ceiling(K\/2)] after A is sorted, where ceiling(K/2) gives K/2 rounded up to the nearest integer (or K/2 itself, it K/2 is an integer to begin with). For example the median of {7, 3, 2, 6} is 6, and the median of {5, 4, 8} is 5.

Please help FJ count the number of different contiguous subsequences of his cows that he could potentially submit to the photography contest.

## Input

* Line 1: Two space-separated integers: N and X.
* Lines 2..N+1: Line i+1 contains the single integer H\_i.

## Output

* Line 1: The number of subsequences of FJ's cows that have median at least X. Note this may not fit into a 32-bit integer.

## Example

**Input**
```
4 6 10 5 6 2 

```
**Output**
```
7
```
**Giải thích**
```
Có 10 dãy con liên tiếp, nhưng chỉ có 7 dãy con thõa mãn có trung vị >= 6. Đó là {10}, {6}, {10, 5}, {5, 6}, {6, 2}, {10, 5, 6}, {10, 5, 6, 2}.
```

# Solution
[http://dataurbia.com/R2F](http://dataurbia.com/R2F)
# Code mẫu
[http://dataurbia.com/Ql0](http://dataurbia.com/Ql0)
