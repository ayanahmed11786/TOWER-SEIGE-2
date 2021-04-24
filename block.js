class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution :0.4
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       // rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        }

        else{

          World.remove(world,this.body);
          push();
          
          this.Visiblity = this.Visiblity-5;
          tint(255,this.Visiblity);
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width,this.height);
          pop();
  }
        }
      }

