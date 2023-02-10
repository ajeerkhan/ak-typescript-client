const { request } =  require('create-ak-library');
//import { request } from "create-ak-library";
/*
const echoMessage = require('create-ak-library').echoMessage;
echoMessage("welcome");
//console.log(`echo the messaage ${echoMessage("hello")}`);
*/
request.get('https://jsonplaceholder.typicode.com/todos/1').then(res=>{
    console.log(res.data);
});

