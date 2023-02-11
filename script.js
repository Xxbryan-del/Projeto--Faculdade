function calculate (){
  var nome = document.getElementById("username").value
  var altura = document.getElementById("useraltura").value
  var peso = document.getElementById("userpaso").value
  
  var imc = peso / (altura ) **2;
  var texto=""
  if(imc<18.5){
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