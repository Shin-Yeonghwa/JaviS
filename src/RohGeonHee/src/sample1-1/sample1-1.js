var grade = parseInt(window.prompt('본인의 점수를 입력하시오'))

if(grade >= 90){
  window.alert('당신의 점수는'+ grade + '등급은 S등급입니다');
  }
  else if (grade >= 80){
    window.alert('당신의 점수는'+ grade + '등급은 A등급입니다');
  }
  else if (grade >= 70){
    window.alert('당신의 점수는'+ grade + '등급은 B등급입니다');
  }
  else if (grade >= 60){
    window.alert('당신의 점수는'+ grade + '등급은 C등급입니다');
  }
  else{
    window.alert('당신의 점수는'+ grade + '등급은 D등급입니다');
  }
