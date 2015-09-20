var xml = require('xml');
module.exports = function (app) {
    app.get('/', index);
};

var index = function (req, res) {
    res.header('Content-Type','text/xml');
    a = xml({
    	Response: [{
    		Say: [{ _attr: { voice: 'alice'}}, "This is a test message"]
    	}]
    })
    console.log(a);
    res.send(a);
};