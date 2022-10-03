export class BITMAP{
    width:number
    height:number
    plane:number[]


    constructor(){
        this.height = 300
        this.width = 300
        this.plane = new Array(this.height*this.width)
    }


    blitToDisplay(
        BITMAP:Number[],width:number,height:number,
        bx:number,by:number,dx:number,dy:number
        )
        {

    }





    blitToBitmap(
        BITMAP:Number[],width:number,height:number,
        bx:number,by:number,dx:number,dy:number
        )
        {

    }




}