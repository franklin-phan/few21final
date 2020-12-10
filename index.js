//Challenge 1: Golden Ratio
Number.prototype.GoldenRatio = function () {
    var ratio = this*1.61803398875
    return ratio;
}

//Challenge 3: degrees to radians
Number.prototype.DegreesToRadians = function () {
    var radians = this*Math.PI/180
    return radians;
}

//Challenge 5: radians to degrees
Number.prototype.RadiansToDegrees = function () {
    var degrees = this*180/Math.PI
    return degrees;
}

//Challenge 7: Convert value to dollars
Number.prototype.Dollars = function () {
    var dollars = `$${this.toFixed(2)}`
    return dollars;
}