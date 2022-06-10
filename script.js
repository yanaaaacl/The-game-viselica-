var newHeadingText = prompt("Введите новый заголовок:");
$("#main-heading").text(newHeadingText);
$("body").append("<p>Это новый элемент</p>");
for(var i=0; i < 3; i++){
    var hobby = prompt("Назови одно из своих хобби!");
    $("body").append("<p>" + hobby + "</p>");
}

$("h1").fadeIn(1000);
$("h1").hide(1000);
$("body").append("<p>Жужалица</p>");