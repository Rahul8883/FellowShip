var Singleton = (function () {
    var instance;
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
function run() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    if (instance1 === instance2) {
        console.log("I am SingleTon");
    } else {
        console.log("I am not singleTon");
    }
}
run();