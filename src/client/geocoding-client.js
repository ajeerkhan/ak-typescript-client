"use strict";
exports.__esModule = true;
var create_ak_library_1 = require("create-ak-library");
try {
    create_ak_library_1.geocoding.geocode("chennai").then(function (value) {
        console.log('Geocodes', JSON.stringify(value));
    }, function (reason) {
        console.log('reason Geocodes', JSON.stringify(reason));
    });
}
catch (error) {
    console.log('error', error);
}
try {
    create_ak_library_1.geocoding.search("madurai").then(function (value) {
        console.log('Geocodes search', JSON.stringify(value));
    }, function (reason) {
        console.log('reason search', JSON.stringify(reason));
    });
}
catch (error) {
    console.log('error', error);
}
try {
    create_ak_library_1.geocoding.reverse("9.122965", "78.411352").then(function (value) {
        console.log('Geocodes reverse', JSON.stringify(value));
    }, function (reason) {
        console.log('reason reverse', JSON.stringify(reason));
    });
}
catch (error) {
    console.log('error', error);
}
/*
const  clientInvoke = async () => {
   const  result =  await geocoding.geocode("chennai");
   console.log(result);
}
*/ 
