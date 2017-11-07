var mySong;
var myImg;
var analyzer;

function preload() {
  mySong = loadSound("./assets/KLDYKXQ.mp3");
  myImg = loadImage("./assets/maxresdefault.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  mySong.loop();
  angleMode(DEGREES);
}

function draw() {
    // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  
  
  
  var dim= map(vol,0,1,width/10,width/2);
  push();
  for(var x=0; x<width; x=x+width/20){
  strokeWeight(3);
  stroke(255);
  line(x,0,x,height);
  }
  pop();
  
  
  
  if(mySong.isPlaying() === true) {
    background(0,0,225);
    
    var vol = analyzer.getLevel();
    image(myImg,width/4,height/4,vol*1000,vol*600);
    noStroke();
    fill("#FEB7E2");
    ellipse(random(0,width),random(0,height),vol*100);
    fill(0,0,255);
    ellipse(random(0,width),random(0,height),vol*200);
    
    
    angleMode(DEGREES);
    noFill();
    stroke("#FEB7E2");
    strokeWeight(20);
    rect(width/4-10,height/4-10,width/2,height/2)
    push();
    fill("#FDC920");
    ellipse(width/4-10,height/4-10,vol*200)
    pop();
    strokeWeight(2);
    rect(random(0,width),random(0,height),vol*300,vol*100)
  }
  
  if(mouseX>=width/2-height/7*2 && mouseX<=width/2+height/7*2 && mouseY>=height/7 && mouseY<=height/7+height/7*4) {
    textFont('Garamond');
    textAlign(CENTER);
    textSize(18);
    noStroke();
    fill("#FDC920");
    text("Croatian Rhapsody",width/2,height/1.5-30);
    text("Maksim Mrvica",width/2,height/1.5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
