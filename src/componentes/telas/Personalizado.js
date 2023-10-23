import { useState } from 'react';
import '../../css/estilo.css';

import Header from '../Header';
import BoxSorteio from '../BoxSorteio';
import BotaoVoltar from '../BotaoVoltar';
import Footer from '../Footer';
import { consomeApi } from '../Funcoes';

export default function PaginaInicial() {
  const [inputQtdNumeros, setInputQtdNumeros] = useState(10);
  const [inputNumMin, setInputNumMin] = useState(1);
  const [inputNumMax, setInputNumMax] = useState(100);
  const [resultado, setResultado] = useState('');

  function handleInputQtdNumeros(event) {
    const novaQtdNumeros = event.target.value;
    setInputQtdNumeros(novaQtdNumeros);
  }

  function handleInputNumMin(event) {
    const novoNumMin = event.target.value;
    setInputNumMin(novoNumMin);
  }

  function handleInputNumMax(event) {
    const novoNumMax = event.target.value;
    setInputNumMax(novoNumMax);
  }

  function sorteiaNumeros() {
    const qtdNumeros = inputQtdNumeros;
    const numMin = inputNumMin;
    const numMax = inputNumMax;

    consomeApi(qtdNumeros, numMin, numMax, setResultado);
  }

  return (
    <div className='conteudo-centralizado'>
      <Header titulo='Personalizado' />

      <main>
        <div>
          <label>Quantos números (máx. 1000)?</label>
          <input type='number' value={inputQtdNumeros} onChange={handleInputQtdNumeros} min='1' max='1000' step='1' />
        </div>

        <div>
          <label>Qual é o intervalo?</label>
        </div>
    
        <div>
          <label>De:</label>
          <input type='number' value={inputNumMin} onChange={handleInputNumMin} step='1' />
          <label>Até:</label>
          <input type='number' value={inputNumMax} onChange={handleInputNumMax} step='1' />
        </div>

        <BoxSorteio botaoSortear={sorteiaNumeros} resultado={resultado} />

        <BotaoVoltar />
      </main>

      <Footer />
    </div>
  );
}
