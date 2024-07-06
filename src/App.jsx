import { useState, useRef, useEffect } from 'react'
import './App.css'
import panoramaImage from './unswcompressed.jpg'; // Import the image
// https://jpeg-optimizer.com/

function App() {
  const pannellumContainer = useRef(null);
  const pannellumViewer = useRef(null);

  useEffect(() => {
    if (window.pannellum && pannellumContainer.current) {
      pannellumViewer.current = pannellum.viewer(pannellumContainer.current, {
        type: "equirectangular",
        panorama: panoramaImage, // Relative path to your panorama image in the public directory
        autoLoad: true,
        showControls: false,
        mouseZoom: false,
        draggable: false,
        keyboardZoom: false,
        showZoomCrtl: false,
        showLoadButton: false,
        autoRotate: 5
      });
    }
  }, []);
  return (
    <>
    <filter id="blur">
      <div
        id="map"
        ref={pannellumContainer}
        style={{ width: "100vw", height: "100vh" }}
      >
      </div>
    </filter>
    <div className="overlay">
      <div id="title">
        <span style={{ color: "#EFFF33" }}>yellow</span><span style={{ color: "#FFDC00" }}>shirt</span>
      </div>
        <div id="smol" style= {{ color: "#CEDB38", fontSize: "30px" }}>do you have what it takes?</div>
    </div>
    </>
  )
}

export default App
