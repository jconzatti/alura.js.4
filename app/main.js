let Livros = [];
BuscarLivrosDaAPI();

async function BuscarLivrosDaAPI() {
    const lEndpointDaAPIDeLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
    const lResposta = await fetch(lEndpointDaAPIDeLivros);
    Livros = await lResposta.json();
    const lLivrosComDescontoAplicado = AplicarDescontoNosLivros(Livros, 0.3);
    CarregarLivrosNaSecao(lLivrosComDescontoAplicado);
}