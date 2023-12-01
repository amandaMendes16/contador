import React, { useState } from 'react';

function SimpleCounter(){
  const [contador, setContador] = useState(0);

  const mais = () => {
    setContador(contador + 1);
  };


  const menos = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Contador Simples</h2>
      <p>Valor do Contador: {contador}</p>

      <button onClick={mais}>+</button>

      <button onClick={menos}>-</button>
    </div>
  );
};

export default SimpleCounter;
