var vec = [];
var p = [];
var zoff = 0;
var s = 0.001;
var d = 5;
var debug = false;

function setup() {
  //make canvas adjust to screen
  createCanvas(1680 , 1080);

  for (var x = 1; x <= width/d -1; x += d) {
    for (var y = 1; y <= height/d -1; y += d) {
      vec.push(new Vec(x, y));
    }
  }
  for (var i = 0; i <= 15; i++) {
    p.push(new Particle());
  }
}

function draw() {
  background(51);
  for (var i = 0; i <= vec.length -1; i++) {
    var nFlow = noise(vec[i].pos.x *s, vec[i].pos.y *s, zoff *s);
    vec[i].rot.set(0, -8);
    vec[i].rot.rotate(radians(map(nFlow, 0, 1, 0, 720)));
    if (debug) {
      vec[i].display();
    }
  }
  for (var j = 0; j <= p.length -1; j++) {
    var nPart = noise(p[j].pos.x *s, p[j].pos.y *s, zoff *s);
    p[j].flw.set(0, -1);
    p[j].flw.rotate(radians(map(nPart, 0, 1, 0, 720)));
    beginShape();
      vertex(p[j].pos.x, p[j].pos.y);
      for (var l = 0; l <= p.length -1; l++) {
        if (l != j) {
          p[j].connect(p[l]);
        }
      }
      p[j].update();
      p[j].edges();
      if (debug) {
        p[j].display();
      }
      stroke(100, 255, 255, 10);
      fill(255, 10);
    endShape();
  }
  zoff++;
}
