import React from 'react';
import logo from '../../assets/logo.png';
import { styles } from './Navbar.style';
import CartWidget from './CartWidget';

export const Navbar = (props) => {

  const { nombreUsuario, apellidoUsuario } = props;

  return (
    <header style={styles.container}>
      <img style={styles.imagenes} src={logo} alt="Logo de Wuacamoli" />
      <h1>Bienvenido {nombreUsuario} {apellidoUsuario} </h1>
      <nav>
        <a style={styles.categorias} href="">Home </a>
        <a style={styles.categorias} href="">Colecciones</a>
        <a style={styles.categorias} href="">Nosotros</a>
      </nav>

      <CartWidget />

    </header>
  )
}

export default Navbar

