import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const mapStyles = {
  height: "100%",
};

export default function MapContainer(props) {
  const { ref, map, google } = useGoogleMaps(process.env.REACT_APP_GOOGLE_API, {
    zoom: 10,
    center: {
      lat: 37.3984,
      lng: -122.01233,
    },
  });
  console.log(props.list);
  if(map && props.list){
    props.list.map((item) => {
        new google.maps.Marker({
          label: item.name.split('.')[0],
          position:item.latlng,
          map,
        });
      });
  }
  
  return <div ref={ref} style={{ width: "100%", height: 500 }} />;
}
