function changeColor () {
    var element = document.getElementById ('circle');
        // element.style.color = 'blue';
        // element.style.opacity = 0.5;
        var circleOpacity = parseFloat(element.style.opacity);
        element.style.opacity = circleOpacity + 0.1;
}


function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.addEventListener ('click', changeColor);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);