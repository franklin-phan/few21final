//Challenge 1: Golden Ratio
var GoldenRatio = function (n) {
    var ratio = n * 1.61803398875;
    return ratio;
};
//Challenge 3: degrees to radians
var DegreesToRadians = function (n) {
    var radians = n * Math.PI / 180;
    return radians;
};
//Challenge 5: radians to degrees
var RadiansToDegrees = function (n) {
    var degrees = n * 180 / Math.PI;
    return degrees;
};
//Challenge 7: Convert value to dollars
var Dollars = function (n) {
    var dollars = "$" + n.toFixed(2);
    return dollars;
};
module.exports.GoldenRatio = GoldenRatio;
module.exports.DegreesToRadians = DegreesToRadians;
module.exports.RadiansToDegrees = RadiansToDegrees;
module.exports.Dollars = Dollars;

//added typescript