import * as React from "react";
import Cta from "../components/cta";
import Hours from "../components/hours";
import woodtexture from "../images/wood-texture.jpg";
import mapimage from "../images/map.svg";
import Phonesvg from "../images/phone.svg"
import { Address } from "@yext/pages/components";

const Contact = (props: any) => {
  const { address, phone,latitude,longitude,hours } = props;

  return (
    <>
    
<div className='flex flex-wrap w-full xl:w-2/4 pr-0 xl:pr-6 2xl:pr-6'>
  <div className='bg-white px-3 py-6  w-full md:w-2/4 relative z-[0] '>
    <img className="lazy-load object-cover object-center absolute top-0 left-0 -z-[1] w-full h-full"
          alt="banner" src={woodtexture} width="100%" height="100%"/>
      <h3 className="mb-3 text-2xl text-[#488487] font-evogriaregular">Adresse</h3>


      <div className="flex flex-row">
        <div className="mr-2  flex-shrink-0"> <img className=" " src={mapimage} width="35" height="35"
            alt=""/></div>

        <div className="">
          <h3 className="text-[#3D3935] text-[15px] font-nexa_boldregular">RESTAURANT LÉON</h3>
          <div>
             <div><Address address={address}/></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-2"> <img className=" " src={Phonesvg} width="40" height="35" alt=""/>
        </div>
        <a id="address" className="" href="tel:{{mainPhone}}">
          {phone}</a> 
      </div>
      <ul className="flex  flex-row flex-wrap font-nexa_boldregular items-center mt-4  gap-4 md:gap-5">
        <li><a
            className="bg-[#024B58] w-36  md:w-40  text-sm !leading-9 inline-block rounded-sm text-white text-center transition-all transform hover:scale-[1.09] "
            href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},%20${longitude}`}
            target="_blank">ITINÉRAIRE</a></li>
        <li className="hidden xl:block"><button type="button"
            className="menuBtn border-2 border-[#024B58] text-sm w-36 md:w-40 inline-block !leading-8 rounded-sm text-[#024B58] text-center transition-all transform hover:scale-[1.09] "
            id="menuBtn1">VOIR LE MENU</button></li>
        <li className="block xl:hidden"><a href="{{menuUrl.url}}" target="_blank"
            className="menuBtn border-2 border-[#024B58] text-sm w-36 md:w-40 inline-block !leading-8 rounded-sm text-[#024B58] text-center transition-all transform hover:scale-[1.09] ">VOIR
            LE MENU</a></li>
      </ul>

      <h3 className="mb-3 mt-7 text-2xl text-[#488487] uppercase font-evogriaregular">Léon à la maison</h3>
      <div className="w-full mt-4"><a
          className="bg-[#024B58] uppercase w-40 font-nexa_boldregular  text-sm !leading-9 inline-block rounded-sm text-white text-center transition-all transform hover:scale-[1.09] "
          href="{{c_clickAndCollectCTA.link}}" target="_blank">c_clickAndCollectCTA</a>
      </div>
  </div>
                <div className="hours bg-[#024B58] w-full md:w-1/2 lg:w-2/4 pb-10 mt-5 md:mt-0 md:pb-0">
                  <div className=" text-white p-4 md:p-4 lg:px-4 xl:py-6  xl:px-3 xl:py-6 2xl:p-6">
                    <div className="hours-div mb-5 md:mb-1 flex flex-col">
                      {hours && <Hours title={"Restaurant Hours"} hours={hours} />}
                    </div>
                  </div>
                </div>
</div>
    </>
  );
};

export default Contact;
