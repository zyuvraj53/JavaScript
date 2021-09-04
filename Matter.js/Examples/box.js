function Box(x, y, w, h){
  var options = {
    friction : 0,
    restitution : 1
  }
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
  Composite.add(world, this.body);

  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

}