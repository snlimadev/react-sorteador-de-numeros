//#region Função para sortear números chamada em todas as telas, só alterando os parâmetros
export function consomeApi(qtdNumeros, numMin, numMax, setNumerosAleatorios) {
  const url = 'https://api-sorteador-de-numeros.vercel.app/sorteio';
  const parametros = `?qtdNumeros=${qtdNumeros}&numMin=${numMin}&numMax=${numMax}`;
  let status = 0;

  Swal.fire({
    title: 'Sorteando...',
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(url + parametros, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    }
  })
    .then(resposta => {
      status = resposta.status;

      return resposta.json();
    })
    .then(dados => {
      Swal.close();

      if (dados.resultado) {
        setNumerosAleatorios(`Números sorteados: ${dados.resultado}`);
      } else if (dados.erro) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: dados.erro
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Erro inesperado (status: ${status}).`
        });
      }
    })
    .catch(erro => {
      console.error('Erro ao consumir a API: ', erro);

      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao obter os números sorteados. ' +
          'Verifique sua conexão com a internet e tente novamente mais tarde.'
      });
    });
}
//#endregion
