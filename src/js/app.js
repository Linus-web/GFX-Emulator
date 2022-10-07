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


firstLayerPlane.line(0, 0, 39, 0);
firstLayerPlane.line(0, 1, 39, 1);
/*firstLayerPlane.line(0, 2, 39, 2);
firstLayerPlane.line(0, 3, 39, 3);*/
firstLayerPlane.line(0, 4, 39, 4);
firstLayerPlane.line(0, 5, 39, 5);
//firstLayerPlane.line(0, 6, 39, 6);
firstLayerPlane.line(0, 39, 39, 39); 
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