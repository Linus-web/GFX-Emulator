
import {BITMAP} from "./BITMAP.js"
import {Plane} from "./PlaneClass.js"
let pixelWidth
let firstLayerPlane = new Plane();
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
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

firstLayerPlane.circle(19,19,10,255,16)
firstLayerPlane.line(0,0,39,39)
firstLayerPlane.triangle(20,0,39,39,0,39)


setInterval(() => {
    reScale()
    display(firstLayerPlane)
}, 50);