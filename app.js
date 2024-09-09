function pesquisar() {
    // Obtém a referência à seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma instituição filantrópica.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa a string que armazenará o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto 'dado' dentro do array (lista de dados) 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        
        // Se titulo inclui campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }    
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Define o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}

// Adiciona o evento para acionar a pesquisa ao pressionar Enter
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pesquisar();
    }
});
