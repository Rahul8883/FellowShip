let add = function (x, y) {
    console.log("value of x: " + x + " and value of y: " + y);
    return new promise(function (resolve, reject) {
        if (x < 0) {
            reject("x should be greater then 0")
        } else {
            resolve(x + y)
        }
    })
}
exports.add = add;