function CalcularValorTotalDosLivroDisponiveis(pLivros){
    const lElementoValorTotalDosLivosDisponiveis = document.getElementById("valor");
    const lValorTotalDosLivroDisponiveis = pLivros.reduce(function(pAcumulador, pLivro){
        if (pLivro.quantidade > 0)
            return pAcumulador + pLivro.preco;
        return pAcumulador + 0.0;
    }, 0);
    const lValorTotalDosLivroDisponiveisFormatado =new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(lValorTotalDosLivroDisponiveis);
    lElementoValorTotalDosLivosDisponiveis.textContent = lValorTotalDosLivroDisponiveisFormatado;
}