
/**
 * Methods to handle the async behavior of NodeJS
 * 
 */

// async/await

// callbacks

// Promise




// var timeConsumingFunction = (params) => {

//     return new Promise(async (resolve, reject) => {

//         try {
//             // setTimeout(() => {
//             //     console.log("Timer fun triggered");
//             //     resolve("success");
//             // }, 1000);



//             var N = 100000;
//             var foo = Array.apply(null, { length: N }).map(Number.call, Number)

//             // foo.forEach(e => {
//             //     console.log(e);

//             // });

//             for (let index = 0; index < foo.length; index++) {
//                 const element = foo[index];
//                 console.log(element);
//                 timeConsumingFunction();
//             }

//             resolve("success");

//         } catch (error) {
//             reject(error);
//         }

//     });

// };

// (() => {
//     // var result =  await timeConsumingFunction();
//     // console.log("After function call", result);

//     timeConsumingFunction()
//         .then(result => {
//             console.log(result);

//         })
//         .catch(err => {
//             console.error(result);

//         });
//     console.log("After function call");
// })();


//--------------------



// var timeConsumingFunction = (params, callback) => {

//     try {
//         setTimeout(() => {
//             console.log("Timer fun triggered");
//             callback(null, "success");
//         }, 1000);

//     } catch (error) {
//         callback(error, null);
//     }

// };

// (async () => {
//     var t = await timeConsumingFunction(null, (err, result) => {
//         if (err) {
//             console.err(err);
//             return err;
//         }

//         console.log(result);
//         return result;
//     });
//     console.log("-----------", t);
// })();



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



