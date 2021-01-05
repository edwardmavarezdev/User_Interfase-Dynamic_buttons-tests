var inside = document.getElementById("space");
var functButtons = []

for(i=1; i<13; i++){
  inside.innerHTML+="<input type ='button"+i+"' id = 'funct"+i+"'value = 'funct"+i+"'></input>";
  loop = ("funct"+i);
}

functButtons.push(document.getElementById("funct1"));
functButtons.push(document.getElementById("funct2"));
functButtons.push(document.getElementById("funct3"));
functButtons.push(document.getElementById("funct4"));
functButtons.push(document.getElementById("funct5"));
functButtons.push(document.getElementById("funct6"));
functButtons.push(document.getElementById("funct7"));
functButtons.push(document.getElementById("funct8"));
functButtons.push(document.getElementById("funct9"));
functButtons.push(document.getElementById("funct10"));
functButtons.push(document.getElementById("funct11"));
functButtons.push(document.getElementById("funct12"));

  /*var functButtons[i]=document.getElementById(loop);*/

// keyboard capture, use an functions

var move = {left:37, up: 38, right: 39, down: 40}
var x=0
document.addEventListener( "keydown", show);
column=3
row=4
function show(event){
  key = event.keyCode

  //left
    if  (key == move.left && x>0){
      x--;
      functButtons[x].focus();
    }else{}

  //up
    if  (key == move.up && x>parseInt(functButtons.length/row)){
        x=x-parseInt(functButtons.length/row);
      functButtons[x].focus()
    }
    else if(key == move.up){
      x=0;
      functButtons[x].focus();
    }

  //right
    if  (key == move.right && x < functButtons.length-1){
      x++;
      functButtons[x].focus()
    }else{}

  //down
      if  (key == move.down && x < parseInt((functButtons.length/row)*column)){
      x=x+(functButtons.length/row);
      functButtons[x].focus()
    }
    else if(key == move.down){
      x=parseInt(functButtons.length-1);
      functButtons[x].focus();
  }
}
