import { timezone } from "create-ak-typescript-library";
import { Options } from  "create-ak-typescript-library/dist-cjs/lib/geocoding/model";//"/dist-cjs/lib/geocoding/model";

try {
   const options : Options = {
      apiKey: '44bed54b990108565360d420f7ec3d8a',
      apiUrl: '/timezone/v1',
      baseUrl : 'https://api.7x.ax'
   };
  
   timezone.get("9.122965","78.411352", options)
   .then((value)=>{
      console.log('TimeZone', JSON.stringify(value));
   }, (reason:any)=>{
      console.log('reason TimeZone', JSON.stringify(reason));
   });
} catch (error) {
  console.log('error', error);
} 
