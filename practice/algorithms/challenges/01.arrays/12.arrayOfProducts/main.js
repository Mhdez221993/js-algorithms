// O(n) time | O(n) space - where n is the length of the array
function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let leftCurrentProduct = 1;
  for (let i = 0; i < array.length; i += 1) {
    products[i] *= leftCurrentProduct;
    leftCurrentProduct *= array[i];
  }

  let rigthCurrentProduct = 1;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    products[i] *= rigthCurrentProduct;
    rigthCurrentProduct *= array[i];
  }

  return products;
}
