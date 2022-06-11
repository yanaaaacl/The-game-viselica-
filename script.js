var counter = 1;
var printMessage = function(){
    alert("You're watching in console " + counter + "sec");
    counter++;
};
var intervalId = setInterval(printMessage, 5000);


    
