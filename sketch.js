var song, analyzer;

function draw() {
  background(0);
  image(fingers,150,150); // draw a second copy to canvas
}

function preload() {
  song = loadSound("./assets/love.mp3");
}

function setup() {
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(0);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
}

var colorList = ['#3498db',
    '#d303dc',
    '#fbc218',
    '#25d36d',
    '#2abcfa',
    '#031754',
    '#eff518',
    '#0596c3',
];


function setup() {

    createCanvas(1000, 800);
    frameRate(5);
}

var song, analyzer;

function preload() {
  song = loadSound('./assets/KLDYKXQ.mp3');
}

function setup() {
  createCanvas(1000, 800);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  
  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(0);
  
for(var x = 0; x < 3000; x += 40) {
    for(var y = 0; y < 1000; y += 40) {
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
     fill(color(colorHex));
     noStroke();
      ellipse(x, y, 1+rms*100, 1+rms*100);
    }
  }

}
