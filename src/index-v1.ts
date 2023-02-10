//const { request } =  require('create-ak-library');

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
  }

import {request, geocoding } from "create-ak-library";
import { Geocodes } from "create-ak-library/dist-cjs/lib/geocoding/model";
/*
const echoMessage = require('create-ak-library').echoMessage;
echoMessage("welcome");
//console.log(`echo the messaage ${echoMessage("hello")}`);
*/

request.get<Todo>('https://jsonplaceholder.typicode.com/todos/1').then(res=>{
    console.log(res.data);
});
/*
const geocodes : Geocodes = geocoding.geocode('chennai');
console.log('Geocodes', geocodes);
*/
