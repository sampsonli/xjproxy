/**
 * Created by sampson on 2017/4/2.
 */
let MiniProxy = require("mini-proxy");

let myProxy = new MiniProxy({
    port: 26352,
    onBeforeRequest: function(requestOptions) {
        if(~requestOptions.host.indexOf('500.com')){
            requestOptions.host = '119.29.182.225'
        }
       /* console.log("proxy request :" + requestOptions.host +
            (requestOptions.path || ''));*/

    }
});

myProxy.start();
console.log("proxy start at 26352");