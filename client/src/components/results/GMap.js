import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, withScriptjs,withGoogleMap, Marker} from 'react-google-maps';         
import { connect } from "react-redux";
import mapStyles from "./MapStyles";

    // VARIABLES
    var locations;
    var zoomOptions;
    var centerOption = {};
    // console.log(locations[0]);

    // const zoomSwitch = () => {
    //   if (searchType === 'state') {
    //     zoomOptions = 7
    //   }
    //   else {
    //     zoomOptions = 10
    //   }
    // }

const Map = ({ persons, loading }) => {    
  console.log(locations);

    return (
 
        <GoogleMap
          defaultZoom={10}
          defaultCenter={locations[0]}
          defaultOptions={{ styles: mapStyles }}
          
        >
          {locations.map((locations) =>(
                          <Marker 
                          position={locations}
                           />
         ) )}
    
          </GoogleMap>
    )
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GMap({ persons, loading }) {
  locations = [];
persons.forEach(person => {
    let temp = {};                                
    temp['lat'] = parseFloat(person.Latitude);
    temp["lng"] = parseFloat(person.Longitude);
    locations.push(temp);
    // console.log(temp);
        
});
// return locations

// console.log(locations);


  return  (
    <div style={{ width: "100%", height: "45vh" }}>
      <MapWrapped
      
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    </div>
  );

}

Map.propTypes = {
    person: PropTypes.object.isRequired
  };
  
