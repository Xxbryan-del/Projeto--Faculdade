function calculate (){ // chamando botão do HTML
  var nome = document.getElementById("username").value //pegando o valor do input dp tipo text
  var altura = document.getElementById("useraltura").value //pegando o valor do input do tipo number
  var peso = document.getElementById("userpaso").value //pegando o valor do input do tipo number
  
  var imc = peso / (altura ) **2; // variavel que faz o calculo
  var texto="" //local aonde vai ser impresso a resposta 
  if (imc<1){
    texto= "Ops! Acho que temos um erro. Verifique se sua altura está em metros (Ex: 1,70).";} else if (imc<18.5){
    texto= nome+", "+"Você está magro "+"e seu IMC é: "+imc.toFixed(2);
  } else if (imc<24.9){
    texto= nome+", "+"Você está com o peso na medida "+"e seu IMC é: "+imc.toFixed(2);
  } else if (imc<29.9){
    texto= nome+", "+"Você está com sobrepeso "+"e seu IMC é: "+imc.toFixed(2);
  } else if (imc<39.9){
    texto= nome+", "+"Você está com obesidade "+"e seu IMC é: "+imc.toFixed(2);
  } else if (imc<39.9){
    texto= nome+", "+"Você está com obesidade mórbida "+"e seu IMC é: "+imc.toFixed(2);
  }

  document.getElementById("text_area").innerText = texto;
}




