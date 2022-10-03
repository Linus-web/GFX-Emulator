
import {BITMAP} from "./BITMAP.js"
import {Plane} from "./PlaneClass.js"

let bitmap = new BITMAP();
let plane = new Plane();

plane.putPixel(2,2, 255)
console.table(bitmap.plane)

