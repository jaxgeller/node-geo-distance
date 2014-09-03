var assert = require('assert');

var geoDistance = require('../');

// White house
var coord1 = {
  latitude: 38.8977330,
  longitude: -77.0365310
}

// Washington Monument
var coord2 = {
  latitude: 38.8894840,
  longitude: -77.0352790
}

var expectedDistance = 922.169;


describe('Vincenty', function() {
  it('should be able to get distance between two points', function(done) {
    geoDistance.vincenty(coord1, coord2, function(dist) {
      assert(dist, expectedDistance);
      done();
    })
  });
});


describe('Haversine', function() {
  it('should be able to get distance between two points', function(done) {
    geoDistance.haversine(coord1, coord2, function(dist) {
      assert(dist, expectedDistance);
      done();
    })
  });
});