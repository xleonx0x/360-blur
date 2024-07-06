import { useState, useRef, useEffect } from 'react'
import './App.css'
import panoramaImage from './image.png'; // Import the image

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
    </>
  )
}

export default App
