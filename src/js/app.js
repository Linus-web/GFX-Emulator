
import {BITMAP} from "./BITMAP.js"
import {Plane} from "./PlaneClass.js"
let b= 0;
let firstLayerPlane = new Plane();
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
function display(plane){

    for (let i = 0; i < plane.plane.length; i++) {
        console.log(plane.plane[i])
        if (plane.plane[i] != undefined) {
            ctx.fillRect(((i%10)*51),(Math.floor((i/10))*51),50,50)

            
        }
    }




}

function addpixel(){
    firstLayerPlane.putPixel(b,b,255);
    b++;

}
setInterval(() => {
    addpixel();
}, 10);

setInterval(() => {
    display(firstLayerPlane)
}, 10);