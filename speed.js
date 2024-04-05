//Creation of a function that executes the code in the block between the curly braces.
function speedDetector(speed) {
    let topSpeed = 70;
    let speedPerDeductedPoint = 5;
//If the speed is greater than than the topspeed then "Ok" should be printed out.
if (speed < topSpeed) {
        console.log("Ok");
//Any speed above the topSpeed is divided by speedPerDeductedPoint and rounded off using the Math.floor keyword.
    } else {
        let points = Math.floor((speed-topSpeed) / speedPerDeductedPoint);
//if points are greater than 12 then the output should show "License suspended".
        if (points > 12) {
            console.log("License suspended");
//Otherwise if the condition above is not met in any way the programme should print out the total number of deducted points.
        } else {
            console.log(`Points: ${points}`);
        }
    }
}