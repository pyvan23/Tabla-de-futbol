 /* eslint-disable react/prop-types */
import { useState } from "react";
import { SelectJugadores } from "../components/SelectJugadores";
import html2canvas from 'html2canvas';

const mobileMaxWidth = 568; // Replace with your preferred breakpoint
export const AdminScreen = () => {
   // Check if the viewport is currently in mobile mode
   
  
  const [imgData, setImgData] = useState('');
  const captureScreen = () => {
    const element = document.querySelector("#photo");

    
    // Alternative using html2canvas with mobile viewport simulation:
    html2canvas(element, {
      useCORS: true, // Enable CORS if necessary
      allowTaint: true,
      useCSS: true,
      windowWidth: mobileMaxWidth, // Use your mobile breakpoint
      windowHeight: 812, // Example mobile height, adjust if needed
      scale: 1.5, // Adjust scale for pixel density if necessary
      
    
    }).then((canvas) => {
      const data = canvas.toDataURL();
      setImgData(data);
      downloadImage(data);
    });
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'screenshot.png';
    link.click();
  };

  return (
    <>
    <div >

      <SelectJugadores />
      <button onClick={captureScreen}>Descargar equipos</button>

    </div>
     
    </>
  );
};