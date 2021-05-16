var ParkingSystem = function(big, medium, small) {
    this.count = [big, medium, small];
    //this.count[0] === big;
    //this.count[1] === medium;
    //this.count[2] ===small;
};

//Parkingsystem(1, 1, 0) would looke like this this.count = [1, 1, 0]

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  return this.count[carType - 1]-- > 0;
  //addCar(1)
  // carType is 1 (big) that's asking if there is a big space. 
  //if big (or this.count[0] or this.count[1-1]) is 0, return false
  //because that means a space for a big car is unavailable
  //if it's more than 0 return false and then subtract 1 from this.big
  //addCar(2)
  //if carType is 2 (medium) addCar(2) is asking if there is a medium space.
  //if a medium (or this.count[1] or this.count[2-1]) is 0,
  //because that means a spac for a medium car is unavailable

  
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */