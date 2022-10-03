



export class Plane {
width:number
height:number
lock:boolean
zoom:number

color = {
    R: 255,
    G:255,
    B:255,
    A:1
}

    constructor(){
        this.width = 300
        this.height = 300
        this.lock = false
        this.zoom = 1
    }

    putPixel(x:number,y:number,color:object){

    }

    line(x1:number,y1:number,x2:number,y2:number,color:object){

    }

    circle(x:number,y:number,r:number,color:object){

    }

    rectangle(x1:number,y1:number,x2:number,y2:number,color:object){

    }

    clear(color:object){

    }

    resize(x:number,y:number){

    }

    textOut(x:number,y:number,color:object,txt:string){

    }


    scrollLeft(){

    }

    scrollRight(){

    }

    scrollUp(){

    }

    scrollDown(){

    }

    pScrollLeft(){

    }

    pScrollRight(){

    }

    pScrollUp(){

    }

    pScrollDown(){
        
    }

    triangle (x1:number,y1:number,x2:number,y2:number,x3:number,y3:number,color:object){

    }



}
