"use strict";
//const { request } =  require('create-ak-library');
exports.__esModule = true;
var create_ak_library_1 = require("create-ak-library");
/*
const echoMessage = require('create-ak-library').echoMessage;
echoMessage("welcome");
//console.log(`echo the messaage ${echoMessage("hello")}`);
*/
create_ak_library_1.request.get('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
    console.log(res.data);
});
/*
const geocodes : Geocodes = geocoding.geocode('chennai');
console.log('Geocodes', geocodes);
*/
