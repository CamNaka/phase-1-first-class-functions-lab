







function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    const selectingDrivers = drivers.slice(0,2);

    return selectingDrivers
}

function returnLastTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    const selectingDrivers = drivers.slice(2);

    return selectingDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, funnction) {
    return funnction(arrayOfDrivers)
}