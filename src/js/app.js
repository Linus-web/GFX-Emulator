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

plane.rectangle(20,20,30,30,inputC.value,true,90,true)


setInterval(() => {
  reScale(canvas, plane);
  display(plane, ctx);
}, 50);

const cHeight = document.getElementById("cHeight");
const cWidth = document.getElementById("cWidth");

cHeight.innerText = "px: " + plane.height;
cWidth.innerText = "px: " + plane.width;

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

canvas.addEventListener("click", (event) => {
  let rect = canvas.getBoundingClientRect();
});

const modal = document.getElementById("myModal");
const drawbtn = document.getElementById("draw");
const span = document.getElementById("close");
let tempplane = new Plane();
const tempcanvas = document.getElementById("tempCanvas");
const tempctx = tempcanvas.getContext("2d");

let tempinterval;
tempplane.line(0, 0, 10, 10, inputC.value);

function closeModal1(){
  clearInterval(tempinterval);
  modal.classList.toggle("hidden");
}


drawbtn.onclick = function () {
  tempinterval = setInterval(() => {
    reScale(tempcanvas, tempplane);
    display(tempplane, tempctx);
  }, 200);
  modal.classList.toggle("hidden");
};

span.onclick = function () {
  closeModal1()
};




const generateTemp = document.getElementById("generateTemp")

generateTemp.addEventListener("click", () => {
  for (let i = 0; i < plane.plane.length; i++) {
      if(tempplane.plane[i] != undefined){
      plane.plane[i] = tempplane.plane[i]
      }
      tempplane.plane[i] = undefined
  }
  closeModal1()
})

const resizeBtn = document.getElementById("resize")
const resizeGenerate = document.getElementById("resizeGenerate")
const resizeInput = document.getElementById("resizeInput")
const resizeModal = document.getElementById("resizeModal")

function closeModalResize(){
    modalBackground.classList.toggle("hidden");
  resizeModal.classList.toggle("hidden");
}


resizeBtn.addEventListener("click", ()=>{
    console.log("hello")
    resizeModal.classList.toggle("hidden")
})

resizeGenerate.addEventListener("click", () => {
    closeModalResize()
})