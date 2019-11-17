function returnFirstRecurring(arry) {
    for (i = 0; i < arry.length; i++) {
        if (arry.indexOf(arry[i]) < i) {
            return arry[i];
        } else {
            ("no repeats");
        }
    }
}
console.log("expecting c to return");
console.log(returnFirstRecurring(["a", "b", "c", "c"]));
console.log("expecting a to return");
console.log(returnFirstRecurring(["a", "b", "a", "b"]));
console.log("expecting nothing to return");
console.log(returnFirstRecurring(["a"]));
