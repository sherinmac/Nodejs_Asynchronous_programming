var timeConsumingFunction = (params, callback) => {

    try {
        setTimeout(() => {
            console.log("Timer fun triggered");
            callback(null, "success");
        }, 1000);

    } catch (error) {
        callback(error, null);
    }

};

(async () => {
    var t = await timeConsumingFunction(null, (err, result) => {
        if (err) {
            console.err(err);
            return err;
        }

        console.log(result);
        return result;
    });
    console.log("-----------", t);
})();
