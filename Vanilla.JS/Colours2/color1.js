function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index + 0] = x;
      pixels[index + 1] = 0;
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
