const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drive) { 
  return drive.slice(0,2);
}


const returnLastTwoDrivers = function (drive) {
    return drive.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (x) {
    return function(fare) {
        return fare * x
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

const selectDifferentDrivers = function(array, returnDrivers) {
    if (returnDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    } else return returnFirstTwoDrivers(array);
}