console.log("File added correctly");
var expression = '0';
var sign, dec= false;
var num1, num1Str;
var num2, num2Str;
var res, resStr;
var textview = document.forms['myForm']['textview'];

function insertNum(n){
    expression = textview.value + n;
    textview.value = expression;
}

function checkForDec(){
  if(res%1 != 0){
    dec = true;
  }
}

function callAC(){
  expression = '0';
  textview.value = expression;
  dec = false;
}

function callDEL(){
  if(expression[expression.length-1] == '.'){
    dec = false;
  }
  expression = expression.substring(0, expression.length -1);
  textview.value = expression;
}

function decimal(){
  if(!dec){
    expression = textview.value + '.';
    textview.value = expression;
    dec = true;
  }
}

function percentage(){
  num1Str = expression;
  num1 = parseFloat(num1Str, 10);
  num1 = num1/100;
  num1Str = num1.toString();
  res = num1;
  resStr = num1Str;
  expression = resStr;
  textview.value = expression;
  checkForDec();
}

function cuadratic(){
  num1Str = expression;
  num1 = parseFloat(num1Str, 10);
  num1 = num1 * num1;
  num1Str = num1.toString();
  res = num1;
  resStr = num1Str;
  expression = resStr;
  textview.value = resStr;
  checkForDec();
}

function sub(){
  num1Str = expression;
  sign = '-';
  callAC();
}

function add(){
  num1Str = expression;
  sign = '+';
  callAC();
}

function mult(){
  num1Str = expression;
  sign = '*';
  callAC();
}

function div(){
  num1Str = expression;
  sign = '/';
  callAC();
}

function equal(){
  num2Str = expression;
  num1 = parseFloat(num1Str);
  num2 = parseFloat(num2Str);
  if(sign == '-'){
    res = (num1 - num2);
  }
  if(sign == '+'){
    res = (num1 + num2);
  }
  if(sign == '*'){
    res = (num1 * num2);
  }
  if(sign == '/'){
    res = (num1/num2);
  }
  resStr = res.toString();
  expression = resStr;
  textview.value = expression;
  checkForDec();
}
