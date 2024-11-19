document.getElementById("submitButton").addEventListener("click", () => {
    const gameName = document.getElementById("gameName").value;
    const genre = document.getElementById("genre").value;
    const releaseDate = document.getElementById("releaseDate").value;
    const platform = document.getElementById("platform").value;
    const descricao = document.getElementById("descricao").value;

    if (gameName && genre && releaseDate && platform && descricao) {
        const gameData = {
            nome_do_jogo: gameName,
            genero: genre,
            data_de_lançamento: releaseDate,
            platforma: platform,
            descrição: descricao
        };

        document.getElementById("output").textContent = JSON.stringify(gameData, null, 4);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
