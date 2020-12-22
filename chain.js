class Chain {
 constructor(bodyA, bodyB){
     var options={
       bodyA:bodyA,
       bodyB:bodyB,
       length:100,
       stiffness:0.9
     }

    this.body = MouseConstraint.create(engine, options);
    World.add(world,this.body);
}
display(){
    var pointA = this.body.bodyA.position;
    var pointB = this.body.bodyB.position;

    push();
    strokeWeight(8);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
}




}