var canvas = document.getElementById("myCanvas");
var  ctx = canvas.getContext("2d");

//Give specific height and width to the car image
var car_image_height= 100;
var car_image_width= 80;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

//Set initial position for a car image.
var car_x = 10;
var car_y = 10;

function add() {
//upload car, and background images on the canvas.
var mk_imgTag = new Image(); 
mk_imgTag.onload = uploadBackground;
mk_imgTag.src = background_image;

var oi_imgTag = new Image(); 
oi_imgTag.onload = uploadgreencar;
oi_imgTag.src = greencar_image;
}

function uploadBackground() {

ctx.drawImage( mk_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
ctx.drawImage( oi_imgTag, car_x, car_y, car_image_height, car_image_width);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
up();
console.log("up");
}
	
if(keyPressed == '40')
{
down();
console.log("down");
}
		
if(keyPressed == '37')
{
left();
console.log("left");
}
	
if(keyPressed == '39')
{
right();
console.log("right");
}
		
		
}

function up()
{ if(car_y >=0) 
{ car_y = car_y - 10; console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
 uploadBackground();
 uploadgreencar(); } } 

function down()
{ if(rover_y <=500) 
{ car_y =car_y+ 10; console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y); 
uploadBackground(); 
uploadgreencar(); }
}

function left()
{ if(car_x >= 0) { car_x =car_x - 10; console.log("When left arrow is pressed, x = " + car_x + " | y = " +car_y); 
uploadBackground(); 
uploadgreencar(); } } 

function right()
{ if(car_x <= 700) { car_x =car_x + 10; console.log("When right arrow is pressed, x = " + car_x + " | y = " +car_y); 
uploadBackground(); 
uploadgreencar(); } }