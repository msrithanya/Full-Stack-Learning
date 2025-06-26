var dices=["Photo/Dice_1.png","Photo/Dice_2.png","Photo/Dice_3.png","Photo/Dice_4.png","Photo/Dice_5.png","Photo/Dice_5-1.png"]
function play(){
 var ran1=Math.floor((6*Math.random()));
 var ran2=Math.floor((6*Math.random()));
 document.getElementById("content").innerHTML=ran1>ran2?"Play 1 win":"Play 2 win";
 document.getElementById("player1").setAttribute("src",dices[ran1]);
 document.getElementById("player2").setAttribute("src",dices[ran2]);
}
