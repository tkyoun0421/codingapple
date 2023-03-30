const pants = [28, 30, 32, 34];
const shirt = [95, 100, 105, 110];

$('.form-select').eq(0).on('input', function(e){
  let selectValue = e.currentTarget.value;
  if (selectValue == '셔츠'){
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    shirt.forEach(function(item){
      $('.form-select').eq(1).append(`<option>${item}</option>`);
    });
  } else if (selectValue == '바지') {
    $('.form-select').eq(1).removeClass('form-hide');    
    $('.form-select').eq(1).html('');
    pants.forEach(function(item) {
      $('.form-select').eq(1).append(`<option>${item}</option>`);
    });    
  }
});

$.get('https://codingapple1.github.io/price.json')
.done(function(data){
  console.log(data); 
})
.fail(function(){
  console.log('실패함');
});

fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })