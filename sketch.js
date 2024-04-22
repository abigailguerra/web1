
let img1;
let img2;
let s;

function preload(){
    img1 = loadImage('resources/media/3.jpg');
    img2 = loadImage('resources/media/4.jpg');
}

function setup(){
    createCanvas(400,400);
    colorMode(HSB);
    imageMode (CENTER);
    noCursor();
    
}

function draw(){ 
    background(255,255,255);
 image(img1, width/2,height/2);
 image(img2, mouseX,mouseY,200,200);
 stroke(63,58,250,100);
 strokeWeight(10);
 fill(247,147,15);
 rect(200,200,100,100);
 rectMode(CENTER);
 rect(200,200,100,100);
 ellipseMode(CENTER);
 ellipse(200,200,100,100);
 fill(175,126,178);

}