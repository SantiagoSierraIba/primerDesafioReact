import React from "react";
import './App.css';
import  Navbar from './Componentes/Navbar/Navbar';


const App = () => {
  const nombre = "Santiago";
  const apellido = "Sierra"
  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario={apellido} />
    </>
  );
};


export default App;


