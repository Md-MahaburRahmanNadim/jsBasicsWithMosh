/*
speed limit upto 70 is show the ok massage 
after 70 speed limit every 5 speed we have to consider 1 point (5-> 1 point) 75 = 1point ,120 = 8 point
if any dirver get 12 points then the licence of this diver have been suspended */

let points = 0;
const speedLimit = 70;
const kmPerPoint = 5;
function checkSpeed(speed) {
  if (Math.floor(speed) < speedLimit + kmPerPoint) return "OK";
  if (Math.floor(speed) > speedLimit) {
    speed -= speedLimit;
    // points = (speed - (speed % kmPerPoint)) / kmPerPoint;
    points = Math.floor(speed / kmPerPoint);

    return points >= 12
      ? `Licence of this diver have been suuspended ${points}`
      : points;
  }
}
