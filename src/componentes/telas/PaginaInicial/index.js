import { Link } from 'react-router-dom';
import '../../../css/estilo.css';

import Header from '../../Header';
import Footer from '../../Footer';

export default function PaginaInicial() {

  return (
    <div className='conteudo-centralizado'>
      <Header titulo='Escolha o tipo de sorteio' />

      <main className='container-tela-inicial'>
        <div className='area-botao'>
          <Link to='/personalizado'>Personalizado</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: 'green' }} to='/megasena'>Mega-Sena</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: 'purple' }} to='/lotofacil'>Lotofácil</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: 'darkblue' }} to='/quina'>Quina</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: 'darkorange' }} to='/lotomania'>Lotomania</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: 'yellowgreen' }} to='/timemania'>Timemania</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: 'darkred' }} to='/duplasena'>Dupla Sena</Link>
        </div>

        <div className='area-botao'>
          <Link style={{ backgroundColor: '#CC9900' }} to='/diadesorte'>Dia de Sorte</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}