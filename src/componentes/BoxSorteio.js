import '../css/estilo.css';

export default function BoxSorteio(props) {

  return (
    <div>
      <div className='area-botao'>
        <button onClick={props.botaoSortear} style={{ backgroundColor: 'green' }}>
          Sortear
        </button>
      </div>

      <div className='exibeResultado'>
        <h4>{props.resultado}</h4>
      </div>
    </div>
  );
}
