var t = [1, 2, 3, 4, 5, 6];

var performAPICall = function (x, cb) {
    console.log(t[x]);
    x++;
    if (x < 6) {
        cb(x, cb);
    }

}
console.log("ttttttttt");

(() => {
    performAPICall(0, performAPICall);
    console.log("ttttttttt");
})();
