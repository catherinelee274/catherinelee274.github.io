function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.force = createVector(0, 0);
  this.flw = createVector(0, -1);
  this.cooldown = 0;
  
  this.connect = function(c) {
    var di = p5.Vector.sub(this.pos, c.pos);
    if (di.mag() < 150) {
      vertex(c.pos.x, c.pos.y);
    }
  }
  
  this.update = function() {
    this.force.add(this.flw);
    this.force.mult(0.01);
    this.vel.add(this.force);
    this.vel.normalize();
    this.pos.add(this.vel);
    this.force.mult(0);
    this.cooldown--;
  }
  
  this.display = function() {
    noFill();
    stroke(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 4);
    stroke(0, 255, 0);
    line(this.pos.x, this.pos.y, this.pos.x + this.flw.x *6, this.pos.y + this.flw.y *6);
    stroke(0, 0, 255);
    line(this.pos.x, this.pos.y, this.pos.x + this.vel.x *6, this.pos.y + this.vel.y *6);
  }
  
  this.edges = function() {
    if (this.cooldown < 0) {
      if (this.pos.x < 0 || this.pos.x >  width) { this.pos.x =  width - this.pos.x; this.cooldown = 100;}
      if (this.pos.y < 0 || this.pos.y > height) { this.pos.y = height - this.pos.y; this.cooldown = 100;}
    }
  }
}