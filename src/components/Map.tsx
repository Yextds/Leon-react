import  { Component, useEffect, useState } from "react";
import * as React from "react";
import Mapicon from "../images/map-pin.svg"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import "../index.css";
import Hours from "./hours";
// import { json } from 'stream/consumers';
const containerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};

function Map(props) {
  const[zoom,setzoom]=useState(6);
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  const [activeMarker, setActiveMarker] = useState(null);
  const [map, setMap] = React.useState(null);
  var items = props.data;

  useEffect(() => {
      if(props.currrentCordinate.lat!=0){
    setCenter({lat:props.currrentCordinate.lat,lng:props.currrentCordinate.lng})
  }
  else{
    setCenter({lat:52.4583084,lng:1.5630376})
  }
    if(props.data.length > 0){
      setCenter({
        lat: props.data[0].yextDisplayCoordinate.latitude,
        lng: props.data[0].yextDisplayCoordinate.longitude,
      });
    }
  }, [props.data]);

  const handleActiveMarker = (marker,index) => {
    if (marker === activeMarker) {
      return;
    }
    setzoom(12);
    setActiveMarker(marker);
    document.querySelectorAll(".result")[index].scrollTo(50, 10);
    document.querySelectorAll(".result")[index].classList.add("active");
    document.querySelectorAll(".result")[index].classList.add("selected");
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: props.Api,
  });



  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const pinStyles = {
    fill: "#4e9c34", //default google red
    stroke: "#4e9c34",
    text: "white",
    fill_selected: "#2c702e",
    stroke_selected: "#4e9c34",
    text_selected: "white",
  };

 

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onClick={() => setActiveMarker(null)}
      onUnmount={onUnmount}
    >
      <MarkerClusterer options={options}> 
        {(clusterer) =>
          items.map((item, index) => (
            <Marker
              onClick={() => handleActiveMarker(item.slug,index)}
              key={item.slug + "_" + index}
              icon={{
                fillColor: pinStyles.fill,
                url: Mapicon,
                scale: 1.1,
                fillOpacity: 1, 
                strokeColor: pinStyles.stroke,
                strokeWeight: 1,
                labelOrigin: new google.maps.Point(21,22),
              }}
              label={{
                text:String(Number(index + 1)),
                color: pinStyles.text,
              }} 
              position={{
                lat: item.yextDisplayCoordinate.latitude,
                lng: item.yextDisplayCoordinate.longitude,
              }}
              clusterer={clusterer}
              // https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg
            >
              {activeMarker === item.slug ? (
                <InfoWindow onCloseClick={() =>{ setActiveMarker(null);
                  document.querySelectorAll(".result")[index].classList.remove("active");
                  document.querySelectorAll(".result")[index].classList.remove("selected");
                  setzoom(8);
                }}>
                  <div>
                    {item.name}
                    <br />
                    {item.address.line1}
                    <br />
                    {item.mainPhone}
                    <br />{" "}
                    {typeof item.hours === "undefined" ? (
                      ""
                    ) : (
                      <Hours hours={item.hours} />
                    )}
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <></>
  );
}

/**
 *
 * stats
 * props
 * components => functional / class
 * useEffect
 * useMemo
 * context
 * redux
 * custom hooks
 * routing => react-router-dom
 */

export default React.memo(Map);
