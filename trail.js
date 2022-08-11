// function publicBusFare(person) {
//     const reservedBus = 50;
//     const microBus = 11;
//     const restPublic = 0;
//     const ticketPrice = 250;
//     if (person == 50) {
//         if (person % 50 == 0)
//             return reservedBus;
//     }
//     else if (person == 11) {
//         const restQuantity = person - reservedBus;
//         const microBus = restQuantity % 11;
//         return microBus;
//     }
//     else {
//         const rest = reservedBus + microBus;
//         const restPerson = person - rest;
//         const totalCost = restPerson
//             * ticketPrice;
//         return totalCost;

//     }

// }
// const price = publicBusFare(117);
// console.log('price', price);
let totalPassenger = 117;
const bus = 50;
const microBus = 11;
const publicBus = totalPassenger - (bus + microBus);
function publicBusFare(totalPassenger) {
    fare =
        (((totalPassenger % 50)) % 11) * 250;
    return fare;
}

console.log(publicBusFare());