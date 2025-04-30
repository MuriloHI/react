import { useState, useEffect } from 'react';

export default function Relogio() {

  const [horaAtual, definirHoraAtual] = useState(new Date());

  useEffect(() => {

    const intervalo = setInterval(() => {
      const novaHora = new Date();            
      definirHoraAtual(novaHora);           
    }, 1000);

    return () => {
      clearInterval(intervalo);
    }; 

  }, []); 

  const horas = horaAtual.getHours().toString().padStart(2, '0');
  const minutos = horaAtual.getMinutes().toString().padStart(2, '0');
  const segundos = horaAtual.getSeconds().toString().padStart(2, '0');

  return (
    <section>
      <h1>{horas}:{minutos}:{segundos}</h1>
    </section>
  );
}
