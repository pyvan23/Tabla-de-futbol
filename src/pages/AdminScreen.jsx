/* eslint-disable react/prop-types */
import { SelectJugadores } from "../components/SelectJugadores";
import html2canvas from 'html2canvas';

export const AdminScreen = () => {

  const captureScreen = () => {
    const imgElement = document.querySelector('#photo');
    html2canvas(document.body).then((canvas) => {
      let imgData = canvas.toDataURL(imgElement.html2canvas);
      console.log(imgElement);
      downloadImage(imgData);
    });
  }

  const downloadImage = (data) => {
    let link = document.createElement('a');
    link.href = data;
    link.download = 'screenshot.png';
    link.click();
  }





  
  return (
    <>
      <SelectJugadores />
      <button onClick={captureScreen}>
        Capturar pantalla
      </button>
    </>
  );
};
