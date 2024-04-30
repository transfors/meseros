import React, { useState } from 'react';
import mesas from '../imagenes/mesas.png';
import numeromesa from '../imagenes/numeromesa.png';
import './Mesas.css'; 

const Mesas = () => {
  const [isMesaOpen, setIsMesaOpen] = useState(false);

  const handleMesaToggle = () => {
    setIsMesaOpen(!isMesaOpen);
  };
  
  return (
    <>  
    <header>        
        <img src={mesas} className="mesas" alt="portada restaurante" />
        <div className='mesas'>
            <img src={numeromesa} className="m1" alt="portada restaurante" />
            <img src={numeromesa} className="m2" alt="portada restaurante" />
            <img src={numeromesa} className="m3" alt="portada restaurante" />
            <img src={numeromesa} className="m4" alt="portada restaurante" />            
        </div>        
    </header>
    </>
  );
};

export default Mesas;
