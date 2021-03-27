class Tree {
constructor(x,y,width,height){
    var options = {
    isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("tree.png");

}
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,660,500, this.width, this.height);    
    }
    
}