class Chain{
    constructor(body1, body2, offsetx, offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetx, y:this.offsety},
            length:20
        }
        console.log(options)
        this.chain = Constraint.create(options);
        var pointA = this.chain.bodyA.position;
        var pointb = this.chain.bodyB.position;
        this.chainx = pointA.x+130+this.offsety;
        this.chainy = pointb.y; 
        World.add(world, this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointb = this.chain.bodyB.position;
        strokeWeight(4);
        line(this.chainx,pointA.y+270, this.chainx, this.chainy);
    }

    
}