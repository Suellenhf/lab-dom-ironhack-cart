// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const priceElementContent = product.querySelector('.price span').innerText;
  const quantityElementContent = product.querySelector('.quantity input').value;
  
  const subtotal  = priceElementContent * quantityElementContent;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;

};

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  const productsArr = Array.from(products);

  function total () {
    const reducer = (sum, item) => {
      return sum + updateSubtotal(item)
    }

    return productsArr.reduce(reducer, 0);
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById('total-value');
  totalElement.firstElementChild.innerText =  total();
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
