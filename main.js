/**
 * Created by sampson on 2017/4/2.
 */
let MiniProxy = require("mini-proxy");

let myProxy = new MiniProxy({
    "port": 26352,
    "onBeforeRequest": function(requestOptions) {
        console.log("proxy request :" + requestOptions.host +
            (requestOptions.path || ''));
    }
});

myProxy.start();
console.log("proxy start at 26352");