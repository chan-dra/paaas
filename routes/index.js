var xml = require('xml');
module.exports = function (app) {
    app.get('/', index);
    app.get('/rec', rec);
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

var rec = function (req, res) {
    //require the Twilio module and create a REST client
var client = require('twilio')('AC7ffda848c8d91d2f5bd54c2bf65eed21', '1b48a4376221c9a8419dd640d88f4030');

//Send an SMS text message
client.sendMessage({

    to:'+16502846735', // Any number Twilio can deliver to
    from: '+14243836630', // A number you bought from Twilio and can use for outbound communication
    body: 'word to your mother.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});

    res.render('index', { title: 'Node Boilerplate' });
>>>>>>> Stashed changes
};