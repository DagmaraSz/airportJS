function Weather () {}

Weather.prototype.isStormy = function () {
  return _.sample([true,false]);
};
