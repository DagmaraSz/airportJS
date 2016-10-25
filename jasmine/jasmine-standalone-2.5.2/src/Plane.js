function Plane () {
  this.landed = false;
};

Plane.prototype.isLanded = function () {
  return this.landed;
};


Plane.prototype.land = function (airport) {
  airport.land(this);
  this.landed = true;
};


Plane.prototype.takeOff = function (airport) {
  airport.takeOff(this);
  this.landed = false;
};
