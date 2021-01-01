var car;
var wall;
var speed, weight;
//var deformation;

function setup() {
  createCanvas(2000,800);
  
speed = Math.round(random(55,90))
weight = Math.round(random(400,1500))

car = createSprite(50,200,50,50);
car.velocityX = speed
wall = createSprite(1000,200,20,height/2);
wall.shapeColor = color(80,80,80);
hello = createSprite(100,200,50,50);


}

  function draw() {
    background(255,255,255);
    
    //car.velocityX = speed
    //wall=createSprite(1500,200,60,height/2)
    if(wall.x - car.x < wall.width/2 + car.width/2
    && car.x - wall.x < wall.width/2 + car.width/2 )
       {
            car.velocityX = 0
           var deformation=0.5*weight*speed*speed/22500
            
        

        if(deformation<100){
            car.shapeColor = color(0,255,0)
        }

        if(deformation>100
            && deformation<180){
                car.shapeColor = color(230,230,0)
            }

            if(deformation>180){
                car.shapeColor = color(255,0,0)
            }
        }
    drawSprites();
}