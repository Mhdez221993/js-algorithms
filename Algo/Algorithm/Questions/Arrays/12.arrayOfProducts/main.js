function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let leftCurrentProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] *= leftCurrentProduct;
    leftCurrentProduct *= array[i];
  }

  let rigthCurrentProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rigthCurrentProduct;
    rigthCurrentProduct *= array[i];
  }

  return products;
}

module.exports = arrayOfProducts;
