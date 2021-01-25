import React from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { statesKeylatlng } from "./indiaStatesData";
import './mapStyles.css'

const setColor = (num) => {
  if (num > 100000) {
    return "red";
  } else if (num > 50000) {
    return "blue";
  } else {
    return "green";
  }
};

const setRadius = (num) => {
  if (num > 200000) {
    return 25;
  } else if (num > 100000) {
    return 15;
  } else {
    return 8;
  }
};

const MapComponent = (props) => {
  const position = [20.5937, 80.9629];

  return (
    <MapContainer
      center={position}
      zoom={4.4}
      scrollWheelZoom={false}
      style={{ height: "80vh" }}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {statesKeylatlng.map((state, key) => {
        const pos = [state.lat, state.lng];
        const stateCode = state.key;
        const color = setColor(
          props.statedata[`${stateCode}`]
            ? props.statedata[`${stateCode}`].total.confirmed
            : null
        );
        const rad = setRadius(
          props.statedata[`${stateCode}`]
            ? props.statedata[`${stateCode}`].total.confirmed
            : null
        );
        return (
          <CircleMarker
            center={pos}
            radius={rad}
            fillColor={color}
            fillOpacity={0.5}
            weight={0.5}
            key={key}
            pathOptions={{ color: `${color}` }}
          >
            <Popup className="popup">
              <h1>{state.name}</h1>
              <br />
              <h2>
                CONFIRMED:
                {props.statedata[`${stateCode}`]
                  ? props.statedata[`${stateCode}`].total.confirmed
                  : "NA"}
                <br />
                TESTED:
                {props.statedata[`${stateCode}`]
                  ? props.statedata[`${stateCode}`].total.tested
                  : "NA"}
                <br />
                DECEASED:
                {props.statedata[`${stateCode}`]
                  ? props.statedata[`${stateCode}`].total.deceased
                  : "NA"}
                <br />
                RECOVERED:
                {props.statedata[`${stateCode}`]
                  ? props.statedata[`${stateCode}`].total.recovered
                  : "NA"}
              </h2>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
