import * as React from "react";
import Logo from "../images/logo-header.svg"
const Nav = () => {
  return (
   <>  
   <div className=" bg-[#024B58]  hidden lg:block topnav font-nexa_boldregular">

   <div className="flex flex-wrap px-5 2xl:px-10 pt-5 pb-5 items-center ">

    <div className="inline-flex max-w-[80px] 2xl:max-w-full items-center">
        <a href="https://www.restaurantleon.fr/"><img src={Logo} alt="logo" height="50" width="110"
                    className="hidden md:flex"/></a>
    </div>

    <div className="hidden md:flex gap-x-2 xl:gap-x-4 md:ml-[4px] xl:ml-16 2xl:gap-x-10">
        <a href="https://www.restaurantleon.fr/la-carte/"
            className="headerLink font-nexa_boldregular hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px] text-white">La
            carte</a>
        <a href="https://brasserie.restaurantleon.fr/fr"
            className="headerLink font-nexa_boldregular hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px]  text-white">Nos
            brasseries</a>
        <a href="https://www.restaurantleon.fr/univers-leon/"
            className="headerLink font-nexa_boldregular hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px]  text-white">L’univers
            Léon</a>
        <a href="https://www.restaurantleon.fr/en-famille/"
            className="headerLink font-nexa_boldregular hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px]  text-white">En
            famille</a>
        <a href="https://www.restaurantleon.fr/actualites/"
            className="headerLink font-nexa_boldregular hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px]  text-white">Actualités</a>
        <a href="https://www.restaurantleon.fr/franchise/"
            className="headerLink font-nexa_boldregular hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px]   text-white">Franchise</a>
        <a href="https://recrutement.restaurantleon.fr/fr"
            className="headerLink font-nexa_boldregular  hover:underline font-bold text-xs  xl:text-[14px] 2xl:text-[15px]   text-white ">Nous
            rejoindre</a>
    </div>

    <div className="right-nav flex ml-auto items-center flex-wrap">
        <a href="https://www.restaurantleon.fr/leon-a-la-maison/"
            className="rounded-sm inline-block  !leading-9 border border-[#024B58]  text-center  transition-all transform hover:scale-[1.09]   w-24 lg:w-[90px] xl:w-28  2xl:w-32   text-white  text-xs xl:text-sm bg-[#488487]">Commander</a>
        <a href="https://brasserie.restaurantleon.fr/fr"
            className="rounded-sm inline-block  text-center !leading-9 border border-[#C15D1B] transition-all transform hover:scale-[1.09]  mx-1 xl:mx-5  w-24  lg:w-[90px] xl:w-28  2xl:w-32   text-white  text-xs xl:text-sm bg-[#C15D1B]">Réserver</a>
        <a href="https://club.restaurantleon.fr/"
            className="rounded-sm inline-block  text-center !leading-9  border border-white transition-all transform hover:scale-[1.09]  w-24  lg:w-[90px] xl:w-28  2xl:w-32  text-white text-xs xl:text-sm ">Le
            Club Léon</a>

    </div>
</div>

</div>
</>
)
  }

export default Nav;
