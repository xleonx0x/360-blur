import { useState, useRef, useEffect } from 'react'
import './App.css'
import panoramaImage from './unswcompressed.jpg'; // Import the image
// https://jpeg-optimizer.com/

function App() {
  const pannellumContainer = useRef(null);
  const pannellumViewer = useRef(null);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

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
        <div>
          <span style={{ color: "#EFFF33" }}>yellow</span><span style={{ color: "#FFDC00" }}>shirt</span>
        </div>
          <div id="smol" style= {{ color: "#CEDB38", fontSize: "30px" }}>do you have what it takes?</div>
                </div>
      <div id="menu">
        <div>
          <span
          className={`hover-box ${hover ? 'hovered' : ''}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
            Play
          </span>
        </div>
        <div>
          <span
            className={`hover-box ${hover2 ? 'hovered' : ''}`}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            Settings
          </span>
          </div>
          <div>
          <span
            className={`hover-box ${hover3 ? 'hovered' : ''}`}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            Credits
          </span>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
