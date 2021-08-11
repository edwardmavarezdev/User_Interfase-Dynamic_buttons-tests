
var space = document.getElementById("space");
var buttonPlace = document.getElementById("buttonPlace");
var htmlUse = document.getElementById('htmlUse');

var columns = 4
var createButtons = 16

//testing variables
var lessC = document.getElementById("lessC");
lessC.addEventListener("click", lessColumns);
var moreC = document.getElementById("moreC");
moreC.addEventListener("click", moreColumns);

var lessB = document.getElementById("lessB");
lessB.addEventListener("click", lessButtons);
var moreB = document.getElementById("moreB");
moreB.addEventListener("click", moreButtons);

function lessColumns(){
  columns--;
  declareSizeofSquare();
  }
function moreColumns(){
  columns++;
  declareSizeofSquare();
  }


function lessButtons(){
  createButtons--;
    if (createButtons<1){
        createButtons++;
        alert("You can not have cero Buttons");
      }
  declareSizeofSquare();
  }
function moreButtons(){
  createButtons++;
  declareSizeofSquare();
  }
//--------------------
// test changeWidth
function changeWidth(){

  inside.style = ("width:"+widthpx.value+"px")
  console.log(widthpx.value);
}
//-------------------

//print buttons
function declareSizeofSquare(){
space.innerHTML=""

for(i=1; i<(createButtons+1); i++){
  space.innerHTML+="<input type ='button' id = 'buttonId"+i+"'value = 'button-"+i+"' onclick='xd("+i+")'></input>";
  quantityButtons = i;
    //var id = ("butttnId"+i);
    }

    if (columns<1){
      columns++;
      alert("You can not have less than 1 column");
    }
    if (columns*100>htmlUse.clientWidth){
      columns--;
      alert("You can not have more columns than your screen size")
    }
    space.style = "width:"+(columns*100)+"px"
}

//-----------------------
function xd(test){
  l=document.getElementById("buttonId"+test);
    buttonToSelect = test;
    l.style = "background-color:green; border solid  yellow 4px";

/*
    if (test==1){

    b1 = document.getElementById("buttonId1");
    b1.style = "background-color:pink; border solid  yellow 4px";
  }*/
}

//console.log(ramdom);
//------------------------

//redefine style (not used now)
function redefineStyle(){
  buttonPlace.style = "width:"+(columns*100)+"px"
}

//begin load
declareSizeofSquare();
//define keyCode Capture to use in DOM event

document.addEventListener( "keydown", show);
//responsive buttons
var buttonToSelect = 1;

//keyCodes
var move = {left:37, right: 39,up: 38, down: 40}
var pressButton = 32

// keyboard capture, use and functions
//function Button selected
    function buttonSelected(){
      selectedNumber = ("buttonId"+buttonToSelect);
      number = document.getElementById(selectedNumber);
      number.focus();

    }

function show(event){
  key = event.keyCode

  //left
    if  (key == move.left && buttonToSelect>1){
      buttonToSelect--;
      buttonSelected();
    }


  //right
    if  (key == move.right && buttonToSelect < quantityButtons){
      buttonToSelect++;
      buttonSelected();
    }

    //up
      if  (key == move.up && buttonToSelect>columns){
          buttonToSelect = buttonToSelect - columns;
          buttonSelected();
      }
      else if(key == move.up){
        buttonToSelect=1;
        buttonSelected();
      }

  //down
  if  (key == move.down && buttonToSelect<(quantityButtons-columns)){
      buttonToSelect = buttonToSelect + columns;
      buttonSelected();
  }
  else if(key == move.down){
    buttonToSelect=quantityButtons;
    buttonSelected()
  }

  if (key == pressButton){
    buttonSelected();
    alert("you are pushed "+number.value)
  }
}
