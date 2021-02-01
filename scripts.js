const dino = document.getElementById("dino");
const rainbow = document.getElementById("rainbow");

function jump() {
    if (dino.classList != "jump") { 
        
    dino.classList.add("jump");
    
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);}

}

let isAlive = setInterval ( function () {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  

    // get current rainbow X position
     let rainbowLeft = parseInt(window.getComputedStyle(rainbow).getPropertyValue("left"));
    
   // detect collision
   if ()
   
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});