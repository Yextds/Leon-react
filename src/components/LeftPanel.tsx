import * as React from "react";
import { useState, useEffect} from "react";
import "../index.css";
import {openClose} from "./openClose";
import Hours from "./hours";
// import Contact from "./Hours";
let useMiles='False';


function LeftPanel(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [latlng,setlatlng] = useState([]);

  useEffect(() => {
    if (props.locationsData) {
      // console.log(props.locationsData);
      setItems(props.locationsData);
    }
  }, [props.locationsData]);

function formatMiOrKm(miles, kilometers){
    if (useMiles) {
      return miles.toFixed(0) + " mi.";
    } else {
      return kilometers.toFixed(0) + " km.";
    }
  }

 function opentime(e){
   //console.log(e.target);
   var closethis=e.target.closest( ".lp-param-results");
if(closethis.querySelector('.storelocation-openCloseTime').classList.contains("hidden")){
  closethis.querySelector('.storelocation-openCloseTime').classList.remove("hidden")
}
else{
  closethis.querySelector('.storelocation-openCloseTime').classList.add("hidden")
}
 }

  var location = [];
  location = items;
  //console.log(props.locationsData)
  let tzOffset
  let parsedOffset
  
  return (
    <>
      <div className=" flex ">
        <div className="w-full">
          <div className="scroll-hide">
            <div className="result-list mt-3">
              <div className="result-list-inner grid ">
                {location.map((item, i) => (
                  
                     tzOffset = item.timeZoneUtcOffset,
                     parsedOffset = openClose.parseTimeZoneUtcOffset(tzOffset),
      
                    <div id={`result-${i}`} key={i} className="result">
                      <div className="result-inner">
                        <div className="left-column ">{i + 1}</div>
                        <div className="center-column">
                          <div className="lp-param-results lp-subparam-cardTitle lp-subparam-cardTitleLinkUrl">
                            <div className="storelocation-name hover:underline text-lg font-evogriaregular hover:font-semibold   ">
                              <a
                                className="inline-block "
                                href={item.slug}
                              >
                                {item.name}
                              </a>
                            </div>
                          </div>
                          <div className="lp-param-results lp-subparam-hours">
                            <div className="address">
                              {item.address.line1},
                              {item.address.line2 ? item.address.line2 : ""}{" "}
                              {item.address.city}, {item.address.postalCode}
                              <br />
                            </div>
                            <div className="open-now-string" data-id={`main-shop-${i}`} onClick={opentime} 
                            >{openClose.formatOpenNowString(item.hours, parsedOffset)}</div>
                            <div className={`storelocation-openCloseTime mt-2 pr-5 pl-10 md:pl-6 lg:pl-16 pb-4  text-[11px] leading-tight capitalize hidden`}>
    
                            {typeof item.hours === "undefined" ? (
                              ""
                            ) : (
                              <Hours key={i} hours={item.hours} />
                            )}
                        
                            </div>
                            {item.__distance?
                             <div className="right-column ml-auto"><div className="distance">
                             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16.667" viewBox="0 0 17 22.667">
                              <path id="map-wh" d="M7.627,22.21C1.194,12.884,0,11.927,0,8.5a8.5,8.5,0,0,1,17,0c0,3.427-1.194,4.384-7.627,13.71a1.063,1.063,0,0,1-1.747,0ZM8.5,12.042A3.542,3.542,0,1,0,4.958,8.5,3.542,3.542,0,0,0,8.5,12.042Z" fill="#fff"/>
                              </svg>{formatMiOrKm(item.__distance.distanceMiles,item.__distance.distanceKilometers)}
                              </div></div>:''}
                            <div className="lp-param-results lp-subparam-phoneNumber map-add">
                              <div className="phone">
                                <span>Tél: </span>
                                {item.mainPhone}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
          <div className="viewMoreBtnDiv text-center pt-5 md:pt-0 ">
            <button
              id="viewMoreBtn"
              onClick={() => {
                props.onButtonClick();
              }}
              className="bg-[#C15D1B] w-[124px] h-10 my-4 rounded-sm text-white text-center transition-all transform hover:scale-[1.09] justify-center inline-flex items-center"
            >
              {" "}
              Voir plus{" "}
            </button>
          </div>
        </div>
     
      </div>
      
    </>
  );
}



export default LeftPanel;
