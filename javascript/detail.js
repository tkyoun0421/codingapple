var products = [
  { id: 0, price: 70000, title: 'Blossom Dress'},
  { id: 1, price: 50000, title: 'Springfield Shirt'},
  { id: 2, price: 60000, title: 'Black Monastery'}
]

let count = 0;

let template = `
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>Card title</h5>
  <p>가격 : 70000</p>
  <button class="buy">구매</button>
`;



createDiv(products);

document.querySelector('#more').addEventListener('click', function(){  
  count++;  
  if (count == 2) {
    document.querySelector('#more').style.display = 'none'
  }
  fetch(`https://codingapple1.github.io/js/more${count}.json`)
  .then(res => res.json())
  .then(data => {
    createDiv(data);
  })
  .catch(error => {
    console.log(error);
  })
});

function createDiv(arr) {
  arr.forEach((item, i) => {
    const div = document.createElement('div');
    div.classList.add('col-sm-4');
    div.innerHTML = template;
    document.querySelector('.row').appendChild(div);
    document.querySelectorAll('.col-sm-4 h5')[arr[i].id].innerHTML = arr[i].title;
    document.querySelectorAll('.col-sm-4 p')[arr[i].id].innerHTML = arr[i].price;
  })
}

let cart = [];
let productTitle;

window.addEventListener('load', function(){
  for (let i = 0; i < document.querySelectorAll('.buy').length; i++) {
    document.querySelectorAll('.buy')[i].addEventListener('click', function(){
      productTitle = this.previousElementSibling.previousElementSibling.innerHTML;
      cart.push(productTitle);
      let newCart = JSON.stringify(cart);
      localStorage.setItem('cart', newCart);
    });
  }
});

