function sum(a, b, callback){
  var result = a + b;

  callback();
  return result;

}

//콜백함수
var r = sum(30, 20, function(){
  alert('a + b를 더했습니다');
});
