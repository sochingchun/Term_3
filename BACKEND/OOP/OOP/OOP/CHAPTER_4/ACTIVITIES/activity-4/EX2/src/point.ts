export class Point {
    private x : number;
    private y : number;

    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    // Check object is equal or not 
    public isEqual(point:Point):boolean{
        return this.x === point.x && this.y === point.y;
    }
}