let wr = (msg = "----------") => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
  if (current > max) return;
  wr(current);
  basicRecursion(max, current + 1);
}

basicRecursion(5, 1);
wr();
wr();

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 20; i++) {
  wr(`${i}.${fibonacci(i)}`);
}
