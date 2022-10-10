import React from 'react'

export const ItemListContainer = (props) => {
    const { nombreUsuario, apellidoUsuario } = props;
    return (
      <main>
        <div nombreUsuario={nombre} apellidoUsuario={apellido}>Bienvenido {nombreUsuario} {apellidoUsuario} </div>
      </main>
    );
}
