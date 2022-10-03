import { BITMAP } from "./BITMAP.js";
export class Plane {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.plane = new Array(this.height * this.width);

        this.lock = false;
        this.zoom = 1;
    }
    putPixel(x, y, color ) {
        this.plane[x + y*this.width] = color;
        console.log(this.plane)
    }
    line(x1, y1, x2, y2, color) {
    }
    circle(x, y, r, color) {
    }
    rectangle(x1, y1, x2, y2, color) {
    }
    clear(color) {
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
