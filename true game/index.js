var x_pacman=675;
var y_pacman=555;
var timer;
var h_packman=140;
let punteggio=0;
var getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
var rotated = false;
 function ruota() {
    var div = document.getElementById('pacman'),
        deg = rotated ? 0 : 90;
        //var luigi= deg;

    div.style.webkitTransform = 'rotate('+deg+'deg)';
    div.style.mozTransform    = 'rotate('+deg+'deg)';
    div.style.msTransform     = 'rotate('+deg+'deg)';
    div.style.oTransform      = 'rotate('+deg+'deg)';
    div.style.transform       = 'rotate('+deg+'deg)';
}
function ruota2() {
   var div = document.getElementById('pacman'),
       deg = rotated ? 0 : 0;
       //var luigi= deg;

   div.style.webkitTransform = 'rotate('+deg+'deg)';
   div.style.mozTransform    = 'rotate('+deg+'deg)';
   div.style.msTransform     = 'rotate('+deg+'deg)';
   div.style.oTransform      = 'rotate('+deg+'deg)';
   div.style.transform       = 'rotate('+deg+'deg)';
}
function ruota3() {
   var div = document.getElementById('pacman'),
       deg = rotated ? 0 : 180;

   div.style.webkitTransform = 'rotate('+deg+'deg)';
   div.style.mozTransform    = 'rotate('+deg+'deg)';
   div.style.msTransform     = 'rotate('+deg+'deg)';
   div.style.oTransform      = 'rotate('+deg+'deg)';
   div.style.transform       = 'rotate('+deg+'deg)';
}
function ruota4() {
   var div = document.getElementById('pacman'),
       deg = rotated ? 0 : 270;
   div.style.webkitTransform = 'rotate('+deg+'deg)';
   div.style.mozTransform    = 'rotate('+deg+'deg)';
   div.style.msTransform     = 'rotate('+deg+'deg)';
   div.style.oTransform      = 'rotate('+deg+'deg)';
   div.style.transform       = 'rotate('+deg+'deg)';
}
setInterval(() => {
  //morte();
}, 100);
function tastiera(e) {
  if(e.key=="d"){
    spostaDestra();
    ruota2();
  }
  if(e.key=="a"){
   spostaSinistra();
   ruota3();
  }
  if(e.key=="w"){
    spostaSu();
    ruota4();
  }
  if(e.key=="s"){
    spostaGiu();
    ruota();
  }
}
function spostaSu() {
  y_pacman=y_pacman-30;
  document.getElementById('pacman').style.top=y_pacman+"px";
}
function spostaGiu() {
  y_pacman=y_pacman+30;
  document.getElementById('pacman').style.top=y_pacman+"px";

}
function spostaSinistra() {
  x_pacman=x_pacman-30;
 document.getElementById('pacman').style.left=x_pacman+"px";
}
function spostaDestra() {
  x_pacman=x_pacman+30;
  document.getElementById('pacman').style.left=x_pacman+"px";
}
function start(){
  timer=setInterval(controllo_scontro,3);
}
function controllo_scontro() {
  lol();
    // Get the current positions of pacman and mangi
    var pacmanRect = document.getElementById('pacman').getBoundingClientRect();
    var mangiRect = document.getElementById('mangi').getBoundingClientRect();

    // Check if the two elements are colliding
    if (pacmanRect.left < mangiRect.right &&
        pacmanRect.right > mangiRect.left &&
        pacmanRect.top < mangiRect.bottom &&
        pacmanRect.bottom > mangiRect.top) {
      // Increment the score and reposition mangi
      punteggio++;
      document.getElementById('punteggio').innerHTML = punteggio;
      document.getElementById('mangi').style.left = getRandom(200, 800) + 'px';
      document.getElementById('mangi').style.top = getRandom(75, 675) + 'px';
  }
}
function lol(){
  if (punteggio>=25) {
    document.getElementById('jk').style.display='block';
    document.getElementById('gigachad').style.display='block';
  }
  else {
    document.getElementById('jk').style.display='none';
    document.getElementById('gigachad').style.display='none';
  }
  if (punteggio>=30) {
    document.getElementById('jk').innerHTML="UR GOD";
    document.getElementById("gigachad").src="god.png";
  }
}
