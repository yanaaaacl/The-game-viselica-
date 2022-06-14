var leftOffset = 0;
var topOffset = 0;
var dir = "right";
var moveHeading = function(){
    $("#heading").offset({ left: leftOffset, top: topOffset});
    if (dir == "right"){
    leftOffset++;
    } else {
      leftOffset--;
    }
    if (leftOffset < 0 && topOffset > 0){
      leftOffset = 0;
      topOffset--;
    } else if( topOffset == 0){
      dir = "right";
    }
   if (leftOffset > 200){
    leftOffset = 200;
   
 topOffset++;
 if (topOffset > 200){
    topOffset = 200;
    dir = "left";
 } else if (topOffset < 0){
   topOffset = 0;
 }
};
};
var clickHandler = function(event) {
  alert("R" + event.pageX + " " + event.pageY);
  $("#heading").click(clickHandler);
};



 setInterval(moveHeading, 10);
 clearInterval(clickHandler);
 
 