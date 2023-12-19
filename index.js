
var random1=Math.floor(Math.random()*6)+1;
var dicimg="dice"+random1+".png";
var randomimgsource="images/"+dicimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimgsource);


var random2=Math.floor(Math.random()*6)+1;
var dicimg1="dice"+random2+".png";
var randomimgsource1="images/"+dicimg1;
var img12=document.querySelectorAll("img")[1];
img12.setAttribute("src",randomimgsource1);

if(random1>random2){
    document.querySelector("h1").innerHTML="player 1 wins"
}else{
    document.querySelector("h1").innerHTML="player 2 wins"
}