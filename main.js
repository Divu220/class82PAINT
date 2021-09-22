var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="cyan";
var width=2; 
var mouseEvent="";
var last_position_x, last_position_y;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_of_mouseX=e.clientX-canvas.offsetLeft;
    current_position_of_mouseY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    
    console.log("Last position of X and Y coordinates = ");
    console.log("X = "+ last_position_x +" Y = "+ last_position_y);
    ctx.moveTo(last_position_x, last_position_y);

    console.log("Current position of X and Y coordinates = ");
    console.log("X = "+ current_position_of_mouseX +" Y = "+ current_position_of_mouseY);
    ctx.lineTo(current_position_of_mouseX, current_position_of_mouseY);
    ctx.stroke();
    }

    last_position_x=current_position_of_mouseX;
    last_position_y=current_position_of_mouseY;
}