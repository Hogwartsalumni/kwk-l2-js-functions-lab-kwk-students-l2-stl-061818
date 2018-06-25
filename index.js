// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  return Math.abs(number - 42);
}

function distanceFromHqInFeet(number) {
  return Math.abs((number - 42) * 264);
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs((finish - start) * 264);
}

function calculatesFarePrice(start, finish) {
  if (distanceTravelledInFeet(start, finish) <= 400) {
    return 'give customers a free sample';
  } else if (((distanceTravelledInFeet(start, finish) - 400) * 0.02) > 400) {
    return 
  }
}