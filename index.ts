//Challenge 1: Golden Ratio
const GoldenRatio = function (n: number) : number {
    var ratio = n*1.61803398875
    return ratio;
}

//Challenge 3: degrees to radians
const DegreesToRadians = function (n: number) : number {
    var radians = this*Math.PI/180
    return radians;
}

//Challenge 5: radians to degrees
const RadiansToDegrees = function (n: number) : number {
    var degrees = this*180/Math.PI
    return degrees;
}

//Challenge 7: Convert value to dollars
const Dollars = function (n: number) : string{
    var dollars = `$${this.toFixed(2)}`
    return dollars;
}

module.exports.GoldenRatio=GoldenRatio
module.exports.DegreesToRadians=DegreesToRadians
module.exports.RadiansToDegrees=RadiansToDegrees
module.exports.Dollars=Dollars
