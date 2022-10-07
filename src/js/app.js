import { BITMAP } from "./BITMAP.js";
import { Plane } from "./PlaneClass.js";
let pixelWidth;
let plane = new Plane();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btnUp = document.getElementById("up")
const btnDown = document.getElementById("down")
const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")
const btnPUp = document.getElementById("Pup")
const btnPDown = document.getElementById("Pdown")
const btnPLeft = document.getElementById("pPleft")
const btnPRight = document.getElementById("Pright")

const inputC = document.getElementById("inputC")

console.log(inputC.value)

function display() {
  for (let i = 0; i < plane.plane.length; i++) {
    if (plane.plane[i] != undefined) {
    ctx.fillStyle = plane.plane[i]
    ctx.fillRect(
        (i % plane.width) * pixelWidth,
        Math.floor(i / plane.width) * pixelWidth,
        pixelWidth,
        pixelWidth
      );
    }
  }
}

function reScale() {
  pixelWidth = canvas.offsetHeight / plane.width;
  canvas.width = canvas.offsetHeight;
  canvas.height = canvas.offsetHeight;
}



plane.circle(19,19,10,inputC.value,15)

plane.rectangle(2,2,10,10,inputC.value,true)

setInterval(() => {
  reScale();
  display();
}, 50);



btnLeft.addEventListener("click", () =>{
    plane.scrollLeft()
} )

btnRight.addEventListener("click", () => {
    plane.scrollRight()
})

btnUp.addEventListener("click", () => {
    plane.scrollUp()
})
btnDown.addEventListener("click", () => {
    plane.scrollDown()
})