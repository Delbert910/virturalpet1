//Create variables here
var dog , happydog , database , foodS 
var foodStock
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png");
 happydogImage=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500,500);
  dog=createSprite(250,300,150,150)
dog.addImage(dogImage)
dog.scale=0.35

foodStock=database.ref("food");
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImage)
}
  drawSprites();
  //add styles here

}
function readStock(data){
foodS=data.val()
}
function   writeStock(x){
if (x<=0){
  x=0
}
else {
  x=x-1
}
database.ref("/").update({
  food:x
})
}
