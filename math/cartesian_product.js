function cartesian_product(a, b) {
  const cartesian = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      cartesian.push([a[i], b[j]]);
    }
  }

  return cartesian;
}
// Big O(nm)

console.log(cartesian_product([1, 2], [3, 4, 5]));
