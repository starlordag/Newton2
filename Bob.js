class BOB{
    constructor(x,y,r,fill){
        var options = {
            isStatic:true,
            restitution:0,
            friction:0.5,
            density:0.02,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.fill = fill
        this.body=Matter.Bodies.circle(this.x, this.y, this.r/2, options); 
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        strokeWeight(1);
        fill(this.fill);
        ellipse(this.x, this.y, this.r, this.r);
        pop();
    }
}