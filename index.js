var x_pallina_chiara=675;
var y_pallina_chiara=750;

function appari() {
  var risposta_data=prompt("Email?");
  var pasword=prompt('pasword');
  document.getElementById('risp').innerHTML=risposta_data;
  document.getElementById('risp_p').innerHTML=pasword;
  if(risposta_data=="GINO"){
    document.getElementById('risp').style.backgroundColor="yellow";
  }
  else{
    document.getElementById('risp').style.backgroundColor="#eeeeee";
  }
}
function invia() {
  var grazie='grazie mille';
  var audio = new Audio('videoplayback.mp3');
  var linkElementLink = document.getElementById("refresh");
  audio.play()
 document.getElementById("topolino").style.display ="block";
 document.getElementById('risp_p').innerHTML=grazie;
 document.getElementById('risp').innerHTML=grazie;
 linkElementLink.style.display = 'block';
}
function ricarica() {
  window.location.reload();
}
function tastiera(e) {
  if(e.key=="d"){
    spostaDestra();
  }
  if(e.key=="a"){
    spostaSinistra();
  }
  if(e.key=="w"){
    spostaSu();
  }
  if(e.key=="s"){
    spostaGiu();
  }
}
function spostaSu() {
  y_pallina_chiara=y_pallina_chiara-25;
  document.getElementById('pallina_chiara').style.top=y_pallina_chiara+"px";
}
function spostaGiu() {
  y_pallina_chiara=y_pallina_chiara+25;
  document.getElementById('pallina_chiara').style.top=y_pallina_chiara+"px";
}
function spostaSinistra() {
  x_pallina_chiara=x_pallina_chiara-25;
 document.getElementById('pallina_chiara').style.left=x_pallina_chiara+"px";
}
function spostaDestra() {
  x_pallina_chiara=x_pallina_chiara+25;
  document.getElementById('pallina_chiara').style.left=x_pallina_chiara+"px";
}
function hihihiha(){
  window.open("http://www.google.com/");
 window.open("http://www.google.com/");
  window.open("http://www.google.com/");
   window.open("http://www.google.com/");
    window.open("http://www.google.com/");
     window.open("http://www.google.com/");
      window.open("http://www.google.com/");
       window.open("http://www.google.com/");
        window.open("http://www.google.com/");
         window.open("http://www.google.com/");
          window.open("http://www.google.com/");
           window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
            window.open("http://www.google.com/");
}
function su7s(){
  var audio = new Audio('sus.mp3');
  document.getElementById('su7s').style.display="block";
  audio.play()
}
// Seleziona gli elementi della pagina web
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateButton = document.getElementById("generate");
const resultDiv = document.getElementById("result");

// Aggiungi un gestore di eventi al pulsante Genera
function random() {
  // Ottieni il valore minimo e massimo dall'input dell'utente
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  // Genera un numero casuale compreso tra min e max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  // Mostra il risultato all'utente
  document.getElementById("result").innerHTML = randomNumber;
}
