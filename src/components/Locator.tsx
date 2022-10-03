import { useState, useEffect } from "react";
import * as React from "react";
import LeftPanel from "./LeftPanel";
import ApiCall from "./ApiCall";
import "../index.css";
import Map from "./Map";
import Alpabhetsec from "./Alpabhetsec";
import Autocomplete from "./Autocomplete";  
  import Geocode from "react-geocode";
import {
  StandaloneSearchBox, LoadScript
} from "@react-google-maps/api";


function Locator() {
  const[currrentCordinate,setcurrrentCordinate]=useState({lat:0,lng:0})
  const [locationsData, setlocationsData] = useState([]);
  const [newoffset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState('');
  // const [loading, setLoading] = useState(true);

  const onKeyUp = (e:any) => {};
  const input=(e)=>{
     setInputValue(e.target.value);
  }




  useEffect(() => {
    ApiCall.getLocations({ offset: 0 }).then((data:any) => {
      if (!data.errors) {
        // setLoading(false);
        setlocationsData(data.response.entities)
        setOffset(newoffset + 5)
      }
    });
    
  }, []);

  const inputclick=(place)=>{
    setInputValue(place)
    setOffset(5)
    let params = {
      location: place,
      offset: 0,
      limit:5
    };
    ApiCall.getNearbyLocations(params).then((data) => {
      if (!data.errors) {
        const newData:any = [];
        const datawithdistance:any=[];
        data.response.entities.map((item:any,index:any)=>(
          item.__distance = data.response.distances[index],
          datawithdistance.push(item)
        ));
        datawithdistance.map((item) => newData.push(item));
        // setLoading(false);
        setlocationsData(newData);
      
      }
      document.getElementById("viewMoreBtn").classList.remove("hidden");
        
      
    });
  }



  const onClick = (e) => {
  
    setOffset(newoffset + 5);
    setInputValue(  (document.getElementById("location-input") as HTMLInputElement).value)
   
    if (inputValue === "") {
      ApiCall.getLocations({ offset: newoffset }).then((data) => {
        if (!data.errors) {
          const newData:any = [];
          data.response.entities.map((item:any) => newData.push(item));
          // setLoading(false);
          setlocationsData([...locationsData, ...newData]);
        }
        if (!data.response.pageToken) {
          document.getElementById("viewMoreBtn").classList.add("hidden");
        }
      });
    }

    if (inputValue != "") {
      let params = {
        location: inputValue,
        offset: newoffset,
        limit:5
      };
      ApiCall.getNearbyLocations(params).then((data) => {
        const newData:any = [];
        if (!data.errors) {
          const datawithdistance:any=[];
          data.response.entities.map((item:any,index:any)=>(
            item.__distance = data.response.distances[index],
            datawithdistance.push(item)
          ));
          datawithdistance.map((item) => newData.push(item));
          // setLoading(false);
          setlocationsData([...locationsData, ...newData]);
        }
        if (newoffset + data.response.entities.length>data.response.count) {
          document.getElementById("viewMoreBtn").classList.add("hidden");
        }
      });
    }
  };


var Api="AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";
const geoclick=()=>{
  setOffset(5);
    navigator.geolocation.getCurrentPosition(function (position) {
      setcurrrentCordinate({lat:position.coords.latitude,lng: position.coords.longitude})
      // Geocode.setApiKey(Api);
      Geocode.fromLatLng(position.coords.latitude,position.coords.longitude).then(
        (response) => {
          if (response.results[0]) {
            setInputValue(response.results[0].formatted_address);
        }
      },
        (error) => {
          console.error(error);
        }
      );

      let params = {
        location: `${position.coords.latitude},${position.coords.longitude}`,
        offset: 0,
        limit:5
      };
    
    ApiCall.getNearbyLocations(params).then((data) => {
      let datawithdistance:any=[];
      data.response.entities.map((item:any,index:any)=>(
        item.__distance = data.response.distances[index],
        datawithdistance.push(item)
      ));
      if (!data.errors) {
        setlocationsData(datawithdistance);
      }
      if (data.response.entities.length==0) {
        document.getElementById("viewMoreBtn").classList.add("hidden");
      }
      else{
        document.getElementById("viewMoreBtn").classList.remove("hidden");
      }
    });
 
  });
}
  return (
    <>
    <LoadScript googleMapsApiKey={Api} libraries={["places"]}>
       <div className="w-full"> 
          <ul className="  text-[#024B58] text-sm font-nexa_boldregular flex  mt-5 flex-row px-5 2xl:px-10">
              <li className=" after:content-['>'] pr-2"><a href="/" className="pr-2"> Accueil </a></li>
              <li className="font-nexa_lightregular pl-1">Nos brasseries</li>
                </ul>
              <div className="flex  flex-wrap text-2xl md:text-4xl pt-[36px] pb-[36px] lg:pt-[76px] lg:pb-[76px] items-center  px-5 2xl:px-10 md:px-auto justify-between md:justify-around text-[#024B58]">
              <h1 className="font-evogriaregular text-2xl md:text-4xl">TROUVEZ ET RÉSERVEZ VOTRE RESTAURANT LÉON À PROXIMITÉ DE</h1>
              </div>
      <div>
      <div className="  flex flex-col lg:flex-row px-5 2xl:px-10">
        <div className="panel order-2 lg:order-none pr-0 lg:pr-4">
          <div className="lp-param lp-param-headline header justify-between flex flex-row mt-2">
            <h2 className="font-evogriaregular text-xs  sm:text-sm xl:text-sm 2xl:text-base  text-[#024B58]">
              INDIQUEZ UN CODE POSTAL, VILLE
            </h2>
            
            <button
              className="font-nexa_boldregular relative search-location-arrow text-[#024B58] text-xs sm:text-sm"
              title="Search using your current location!"
              id="useLocation"
              onClick={geoclick }
            >
              <svg
                className="absolute -left-4 top-[0px] sm:top-[2px] xl:top-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  id="Icon_material-gps-fixed"
                  data-name="Icon material-gps-fixed"
                  d="M8.5,5.955A2.545,2.545,0,1,0,11.045,8.5,2.545,2.545,0,0,0,8.5,5.955Zm5.689,1.909A5.724,5.724,0,0,0,9.136,2.811V1.5H7.864V2.811A5.724,5.724,0,0,0,2.811,7.864H1.5V9.136H2.811a5.724,5.724,0,0,0,5.053,5.053V15.5H9.136V14.189a5.724,5.724,0,0,0,5.053-5.053H15.5V7.864ZM8.5,12.955A4.455,4.455,0,1,1,12.955,8.5,4.451,4.451,0,0,1,8.5,12.955Z"
                  transform="translate(-1.5 -1.5)"
                  fill="#024b58"
                />
              </svg>
              Utiliser ma position
            </button>
          </div>

          <div className="bg-[#024B58]  text-white">
            <div className=" px-4 py-2 ">
              <div className="directions"></div>
              <div className=" bg-white shadow-md  w-full relative  flex items-center focus-within:ring-0 focus-within:ring-blue-400">
                <form
                  className="flex w-full justify-between"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                   <Autocomplete Api={Api} defaultValue={inputValue} onChange={input} inputclick={inputclick} />
                  <button
                    type="submit"
                    onClick={(e) => {
                      setOffset(5);
                      let params = {
                        location:
                        (document.getElementById("location-input") as HTMLInputElement).value,
                        offset: 0,
                        limit:5
                      };
                     
                      ApiCall.getNearbyLocations(params).then((data) => {
                        const newData:any = [];
                        data.response.entities.map((item:any,index:any)=>(
                          item.__distance = data.response.distances[index],
                          newData.push(item)
                        ));
                        if (!data.errors) {
                          // setLoading(false);
                          setlocationsData(newData);
                        }
                        if (data.response.count>data.response.entities.length) {
                          document.getElementById("viewMoreBtn").classList.remove("hidden");
                        }
                      });
                    }}
                    className="search-bar-icon font-nexa_boldregular text-sm text-white text-center w-40 h-14 bg-[#488487]"
                    aria-label="Search bar icon"
                    id="search-location-button"
                  >
                    Rechercher
                  </button>
                </form>
              
                <div
                  id="match-list"
                  className="bg-[#024B58] absolute top-full left-0 w-full z-10 shadow-md "
                ></div>
              </div>
              <div className="error-text"></div>

              <div className="search-center  font-nexa_boldregular opacity-50">
      
              </div>
            </div>
            <div className="spinner hidden">
              <div className="sk-wave">
                <div className="sk-rect sk-rect1"></div>
                <div className="sk-rect sk-rect2"></div>
                <div className="sk-rect sk-rect3"></div>
                <div className="sk-rect sk-rect4"></div>
                <div className="sk-rect sk-rect5"></div>
              </div>
            </div>
            
            <LeftPanel locationsData={locationsData} onButtonClick={onClick}  />
          </div>
        </div>
        {/* <div>{JSON.stringify(locationsData)}</div>         */}
        <div
          id="map"
          className="w-full  lg:w-1/2 h-48 md:h-96 lg:h-[calc(100vh_-_113px)] xl:h-[calc(100vh_-_113px)]  top-0 lg:mt-7 xl:mt-7 2xl:mt-8  2xl:h-[calc(100vh_-_114px)] order-1 lg:order-none z-[99]"
        >
          <Map data={locationsData} Api={Api} currrentCordinate={currrentCordinate}/>
        </div>
      </div>
      <div className=" px-5 2xl:px-10 ">
      <div className="flex w-full ">
    <div className="w-full">
      <div className="search-alphabet inline-block w-full">
      </div>  
      <div className=" w-full list">
      <Alpabhetsec />
      </div> 
    </div>
    </div>
  </div>
  </div>
  </div>
  </LoadScript>
    </>
  );
}

export default Locator;
