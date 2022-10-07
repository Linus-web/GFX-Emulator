import { BITMAP } from "./BITMAP.js";
export class Plane {
  constructor() {
    this.width = 40;
    this.height = this.width;
    this.plane = new Array(this.height * this.width);
    this.lock = false;
  }
  putPixel(x, y, color) {
    this.plane[x + y * this.width] = color;
  }
  line(x1, y1, x2, y2, color) {
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var sx = x1 < x2 ? 1 : -1;
    var sy = y1 < y2 ? 1 : -1;
    var err = dx - dy;

    while (true) {
      this.putPixel(x1, y1, 254); // Do what you need to for this

      if (x1 === x2 && y1 === y2) break;
      var e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x1 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y1 += sy;
      }
    }
  }
  circle(x, y, r, color, accuracy) {
    //center of circle (x,y)
    //range of circle is (r)
    //accurancy = sin(angle)*r, and cos(angle)*r
    //point of change is 2pi/accuracy
    let pointofchange = (2 * 3.141592) / accuracy;

    for (let i = 0; i < accuracy; i++) {
      let x1 = Math.ceil(x + r * Math.sin(pointofchange * i));
      let y1 = Math.ceil(y + r * Math.cos(pointofchange * i));
      let x2 = Math.ceil(x + r * Math.sin(pointofchange * (i + 1)));
      let y2 = Math.ceil(y + r * Math.cos(pointofchange * (i + 1)));
      // this.putPixel(x1,y1,color)
      this.line(x1, y1, x2, y2, color);
    }
  }
  rectangle(x1, y1, x2, y2, color) {
    //four points to generate
    //first point (x1,y1)
    //second point (x2, y1)
    //third point (x2,y2)
    //fourth point (x1,y2)
    this.line(x1, y1, x2, y1, color);
    this.line(x2, y1, x2, y2, color);
    this.line(x2, y2, x1, y2, color);
    this.line(x1, y2, x1, y1, color);
  }
  clear(color) {
    this.plane.forEach((element) => {
      element = color;
    });
  }
  resize(x, y) {
    this.width = x;
    this.height = y;
    this.plane = [this.width * this.height];
  }

  textOut(x, y, color, txt) {}

  scrollLeft() {
    for (let y = 0; y < this.height; y++) {
      for (let i = 0; i < this.plane.length / this.width; i++) {
        if (i < this.width - 1)
          this.plane[i + y * this.height] = this.plane[i + y * this.height + 1];
        else this.plane[i + y * this.height] = undefined;
      }
    }
    console.table(this.plane);
  }
  scrollRight() {
    for (let y = 0; y < this.height; y++) {
      for (let i = this.plane.length / this.width - 1; i >= 0; i--) {
        if (i != 0)
          this.plane[i + y * this.height] = this.plane[i + y * this.height - 1];
        else this.plane[i + y * this.height] = undefined;
      }
    }
  }
  scrollUp() {
    for (let y = 0; y < this.height; y++) {
      for (let i = 0; i < this.width; i++)
        this.plane[i + y * this.width] =
          this.plane[i + y * this.width + this.height];
    }
  }
  scrollDown() {
    for (let y = this.height - 1; y >= 0; y--) {
      for (let i = 0; i < this.width; i++) {
        if (y == 39) this.plane[i + y * this.width] = undefined;
        else
          this.plane[i + y * this.width] = this.plane[i + y * this.width - 40];
      }
    }
  }
  pScrollLeft() {}
  pScrollRight() {}
  pScrollUp() {}
  pScrollDown() {}

  triangle(x1, y1, x2, y2, x3, y3, color) {
    this.line(x1, y1, x2, y2, color);
    this.line(x2, y2, x3, y3, color);
    this.line(x3, y3, x1, y1, color);
  }
}
