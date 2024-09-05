function CarregarLivrosNaSecao(pLivros){
    const lElementoSecaoDeLivros = document.getElementById("livros");
    lElementoSecaoDeLivros.innerHTML = '';
    pLivros.forEach(lLivro => {lElementoSecaoDeLivros.appendChild(CriarElementoConteinerDeLivro(lLivro))});
    CalcularValorTotalDosLivroDisponiveis(pLivros);
}

function CriarElementoConteinerDeLivro(pLivro){
    const lElementoConteinerDeLivro = document.createElement("div");
    lElementoConteinerDeLivro.classList.add("livro");

    const lElementoImagemDoLivro = document.createElement("img");
    lElementoImagemDoLivro.classList.add("livro__imagens");
    if (pLivro.quantidade <= 0){
        lElementoImagemDoLivro.classList.add("indisponivel");
    }
    lElementoImagemDoLivro.src = pLivro.imagem;
    lElementoImagemDoLivro.alt = pLivro.alt;
    lElementoConteinerDeLivro.appendChild(lElementoImagemDoLivro);

    const lElementoTituloDoLivro = document.createElement("h2");
    lElementoTituloDoLivro.classList.add("livro__titulo");
    lElementoTituloDoLivro.textContent = pLivro.titulo;
    lElementoConteinerDeLivro.appendChild(lElementoTituloDoLivro);

    const lElementoAutorDoLivro = document.createElement("p");
    lElementoAutorDoLivro.classList.add("livro__descricao");
    lElementoAutorDoLivro.textContent = pLivro.autor;
    lElementoConteinerDeLivro.appendChild(lElementoAutorDoLivro);

    const lElementoPrecoDoLivro = document.createElement("p");
    lElementoPrecoDoLivro.classList.add("livro__preco");
    lElementoPrecoDoLivro.id = "preco";
    lElementoPrecoDoLivro.textContent = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(pLivro.preco);
    lElementoConteinerDeLivro.appendChild(lElementoPrecoDoLivro);

    const lElementoConteinerDeCategoriasDoLivro = document.createElement("div");
    lElementoConteinerDeCategoriasDoLivro.classList.add("tags");

    const lElementoDeCategoriaDoLivro = document.createElement("span");
    lElementoDeCategoriaDoLivro.classList.add("tag");
    lElementoDeCategoriaDoLivro.textContent = pLivro.categoria;

    lElementoConteinerDeCategoriasDoLivro.appendChild(lElementoDeCategoriaDoLivro);
    lElementoConteinerDeLivro.appendChild(lElementoConteinerDeCategoriasDoLivro);
    return lElementoConteinerDeLivro;
}