function arrayOfProducts(array) {
  let products = []

  for(let i = 0; i < array.length; i++){
    let product = 1
    for(let j = 0; j < array.length; j++){

      if(j !== i){
        product *= array[j]
      }

    }

    products[i] = product
  }

  return products
}

let array = [5, 1, 4, 2]
console.log(arrayOfProducts(array));
// module.exports = arrayOfProducts;
