import { geocoding } from "create-ak-typescript-library";
import {Geocode, GeocodeCollection } from  "create-ak-typescript-library/dist-cjs/lib/geocoding/model";//"/dist-cjs/lib/geocoding/model";
try {
   geocoding.geocode("chennai").then((value)=>{
      console.log('Geocodes', JSON.stringify(value));
   }, (reason:any)=>{
      console.log('reason Geocodes', JSON.stringify(reason));
   });
} catch (error) {
  console.log('error', error);
} 
/* 
try {
   geocoding.search("madurai").then((value)=>{
      console.log('Geocodes search', JSON.stringify(value));
   }, (reason:any)=>{
      console.log('reason search', JSON.stringify(reason));
   });
} catch (error) {
  console.log('error', error); 
} 

try {
   geocoding.reverse("9.122965","78.411352").then((value)=>{
      console.log('Geocodes reverse', JSON.stringify(value));
   }, (reason:any)=>{
      console.log('reason reverse', JSON.stringify(reason));
   });
} catch (error) {
  console.log('error', error); 
}  */

/*
const  clientInvoke = async () => {
   const  result =  await geocoding.geocode("chennai");
   console.log(result);
}
*/