## Problem

You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

For example, given the arrays _**a = [2, 6]**_ and _**b = [24, 36]**_, there are two numbers between them: _**6**_ and _**12**_. _**6 % 2 = 0**_, _**6 % 6 = 0**_, _**24 % 6 = 0**_ and _**36 % 6 = 0**_ for the first value. Similarly, _**12 % 2 = 0**_, _**12 % 6 = 0**_ and _**24 % 12 = 0**_, _**36 % 12 = 0**_.

#### Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

- a: an array of integers
- b: an array of integers

#### Input Format

The first line contains two space-separated integers, _**n**_ and _**m**_, the number of elements in array _**a**_ and the number of elements in array _**b**_.

The second line contains _**n**_ distinct space-separated integers describing _**a[i]**_ where _**0 &le; i < n**_.

The third line contains _**m**_ distinct space-separated integers describing  where _**0 &le; j < m**_.

#### Constraints	

- _1 &le; n,m &le; 10_
- _1 &le; a[i] &le; 100_
- _1 &le; b[j] &le; 100_

#### Output Format

Print the number of integers that are considered to be between _**a**_ and _**b**_.

#### Sample Input
```
2 3
2 4
16 32 96
```
#### Sample Output
```
3
```
#### Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.  
4, 8 and 16 divide evenly into 16, 32, 96.  
4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

