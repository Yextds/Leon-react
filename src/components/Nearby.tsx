import * as React from "react";
import ApiCall from "./ApiCall";
import {openClose} from "./openClose"

export default function Nearby(props:any){
const[neabyData,setnearbyData]=React.useState([]);
const[parsedOffset,setparsedOffset]=React.useState('');
const {latitude,longitude} = props;
React.useEffect(()=>{
    let params={
    location:`${latitude},${longitude}`,
    offset:0,
    limit:3   
    }
    
ApiCall.getNearbyLocations(params).then((data)=>{
    setnearbyData(data.response.entities);
  
})

},[])

      return(
        
  <>
{neabyData.map((location,index)=>{
    let abc=openClose.parseTimeZoneUtcOffset(location.timeZoneUtcOffset);
    return( 
        <>
           <div className="bg-white lg:relative px-4 lg:px-8 xl:px-10 py-5 lg:pb-16 lg:py-9">
        <div className="">
        <h5 className=" mb-4 font-nexa_boldregular ">{location.name}</h5>
            <div className=" flex mt-2 items-start">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14.353 19.138">
            <path id="news-map" d="M6.439,18.752C1.008,10.878,0,10.07,0,7.177a7.177,7.177,0,0,1,14.353,0c0,2.894-1.008,3.7-6.439,11.575A.9.9,0,0,1,6.439,18.752Zm.738-8.585a2.99,2.99,0,1,0-2.99-2.99A2.99,2.99,0,0,0,7.177,10.167Z" fill="#488487" />
            </svg>
            <div className="font-nexa_lightregular text-[15px]">{location.address.line1}</div>
            </div>
        </div>
    <div className="flex mt-3 items-center font-nexa_lightregular text-[15px]">
      <svg className="mr-2 ml-1" xmlns="http://www.w3.org/2000/svg" width="14.35" height="22.96" viewBox="0 0 14.35 22.96">
      <path id="news-phone"d="M12.2,0H2.152A2.153,2.153,0,0,0,0,2.152V20.807A2.153,2.153,0,0,0,2.152,22.96H12.2a2.153,2.153,0,0,0,2.152-2.153V2.152A2.153,2.153,0,0,0,12.2,0ZM7.175,21.525A1.435,1.435,0,1,1,8.61,20.09,1.433,1.433,0,0,1,7.175,21.525ZM12.2,16.682a.54.54,0,0,1-.538.538H2.691a.54.54,0,0,1-.538-.538V2.691a.54.54,0,0,1,.538-.538h8.969a.54.54,0,0,1,.538.538Z" fill="#488487" />
          </svg>
     {location.mainPhone}
     </div>
     <div className="inline-block mt-3 w-full font-nexa_lightregular text-[15px] ">{openClose.formatOpenNowString(location.hours, abc)}</div>
     <div className="mt-5 lg:absolute lg:bottom-4 ">    
     <a className="bg-[#024B58] w-full md:w-72 lg:px-5  xl:px-0 lg:w-full xl:w-72  font-nexa_boldregular uppercase text-xs xl:text-sm !leading-9 inline-block rounded-sm text-white text-center transition-all transform hover:scale-[1.09] " href={location.slug}>
     'Trouver un autre restaurant</a>
     </div>  
     </div>
        
        </>

    )
}

)
}
</>
      )
}
