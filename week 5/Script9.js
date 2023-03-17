function myKeyDown(event) {
    if (event.keyCode == 37) {
    setInterval(moveLeft, 10);
    }
     if (event.keyCode==38){
        setInterval(moveUp, 10)
     }
}
    function myLoadEvent() {
        document.addEventListener('keydown', myKeyDown);
        }
        document.addEventListener('DOMContentLoaded', myLoadEvent);

    function moveLeft(){
        var element = document.getElementById('circle');
        var positionLeft = element.offsetLeft;
        element.style.left = positionLeft - 1 + 'px';
}
    function moveUp(){
        var element = document.getElementById('circle');
        var positionUp = element.offsetUp;
        element.style.left = positionUp - 1 + 'px';
    }
 