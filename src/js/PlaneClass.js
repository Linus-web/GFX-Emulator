import { BITMAP } from "./BITMAP.js";
export class Plane {
  constructor() {
    this.width = 50;
    this.height = this.width;
    this.plane = new Array(this.height * this.width);
    this.lock = true;
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
      this.putPixel(x1, y1, color); // Do what you need to for this

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

  clear(color) {
    this.plane.forEach((element) => {
      element = color;
    });
  }

  circle(x, y, r, color, accuracy,fill) {
    //center of circle (x,y)
    //range of circle is (r)
    //accurancy = sin(angle)*r, and cos(angle)*r
    //point of change is 2pi/accuracy
    let pointofchange = (2 * 3.141592) / accuracy;
    let i =0;
    for (let i = 0; i < accuracy; i++) {
      let x1 = Math.ceil(x + r * Math.sin(pointofchange * i));
      let y1 = Math.ceil(y + r * Math.cos(pointofchange * i));
      let x2 = Math.ceil(x + r * Math.sin(pointofchange * (i + 1)));
      let y2 = Math.ceil(y + r * Math.cos(pointofchange * (i + 1)));
      // this.putPixel(x1,y1,color)
      this.line(x1, y1, x2, y2, color);
    }
    console.log(this.plane);


    if (fill == true) {

      for (let k = 0; k < r; k++) {
        for (let i = 0; i < accuracy; i++) {
        
          let x1 = Math.ceil(x + (r-k) * Math.sin(pointofchange * i));
          let y1 = Math.ceil(y + (r-k) * Math.cos(pointofchange * i));
          let x2 = Math.ceil(x + (r-k) * Math.sin(pointofchange * (i + 1)));
          let y2 = Math.ceil(y + (r-k) * Math.cos(pointofchange * (i + 1)));
          // this.putPixel(x1,y1,color)
          this.line(x1, y1, x2, y2, color);
        }
    
      }
      
    }
  }

  rectangle(x1, y1, x2, y2, color, fill) {
    //four points to generate
    //first point (x1,y1)
    //second point (x2, y1)
    //third point (x2,y2)
    //fourth point (x1,y2)
    this.line(x1, y1, x2, y1, color);
    this.line(x2, y1, x2, y2, color);
    this.line(x2, y2, x1, y2, color);
    this.line(x1, y2, x1, y1, color);
    if (fill == true) {
      let LengthY = y2 - y1;
      for (let i = x1; i < x2; i++) {
        for (let k = 0; k < LengthY; k++) {
          this.putPixel(i, y1 + k, color);
        }
      }
    }
  }

  clear(color) {
    this.plane.forEach((element) => {
      element = color;
    });
  }
  resize(size) {
    this.width = size;
    this.height = size;
    this.plane = [this.width * this.height];
  }

  textOut(x, y, color, txt) {}

  scrollLeft() {
    for (let y = 0; y < this.height; y++) {
      for (let i = 0; i < this.width; i++) {
        if (i < this.width - 1)
          this.plane[i + y * this.height] = this.plane[i + y * this.height + 1];
        else this.plane[i + y * this.height] = undefined;
      }
    }
  }
  scrollRight() {
    for (let y = 0; y < this.height; y++) {
      for (let i = this.width - 1; i >= 0; i--) {
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
        this.plane[i + y * this.width] = this.plane[i + y * this.width - this.width];
      }
    }
  }

  pScrollLeft() {
    let tempArr = [];
    for (let i = 0; i < this.width; i++) {
      tempArr[i] = this.plane[i * this.height];
    }
    for (let y = 0; y < this.height; y++) {
      for (let i = 0; i < this.width; i++) {
        if (i < this.width - 1)
          this.plane[i + y * this.height] = this.plane[i + y * this.height + 1];
        else this.plane[i + y * this.height] = undefined;
      }
    }
    for (let i = 0; i < this.height; i++) {
      this.plane[i * this.width + (this.width - 1)] = tempArr[i];
    }
  }
  pScrollRight() {
    let tempArr = [];
    for (let i = 0; i < this.width; i++) {
      tempArr[i] = this.plane[i * this.height + (this.width - 1)];
    }
    for (let y = 0; y < this.height; y++) {
      for (let i = this.width - 1; i >= 0; i--) {
        if (i != 0)
          this.plane[i + y * this.height] = this.plane[i + y * this.height - 1];
        else this.plane[i + y * this.height] = undefined;
      }
    }
    for (let i = 0; i < this.height; i++) {
      this.plane[i * this.width] = tempArr[i];
    }
  }

  pScrollUp() {
    let tempArr = [];

    for (let i = 0; i < this.width; i++) tempArr[i] = this.plane[i];
    for (let y = 0; y < this.height; y++) {
      for (let i = 0; i < this.width; i++)
        this.plane[i + y * this.width] =
          this.plane[i + y * this.width + this.height];
    }
    for (let i = 0; i < this.width; i++)
      this.plane[this.width ** 2 - 1 - i] = tempArr[this.width - 1 - i];
  }
  pScrollDown() {
    let tempArr = [];
    for (let i = 0; i < this.width; i++)
      tempArr[this.width - 1 - i] = this.plane[this.width ** 2 - 1 - i];
    for (let y = this.height - 1; y >= 0; y--) {
      for (let i = 0; i < this.width; i++) {
        this.plane[i + y * this.width] = this.plane[i + y * this.width - this.width];
      }
    }
    for (let i = 0; i < this.width; i++) this.plane[i] = tempArr[i];
  }

  triangle(x1, y1, x2, y2, x3, y3, color,fill) {
    this.line(x1, y1, x2, y2, color);
    this.line(x2, y2, x3, y3, color);
    this.line(x3, y3, x1, y1, color);

    if (fill == true) {
        let c1x = x1;
        let c1y = y1;
        for (let i = 0; i < this.width*2000; i++) {
            let x = 3;
            
            let direction = Math.floor(Math.random()*3+1)

            switch (direction) {
                case 1:
                    c1x +=Math.round(((x1-c1x)/x));
                    c1y +=Math.round(((y1-c1y)/x));
                    this.putPixel(c1x,c1y,color)
                    console.log(c1x +","+c1y)
                    
                break;
            
                case 2:
                    c1x +=Math.round(((x2-c1x)/x));
                    c1y +=Math.round(((y2-c1y)/x));
                    this.putPixel(c1x,c1y,color)
                    
                break;

                case 3:
                    c1x +=Math.round(((x3-c1x)/x));
                    c1y +=Math.round(((y3-c1y)/x));
                    this.putPixel(c1x,c1y,color)
                    
                break;
            
            }
          }
      
    }
  }


 

  arc(x, y, r,angleDeg, color, accuracy,vo){

    let Offset= vo*(3.141592/180)
    console.log(Offset)
    let Rads= angleDeg*(3.141592/180)

    let pointofchange = Rads / accuracy;

    for (let i = 0; i < accuracy; i++) {
      let x1 = Math.ceil(x + r * Math.sin(pointofchange * i + Offset));
      let y1 = Math.ceil(y + r * Math.cos(pointofchange * i + Offset));
      let x2 = Math.ceil(x + r * Math.sin(pointofchange * (i + 1)+ Offset));//next point  in question
      let y2 = Math.ceil(y + r * Math.cos(pointofchange * (i + 1)+ Offset));
      // this.putPixel(x1,y1,color)
      this.line(x1, y1, x2, y2, color);
    }
    console.log(this.plane)
    

  }




}
