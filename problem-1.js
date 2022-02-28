// how to get area from a three sided triangle

function getArea(side1, side2, side3) {
    let halfRange = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(halfRange * (halfRange - side1) * (halfRange - side2) * (halfRange - side3));
    return area;
}
let myArea = getArea(15, 12, 9);
console.log(myArea);