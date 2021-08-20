import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker
} from "react-simple-maps";

import map from '../../../data/topojson-maps/world-50m.json';


const configObj = {
    marker: {
      markerOffset: -30,
      name: "Spain, Madrid",
      coordinates: [-3.5, 40.5]
    },

    width: 800,
    height: 530
   
};


const MapSection = () => {

    return (
        <div className="MapSection">
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                height={configObj.height}
                width={configObj.width}

                projectionConfig={{
                    rotate:  [0, -42.0, -5],
                    scale: 1200
                }}
            >
                <Graticule stroke="#8a8888" />
                <Geographies geography={map}>
                {({ geographies }) =>
                    geographies
                    .filter(d => d.properties.REGION_UN === "Europe")
                    .map(geo => (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                            default: {
                                fill: "#e69ea5",
                                stroke:"#696160",
                                outline: "none"
                            },
                            hover: {
                                fill: "#F53",
                                outline: "none"
                            },
                            pressed: {
                            fill: "#E42",
                            outline: "none"
                            }
                        }}
                        />
                    ))
                }
                </Geographies>
                
                <Marker key={configObj.marker.name} coordinates={configObj.marker.coordinates}>
                    <g
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                    >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                    textAnchor="middle"
                    y={configObj.marker.markerOffset}
                    style={{ fontFamily: "Segoe UI", fill: "#fcfcfc", fontWeight:600, fontSize: '25px'}}
                    >
                    {configObj.marker.name}
                    </text>
                </Marker>

            </ComposableMap>
            
        </div>
        
    );
}
 
export default MapSection;