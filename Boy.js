class Boy {
    constructor(x,y,width,height){
        var options = {
        isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("boy.png");
    
    }
        display(){
            var pos =this.body.position;
            imageMode(CENTER);
            image(this.image,200,620, this.width, this.height);    
        }
        
    }