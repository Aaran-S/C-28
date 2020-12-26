class Slingshot {
 constructor(bodyA, pointB){
     var options={
       bodyA:bodyA,
       pointB:pointB,
       length:10,
       stiffness:0.04
     }

    this.body = Constraint.create(options);
    this.pointB = pointB;
    World.add(world,this.body);
}
display(){

    if(this.body.bodyA){
      var pointA = this.body.bodyA.position;
    var pointB = this.pointB;

    push();
    strokeWeight(8);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();

    console.log("displayConstraint");
    }
    
    
    
}

fly(){
  
  console.log("releasing the mouse");
    

    this.body.bodyA = null;
}



}