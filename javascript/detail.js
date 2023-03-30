$('.form-select').eq(0).on('input', function(e){
  let selectValue = e.currentTarget.value;
  if (selectValue == '셔츠'){
    $('.form-select').eq(1).removeClass('form-hide');
  } else {
    $('.form-select').eq(1).addClass('form-hide');
  }
});


