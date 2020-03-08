function isCar(car1, car2, car3) {
    let arr = [car1,car2,car3]
    const alltrue = (val) => val==true;
    const allfalse = (val) => val==false;
    if(arr.every(alltrue) || arr.every(allfalse)){
        return true
    } else {
        return false
    }
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));