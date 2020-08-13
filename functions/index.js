const functions = require('firebase-functions');
const helloWorld = require('./helloWorld');
const getTweetList = require('./getTweetList');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = helloWorld.helloWorld;
exports.getTweetList = getTweetList.getTweetList;
