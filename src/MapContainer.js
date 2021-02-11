import { Map, Polyline, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const { currentLap } = props;
  const lapCords = currentLap && currentLap.gps.map((data) => ({ lat: data[1], lng: data[0] }));
  
  return (
    currentLap && (
      <Map
        google={props.google}
        style={{
          width: "50%",
          height: "80%",
          position: "relative",
          display: "block",
        }}
        className={"map"}
        initialCenter={{ lat: 39.540938, lng: -122.331902 }}
        mapType={"SATELLITE"}
        zoom={17}
      >
        <Polyline
          path={lapCords}
          geodesic={true}
          strokeColor="yellow"
          strokeOpacity={1}
          strokeWeight={1}
        />
      </Map>
    )
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2JcnXJofbnMDBCJ1Vhs-Tje2DNMG3i2Q",
})(MapContainer);
