// CANVAS

canvas = document.getElementById('bar');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight*100; 
var width = canvas.width,
    height = canvas.height;



// CANVAS PROPERTIES
var ctx = canvas.getContext('2d');
ctx.lineWidth = 1;
ctx.strokeStyle = '#fff';
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.shadowBlur = 10;
ctx.shadowColor = '#fff';

function getMousePos(e) {
    var canBoundX = canvas.offsetLeft;
    var canBoundY = canvas.offsetTop;
    var x = e.clientX - canBoundX,
        y = e.clientY - canBoundY;

    return {x, y};
}

var ax;
var ay;

$(canvas).mousedown(function (e) {
	ax = getMousePos(e).x;
	ay = getMousePos(e).y;
	console.log(ax, ay);
	ctx.clearRect(0, 0, width, height);
	Fibonacci(ax, ay);
});



function Fibonacci(x, y){

//fibonacci variables and default values
var unit = 0.001;
var fibNumber = 1;
var lastFibNumber = 1;

var distance = fibNumber * unit;

var start = Math.PI / 1; 
var end = Math.PI / -2;

var radius = distance;

var rotate = 0;

var startpointX = x;
var startpointY = y;

var x = startpointX + distance;
    y = startpointY;

var x1, y1;
var x2, y2;
var x3, y3;
var x4 = 0;
var y4 = 0;


var curr = 0;                         // Current position (in %)         



for(i=0; i<100; i++){
	if(i!=0){
				//calculating fibonacci numbers for this iteration:
				var a = fibNumber;
				fibNumber = fibNumber + lastFibNumber;
				lastFibNumber = a;
			}

	//setting the distance (side of square)
	distance = unit*fibNumber;

	rotate++;
	if(rotate==5) rotate = 1;

	radius = distance;
    



	switch(rotate){
		case 1: {
			if(x4!=0) x = x4 + distance;
			x1 = x;
			y1 = y - distance;
			start = Math.PI / 1;  
			end = Math.PI / -2; 
			break;            
		}
		case 2: {
			x = x1;
			y = y1 + distance;
			x2 = x1 + distance;
			y2 = y;
			start = Math.PI / -2;  
			end = Math.PI / -0.5;  
			break;
		}
		case 3:{
			x = x2 - distance;
			y = y2;
			y3 = y2 + distance;
			start = Math.PI / 0.5;  
			end = Math.PI / 2; 
			break;
		}
		case 4:{
			x;
			y = y3 - distance;
			x4 = x - distance;
			start = Math.PI / 2;  
			end = Math.PI / 1;  
		}
	}



	// Enables browser-decided smooth animation (60fps)
	var raf =
	    window.requestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.msRequestAnimationFrame;
		window.requestAnimationFrame = raf;

		// Animate function
		function animate(x, y, radius, start, draw_to) {
		  // Clear off the canvas
		  //ctx.clearRect(0, 0, width, height);
		  // Start over
		  ctx.beginPath();
		  // arc(x, y, radius, startAngle, endAngle, anticlockwise)
		  ctx.arc(x, y, radius, start, draw_to, false);
		  // Draw
		  ctx.stroke();
		  
		}


		animate(x, y, radius, start, end);

}
// https://codepen.io/depthdev/pen/wyDis
}