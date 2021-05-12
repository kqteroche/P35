var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
	Dog = loadImage("images/dogImg.png")
  Happydog = loadImage("images/dogImg1.png")
}

function setup() {
	var canvas = createCanvas(500, 500);

  dog = createSprite(250,250,250,250);
  dog.addImage("images/dogImg.png",Dog);
  dog.scale = 0.3;
  
  var database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);  
}


function draw() {  
background(46,139,87)

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();

  textSize(25);
  fill("white");
  text("Food remaining: " + foodS, 120,100);

  textSize(20);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 20,50);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({

  })
}
