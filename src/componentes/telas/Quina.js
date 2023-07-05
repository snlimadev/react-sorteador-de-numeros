import { useState } from 'react';
import '../../css/estilo.css';

import Header from '../Header';
import BoxSorteio from '../BoxSorteio';
import BotaoVoltar from '../BotaoVoltar';
import Footer from '../Footer';
import { consomeApi } from '../Funcoes';

export default function Quina() {
  const [inputQtdNumeros, setInputQtdNumeros] = useState(5);
  const [resultado, setResultado] = useState('');

  function handleInputQtdNumeros(event) {
    const novaQtdNumeros = event.target.value;
    setInputQtdNumeros(novaQtdNumeros);
  }

  function sorteiaNumeros() {
    const qtdNumeros = inputQtdNumeros;
    const numMin = 1;
    const numMax = 80;

    consomeApi(qtdNumeros, numMin, numMax, setResultado);
  }

  return (
    <div className='conteudo-centralizado'>
      <Header titulo='Quina' />

      <main>
        <div>
          <label>Quantos números?</label>
          <select value={inputQtdNumeros} onChange={handleInputQtdNumeros}>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
          </select>
        </div>

        <BoxSorteio botaoSortear={sorteiaNumeros} resultado={resultado} />

        <BotaoVoltar />
      </main>

      <Footer />
    </div>
  );
}