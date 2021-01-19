class Chain{ 
    constructor(bodyA,bodyB){

        var constrain_options ={
            bodyA : bodyA.body,
            bodyB : bodyB.body,
            length : 10,
            stiffness : 0.04
        }
    
        this.chain = Constraint.create(constrain_options);
        World.add(world, this.chain);
       
    } 

       display(){
            var posA =this.chain.bodyA.position;
            var posB = this.chain.bodyB.position;
        
            line(posA.x,posA.y,posB.x,posB.y);
    }

} 