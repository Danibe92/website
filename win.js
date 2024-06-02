
    var getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    var x=getRandom(20, 1500 - 200) + 'px'; // 👈🏼 Horizontall
    var y=getRandom(450, 900 - 200) + 'px'; // 👈🏼 Vertically
    var timer;
    var timer2;
    var x_pallina_chiara=675;
    var y_pallina_chiara=750;
    var x_boo= 20;
    var y_boo= 450;
    var y_piedi=1000;
    var x_piedi=0;
    //var x_boo=document.getElementById('hhh').style.left=getRandom(20, 1500 - 200) + 'px'; // 👈🏼 Horizontall
    //var y_boo=document.getElementById('hhh').style.top=getRandom(450, 900 - 200) + 'px'; // 👈🏼 Vertically
    function start() {
        timer = setInterval(controllo_scontro, 200);
     }
    function controllo_scontro() {
      var x_centro_pallina_chiara=x_pallina_chiara+100;
    var y_centro_pallina_chiara=y_pallina_chiara+100;
    var x_centro_mangi=x_boo+75;
    var y_centro_mangi=y_boo+75;
    var delta_x=x_centro_pallina_chiara-x_centro_mangi;
    var delta_y=y_centro_pallina_chiara-y_centro_mangi;
    var distanza=Math.sqrt(delta_x*delta_x+delta_y*delta_y);
    if(distanza<175){
        document.getElementById('corpo').style.backgroundImage = "url('red.jpg')";
    x_boo=x_boo+50;
    document.getElementById('hhh').style.left=x_boo+"px";
    y_boo=y_boo+50;
    document.getElementById('hhh').style.top=y_boo+"px";
      }
    else{
        document.getElementById('corpo').style.backgroundImage = "url('vai2.png')";
      }
    }
    function nutella(){
  if (y_boo==y_piedi) {
        document.getElementById('hhh').style.display = 'none';
    document.getElementById('tro').style.display='block';
    document.getElementById('tra').style.display='block';
  }
}
    function sii(){
//  if (document.getElementById('hhh').style.display=='none') {
    //var x_boo= 0;
    //document.getElementById('hhh').style.left=x_boo;
  if (document.getElementById('hhh').style.top>=1000) {
    var y_boo=450;
    document.getElementById('hhh').style.top=450;
  }
}
  setInterval(() => {
        nutella();
    sii();
  }, 200); // every 1 second