const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Twitter = require('twitter');
admin.initializeApp();

exports.getTweetList = functions.https.onCall(async(data, context) => {
	if(context.auth){
		if(context.auth.token.admin){
			return "admin";
		}else{
			try{
				const client = new Twitter({
					consumer_key: `${functions.config().twitter.consumer_apikey}`,
					consumer_secret: `${functions.config().twitter.consumer_apisecret}`,
					access_token_key: data.token,
					access_token_secret: data.secret
				});
				const params = {
					user_id:data.userId,
					count:3
				}
				//console.log(data);

				const tweets = await client.get('statuses/user_timeline', params);
				return tweets;
			}catch(error){
				return error;
			}
		}
	}else{
		throw new functions.https.HttpsError('permission-denied', 'Auth Error');
	}
});
