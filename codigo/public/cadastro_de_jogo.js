
window.addEventListener("load", () => {
    const savedGames = JSON.parse(localStorage.getItem("gameData")) || [];
    displayAllGames(savedGames);
});


document.getElementById("submitButton").addEventListener("click", () => {
    const gameName = document.getElementById("gameName").value;
    const genre = document.getElementById("genre").value;
    const releaseDate = document.getElementById("releaseDate").value;
    const platform = document.getElementById("platform").value;
    const descricao = document.getElementById("descricao").value;

    if (gameName && genre && releaseDate && platform && descricao) {
        const newGame = {
            id: Date.now(), 
            nome_do_jogo: gameName,
            genero: genre,
            data_de_lançamento: releaseDate,
            plataforma: platform,
            descrição: descricao
        };

        
        const savedGames = JSON.parse(localStorage.getItem("gameData")) || [];
        savedGames.push(newGame);
        localStorage.setItem("gameData", JSON.stringify(savedGames));

      
        displayAllGames(savedGames);

      
        document.getElementById("gameForm").reset();
        alert("Jogo salvo com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});


function displayAllGames(games) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (games.length === 0) {
        output.innerHTML = "<p>Nenhum jogo cadastrado.</p>";
        return;
    }

    games.forEach((game) => {
        const gameElement = document.createElement("div");
        gameElement.style.border = "1px solid #ccc";
        gameElement.style.borderRadius = "10px";
        gameElement.style.padding = "15px";
        gameElement.style.marginBottom = "10px";
        gameElement.style.backgroundColor = "#f9f9f9";

        gameElement.innerHTML = `
            <h3 style="color: #333; text-align: center;">${game.nome_do_jogo}</h3>
            <p><strong>Gênero:</strong> ${game.genero}</p>
            <p><strong>Data de Lançamento:</strong> ${game.data_de_lançamento}</p>
            <p><strong>Plataforma:</strong> ${game.plataforma}</p>
            <p><strong>Descrição:</strong> ${game.descrição}</p>
        `;

       
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Deletar";
        deleteButton.style.backgroundColor = "#ff4d4d";
        deleteButton.style.color = "white";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "4px";
        deleteButton.style.padding = "8px";
        deleteButton.style.marginTop = "10px";
        deleteButton.style.cursor = "pointer";

        deleteButton.addEventListener("click", () => {
            const updatedGames = games.filter((g) => g.id !== game.id);
            localStorage.setItem("gameData", JSON.stringify(updatedGames));
            displayAllGames(updatedGames);
            alert("Jogo deletado com sucesso!");
        });

        gameElement.appendChild(deleteButton);
        output.appendChild(gameElement);
    });
}
