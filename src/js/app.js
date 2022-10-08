import { BITMAP } from "./BITMAP.js";
import { Plane } from "./PlaneClass.js";


//DONT USE FILL FUNCTION ON TRIANGLE; IT IS MERELY THERE FOR SHOWCASE
let pixelWidth;
let plane = new Plane();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");




const inputC = document.getElementById("inputC")

function display() {
  for (let i = 0; i < plane.plane.length; i++) {
    if (plane.plane[i] != undefined) {
    ctx.fillStyle = plane.plane[i]
    ctx.fillRect(
        (i % plane.width) * pixelWidth,
        Math.floor(i / plane.width) * pixelWidth,
        pixelWidth,
        pixelWidth
      );
    }
  }
}

function reScale() {
  pixelWidth = canvas.offsetHeight / plane.width;
  canvas.width = canvas.offsetHeight;
  canvas.height = canvas.offsetHeight;
}



plane.line(100,100,300,300,inputC.value)
plane.line(140,100,300,260,inputC.value)
plane.line(180,100,300,220,inputC.value)
plane.line(220,100,300,180,inputC.value)
plane.line(100,140,260,300,inputC.value)
plane.line(100,180,220,300,inputC.value)
plane.line(100,220,180,300,inputC.value)


setInterval(() => {
  reScale();
  display();
}, 50);

const cHeight = document.getElementById("cHeight")
const cWidth = document.getElementById("cWidth")

cHeight.innerText = "px: " + plane.height
cWidth.innerText = "px: " + plane.width


const btnUp = document.getElementById("up")
const btnDown = document.getElementById("down")
const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")
let autoScrollDown
let autoScrollUp
let autoScrollLeft 
let autoScrollRight
let scrolling = false

document.getElementById("checkA").checked = false
document.getElementById("checkP").checked = false


btnLeft.addEventListener("click", () =>{
  clearInterval(autoScrollRight)
  clearInterval(autoScrollLeft)
  if(document.getElementById("checkA").checked==true&&document.getElementById("checkP").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

    autoScrollLeft = setInterval(() => {
    
      plane.pScrollLeft()
   }, 100);
  }
  else if(document.getElementById("checkA").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

    autoScrollLeft = setInterval(() => {
    
      plane.scrollLeft()
   }, 100);
  }
  else if(document.getElementById("checkP").checked==true){
    plane.pScrollLeft()
  }
  else{
    plane.scrollLeft()
  }
} )

btnRight.addEventListener("click", () => {
  clearInterval(autoScrollLeft)
  clearInterval(autoScrollRight)
  if(document.getElementById("checkA").checked==true&&document.getElementById("checkP").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

    autoScrollRight = setInterval(() => {
    
      plane.pScrollRight()
   }, 100);
  }
  else if(document.getElementById("checkA").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

    autoScrollRight = setInterval(() => {
    
      plane.scrollRight()
   }, 100);
  }
  else if(document.getElementById("checkP").checked==true){
    plane.pScrollRight()
  }
  else{
    plane.scrollRight()
  }
})

btnUp.addEventListener("click", () => {
  clearInterval(autoScrollDown)
    clearInterval(autoScrollUp)
    if(document.getElementById("checkA").checked==true&&document.getElementById("checkP").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

      autoScrollUp = setInterval(() => {
      
        plane.pScrollUp()
     }, 100);
    }
    else if(document.getElementById("checkA").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

      autoScrollUp = setInterval(() => {
      
        plane.scrollUp()
     }, 100);
    }
    else if(document.getElementById("checkP").checked==true){
      plane.pScrollUp()
    }
    else{
      plane.scrollUp()
    }
})
btnDown.addEventListener("click", () => {
  clearInterval(autoScrollUp)
  clearInterval(autoScrollDown)
  if(document.getElementById("checkA").checked==true&&document.getElementById("checkP").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

    autoScrollDown = setInterval(() => {
    
      plane.pScrollDown()
   }, 100);
  }
  else if(document.getElementById("checkA").checked==true){
  scrolling = true
  canvasP.classList.replace("fa-pause","fa-play")

    autoScrollDown = setInterval(() => {
    
      plane.scrollDown()
   }, 100);
  }
  else if(document.getElementById("checkP").checked==true){
    plane.pScrollDown()
  }
  else{
    plane.scrollDown()
  }
})


const btnPause = document.getElementById("play")
const canvasP = document.getElementById("canvasP")

btnPause.addEventListener("click", () =>{
  console.log(autoScrollDown)
  if(scrolling){
    if(canvasP.classList[1]=="fa-pause")
    canvasP.classList.replace("fa-pause","fa-play")
    else
    canvasP.classList.replace("fa-play","fa-pause")
  }
  console.log(canvasP.classList)
  scrolling = false
  clearInterval(autoScrollUp)
  clearInterval(autoScrollDown)
  clearInterval(autoScrollLeft)
  clearInterval(autoScrollRight)
})
const btnClear = document.getElementById("clear")

btnClear.addEventListener("click", () => {
  console.log(inputC.value)
  plane.clear(inputC.value)
  console.log(plane)
})



const draw = document.getElementById("draw")
let drawPressed = false


function disableAllTools() {
  drawPressed = false
  
}

draw.addEventListener("click", () => {
  disableAllTools()
  drawPressed = true
} )






canvas.addEventListener("click", (event) => {
  let rect = canvas.getBoundingClientRect()
  console.log(event.x-rect.x)
  console.log(event.y-rect.y)
})






