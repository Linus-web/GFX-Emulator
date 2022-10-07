import { BITMAP } from "./BITMAP.js";
export class Plane {
    constructor() {
        this.width = 40;
        this.height = 40;
        this.plane = new Array(this.height * this.width);
        this.lock = false;
    }
    putPixel(x, y, color ) {
        this.plane[x + y*this.width] = color;   
    }
    line(x1, y1, x2, y2, color) {
            var dx = Math.abs(x2 - x1);
            var dy = Math.abs(y2 - y1);
            var sx = (x1 < x2) ? 1 : -1;
            var sy = (y1 < y2) ? 1 : -1;
            var err = dx - dy;
         
            while(true) {
               this.putPixel(x1, y1,254); // Do what you need to for this
         
               if ((x1 === x2) && (y1 === y2)) break;
               var e2 = 2*err;
               if (e2 > -dy) { err -= dy; x1  += sx; }
               if (e2 < dx) { err += dx; y1  += sy; }
            }
    }
    circle(x, y, r, color, accuracy) {
        
        //center of circle (x,y)
        //range of circle is (r)
        //accurancy = sin(angle)*r, and cos(angle)*r
        //point of change is 2pi/accuracy
        let pointofchange=((2*3.141592)/(accuracy))

        for (let i = 0; i < accuracy; i++) {
            let x1 =Math.ceil(x+r*Math.sin(pointofchange*i))
             let y1 =  Math.ceil(y+r*Math.cos(pointofchange*i))
             let x2 = Math.ceil(x+r*Math.sin(pointofchange*(i+1)))
             let y2 = Math.ceil(y+r*Math.cos(pointofchange*(i+1)))
            // this.putPixel(x1,y1,color)
            // console.log("x coord: " + x1);
            // console.log("y coord: " + y);
            this.line(x1,y1,x2,y2,color)

        }

    }
    rectangle(x1, y1, x2, y2, color, fill) {
        //four points to generate
        //first point (x1,y1)
        //second point (x2, y1)
        //third point (x2,y2)
        //fourth point (x1,y2)
        this.line(x1,y1,x2,y1, color)
        this.line(x2,y1,x2,y2,color)
        this.line(x2,y2,x1,y2, color)
        this.line(x1,y2,x1,y1, color)
       if (fill == true) {
        let LengthY = y2-y1;
        for (let i = x1; i < x2; i++) {
        for (let k = 0; k < LengthY; k++) {
          this.putPixel(i,y1+k,color)
            
        }
        }
        
       }
       


    }
    clear(color) {
        this.plane.forEach(element => {
            element = color
        });
    }
    resize(x, y) {

    }
    textOut(x, y, color, txt) {
    }
    scrollLeft() {
    }
    scrollRight() {
    }
    scrollUp() {
    }
    scrollDown() {
    }
    pScrollLeft() {
    }
    pScrollRight() {
    }
    pScrollUp() {
    }
    pScrollDown() {
    }
    triangle(x1, y1, x2, y2, x3, y3, color) {
        this.line(x1,y1,x2,y2, color)
        this.line(x2,y2,x3,y3, color)
        this.line(x3,y3,x1,y1, color)




    }
}
