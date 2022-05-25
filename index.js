const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

startScreen.addEventListener('click', start);
let player= { speed : 5};

let keys = { ArrowLeft : false, ArrowRight : false ,ArrowDown : false ,ArrowUp: false }

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
    // console.log(e.key);
    console.log(keys);
}
function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;
    // console.log(e.key);
    console.log(keys);
}





function gameplay(){
    console.log('i am clicked');
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if(player.start){
        if(keys.ArrowUp && player.y > road.top +100) { player.y -= player.speed }
        if(keys.ArrowDown && player.y < road.bottom -70) {player.y += player.speed}
        if(keys.ArrowLeft && player.x >0) { player.x -= player.speed}
        if(keys.ArrowRight && player.x < (road.width - 50)) { player.x += player.speed}

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        window.requestAnimationFrame(gameplay);
    }
}

function start(){
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');

    player.start = true;
    window.requestAnimationFrame(gameplay);

    let car = document.createElement('div');
    car.setAttribute('class' , 'car');
     car.innerText='';
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    let dragValue;

    function move(id){
        let element = document.getElementById('car');
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




}
