var x = 320;
var oldX;
var counter = 0;
var z;
 
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  var blank = color(255, 255, 255, 255);
  fill(blank);
  rect(200, 100, 300, 600);
}
 
function draw(){
 
	var choose = Math.trunc((random() * 7) + 1);
	
	if (choose == 1.0){
		z = 60;
		oneStart();
		x = 320;
	}
	else if (choose == 2.0){
		z = 120;
		twoStart();
		x = 320;
	}
	else if (choose == 3.0){
		z = 90;
		threeStart();
		x = 320;
	}
	else if (choose == 4.0){
		z = 90;
		fourStart();
		x = 320;
	}
	else if (choose == 5.0){
		z = 90;
		fiveStart();
		x = 320;
	}
	else if (choose == 6.0){
		z = 60;
		sixStart();
		x = 320;
	}
	else if (choose == 7.0){
		z = 60;
		sevenStart();
		x = 320;
	}
 
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		if (x > 200){
			x -= 30;
		}
	}
	if (keyCode === RIGHT_ARROW){
		if (x < 500 - z){
			x += 30;
		}
	}
}


function oneStart(){
	for( var f = 0; f < 20; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x, 100, 60, 60);
			}
			var color1 = color(0, 150, 150);
			fill(color1);
			noStroke();
			rect(x, 100, 60, 60);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, 100, 60, 60);
	one(100);
}
 
function one(y){
	//square
	var color1 = color(0, 150, 150);
	fill(color1);
	noStroke();
	rect(x, y, 60, 60);
 
 
	var c = get(x + 15, y + 75);
	var d = get(x + 45, y + 75);
 
	if ((y + 30 == 670) || !((c == "255,255,255,255") && (d == "255,255,255,255"))){
		return;
	}
 
	timer();
	rect(x, y, 60, 60);
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, y, 60, 60);
	one(y+30);
}
 
function twoStart(){
	for( var f = 0; f < 20; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x, 100, 120, 30);
			}
			var color2 = color(255, 205, 0);
			fill(color2);
			noStroke();
			rect(x, 100, 120, 30);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, 100, 120, 30);
	two(100);
}


function two(y){
	//line
	var color2 = color(255, 205, 0);
	fill(color2);
	noStroke();
	rect(x, y, 120, 30);
 
	var a = get(x + 15, y + 45);
	var b = get(x + 45, y + 45);
	var c = get(x + 75, y + 45);
	var d = get(x + 105, y + 45);
 
	if ((y + 30 == 700) || !((a == "255,255,255,255") && (b == "255,255,255,255") && (c == "255,255,255,255") && (d == "255,255,255,255"))){
		return;
	}
 
	timer();
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, y, 120, 30);
	two(y+30);
 
}
 
function threeStart(){
	for( var f = 0; f < 20; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x, 100, 30, 30);
				rect(x, 100 + 30, 90, 30);
			}
			var color3 = color(150, 150, 0);
			fill(color3);
			noStroke();
			rect(x, 100, 30, 30);
			rect(x, 100 + 30, 90, 30);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, 100, 30, 30);
	rect(x, 100 + 30, 90, 30);
	three(100);
}


function three(y){
	//j
	var color3 = color(150, 150, 0);
	fill(color3);
	noStroke();
	rect(x, y, 30, 30);
	rect(x, y + 30, 90, 30);
 
	var a = get(x + 15, y + 75);
	var b = get(x + 45, y + 75);
	var c = get(x + 75, y + 75);
 
	if ((y + 30 == 670) || !((a == "255,255,255,255") && (b == "255,255,255,255") && (c == "255,255,255,255"))){
		return;
	}
 
	timer();
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, y, 30, 30);
	rect(x, y + 30, 90, 30);
	three(y+30);
}
 

function fourStart(){
	for( var f = 0; f < 20; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x + 60, 100, 30, 30);
				rect(x, 100 + 30, 90, 30);
			}
			var color4 = color(125, 0, 150);
			fill(color4);
			noStroke();
			rect(x + 60, 100, 30, 30);
			rect(x, 100 + 30, 90, 30);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x + 60, 100, 30, 30);
	rect(x, 100 + 30, 90, 30);
	four(100);
}


function four(y){
	//l
	var color4 = color(125, 0, 150);
	fill(color4);
	noStroke();
	rect(x + 60, y, 30, 30);
	rect(x, y + 30, 90, 30);
 
	var a = get(x + 15, y + 75);
	var b = get(x + 45, y + 75);
	var c = get(x + 75, y + 75);
 
	if ((y + 30 == 670) || !((a == "255,255,255,255") && (b == "255,255,255,255") && (c == "255,255,255,255"))){
		return;
	}
 
	timer();
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x + 60, y, 30, 30);
	rect(x, y + 30, 90, 30);
	four(y+30);
}

function fiveStart(){
	for( var f = 0; f < 20; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x+ 30, 100, 30, 30);
				rect(x, 100 + 30, 90, 30);
			}
			var color5 = color(200, 0, 250);
			fill(color5);
			noStroke();
			rect(x+ 30, 100, 30, 30);
			rect(x, 100 + 30, 90, 30);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x+ 30, 100, 30, 30);
	rect(x, 100 + 30, 90, 30);
	five(100);
}
 
function five(y){
	//t
	var color5 = color(200, 0, 250);
	fill(color5);
	noStroke();
	rect(x+ 30, y, 30, 30);
	rect(x, y + 30, 90, 30);
 
	var a = get(x + 15, y + 75);
	var b = get(x + 45, y + 75);
	var c = get(x + 75, y + 75);
 
	if ((y + 30 == 670) || !((a == "255,255,255,255") && (b == "255,255,255,255") && (c == "255,255,255,255"))){
		return;
	}
 
	timer();
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x + 30, y, 30, 30);
	rect(x, y + 30, 90, 30);
	five(y+30);
}
 
function sixStart(){
	for( var f = 0; f < 20; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x, 100, 30, 60);
				rect(x + 30, 100 + 30, 30, 60);
			}
			var color6 = color(0, 150, 255);
			fill(color6);
			noStroke();
			rect(x, 100, 30, 60);
			rect(x + 30, 100 + 30, 30, 60);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, 100, 30, 60);
	rect(x + 30, 100 + 30, 30, 60);
	six(100);
}

function six(y){
	//left up
	var color6 = color(0, 150, 255);
	fill(color6);
	noStroke();
	rect(x, y, 30, 60);
	rect(x + 30, y + 30, 30, 60);
 
	var a = get(x + 15, y + 75);
	var b = get(x + 45, y + 105);
 
	if ((y + 30 == 640) || !((a == "255,255,255,255") && (b == "255,255,255,255"))){
		return;
	}
 
	timer();
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, y, 30, 60);
	rect(x + 30, y + 30, 30, 60);
	six(y+30);
}

function sevenStart(){
	for( var f = 0; f < 10; f++){
		while (counter < 5000){
			counter ++;
			if ( oldX != x){
				var blank = color(255, 255, 255, 255);
				fill(blank);
				rect(x, 100 + 30, 30, 60);
				rect(x + 30, 100, 30, 60);
			}
			var color7 = color(50, 25, 0);
			fill(color7);
			noStroke();
			rect(x, 100 + 30, 30, 60);
			rect(x + 30, 100, 30, 60);
			oldX = x;
		}
	counter = 0;
	}
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x, 100 + 30, 30, 60);
	rect(x + 30, 100, 30, 60);
	seven(100);
}
 
function seven(y){
	//right up
	var color7 = color(50, 25, 0);
	fill(color7);
	noStroke();
	rect(x + 30, y, 30, 60);
	rect(x, y + 30, 30, 60);
 
	var a = get(x + 15, y + 105);
	var b = get(x + 45, y + 75);
 
	if ((y + 30 == 640) || !((a == "255,255,255,255") && (b == "255,255,255,255"))){
		return;
	}
 
	timer();
	var blank = color(255, 255, 255, 255);
	fill(blank);
	rect(x + 30, y, 30, 60);
	rect(x , y + 30, 30, 60);
	seven(y+30);
}
 
 
function timer(){
	
for( var f = 0; f < 20; f++){
	while (counter < 5000){
		counter ++;
		var color8 = color(50, 20, 30);
		fill(color8);
		var blank = color(255, 255, 255, 255);
		fill(blank);
	}
	counter = 0;
}
}
 
 
 
