class Box extends BaseClass {
  constructor(x, y,colorShade){
    super(x,y,20,40);
    this.colorShade=colorShade;
    this.visibility=255;
    //this.image = loadImage("sprites/wood1.png");
  }

  score(){
    if(this.visibility<0 && this.visibility>-50){
      score++;
    }

  }

  display(){
    fill(this.colorShade);
    //super.display();
   if(this.body.speed<=3){
      super.display();
    }else{
      push();
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      tint(255,this.visibility);      
      pop();
      }
    
      this.score();
  }

};
