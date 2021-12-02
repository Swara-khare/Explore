canvas =document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width= 100;
rover_height = 90;

backround_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    backround_imgTag = new Image(); 
    backround_imgTag.onload = uploadbackround;
    backround_imgTag.src= backround_image;

    rover_imgTag = new Image(); 
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src= rover_image;
     
}  
function uploadbackround() {
    ctx.drawImage(backround_imgTag, 0, 0, canvas .width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38');
    {
        up();
        console.log("up");
    }

    if(keyPressed == "40")
    {
        down();
        console.log("down");
    }
    if(keyPressed == "37")
    {
          left();
        console.log("left");
    }
    if(keyPressed == "39")
    {
        right();
        console.log("right");

    }
}

function up() 
{
if(rover_y >=0)
{
    rover_y-=10;
    console.log("when up arrow pressed = " + rover_x + " - "+rover_y );
    uploadbackround();
    uploadrover();


}
}
function down() 
{
if(rover_y <=500)
{
    rover_y+=10;
    console.log("when down arrow pressed = " + rover_x + " - "+rover_y );
    uploadbackround();
    uploadrover();


}
}
function left() 
{
if(rover_x >=0)
{
    rover_x-=10;
    console.log("when up arrow pressed = " + rover_x + " - "+rover_y );
    uploadbackround();
    uploadrover();


}
}
function right() 
{
if(rover_x <=700)
{
    rover_x+=10;
    console.log("when up right pressed = " + rover_x + " - "+rover_y );
    uploadbackround();
    uploadrover();


}
}



