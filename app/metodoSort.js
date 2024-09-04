const lElementoBotaoOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
lElementoBotaoOrdenarPorPreco.addEventListener("click", function(){
    OrdenarLivrosPorPreco();   
});

function OrdenarLivrosPorPreco(){
    Livros.sort(function(pLivro1, pLivro2){
        if (pLivro1.preco > pLivro2.preco){
            return 1;
        }
        if (pLivro1.preco < pLivro2.preco){
            return -1;
        }
        return 0;
    });
    CarregarLivrosNaSecao(Livros);
}