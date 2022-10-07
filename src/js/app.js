import { BITMAP } from "./BITMAP.js";
import { Plane } from "./PlaneClass.js";
let pixelWidth;
let firstLayerPlane = new Plane();
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
function display(plane) {
  for (let i = 0; i < plane.plane.length; i++) {
    if (plane.plane[i] != undefined) {
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
  pixelWidth = canvas.offsetHeight / firstLayerPlane.width;
  canvas.width = canvas.offsetHeight;
  canvas.height = canvas.offsetHeight;
}


firstLayerPlane.circle(19,19,10,255,14)

setInterval(() => {
  reScale();
  display(firstLayerPlane);
}, 50);



btnLeft.addEventListener("click", () =>{
    firstLayerPlane.scrollLeft()
} )

btnRight.addEventListener("click", () => {
    firstLayerPlane.scrollRight()
})

btnUp.addEventListener("click", () => {
    firstLayerPlane.scrollUp()
})
btnDown.addEventListener("click", () => {
    firstLayerPlane.scrollDown()
})