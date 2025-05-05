import React, { useState } from 'react';
import './Contador.css';
import iconeHomem from './img/icone_homem.png';
import iconeMulher from './img/icone_mulher.png';

export default function Contador() {
  const [quantidadeHomens, setQuantidadeHomens] = useState(0);
  const [quantidadeMulheres, setQuantidadeMulheres] = useState(0);

  const totalPessoas = quantidadeHomens + quantidadeMulheres;

  const resetarContagem = () => {
    setQuantidadeHomens(0);
    setQuantidadeMulheres(0);
  };

  const adicionarHomens = () => setQuantidadeHomens(quantidadeHomens + 1);
  const removerHomens = () => {
    if (quantidadeHomens > 0) setQuantidadeHomens(quantidadeHomens - 1);
  };

  const adicionarMulheres = () => setQuantidadeMulheres(quantidadeMulheres + 1);
  const removerMulheres = () => {
    if (quantidadeMulheres > 0) setQuantidadeMulheres(quantidadeMulheres - 1);
  };

  return (
    <section id="contador_principal">
      <h2>Total</h2>
      <p id="valorDoTotal">{totalPessoas}</p>
      <button id="resetar" onClick={resetarContagem}>🔄</button>

      <section className="section-Homem-Mulher">

        <section className="secion_dos_icones">
          <img src={iconeHomem} className="icone" />
          <p>Homens</p>
          <p id="contadorHomens">{quantidadeHomens}</p>
          <section className="botoes">
            <button className="adicionar" onClick={adicionarHomens}>+</button>
            <button className="remover" onClick={removerHomens}>-</button>
          </section>
        </section>

        <section className="secion_dos_icones">
          <img src={iconeMulher} className="icone" />
          <p>Mulheres</p>
          <p id="contadorMulheres">{quantidadeMulheres}</p>
          <section className="botoes">
            <button className="adicionar" onClick={adicionarMulheres}>+</button>
            <button className="remover" onClick={removerMulheres}>-</button>
          </section>
        </section>
      </section>
    </section>
  );
}
