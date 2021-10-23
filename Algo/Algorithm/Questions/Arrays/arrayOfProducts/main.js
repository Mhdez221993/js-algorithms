function arrayOfProducts(array) {
  let products = []
  let rigthProduct = []
  let leftProduct = []

  let leftCurrentProduct = 1
  for(let i = 0; i < array.length; i++){
    leftProduct[i] = leftCurrentProduct
    leftCurrentProduct *= array[i]
  }

  let rigthCurrentProduct = 1
  for(let i = array.length - 1; i >= 0; i--){
    rigthProduct[i] = rigthCurrentProduct
    rigthCurrentProduct *= array[i]
  }

  for(let i = 0; i < array.length; i++){
    products[i] = rigthProduct[i] * leftProduct[i]
  }

  return products
}

module.exports = arrayOfProducts;
