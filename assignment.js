// // problem 1.

function radianToDegree(radian) {
    let pi = Math.PI
    const degree = radian * (180 / pi);
    if (typeof radian !== 'number') {
        return 'Please enter a valid number';
    }
    return degree.toFixed(2);
}
const degreeResult = radianToDegree(10);
console.log(degreeResult);
// ----------------------------------------------------

// problem 2.

function isJavaScriptFile(string) {
    if (string.endsWith(".js")) {
        if (typeof string !== 'string') {
            return 'Please enter a valid string';
        }
        return true;
    }
    else {
        return false;
    }
}


// -----------------------------------------------

// problem 3.

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselParLiterPrice = 114;
    const petrolParLiterPrice = 130;
    const octaneParLiterPrice = 135;

    const totalDieselPrice = dieselQuantity * dieselParLiterPrice;
    const totalPetrolPrice = petrolQuantity * petrolParLiterPrice;
    const totalOctanePrice = octaneQuantity * octaneParLiterPrice;

    const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'Please enter a valid number';
    }
    return totalOilPrice;
}
// -----------------------------------------------

// Problem 4.1

let totalPassenger = 117;
const travellingByBus = 50;
const travellingByMicroBus = 11;
const travellingByPublicBus = totalPassenger - (travellingByBus + travellingByMicroBus);
function publicBusFare(totalPassenger) {
    fare =
        (((totalPassenger % 50)) % 11) * 250;
    if (typeof totalPassenger !== 'number') {
        return 'Please enter a valid number';
    }
    return fare;
}
console.log(publicBusFare(117));
// ----------------------------------------------------
// problem 4.2

// let totalPassenger = 235;
// const travellingByBus = 50;
// const travellingByMicroBus = 11;
// const travellingByPublicBus = totalPassenger - (travellingByBus + travellingByMicroBus);
// function publicBusFare(totalPassenger) {
//     fare =
//         (((totalPassenger % 50)) % 11) * 250;
//     return fare;
// }
// console.log(publicBusFare(235));

// ------------------------------------------------

//problem 5.

function isBestFriend() {
    if ((friend1.name == friend2.friend) && (friend1.friend == friend2.name)) {
        if ((typeof friend1 !== 'object') || (typeof friend2 !== 'object')) {
            return 'Please enter a valid object';
        }
        // they are bestfriend
        return true;
    }
    else {
        return false;
    }
}
const friend1 = { name: 'abul', age: 22, friend: 'sara' };
const friend2 = { name: 'sara', age: 21, friend: 'abul' };
console.log(isBestFriend(friend1, friend2));