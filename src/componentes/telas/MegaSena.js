import { useState } from 'react';
import '../../css/estilo.css';

import Header from '../Header';
import BoxSorteio from '../BoxSorteio';
import BotaoVoltar from '../BotaoVoltar';
import Footer from '../Footer';
import { consomeApi } from '../Funcoes';

export default function MegaSena() {
  const [inputQtdNumeros, setInputQtdNumeros] = useState(6);
  const [resultado, setResultado] = useState('');

  function handleInputQtdNumeros(event) {
    const novaQtdNumeros = event.target.value;
    setInputQtdNumeros(novaQtdNumeros);
  }

  function sorteiaNumeros() {
    const qtdNumeros = inputQtdNumeros;
    const numMin = 1;
    const numMax = 60;

    consomeApi(qtdNumeros, numMin, numMax, setResultado);
  }

  return (
    <div className='conteudo-centralizado'>
      <Header titulo='Mega-Sena' />

      <main>
        <div>
          <label>Quantos números?</label>
          <select value={inputQtdNumeros} onChange={handleInputQtdNumeros}>
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
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
          </select>
        </div>

        <BoxSorteio botaoSortear={sorteiaNumeros} resultado={resultado} />

        <BotaoVoltar />
      </main>

      <Footer />
    </div>
  );
}