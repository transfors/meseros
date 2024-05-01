import React from 'react';
import mesa from '../imagenes/mesa.png'; 
import cartDesplegable from './CartDesplegable'

const Mesa = ({ numero }) => {
  return (
    <>
        <div className="mesa">
          <img src={mesa} alt={`Mesa ${numero}`} />
          <div className="numero">Mesa {numero}</div>
        </div>
        <div><cartDesplegable /></div>
        </>
  );
};

export default Mesa;
