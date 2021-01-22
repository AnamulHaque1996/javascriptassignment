//kilometerToMeter
//convert kilometerToMeter
function kilometerToMeter(kilometer) {
    var Meter = kilometer * 1000;
    return Meter;
}
var convert = kilometerToMeter(5);
console.log(convert);


//budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var TotalPrice = watchPrice + phonePrice + laptopPrice;
    return TotalPrice;
}

var productsPrice = budgetCalculator(1, 2, 3);
console.log(productsPrice);

//hotelCost
function hotelCost(day){
    var amount = 0;
    if(day <= 10){
        amount = day * 100;
    }else if(day <= 20){
        firstTenDaysRent = 10 * 100;
        var due = day - 10;
        secondTenDaysRent = due * 80;
        amount = firstTenDaysRent + secondTenDaysRent;
    }else{
        firstTenDaysRent = 10 * 100;
        secondTenDaysRent = 10 * 80;
        var due = day - 20;
        remainingDaysRent = due * 50;
        amount = firstTenDaysRent + secondTenDaysRent + remainingDaysRent; 
    }
    return amount
}
var totalCost = hotelCost(25)
console.log(totalCost)


//megaFriend
function megaFriend(bondhu){
    var megaFriend = "";
    for (var i = 0; i < bondhu.length; i++) {
      if (bondhu[i].length > megaFriend.length) {
        var megaFriend = bondhu[i];
        longest = bondhu[i];
      }
    }
    return longest;
}
var bondhu = ["Akash", "Fabiha", "Sirajum", "Jahidul islam Jahid"];
console.log(bondhu)