import '../css/estilo.css';
import { Link } from 'react-router-dom';

export default function BotaoVoltar() {

  return (
    <div className='area-botao'>
      <Link to='/'>Voltar</Link>
    </div>
  );
}