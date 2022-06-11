var myFriends = ["Максим", "Женя"];
for (var i = 0; i < myFriends.length; i++) {
    
    $("body").append("<p>" + myFriends[i] + " - лучший!" + "</p>");
};

var newHeadingText = prompt("Введите новый заголовок:");
$("#main-heading").text(newHeadingText);

    $("h1").fadeTo(2000, 0.1);
    
