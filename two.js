let dragValue;

function move(id){
    let element = document.getElementsByClassName('car');
    element.onmouseup = function(){
        dragValue = element;
    }
}
document.onmouseup = function(e){
    dragValue = null;
}
document.onmousemove = function(e){
    let w = e.pageX;
    let v = e.pageY;

    dragValue.style.left = w + "px";
    dragValue.style.top = v + "px";
}
