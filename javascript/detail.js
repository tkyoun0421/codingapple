var products = [
  { id: 0, price: 70000, title: 'Blossom Dress'},
  { id: 1, price: 50000, title: 'Springfield Shirt'},
  { id: 2, price: 60000, title: 'Black Monastery'}
]

let template = `
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>Card title</h5>
  <p>가격 : 70000</p>
`;


for (let i = 0; i < products.length; i++){
  const div = document.createElement('div');
  div.innerHTML = template;
  div.classList.add('col-sm-4');
  document.querySelector('.row').appendChild(div);
  document.querySelectorAll('.col-sm-4 h5')[i].innerHTML = products[i].title;
  document.querySelectorAll('.col-sm-4 p')[i].innerHTML = products[i].price;
};