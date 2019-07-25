var timeConsumingFunction = (params) => {

    return new Promise((resolve, reject) => {

        try {
            setTimeout(() => {
                console.log("Timer fun triggered");
                resolve("success");
            }, 1000);

        } catch (error) {
            reject(error);
        }

    });

};

(async () => {
    await timeConsumingFunction();
    console.log("After function call");
})();
