const fib = (n) => {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib;
};

const factorial = (n) => {
  let fact = n;

  for (let i = n - 1; i > 0; i--) {
    fact = fact * i;
  }

  return n === 0 ? 1 : fact;
};

const prime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const powerOfTwo = (n) => {
  const half = n / 2;
  if (half > 0.5) {
    return powerOfTwo(half);
  } else if (half === 0.5 || half === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(fib(7));
// console.log(factorial(7));
// console.log(prime(23));
console.log(powerOfTwo(8));
