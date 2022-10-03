import * as React from "react";
import detailImage from "../images/detail-bg.webp";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, address, children } = props;

  return (
    <>
    <div className="mt-5 w-full h-56 md:h-96 bg-no-repeat bg-cover relative z-[0] append-banner-img">
    <img className="hidden md:block object-cover object-center absolute top-0 left-0 -z-[1] w-full h-full"
        src={detailImage} alt="banner" width="1" height="1"/>
    <img className="hidden sm:block md:hidden object-cover object-center absolute top-0 left-0 -z-[1] w-full h-full"
        src="/images/detail-bg-767.webp" alt="banner" width="1" height="1"/>
    <img className="block sm:hidden object-cover object-center absolute top-0 left-0 -z-[1] w-full h-full"
        src="/images/detail-bg-640.webp" alt="banner" width="1" height="1"/>        
    <div className="w-full h-56 md:h-96 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
            <h1 className="text-white text-xl font-evogriaregular md:text-4xl  2xl:text-5xl ">{name}</h1>
         <button type="button" className="hidden lg:inline-block text-base font-nexa_boldregular bg-[#488487] w-36 md:w-[196px] inline-block text-white mt-4 leading-10 transition-all transform hover:scale-[1.09]" id="menuBtn" >VOIR LE MENU</button>
         <a href=""  target="_blank" className="lg:hidden text-base font-nexa_boldregular bg-[#488487] w-36 md:w-[196px] inline-block text-white mt-4 leading-10 transition-all transform hover:scale-[1.09]">VOIR LE MENU</a>
       <button type="button" className="menuItemsModalBtn text-sm rounded-sm  uppercase font-nexa_boldregular bg-[#C15D1B] w-[196px] inline-block text-white mt-2 ml-3 leading-10 transition-all transform hover:scale-[1.09]"  id="menuItemsModalBtn"  > Réserver </button>
       
        </div>
    </div>
</div>
    </>
  );
};

export default Banner;
