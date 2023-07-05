//#region Função para sortear números chamada em todas as telas, só alterando os parâmetros
export function consomeApi(qtdNumeros, numMin, numMax, setNumerosAleatorios) {
  fetch(`https://api-sorteador-de-numeros.vercel.app/api?qtdNumeros=${qtdNumeros}&numMin=${numMin}&numMax=${numMax}`, {
    method: 'Get',
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    }
  })
    .then(resposta => resposta.json())
    .then(dados => {
      if (dados.resultado !== undefined) {
        setNumerosAleatorios('Números sorteados: ' + dados.resultado);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Não foi possível sortear.',
          text: 'Instruções: ' +
                'a) É obrigatório informar a quantidade de números e o intervalo; ' +
                'b) Todos os valores devem ser números inteiros; ' +
                'c) A quantidade de números deve ser no máximo 1000; ' +
                'd) O tamanho do intervalo deve ser maior que a quantidade de números; ' +
                'e) O valor mínimo do intervalo deve ser menor que o valor máximo.'
        })
      }
    })
    .catch(erro => {
      console.error('Erro ao consumir a API:', erro);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao obter os números sorteados. Tente novamente mais tarde.'
      })
    });
}
//#endregion
