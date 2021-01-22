// https://github.com/mdabdullah1909/Asisgnment-3

// 01. kilometerToMeter:
function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}
var result = kilometerToMeter(1);
console.log(result);
// ==========================================//

// 02.budgetCalculator:
function budgetCalculator(clock, mobile, laptop) {
    var clock = 1 * 50;
    var mobile = 1 * 100;
    var laptop = 1 * 500;
    var totalPrice = clock + mobile + laptop;
    return totalPrice;
}
var total = budgetCalculator();
console.log(total);
// ==========================================//

// 03. hotelCost:
function hotelCost(hotel) {
    var cost = 0;
    if (hotel <= 10) {
        cost = hotel * 100;
    } else if (hotel <= 20) {
        var oneToTenDays = 10 * 100;
        var less = hotel - 10;
        var elavenToNinteen = less * 80;
        cost = oneToTenDays + elavenToNinteen;
    } else {
        var oneToTenDays = 10 * 100;
        var elavenToTowinty = 10 * 80;
        var less = hotel - 20;
        var afterEvryDay = less * 50;
        cost = oneToTenDays + elavenToTowinty + afterEvryDay;
    }
    return cost;
}
var total = hotelCost(43);
console.log(total);
// ======================================================= //

// 04. megaFriend:
function megaFriend(friendName) {
    var largerName = friendName[0];
    for (var i = 0; i < friendName.length; i++) {
        var element = friendName[i];
        if (element > largerName) {
            largerName = element;
        }
    }
    return largerName;
}
var friendName = ["MamunAhmed", "mdFarukShorkar", "BojolAhmed", "BoshirAhmed", "MdAbulKalam"];
var output = megaFriend(friendName);
console.log('output', output);
