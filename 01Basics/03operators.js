var sp = 700;
var lp = 1000;

var discountPercent = ((lp - sp) / lp) * 100;
var roundDiscountPrice = Math.round(discountPercent);

console.log(roundDiscountPrice + "% off");

var compare = lp > sp;
console.log(compare);