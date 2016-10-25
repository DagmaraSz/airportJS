describe ('Weather', function () {
  var weather = new Weather ();

  describe('has weather that', function () {
    it("is stormy or not", function () {
      expect([true,false]).toContain(weather.isStormy());
    });
  });
});
