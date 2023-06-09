// 1. Алгоритмическая задача
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 3 and 4, the first 10 terms of the Fibonacci-like sequence will be: 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, ... . By considering the terms in this sequence whose values do not exceed seven million, find the sum of the even-valued terms.

function fibonacciSum(n) {
  let a = 3;
  let b = 4;
  let summ = 0;
  for (let i = a; a <= n; i++) {
    if (a % 2 === 0) {
      summ += a;
    }
    [a, b] = [b, a + b];
  }
  return summ;
}

console.log(fibonacciSum(7000000));
