/* 
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

const summation = (num) => num==1 ? 1 : num + summation(num-1) ;

/* 
var summation = function f(num) {
  return num ? num + f(num-1) : 0;
}

var summation = function (num) {
  return (num > 1) ? num + summation(num - 1):num;
}
*/