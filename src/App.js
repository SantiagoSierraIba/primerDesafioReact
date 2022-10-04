import React from "react";
import './App.css';
import  Navbar from './Componentes/Navbar/Navbar';


const App = () => {
  const nombre = "Santiago";
  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Sierra" />
    </>
  );
};


export default App;


