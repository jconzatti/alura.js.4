const lElementosBotoesFiltrar = document.querySelectorAll(".btn");
lElementosBotoesFiltrar.forEach(lElementoBotalFiltrar => {
    if (lElementoBotalFiltrar.value){
        lElementoBotalFiltrar.addEventListener("click", function(){
            FiltrarLivrosPorCategoria(lElementoBotalFiltrar.value);   
        });
    } else if (lElementoBotalFiltrar.classList.contains("btn-disponiveis")){
        lElementoBotalFiltrar.addEventListener("click", function(){
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