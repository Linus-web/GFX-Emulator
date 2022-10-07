export class BITMAP {
  constructor() {
    this.height = 300;
    this.width = 300;
    this.plane = new Array(this.height * this.width);
  }
  blitToDisplay(BITMAP, width, height, bx, by, dx, dy) {}
  blitToBitmap(BITMAP, width, height, bx, by, dx, dy) {}
}
