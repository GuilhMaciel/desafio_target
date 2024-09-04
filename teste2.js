function fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  let fib = a + b;
  while (fib < num) {
    a = b;
    b = fib;
    fib = a + b;
  }

  if (fib === num) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}

let num = 6;

console.log(fibonacci(num));
