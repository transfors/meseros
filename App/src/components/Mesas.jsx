import React from 'react';
import Mesa from './Mesa';
import { Link } from 'react-router-dom'; 
import "./Mesas.css"
import CartDesplegable from './CartDesplegable';

const Mesas = () => {
  // Array de números de mesa
  const numerosDeMesas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <> 
      <div className="mesas-container">
        {numerosDeMesas.map((numeroMesa, index) => (
          <>
          <div>
          <Link key={index} to={`/menu`}>
            <Mesa numero={numeroMesa} />
          </Link>
          
          <CartDesplegable />
          </div>
      
          
          
          </>
        ))}
      </div>
    </>
  );
};

export default Mesas;

