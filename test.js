
var inside = document.getElementById("space");
var width = document.getElementById("width");
width.addEventListener("click", changeWidth);
var widthpx = document.getElementById("widthpx");
var bodydiv = document.getElementById("body");

function changeWidth(){

  inside.style = ("width:100px") 
  console.log(widthpx.value);


}
//define quantity of buttons to use

for(i=1; i<17; i++){
  inside.innerHTML+="<input type ='button"+i+"' id = 'funct"+i+"'value = 'funct"+i+"'></input>";
 quantityButtons = i;
}

//define keyCode Capture to use in DOM event

var move = {left:37, right: 39,up: 38, down: 40}
document.addEventListener( "keydown", show);

//responsive buttons
var columns = 4;
var button = 1;


// keyboard capture, use and functions

function show(event){
  key = event.keyCode


    //function Button selected
        function buttonSelected(){
          focusNumber = ("funct"+button);
          var focus = document.getElementById(focusNumber);
          focus.focus();
        }

  //left
    if  (key == move.left && button>1){
      button--;
      buttonSelected();
    }


  //right
    if  (key == move.right && button < quantityButtons){
      button++;
      buttonSelected();
    }

    //up
      if  (key == move.up && button>columns){
          button = button - columns;
          buttonSelected();
      }
      else if(key == move.up){
        button=1;
        buttonSelected();
      }

  //down
  if  (key == move.down && button<(quantityButtons-columns)){
      button = button + columns;
      buttonSelected();
  }
  else if(key == move.down){
    button=quantityButtons;
    buttonSelected()
  }
}
