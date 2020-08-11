const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.getTweetList = functions.https.onCall((data, context) => {
	if(context.auth){
		if(context.auth.token.admin){
			return "admin";
		}else{
			return "authed"
		}
	}else{
		throw new functions.https.HttpsError('permission-denied', 'Auth Error');
	}
});
