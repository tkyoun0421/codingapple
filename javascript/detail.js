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

var obj = {
  name: 'kim',
  age: 20
}

for (var key in obj){
  console.log(obj[key]);
}