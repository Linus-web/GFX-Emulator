import { BITMAP } from "./BITMAP.js";
export class Plane {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.plane = new Array(this.height * this.width);
        this.lock = false;
        this.zoom = 1;
    }
    putPixel(x, y, color ) {
        this.plane[x + y*this.width] = color;
        console.log(this.plane)
    }
    line(x1, y1, x2, y2, color) {

        let distance

        if(x2-x1 > y2-y1){
            distance = x2
        }else{
            distance = y2
        }

        let k = ((y2-y1)/(x2-x1))
        let step = 0
        let count = 0
        this.plane[x1+y1*this.width] = color
        this.plane[x2+y2*this.width] = color

        console.log(k);
        for (let i = x1; i < distance; i++) {
            
            this.plane[x1+i*this.width+step] = color
            count++
            if(count >= k){
                step++
                count = 0
            }
        }
    }
    circle(x, y, r, color) {
    }
    rectangle(x1, y1, x2, y2, color) {
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
    }
}
