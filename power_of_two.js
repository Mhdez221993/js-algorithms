function power_of_two(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;

    n /= 2;
  }

  return true;
}
// Big O(log n)
console.log(power_of_two(1));
console.log(power_of_two(2));
console.log(power_of_two(5));

console.log("--------------------------------------");

function power_of_two_bit_wise(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}
// Big O(1)
console.log(power_of_two_bit_wise(1));
console.log(power_of_two_bit_wise(2));
console.log(power_of_two_bit_wise(5));
