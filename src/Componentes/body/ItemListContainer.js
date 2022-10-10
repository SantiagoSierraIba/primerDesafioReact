import React from 'react'

export const ItemListContainer = (props) => {
    const { nombreUsuario, apellidoUsuario } = props;
    return (
      <main>
        <div>Bienvenido {nombreUsuario} {apellidoUsuario} </div>
      </main>
    );
}

export default ItemListContainer;