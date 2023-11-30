import { useContext } from "react";
import { JugadoresContext } from "../context/JugadoresContext";

// Quitar esto de tu archivo actual
export const useJugadores = () => useContext(JugadoresContext);
