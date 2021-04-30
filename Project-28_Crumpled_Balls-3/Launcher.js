class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 30
        }
        this.pointB = pointB
        this.Launcher= Matter.Constraint.create(options);
        World.add(world, this.Launcher);
    }
    fly(){
        this.Launcher.bodyA = null
    }

    display(){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    


}