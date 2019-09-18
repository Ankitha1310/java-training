function tab(){
  var x=0;
  var num =Number(prompt("Please enter a number"));
  if(num!=0){
    for(i=1;i<=10;i++){
      //var s += i*2+' ';
      x=num*i;
      document.write(x+'</br>');
    }
  }
    //document.getElementById('demo').innerHTML = s;
  }