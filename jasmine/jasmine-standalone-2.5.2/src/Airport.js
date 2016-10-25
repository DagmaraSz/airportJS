function Airport(){
  this.CAPACITY = 5;
  this.plane_array = [];
}

Airport.prototype.capacity = function () {
  return this.CAPACITY;
};

Airport.prototype.planes = function () {
  return this.plane_array;
};

Airport.prototype.isFull = function () {
  return this.plane_array.length >= this.CAPACITY;
};

Airport.prototype.land = function (plane) {
  this.plane_array.push(plane);
};


Airport.prototype.takeOff = function (plane) {
  this.plane_array.pop(plane);
};
