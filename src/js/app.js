import { BITMAP } from "./BITMAP.js";
import { Plane } from "./PlaneClass.js";

//DONT USE FILL FUNCTION ON TRIANGLE; IT IS MERELY THERE FOR SHOWCASE
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
const btnPLeft = document.getElementById("Pleft")
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




plane.circle(250,250,200,inputC.value,1000)

plane.rectangle(2,2,10,10,inputC.value,true)


setInterval(() => {
  reScale();
  display();
}, 50);

btnLeft.addEventListener("click", () =>{
    plane.scrollLeft()
    plane.lock =false
} )

btnRight.addEventListener("click", () => {
    plane.scrollRight()
    plane.lock =false
})

btnUp.addEventListener("click", () => {
    plane.scrollUp()
    plane.lock =false
})
btnDown.addEventListener("click", () => {
    plane.scrollDown()
    plane.lock =false
})

btnPLeft.addEventListener("click", () =>{
    plane.pScrollLeft()
    plane.lock =false
} )

btnPRight.addEventListener("click", () =>{
    plane.pScrollRight()
    plane.lock =false
} )

btnPUp.addEventListener("click", () =>{
    plane.pScrollUp()
    plane.lock =false
} )

btnPDown.addEventListener("click", () =>{
    plane.pScrollDown()
    plane.lock =false
} )




