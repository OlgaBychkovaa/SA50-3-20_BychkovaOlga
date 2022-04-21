let trash = 0;
let pravo = 0;


let box = document.getElementById("box");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let boxWidth = box.offsetWidth;


function move() {
    if (trash < windowHeight - boxWidth && pravo == 0) {
        trash++
        box.style.top = trash + "px";
    } else if (pravo < windowWidth - boxWidth && trash != 0) {
        pravo++
        box.style.left = pravo +"px";
    } else if (trash != 0) {
        trash--
        box.style.top = trash + "px"
    } else if (pravo != 0 ) {
        pravo --
        box.style.left = pravo + "px"
    }
}

box.addEventListener("click", () => setInterval(move,1));
