document.getElementById('버튼').addEventListener('click', function(e){
  var 어레이 = [1,2,3];
  어레이.forEach(function(){
    console.log(this)
  });
});