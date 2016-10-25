describe('Airport', function(){
  var airport = new Airport();
  var plane = jasmine.createSpy('plane');

  describe('can interact with planes', function(){


    it('can hold planes', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('can take a plane in', function(){
      airport.land(plane);
      expect(airport.planes()).toEqual([plane])
    });

    it('can take a plane off', function(){
      airport.takeOff(plane);
      expect(airport.planes()).toEqual([])
    });
  });

  describe('has a capacity', function(){

    it('tells you the capacity', function(){
      expect(airport.capacity()).toBeDefined();
    });

    it('can be full', function(){
      var i = 0;
      while (i < airport. capacity()){
        airport.land(plane);
        i++;
      }
      expect(airport.isFull()).toEqual(true);
    });
  });
});
