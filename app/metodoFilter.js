const lElementosBotoesFiltrar = document.querySelectorAll(".btn");
lElementosBotoesFiltrar.forEach(lElementoBotaoFiltrar => {
    if (lElementoBotaoFiltrar.value){
        lElementoBotaoFiltrar.addEventListener("click", function(){
            FiltrarLivrosPorCategoria(lElementoBotaoFiltrar.value);   
        });
    } else if (lElementoBotaoFiltrar.classList.contains("btn-disponiveis")){
        lElementoBotaoFiltrar.addEventListener("click", function(){
            FiltrarLivrosDisponiveis();   
        });
    }
});

function FiltrarLivrosPorCategoria(pCategoria){
    let lLivrosFiltrados = Livros.filter(lLivro => lLivro.categoria == pCategoria);
    CarregarLivrosNaSecao(lLivrosFiltrados);
}

function FiltrarLivrosDisponiveis(){
    let lLivrosFiltrados = Livros.filter(lLivro => lLivro.quantidade > 0);
    CarregarLivrosNaSecao(lLivrosFiltrados);
}