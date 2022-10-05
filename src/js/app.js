
import {BITMAP} from "./BITMAP.js"
import {Plane} from "./PlaneClass.js"
let b= 0;
let zoom = 1;
let pixelWidth
let firstLayerPlane = new Plane();
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
function display(plane){

    for (let i = 0; i < plane.plane.length; i++) {
        
        if (plane.plane[i] != undefined) {
            ctx.fillRect(((i%plane.width)*(pixelWidth)),(Math.floor((i/plane.width))*(pixelWidth)),pixelWidth,pixelWidth )

            
        }
    }




}

function reScale(){

        pixelWidth = canvas.offsetHeight / firstLayerPlane.width;
        canvas.width = canvas.offsetHeight
        canvas.height = canvas.offsetHeight 

}



// function addpixel(){
//     firstLayerPlane.putPixel(b,b,255);
//     b++;

// }

// addpixel()
// addpixel()

firstLayerPlane.line(0,0,764,310,255)

setInterval(() => {
    reScale()
    display(firstLayerPlane)
}, 50);