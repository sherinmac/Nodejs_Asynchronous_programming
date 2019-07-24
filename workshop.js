var timeConsumingFunction = (params) => {

    return new Promise(async (resolve, reject) => {

        try {
            setTimeout(() => {
            //     console.log("Timer fun triggered");
            //     resolve("success");

            var N = 100;
            var foo = Array.apply(null, { length: N }).map(Number.call, Number)

            // foo.forEach(e => {
            //     console.log(e);

            // });

            for (let index = 0; index < foo.length; index++) {
                const element = foo[index];
                console.log(element);
                //timeConsumingFunction();
            }

           




            }, 1000);

           
            resolve("success");

            

        } catch (error) {
            reject(error);
        }

    });

};

(() => {
    // var result =  await timeConsumingFunction();
    // console.log("After function call", result);

    timeConsumingFunction()
        .then(result => {
            console.log(result);

        })
        .catch(err => {
            console.error(result);

        });
    console.log("After function call");
})();
