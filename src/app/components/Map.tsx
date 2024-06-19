"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function App() {
  const position = { lat: 49.90791896078289, lng: 16.447756930036526 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    apiKey && (
      <div className="h-96 w-full">
        <APIProvider apiKey={apiKey}>
          <Map defaultCenter={position} defaultZoom={9}>
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
    )
  );
}

export default App;
