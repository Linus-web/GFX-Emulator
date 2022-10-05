
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
            ctx.fillRect(((i%plane.width)*(pixelWidth+1)),(Math.floor((i/plane.width))*(pixelWidth+1)),pixelWidth,pixelWidth )

            
        }
    }




}

function reScale(){

        pixelWidth = canvas.offsetHeight / firstLayerPlane.width;
        canvas.width = canvas.offsetHeight + firstLayerPlane.width
        canvas.height = canvas.offsetHeight + firstLayerPlane.width

        console.log(pixelWidth);

}



// function addpixel(){
//     firstLayerPlane.putPixel(b,b,255);
//     b++;

// }

// addpixel()
// addpixel()

firstLayerPlane.putPixel(9,9,255);

setInterval(() => {
    reScale()
    display(firstLayerPlane)
}, 50);