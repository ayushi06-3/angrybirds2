class Log extends BaseClass {
    constructor(x, y, height, angle) {
    
      super(x,y,20,height);
     //loading image
     this.image=loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
  
    }
     
  };
  