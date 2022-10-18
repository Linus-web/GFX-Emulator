import { BITMAP } from "./BITMAP.js";
import { Plane } from "./PlaneClass.js";

let pixelWidth;
let plane = new Plane();
let savePlaneArrForDemo = [];
let copyPlane = new BITMAP(100);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const inputC = document.getElementById("inputC");

plane.savePlane();
let showDemo = true;
function display() {
  for (let i = 0; i < plane.plane.length; i++) {
    if (plane.plane[i] != undefined) {
      ctx.fillStyle = plane.plane[i];
      ctx.fillRect(
        (i % plane.width) * pixelWidth,
        Math.floor(i / plane.width) * pixelWidth,
        pixelWidth,
        pixelWidth
      );
    }
  }
  // if(showDemo){
  //   for (let i = 0; i < demoPlane.plane.length; i++) {
  //     if (demoPlane.plane[i] != undefined) {
  //       ctx.fillStyle = demoPlane.plane[i];
  //       ctx.fillRect(
  //         (i % demoPlane.width) * pixelWidth,
  //         Math.floor(i / demoPlane.width) * pixelWidth,
  //         pixelWidth,
  //         pixelWidth
  //         );
  //       }
  //     }
  // }
  // if(!showDemo){
  //   for (let i = 0; i < plane.plane.length; i++) {
  //     if (plane.plane[i] != undefined) {
  //       ctx.fillStyle = plane.plane[i];
  //       ctx.fillRect(
  //         (i % plane.width) * pixelWidth,
  //         Math.floor(i / plane.width) * pixelWidth,
  //         pixelWidth,
  //         pixelWidth
  //         );
  //       }
  //     }
  //   }
}

function reScale(canvas, planex) {
  pixelWidth = canvas.offsetHeight / planex.width;
  canvas.width = canvas.offsetHeight;
  canvas.height = canvas.offsetHeight;
}

plane.textOut(0, 0, inputC.value, "Hi");
// plane.textsplicer("drawtriangle 20 20 0 40 40 40 #000000 true,drawline 0 0 50 50 #FF0000,drawline 0 20 50 50 #FF0000");
// plane.line(x1,y2,x2,y2,#FF0000)
// console.log(copyPlane.bitplane);
// console.log(plane.blit(plane, copyPlane, 0, 1, 14, 8, 10, 10, true));
// console.log(copyPlane.bitplane);
// console.log(plane.blit(plane, copyPlane, 20, 20, 14, 8, 10, 10));


setInterval(() => {
  reScale(canvas, plane);
  display();
  cHeight.innerText = "px: " + plane.height;
  cWidth.innerText = "px: " + plane.width;
}, 50);

const cHeight = document.getElementById("cHeight");
const cWidth = document.getElementById("cWidth");

const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
let autoScrollDown;
let autoScrollUp;
let autoScrollLeft;
let autoScrollRight;
let scrolling = false;

document.getElementById("checkA").checked = false;
document.getElementById("checkP").checked = false;

btnLeft.addEventListener("click", () => {
  clearInterval(autoScrollRight);
  clearInterval(autoScrollLeft);
  if (
    document.getElementById("checkA").checked == true &&
    document.getElementById("checkP").checked == true
  ) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollLeft = setInterval(() => {
      plane.pScrollLeft();
    }, 100);
  } else if (document.getElementById("checkA").checked == true) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollLeft = setInterval(() => {
      plane.scrollLeft();
    }, 100);
  } else if (document.getElementById("checkP").checked == true) {
    plane.pScrollLeft();
  } else {
    plane.scrollLeft();
  }
});

btnRight.addEventListener("click", () => {
  clearInterval(autoScrollLeft);
  clearInterval(autoScrollRight);
  if (
    document.getElementById("checkA").checked == true &&
    document.getElementById("checkP").checked == true
  ) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollRight = setInterval(() => {
      plane.pScrollRight();
    }, 100);
  } else if (document.getElementById("checkA").checked == true) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollRight = setInterval(() => {
      plane.scrollRight();
    }, 100);
  } else if (document.getElementById("checkP").checked == true) {
    plane.pScrollRight();
  } else {
    plane.scrollRight();
  }
});

btnUp.addEventListener("click", () => {
  clearInterval(autoScrollDown);
  clearInterval(autoScrollUp);
  if (
    document.getElementById("checkA").checked == true &&
    document.getElementById("checkP").checked == true
  ) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollUp = setInterval(() => {
      plane.pScrollUp();
    }, 100);
  } else if (document.getElementById("checkA").checked == true) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollUp = setInterval(() => {
      plane.scrollUp();
    }, 100);
  } else if (document.getElementById("checkP").checked == true) {
    plane.pScrollUp();
  } else {
    plane.scrollUp();
  }
});
btnDown.addEventListener("click", () => {
  clearInterval(autoScrollUp);
  clearInterval(autoScrollDown);
  if (
    document.getElementById("checkA").checked == true &&
    document.getElementById("checkP").checked == true
  ) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollDown = setInterval(() => {
      plane.pScrollDown();
    }, 100);
  } else if (document.getElementById("checkA").checked == true) {
    scrolling = true;
    canvasP.classList.replace("fa-pause", "fa-play");

    autoScrollDown = setInterval(() => {
      plane.scrollDown();
    }, 100);
  } else if (document.getElementById("checkP").checked == true) {
    plane.pScrollDown();
  } else {
    plane.scrollDown();
  }
});

const btnPause = document.getElementById("play");
const canvasP = document.getElementById("canvasP");

btnPause.addEventListener("click", () => {
  if (scrolling) {
    if (canvasP.classList[1] == "fa-pause")
      canvasP.classList.replace("fa-pause", "fa-play");
    else canvasP.classList.replace("fa-play", "fa-pause");
  }
  scrolling = false;
  clearInterval(autoScrollUp);
  clearInterval(autoScrollDown);
  clearInterval(autoScrollLeft);
  clearInterval(autoScrollRight);
});
const btnClear = document.getElementById("clear");

btnClear.addEventListener("click", () => {
  plane.savePlane();
  plane.clear();
});

const draw = document.getElementById("draw");
let drawPressed = false;

function disableAllTools() {
  drawPressed = false;
}

draw.addEventListener("click", () => {
  disableAllTools();
  drawPressed = true;
});
let coords = {};
let currentTool;

let points = {};

let drawInterval;
let rect;
let coordX;
let coordY;

function startPutPixel() {
  canvas.addEventListener("mouseup", stopPutPixel);
  canvas.addEventListener("mouseleave", stopPutPixel);
  canvas.addEventListener("mousemove", updateCursorPos);
  drawInterval = setInterval(() => {
    if (points.x1 == null) {
      points.x1 = coords.x;
      points.y1 = coords.y;
      if (points.x2 != null) {
        plane.line(points.x2, points.y2, points.x1, points.y1, inputC.value);
      }
    } else {
      points.x2 = coords.x;
      points.y2 = coords.y;
      plane.line(points.x1, points.y1, points.x2, points.y2, inputC.value);
      points.x1 = null;
      points.y1 = null;
    }
  }, 50);
}
function stopPutPixel() {
  points = {};
  clearInterval(drawInterval);
  canvas.removeEventListener("mousemove", updateCursorPos);
  canvas.removeEventListener("mousedown", startPutPixel);
  canvas.removeEventListener("mouseup", stopPutPixel);
  canvas.removeEventListener("mouseleave", stopPutPixel);
  plane.savePlane();
}
function updateCursorPos(event) {
  rect = canvas.getBoundingClientRect();
  coordX = Math.floor((event.x - rect.left) / pixelWidth);
  coordY = Math.floor((event.y - rect.top) / pixelWidth);
  coords.x = parseInt(coordX);
  coords.y = parseInt(coordY);
}

canvas.addEventListener("click", (event) => {
  updateCursorPos(event);

  switch (currentTool) {
    case "draw":
      canvas.addEventListener("mousedown", startPutPixel);
      break;

    case "line":
      if (points.x1 == null) {
        points = {};
        points.x1 = coords.x;
        points.y1 = coords.y;
        plane.putPixel(points.x1, points.y1, inputC.value);
      } else {
        points.x2 = coords.x;
        points.y2 = coords.y;
        plane.line(points.x1, points.y1, points.x2, points.y2, inputC.value);
        points = {};
        plane.savePlane();
      }

      break;
    case "fill":
      plane.fillFunc(coords.x, coords.y, inputC.value);
      plane.savePlane();
      break;
    case "circle":
      if (points.x1 == null) {
        points = {};
        points.x1 = coords.x;
        points.y1 = coords.y;
      } else {
        points.x2 = coords.x;
        points.y2 = coords.y;
        let midPointX = (points.x1 + points.x2) / 2;
        let midPointY = (points.y1 + points.y2) / 2;
        let radius =
          Math.abs(midPointX - points.x1) > Math.abs(midPointY - points.y1)
            ? Math.abs(midPointX - points.x1)
            : Math.abs(midPointY - points.y1);
        plane.circle(midPointX, midPointY, radius, inputC.value, 360, false);
        points = {};
        plane.savePlane();
      }

      break;

    case "square":
      if (points.x1 == null) {
        points = {};
        points.x1 = coords.x;
        points.y1 = coords.y;
        plane.putPixel(points.x1, points.y1, inputC.value);
      } else {
        points.x2 = coords.x;
        points.y2 = coords.y;
        plane.rectangle(
          points.x1,
          points.y1,
          points.x2,
          points.y2,
          inputC.value,
          false
        );
        points = {};
        plane.savePlane();
      }
      break;
    case "triangle":
      if (points.x1 == null) {
        points = {};
        points.x1 = coords.x;
        points.y1 = coords.y;
        plane.putPixel(points.x1, points.y1, inputC.value);
      } else if (points.x2 == null) {
        points.x2 = coords.x;
        points.y2 = coords.y;
        plane.putPixel(points.x2, points.y2, inputC.value);
      } else {
        points.x3 = coords.x;
        points.y3 = coords.y;
        plane.triangle(
          points.x1,
          points.y1,
          points.x2,
          points.y2,
          points.x3,
          points.y3,
          inputC.value,
          false
        );
        points = {};
        plane.savePlane();
      }
      break;
    case "text":
      break;

    default:
      alert("no tool selected");
      break;
  }
});

const resizeBtn = document.getElementById("resize");
const resizeGenerate = document.getElementById("resizeGenerate");
const resizeInput = document.getElementById("resizeInput");
const resizeModal = document.getElementById("resizeModal");
const closeResizeModal = document.getElementById("closeResize");

function closeModalResize() {
  resizeModal.classList.toggle("hidden");
}

resizeBtn.addEventListener("click", () => {
  resizeModal.classList.toggle("hidden");
});

resizeGenerate.addEventListener("click", () => {
  plane.resize(resizeInput.value);
  closeModalResize();
});

closeResizeModal.addEventListener("click", () => {
  closeModalResize();
});

const modalBtns = document.querySelectorAll(".modalBtn");

modalBtns.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.id) {
      case "draw":
        currentTool = "draw";
        break;
      case "line":
        currentTool = "line";
        break;
      case "fill":
        currentTool = "fill";
        break;
      case "circle":
        currentTool = "circle";
        break;
      case "square":
        currentTool = "square";
        break;
      case "triangle":
        currentTool = "triangle";
        break;
      case "text":
        currentTool = "text";
        break;
    }
  });
});

const undo = document.getElementById("undo");

undo.addEventListener("click", () => {
  plane.undo();
});

const redo = document.getElementById("redo");

redo.addEventListener("click", () => {
  plane.redo();
});

const textModal = document.getElementById("textModal");
const textBtn = document.getElementById("text");
const textInputx = document.getElementById("textInputX");
const textInputy = document.getElementById("textInputY");
const textTextInput = document.getElementById("textTextInput");
const textGenerate = document.getElementById("textGenerate");
const closeTextModal = document.getElementById("closeText");

textBtn.addEventListener("click", () => {
  textModal.classList.toggle("hidden");
});

textGenerate.addEventListener("click", () => {
  if (
    textTextInput.value != "" &&
    textInputx.value != "" &&
    textInputy.value != ""
  ) {
    let x = parseInt(textInputx.value);
    let y = parseInt(textInputy.value);
    let text = textTextInput.value;
    plane.textOut(x, y, inputC.value, text);
    textInputx.value = "";
    textInputy.value = "";
    textTextInput.value = "";
    textModal.classList.toggle("hidden");
    plane.savePlane();
  } else alert("Missing or Faulty Inputs");
});

closeTextModal.addEventListener("click", () => {
  textModal.classList.toggle("hidden");
});

////////////////////////////////PARSER/////////////////////////////////////////

const parserInput = document.getElementById("parserInput");
const parserBtn = document.getElementById("parserBtn")

parserBtn.addEventListener('click', () => {
  if (parserInput.value !== null) {
    plane.textsplicer(parserInput.value)
  }
  else(
    alert("Empy parser input")
  )

})

/////////////////////////////DEMO///////////////////////////////////////////////

function getRandomColor() {
  let r = Math.floor(Math.random() * 254);
  let g = Math.floor(Math.random() * 254);
  let b = Math.floor(Math.random() * 254);
  let hex = rgbToHex(r, g, b);
  return hex;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function placeRandomCricle() {
  let randomX = Math.floor(Math.random() * plane.width);
  let randomY = Math.floor(Math.random() * plane.height);
  let randomSize = Math.round(Math.random() * 5 + 5);
  let randomColor = getRandomColor();
  plane.circle(randomX, randomY, randomSize, randomColor, 360, true);
}

function scrollDownLeft() {
  plane.scrollDown();
  plane.scrollLeft();
  plane.pScrollDown();
  plane.pScrollLeft();
}
function scrollDownLeftD() {
  plane.scrollLeft();
}

let demoi = 0;
let demoy = 0;
let demox = 0;

setInterval(
  () => {
    demoInterval();
  },

  60
);

function demoInterval() {
  if (showDemo) {
    demoi++;

    if (demoi < 100) {
      placeRandomCricle();
      placeRandomCricle();
      placeRandomCricle();
    } else if (demoi < 200) scrollDownLeft();
    else if (demoi < 200 + plane.width) {
      scrollDownLeftD();
      scrollDownLeftD();
    } else if (demoi < 200 + plane.width / 2 + 1) plane.clear();
    else if (demoi < 350) {
      plane.clear();
      plane.fillFunc(plane.height / 2, plane.width / 2, "#000000");
      plane.textOut(7, plane.height / 2 - 5, getRandomColor(), "GFX Emulator");
    } else if (demoi < 400 + plane.height) {
      plane.textOut(7, plane.height / 2 - 5, getRandomColor(), "GFX Emulator");
      plane.pScrollUp();
      plane.pScrollRight();
    } else if (demoi < 400 + plane.height * 2) {
      plane.scrollRight();
    } else if (demoi < 700) {
      demoy += 5;
      demox += 0.3;
      plane.rectangle(
        0 + Math.floor(demox),
        0 + Math.floor(demox),
        plane.width - Math.floor(demox),
        plane.width - Math.floor(demox),
        getRandomColor(),
        true,
        demoy,
        true
      );
    } else {
      demoy = 0;
      demox = 0;
      demoi = 0;
    }
  }
}

let demoTimerInterval;
document.addEventListener("click", () => {
  if (showDemo) {
    showDemo = false;
    plane.clear();
    plane.plane = plane.saves[plane.saveState];
  }
  clearInterval(demoTimerInterval);
  let demoI = 0;
  demoTimerInterval = setInterval(() => {
    demoI++;
    if (demoI > 60) {
      demoI = 0;
      showDemo = true;
    }
  }, 100);
});
