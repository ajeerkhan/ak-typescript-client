import { geocoding } from "create-ak-typescript-library";
import { Options } from  "create-ak-typescript-library/dist-cjs/lib/geocoding/model";//"/dist-cjs/lib/geocoding/model";

try {
   const options : Options = {
      apiKey: '44bed54b990108565360d420f7ec3d8a',
      apiUrl: '/geocode/v1',
      baseUrl : 'https://api.7x.ax'
   };
   geocoding.geocode("chennai", options)
   //geocoding.search("madurai", options)
   //geocoding.reverse("9.122965","78.411352", options)
   .then((value)=>{
      console.log('Geocodes', JSON.stringify(value));
   }, (reason:any)=>{
      console.log('reason Geocodes', JSON.stringify(reason));
   });
} catch (error) {
  console.log('error', error);
} 
