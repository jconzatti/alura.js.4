let Livros = [];
let LivrosComDescontoAplicado = [];
Inicializar();

async function Inicializar(){
    Livros = await BuscarLivrosDaAPI();
    LivrosComDescontoAplicado = AplicarDescontoNosLivros(Livros, 0.3);
    CarregarLivrosNaSecao(LivrosComDescontoAplicado);
}

async function BuscarLivrosDaAPI() {
    const lEndpointDaAPIDeLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
    const lResposta = await fetch(lEndpointDaAPIDeLivros);
    return lResposta.json();
}