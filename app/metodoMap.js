function AplicarDescontoNosLivros(pLivros, pDesconto){
    return pLivros.map(lLivro =>{
        return {... lLivro, preco: lLivro.preco * (1.0-pDesconto)}
        /*
        //Equivale ao seguinte código
        return {
            titulo: lLivro.titulo,
            preco: lLivro.preco * (1.0-pDesconto),
            autor: lLivro.autor,
            imagem: lLivro.imagem,
            alt: lLivro.alt,
            quantidade: lLivro.quantidade,
            categoria: lLivro.categoria    
        }
        */
    })
}