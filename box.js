class Box {
    constructor(x,y,width,height){
        var Options={
            isStatic: true
        }
        
        this.body=Bodies.rectangle(x, y, width, height, Options);
        this.width= width;
        this.height= height;

        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        fill(139);
        stroke("red");
        strokeWeight(4);
        rect(this.body.position.x,this.body.position.y,this.width, this.height);
    }
    
}