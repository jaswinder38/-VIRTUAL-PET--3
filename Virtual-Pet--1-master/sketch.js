//Create variables here
var dogImg;
var dogImg1;
var foodStock;
var foodS;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");


}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  dog = createSprite(300,200,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;




  feed=createButton("Feed the Dog");
    feed.position(400,95);
    feed.mousePressed(feedDog);



    addFood=createButton("Add Food");
    addFood.position(500,95);
    addFood.mousePressed(addFoods);






}





function draw() {  
  background(46,139,87);



  drawSprites();



}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

  }



 function feedDog(){
  dog.addImage(dogImg1);

  Milk.updateFoodStock(Milk.getFoodStock()-1);
  database.ref('/').update({
    Food:Milk.getFoodStock(),
    FeedTime:hour() 
  })
  }


fill(225,225,254);
 textSize(15);
 if(lastFed>=12){

text("Last Feed : "+lastFed%12 + "PM",350,30);
 }else if(lastFed==0){
   text("Last Feed : 12 AM",350,30);
 }else{
   text("Last Feed : "+ lastFed+ "AM",350,30);
 }

//function to read the values from database
function readStock(data){
  foodS = data.val();
  }
  function writeStock(x){
    if (x <= 0){
      x = 0;
     } else{
      x=x-1;
    }

   database.ref('/').update({
    Food:x
  })
  }










