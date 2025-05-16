let opacity = 0;
let direction = 1;
let startTime;

let minTextSize = 0;
let maxTextSize =   33;
let textSizeStep = (maxTextSize - minTextSize) / 100; // divide into 100 steps for 10 seconds

let currentTextSize = minTextSize;
let textSizeDirection = 1;
let timer = 0;


function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('sketch-container');  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255);
  noStroke();
  startTime = millis();
}

function draw() {
  background(0);
  // animate text size and opacity
  textSize(maxTextSize);
  let alpha = 0;
  if (timer > 2000 && timer < 22000) { // inc
    alpha = map(timer, 2000, 22000, 0, 250);
  } else if (timer >= 22000 && timer < 42000) { // dec
    alpha = map(timer, 22000, 42000, 255, 0);
  }
  fill(255, 255, 255, alpha);
  text("wait...", width/2, height/2);

  // update timer
  timer += deltaTime;

  // rest timer if it goes over 20 seconds
  if (timer >= 44000) {
    timer = 0;
  }

  // rest responded flag if the text disappears
  if (alpha === 0) {
    responded = false;
  }  
  // update timer
  timer += deltaTime;

  }

