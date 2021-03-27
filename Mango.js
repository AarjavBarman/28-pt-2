class Mango {
    constructor(x,y,width,height,angle){
        var options = {
        isStatic: true,
        restitution:0,
        friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("mango.png");
    
    }
        display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            imageMode(CENTER);
            rotate(angle);
            //rotate(angle);
            image(this.image,640,400, this.width, this.height);
            image(this.image,650,430, this.width, this.height);    
            image(this.image,620,460, this.width, this.height);
            image(this.image,610,400, this.width, this.height);
            image(this.image,720,440, this.width, this.height); 
            pop();
        }
        
    }