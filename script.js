var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function(distance) {
    if (distance < 10) {
        return "Оббожешься!";
    } else if (distance < 20) {
        return "Очень горячо!";
    }else if (distance < 40) {
        return "Горячо";
    }else if (distance < 80) {
        return "Тепло";
    }else if (distance < 160) {
        return "Холодно";
    }else if (distance < 200) {
        return "Очень-очень холодно";
    }else {
        return "Замерзнешь!";
        
    }
};

var width = 800;
var height = 800;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};


$("#map").click(function (event) {
clicks++;


var distance = getDistance(event, target);

var distanceHint = getDistanceHint(distance);

$("#distance").text(distanceHint);

if (getDistanceHint > 10){
    alert("Клик:" + clicks);
}

if (clicks > 5) {
    alert("Конец игры");
}

if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clicks);
}
});
