//import { createLogicalAnd } from "typescript";
import { BITMAP } from "./BITMAP.js";


export class Plane {
  constructor() {
    this.bitmapBlit = new BITMAP(2, 2);
    this.width = 100;
    this.height = this.width;
    this.plane = new Array(this.height * this.width);
    this.lock = true;
    this.saveState = 0;
    this.saves = {};
    this.delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

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

  circle(x, y, r, color, accuracy, fill) {
    //center of circle (x,y)
    //range of circle is (r)
    //accurancy = sin(angle)*r, and cos(angle)*r
    //point of change is 2pi/accuracy
    let pointofchange = (2 * 3.141592) / accuracy;
    for (let i = 0; i < accuracy; i++) {
      let x1 = Math.round(x + r * Math.sin(pointofchange * i));
      let y1 = Math.round(y + r * Math.cos(pointofchange * i));
      let x2 = Math.round(x + r * Math.sin(pointofchange * (i + 1)));
      let y2 = Math.round(y + r * Math.cos(pointofchange * (i + 1)));
      // this.putPixel(x1,y1,color)
      this.line(x1, y1, x2, y2, color);
    }

    if (fill == true || fill == "true") {

      this.fillFunc(x, y, color);

      // for (let k = 0; k < r; k++) {
      //   for (let i = 0; i < accuracy; i++) {

      //     let x1 = Math.ceil(x + (r-k) * Math.sin(pointofchange * i));
      //     let y1 = Math.ceil(y + (r-k) * Math.cos(pointofchange * i));
      //     let x2 = Math.ceil(x + (r-k) * Math.sin(pointofchange * (i + 1)));
      //     let y2 = Math.ceil(y + (r-k) * Math.cos(pointofchange * (i + 1)));
      //     // this.putPixel(x1,y1,color)
      //     this.line(x1, y1, x2, y2, color);
      //   }

      // }
    }
  }

  rectangle(x1, y1, x2, y2, color, rotate, offangle, fill) {
    let Offset = offangle * (3.141592 / 180);

    let xCenter = (x1 + x2) / 2;
    let yCenter = (y1 + y2) / 2;
    let ylength = Math.abs(y2 - y1);
    let xlength = Math.abs(x2 - x1);
    let r = Math.ceil(Math.sqrt(xlength ** 2 + ylength ** 2));

    if (rotate == true || rotate == "true") {
      let pointofchange = (2 * 3.141592) / 4;

      for (let i = 0; i < 4; i++) {
        let x1 = Math.ceil(xCenter + (r/2) * Math.sin(pointofchange * i + Offset));
        let y1 = Math.ceil(yCenter + (r/2) * Math.cos(pointofchange * i + Offset));
        let x2 = Math.ceil(
          xCenter + (r/2) * Math.sin(pointofchange * (i + 1) + Offset)
        );
        let y2 = Math.ceil(
          yCenter + (r/2) * Math.cos(pointofchange * (i + 1) + Offset)
        );
        // this.putPixel(x1,y1,color)
        this.line(x1, y1, x2, y2, color);
      }
    } else {
      this.line(x1, y1, x2, y1, color);
      this.line(x2, y1, x2, y2, color);
      this.line(x2, y2, x1, y2, color);
      this.line(x1, y2, x1, y1, color);
    }
    if (fill == true || fill == "true") {
      let xCenter = Math.ceil((x1 + x2) / 2);
      let yCenter = Math.ceil((y1 + y2) / 2);
      this.fillFunc(xCenter, yCenter, color);
    }
  }

  clear() {
    for (let i = 0; i < this.plane.length; i++) {
      this.plane[i] = undefined;
    }
  }
  resize(size) {
    this.width = size;
    this.height = size;
    this.plane = new Array(this.width * this.height);
  }

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
        this.plane[i + y * this.width] =
          this.plane[i + y * this.width - this.width];
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
        this.plane[i + y * this.width] =
          this.plane[i + y * this.width - this.width];
      }
    }
    for (let i = 0; i < this.width; i++) this.plane[i] = tempArr[i];
  }

  triangle(x1, y1, x2, y2, x3, y3, color, fill) {
    this.line(x1, y1, x2, y2, color);
    this.line(x2, y2, x3, y3, color);
    this.line(x3, y3, x1, y1, color);
    let area1 = x1 * (y2 - y3);
    let area2 = x2 * (y3 - y1);
    let area3 = x3 * (y1 - y2);

    let counter = 0;

    let totalarea = Math.abs(Math.ceil((area1 + area2 + area3) / 2));

    if (fill == true || fill == "true") {
      let xCenter = Math.ceil((x1 + x2 + x3) / 3);
      let yCenter = Math.ceil((y1 + y2 + y3) / 3);
      this.fillFunc(xCenter, yCenter, color, counter);
    }
  }

  savePlane() {
    let arr = this.plane.slice();
    this.saveState++;
    this.saves[this.saveState] = arr;
    if (Object.keys(this.saves).length > this.saveState) {
      let length = Object.keys(this.saves).length;
      for (let i = this.saveState + 1; i <= length; i++) {
        delete this.saves[i];
      }
    }
  }

  undo() {
    if (this.saveState > 1) {
      this.saveState--;
      this.plane = this.saves[this.saveState];
      let arr = this.plane.slice();
      this.plane = arr;
    }
  }

  redo() {
    if (this.saveState < Object.keys(this.saves).length) {
      this.saveState++;
      this.plane = this.saves[this.saveState];
      let arr = this.plane.slice();
      this.plane = arr;
    }
  }

  arc(x, y, r, angleDeg, color, accuracy, vo) {
    let Offset = vo * (3.141592 / 180);
    let Rads = angleDeg * (3.141592 / 180);

    let pointofchange = Rads / accuracy;

    for (let i = 0; i < accuracy; i++) {
      let x1 = Math.ceil(x + r * Math.sin(pointofchange * i + Offset));
      let y1 = Math.ceil(y + r * Math.cos(pointofchange * i + Offset));
      let x2 = Math.ceil(x + r * Math.sin(pointofchange * (i + 1) + Offset)); //next point  in question
      let y2 = Math.ceil(y + r * Math.cos(pointofchange * (i + 1) + Offset));
      // this.putPixel(x1,y1,color)
      this.line(x1, y1, x2, y2, color);
    }
  }

  fillFunc(x, y, newColor) {
    if (
      x < 0 ||
      y < 0 ||
      x > this.width ||
      y > this.height ||
      this.plane[x + y * this.width] == newColor
    ) {
      return;
    }
    // else if(counter ==this.plane.length*4){
    //   break;

    // }
    else {
      this.putPixel(x, y, newColor);
     setInterval( this.fillFunc(x + 1, y, newColor),500)
     setInterval(this.fillFunc(x - 1, y, newColor),500)
     setInterval( this.fillFunc(x, y - 1, newColor),500)
     setInterval( this.fillFunc(x, y + 1, newColor),500)
    }
  }
 blit(src, dst, sx, sy, w, h, dSx, dSy, copyToPlane) {
    if (copyToPlane == true) {
      let destArr = new Array(w * h);
      let copyArr = src.plane.slice();
      for (let y = 0; y < h - 1; y++) {
        for (let i = 0; i < w; i++) {
          dst.bitplane[dSy * dst.width + dSx + i + y * w] =
            copyArr[sx + sy * src.width + i + y * src.width];
        }
      }
    } else {
      let destArr = new Array(w * h);
      let copyArr = dst.bitplane.slice();
      for (let y = 0; y < h - 1; y++) {
        for (let i = 0; i < w; i++) {
          src.plane[sx + sy * src.width + i + y * src.width] =
            copyArr[dSy * dst.width + dSx + i + y * w];
        }
      }
    }
  }

  textOut(x, y, color, text) {
    let verticalLineCount = 0;
    let textbitmap = this.bitmapBlit.getCharacterChar(text);
    for (let i = 0; i < textbitmap.length / 56; i++) {
      // for (let k = 0; k <7; k++) {
      //   verticalLineCount++;
      // for (let j = 0; j < 8; j++) {
      //   if (textbitmap[verticalLineCount+j*this.width]==1) {
      //     this.plane[verticalLineCount+j*this.width] = color

      //   }
      // }
      // }
      for (let k = 0; k < textbitmap.length / 56; k++) {
        for (let j = 0; j < 8; j++) {
          for (let i = 0; i < 7; i++) {
            if (textbitmap[i + j * 7 + k * 56] == 1)
              this.plane[i + j * this.width + 7 * k + x + y * this.width] =
                color;
          }
        }
      }
    }
  }


  ///////////////////////////////PARSER
  replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
  }
  
   async textsplicer(command){
      let text = command;
      let count = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i]==",") {
          count++;
          
        }
        
      }
     
  
      for (let k = -1; k < count;k++) {
  
        if (text.includes(",")) {
          let x = text.indexOf(",")
          let inputText = text.slice(0,x)
            this.interpreter(inputText)
  
  
          text = this.replaceRange(text,0,x+1,"")
       
  
        }
        else{
          this.interpreter(text)
        }
        
        await this.delay(2000)
        
      }
  
    }
  
  
     interpreter(text) {
      let newText = text.toLowerCase();//removes stupid stuff
      let truetext = newText.replace(",","")
      const interpretationArray = truetext.split(" ");
  
      var valuesArray=[];
      for (let i = 1; i < interpretationArray.length; i++) {
        if (isNaN(interpretationArray[i]) == true) {
          
        }
        else{
          valuesArray.push(parseInt(interpretationArray[i]))
  
        }
  
  
      }
      console.log(interpretationArray)
      console.log(valuesArray)
  
  
  
      if (interpretationArray.indexOf("drawcircle") > -1) {
        let x = interpretationArray[6]
        this.circle(valuesArray[0],valuesArray[1],valuesArray[2],interpretationArray[4],valuesArray[3],x)
       
      }
  
      else if (interpretationArray.indexOf("drawline") > -1) {
  
        this.line(valuesArray[0],valuesArray[1],valuesArray[2],valuesArray[3],interpretationArray[5])
        
      }
      else if (interpretationArray.indexOf("drawrectangle") > -1) {
        console.log(interpretationArray)
        let y = interpretationArray[6]
        console.log(y)
      
        this.rectangle(valuesArray[0], valuesArray[1],valuesArray[2],valuesArray[3],interpretationArray[5],interpretationArray[6],valuesArray[4],interpretationArray[8])
        
      }
      else if (interpretationArray.indexOf("drawtriangle") > -1) {
        console.log(interpretationArray)
        this.triangle(valuesArray[0],valuesArray[1],valuesArray[2],valuesArray[3],valuesArray[4],valuesArray[5],interpretationArray[7],interpretationArray[8]);
        
      }
      else if (interpretationArray.indexOf("fill") > -1) {
        this.fillFunc(valuesArray[0],valuesArray[1],interpretationArray[2]);
        
      }
      else if (interpretationArray.indexOf("clear") > -1) {
        this.clear();
        
      }
    }

}
