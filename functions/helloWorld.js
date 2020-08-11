const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
	    response.set('Access-Control-Allow-Origin', 'https://helloworld1132.web.app');
	    response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
	    response.set('Access-Control-Allow-Headers', 'Content-Type, authorization');
	    response.send("Hello from Firebase!");
});
