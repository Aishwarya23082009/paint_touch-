var last_position_x, last_position_y;

Canvas= document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

color= "black";
width_of_line= 1;

var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
 if (width < 992){
     document.getElementById("myCanvas").width=new_width;
     document.getElementById("myCanvas").height=new_height;
     document.body.style.overflow="hidden";
 }

 Canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_the_line").value;
    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;
}

Canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){

    current_position_x=e.touches[0].clientX - Canvas.offsetLeft;
    current_position_y=e.touches[0].clientY - Canvas.offsetTop;
  
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= width_of_line;

console.log("X="+ last_position_x + ",Y=" + last_position_y);
ctx.moveTo(last_position_x, last_position_y);

console.log("X="+ current_position_x + ",Y=" + current_position_y);
ctx.lineTo(current_position_x, current_position_y);
ctx.stroke();
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}

function clear_area(){
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}
