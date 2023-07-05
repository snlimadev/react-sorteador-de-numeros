import { useState } from 'react';
import '../../css/estilo.css';

import Header from '../Header';
import BoxSorteio from '../BoxSorteio';
import BotaoVoltar from '../BotaoVoltar';
import Footer from '../Footer';
import { consomeApi } from '../Funcoes';

export default function Lotomania() {
  const [inputQtdNumeros, setInputQtdNumeros] = useState(50);
  const [resultado, setResultado] = useState('');

  function handleInputQtdNumeros(event) {
    const novaQtdNumeros = event.target.value;
    setInputQtdNumeros(novaQtdNumeros);
  }

  function sorteiaNumeros() {
    const qtdNumeros = inputQtdNumeros;
    const numMin = 1;
    const numMax = 100;

    consomeApi(qtdNumeros, numMin, numMax, setResultado);
  }

  return (
    <div className='conteudo-centralizado'>
      <Header titulo='Lotomania' />

      <main>
        <div>
          <label>Quantos números?</label>
          <select value={inputQtdNumeros} onChange={handleInputQtdNumeros}>
            <option value='50'>50</option>
          </select>
        </div>

        <BoxSorteio botaoSortear={sorteiaNumeros} resultado={resultado} />

        <BotaoVoltar />
      </main>

      <Footer />
    </div>
  );
}