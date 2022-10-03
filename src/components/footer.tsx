import * as React from "react";
import "../index.css";
import logofooter from "../images/logo-footer.svg";
import facebook from "../images/fb.svg"; 
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";
const Footer = () => {
  return (
  <footer className=" mt-32 md:mt-0">
	<div className="flex flex-col max-w-5xl mx-auto mt-5  flex-wrap justify-between py-5  px-5 md:px-10  md:mt-16 md:flex-row lg:px-0 ">

		<div className="flex flex-col justify-center w-full md:w-1/4 items-center">
			<a href="https://www.restaurantleon.fr/"> <img src={logofooter} alt="logo-footer" height="102" width="228" className=""/></a>

			<ul className=" flex-row flex w-full justify-center mt-5 md:mt-10">
				<li className="mr-3 lg:mr-5"> <a href="https://www.facebook.fr/leondebruxellesofficiel/"
						className="text-white rounded-full text-center transition-all transform hover:scale-[1.09] pt-3 w-12 h-12 block bg-[#356F79]  hover:text-blue-500 mr-2" target="_blank">
						<img src={facebook} height="20" alt="facebook"   width="21" className="inline-block w-5 h-5"/> </a> </li>
				<li className="mr-3 lg:mr-5"> <a href="https://www.instagram.fr/leon_de_bruxelles_officiel/?hl=fr"
						className="text-white rounded-full text-center transition-all transform hover:scale-[1.09] pt-3 w-12 h-12 block bg-[#356F79]  hover:text-blue-500 mr-2" target="_blank">
						<img src={insta} alt="instagram"  height="21" width="21" className="inline-block"/> </a> </li>
				<li> <a href="https://www.youtube.fr/channel/UCLF1-Np46WJHTDNy05BzPKA"
						className="text-white rounded-full text-center transition-all transform hover:scale-[1.09] pt-3 w-12 h-12 block bg-[#356F79]  hover:text-blue-500 mr-2" target="_blank">
						<img src={youtube} alt="youtube"  height="26" width="21" className="inline-block" /> </a> </li>
			
			</ul>



		</div>
		<div className=" w-full md:w-3/4 md:pl-12 lg:pl-24 md:pr-0 lg:pr-5 xl:pr-7   flex flex-col flex-wrap font-nexa_boldregular  text-center md:text-left justify-between text-white md:flex-row">

			<ul className="list-none">
				<li  className="pt-4 md:p-0"><a href="https://www.restaurantleon.fr/la-carte/" className=" text-base tracking-wide    hover:underline">La carte</a></li>
				<li className="pt-4 md:pt-8"><a href="https://brasserie.restaurantleon.fr/fr" className="text-base tracking-wide hover:underline">Nos brasseries</a></li>
				<li className=" pt-5 md:pt-10"><a href="https://www.restaurantleon.fr/univers-leon/" className="text-base tracking-wide hover:underline ">L’univers Léon</a></li>
				<li className="pt-2 md:pt-4"><a href="https://www.restaurantleon.fr/univers-leon/nos-engagements/" className="text-base  font-nexa_lightregular hover:underline ">Nos engagements</a></li>
				<li className="pt-2 md:pt-4"><a href="https://www.restaurantleon.fr/univers-leon/les-coulisses/" className="text-base  font-nexa_lightregular hover:underline ">Les
						coulisses</a></li>
				<li className="pt-5 md:pt-10"><a href="https://www.restaurantleon.fr/en-famille/" className="text-base tracking-wide hover:underline">En famille</a></li>
			</ul>



			<ul className="list-none">
				<li className="pt-4 md:p-0"><a href="https://www.restaurantleon.fr/actualites/" className=" text-base tracking-wide   hover:underline">Actualités</a></li>
				<li className="pt-4 md:pt-8"><a href="https://www.restaurantleon.fr/franchise/" className="text-base tracking-wide hover:underline">Franchise </a></li>
				<li className="pt-2 md:pt-4"><a href="https://www.restaurantleon.fr/franchise/la-marque-leon/" className="text-base font-nexa_lightregular tracking-wide hover:underline ">La
						marque</a></li>
				<li className="pt-2 md:pt-4"><a href="https://www.restaurantleon.fr/franchise/notre-accompagnement/" className="text-base  font-nexa_lightregular hover:underline ">Notre accompagnement</a></li>
				<li className="pt-2 md:pt-4"><a href="https://www.restaurantleon.fr/franchise/les-profils-de-nos-franchises/" className="text-base  font-nexa_lightregular hover:underline ">Le profil de nos franchisés</a>
				</li>
				<li className="pt-2 md:pt-4"><a href="https://www.restaurantleon.fr/franchise/devenir-franchise/"
						className="text-base font-nexa_lightregular tracking-wide hover:underline">Devenir franchisé</a>
				</li>
			</ul>

			<hr className="w-1/2 md:w-full mx-auto md:mx-0 md:hidden mt-10 mb-5 opacity-30 "/>

			<ul className="list-none">
				<li className="pt-4 md:p-0"><a href="https://www.restaurantleon.fr/allergenes/" className=" text-base tracking-wide   hover:underline">Les allergènes</a></li>
				<li className=" pt-5 md:pt-10"><a href="https://www.restaurantleon.fr/nous-contacter/" className="text-base tracking-wide hover:underline">Nous contacter</a></li>
				<li className=" pt-5 md:pt-10"><a href="https://brasserie.restaurantleon.fr/sitemap.xml" className="text-base tracking-wide hover:underline ">Plan du site</a></li>
			</ul>
			<hr className="w-1/2 md:w-full mx-auto md:mx-0 md:hidden mt-10 mb-4 opacity-30 "/>

			<div className="w-full mt-11 ">
				<ul className="flex flex-row flex-wrap items-center justify-center  md:justify-start gap-4 md:gap-4 xl:gap-5">
					<li><a className="bg-[#488487] w-[124px]  h-10 rounded-sm text-white text-center transition-all transform hover:scale-[1.09]  justify-center inline-flex items-center"
							href="https://www.restaurantleon.fr/leon-a-la-maison/">Commander</a></li>
					<li><a className="bg-[#C15D1B] w-[124px] h-10 rounded-sm text-white text-center transition-all transform hover:scale-[1.09] justify-center inline-flex items-center"
							href="https://brasserie.restaurantleon.fr/fr">Réserver</a></li>
					<li><a className=" border-2 border-white w-[124px] h-10 rounded-sm text-white text-center transition-all transform hover:scale-[1.09] justify-center inline-flex items-center"
							href="https://club.restaurantleon.fr/">Le Club Léon</a></li>
					<li><a className="bg-white w-[135px] h-10 ml-0 md:ml-0 xl:ml-10 rounded-sm text-black text-center transition-all transform hover:scale-[1.09] justify-center inline-flex items-center"
							href="https://recrutement.restaurantleon.fr/fr">Nous rejoindre</a></li>

				</ul>


			</div>


			<hr className="w-full mt-10 mb-8 opacity-30 "/>

			<div className="w-full">
				<ul className="flex flex-col sm:flex-row justify-center md:justify-start items-center sm:items-center ">
					<li><a className="mr-2 md:mr-5 lg:mr-10  tracking-wide  h-10 text-sm   text-white text-center"
							href="https://www.restaurantleon.fr/mentions-legales-conditions-utilisation/">Mentions légales</a></li>
					<li><a className="  mr-2 md:mr-5 lg:mr-10 tracking-wide h-10  text-sm text-white text-center"
							href="https://www.restaurantleon.fr/conditions-generales-de-vente/">Conditions générales de vente</a></li>
					<li><a className="mr-2 md:mr-5 lg:mr-10 tracking-wide h-10 text-sm  text-white text-center"
							href="https://www.restaurantleon.fr/politique-de-confidentialite/">Politique de confidentialité</a></li>

				</ul>
          <p className="font-nexa_lightregular mt-7 opacity-30 text-white">Pour votre santé, pratiquez une activité physique régulière : <a href="https://www.mangerbouger.fr/" className="underline" target="_blank"> www.mangerbouger.fr</a>
          L’abus d’alcool est dangereux pour la santé.</p>

			</div>
		</div>
	</div>
</footer>
  );
};

export default Footer;
