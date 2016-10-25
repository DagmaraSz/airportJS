describe('Plane', function () {
  var plane = new Plane();
  var airport = jasmine.createSpyObj('airport', ['land', 'takeOff']);


  describe('landing', function(){

    it('is flying by default', function () {
      expect(plane.isLanded()).toEqual(false);
    });

    it('has a status of landed when it lands', function () {
      plane.land(airport);
      expect(plane.isLanded()).toEqual(true);
    });

    it('can land at an airport', function () {
      plane.land(airport);
      expect(airport.land).toHaveBeenCalled();
    });

  });

  describe('take off', function(){

    it('has a status of not landed', function () {
      plane.takeOff(airport)
      expect(plane.isLanded()).toEqual(false);
    });

    it('can take off from an airport', function () {
      plane.takeOff(airport);
      expect(airport.takeOff).toHaveBeenCalled();
    });

  });

});
