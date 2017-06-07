function Vec(x, y) {
  this.pos = createVector(x * d, y * d);
  this.rot = createVector(0, -(d-d*0.2));
  
  this.display = function() {
    stroke(255);
    line(this.pos.x, this.pos.y, this.pos.x + this.rot.x, this.pos.y + this.rot.y);
  }
}