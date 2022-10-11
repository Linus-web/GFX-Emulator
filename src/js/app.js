import { BITMAP } from "./BITMAP.js";
import { Plane } from "./PlaneClass.js";

let pixelWidth;
let plane = new Plane();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const inputC = document.getElementById("inputC");

function display(planex, canvasCtx) {
  for (let i = 0; i < planex.plane.length; i++) {
    if (planex.plane[i] != undefined) {
      canvasCtx.fillStyle = planex.plane[i];
      canvasCtx.fillRect(
        (i % planex.width) * pixelWidth,
        Math.floor(i / planex.width) * pixelWidth,
        pixelWidth,
        pixelWidth
      );
    }
  }
}

function reScale(canvas, planex) {
  pixelWidth = canvas.offsetHeight / planex.width;
  canvas.width = canvas.offsetHeight;
  canvas.height = canvas.offsetHeight;
}


setInterval(() => {
  reScale(canvas, plane);
  display(plane, ctx);
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
  plane.clear(inputC.value);
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
  console.log("mouse Down");
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
  console.log("mouse Up");
  points = {};
  console.log(points);
  clearInterval(drawInterval);
  canvas.removeEventListener("mousemove", updateCursorPos);
  canvas.removeEventListener("mousedown", startPutPixel);
  canvas.removeEventListener("mouseup", stopPutPixel);
  canvas.removeEventListener("mouseleave", stopPutPixel);
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
      console.log("line");

      if (points.x1 == null) {
        points = {};
        console.log("point 1");
        points.x1 = coords.x;
        points.y1 = coords.y;
        plane.putPixel(points.x1, points.y1, inputC.value);
        console.log(points);
      } else {
        points.x2 = coords.x;
        points.y2 = coords.y;
        plane.line(points.x1, points.y1, points.x2, points.y2, inputC.value);
        console.log(points);
        points = {};
        console.log(points);
      }

      break;

    case "circle":
        console.log('circle');
      if (points.x1 == null) {
        points = {};
        console.log("point 1");
        points.x1 = coords.x;
        points.y1 = coords.y;
      } else {
        points.x2 = coords.x;
        points.y2 = coords.y;
        let midPointX = (points.x1+points.x2)/2
        let midPointY = (points.y1+points.y2)/2
        let radius = Math.abs(midPointX - points.x1)>Math.abs(midPointY-points.y1)?Math.abs(midPointX - points.x1):Math.abs(midPointY-points.y1);
        console.log(midPointX,midPointY,radius);
        plane.circle(midPointX,midPointY,radius,inputC.value,360,false)
        points = {};
      }

      break;
      case 'circle-fill':
        console.log('circle-fill');
        if (points.x1 == null) {
          points = {};
          console.log("point 1");
          points.x1 = coords.x;
          points.y1 = coords.y;
          
        } else {
          points.x2 = coords.x;
          points.y2 = coords.y;
          let midPointX = (points.x1+points.x2)/2
          let midPointY = (points.y1+points.y2)/2
          let radius = Math.abs(midPointX - points.x1)>Math.abs(midPointY-points.y1)?Math.abs(midPointX - points.x1):Math.abs(midPointY-points.y1);
          console.log(midPointX,midPointY,radius);
          plane.circle(midPointX,midPointY,radius,inputC.value,360,true)
          points = {};
        }
      break


      case 'square':
        console.log('circle');
        if (points.x1 == null) {
          points = {};
          points.x1 = coords.x;
          points.y1 = coords.y;
          plane.putPixel(points.x1, points.y1, inputC.value);
        } else {
          points.x2 = coords.x;
          points.y2 = coords.y;
          plane.rectangle(points.x1,points.y1,points.x2,points.y2,inputC.value,false)
          points = {};
        }
      break
      case 'square-fill':
        console.log('circle');
        if (points.x1 == null) {
          points = {};
          points.x1 = coords.x;
          points.y1 = coords.y;
          plane.putPixel(points.x1, points.y1, inputC.value);
        } else {
          points.x2 = coords.x;
          points.y2 = coords.y;
          plane.rectangle(points.x1,points.y1,points.x2,points.y2,inputC.value,true)
          points = {};
        }
      break
    default:
        alert('no tool selected')
      break;
  }
});

const resizeBtn = document.getElementById("resize");
const resizeGenerate = document.getElementById("resizeGenerate");
const resizeInput = document.getElementById("resizeInput");
const resizeModal = document.getElementById("resizeModal");

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
      case "circle":
        currentTool = "circle";
        break;
      case "circle-fill":
        currentTool = "circle-fill";
        break;
      case "square":
        currentTool = "square";
        break;
      case "square-fill":
        currentTool = "square-fill";
        break;
      case "triangle":
        currentTool = "triangle";
        break;
      case "triangle-fill":
        currentTool = "triangle-fill";
        break;
      case "text":
        currentTool = "text";
        break;

      default:
        break;
    }
  });
});
