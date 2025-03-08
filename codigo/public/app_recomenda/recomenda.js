

function createGroupRequest(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
    const groupRequest = {
        title: document.getElementById("groupTitle").value,
        gameName: document.getElementById("gameName").value,
        description: document.getElementById("groupDescription").value,
        playStyle: document.getElementById("playStyle").value,
        preferredTime: document.getElementById("preferredTime").value,
        platform: document.getElementById("platform").value,
    };

    // vai ser substituido pra enviar ao servidor
    console.log("Solicitação de Grupo Criada:", groupRequest);
    alert("Solicitação de grupo criada com sucesso!");
}

// Evento de carregamento da página
window.addEventListener("load", () => {
    loadUserName(); 
    document.getElementById("groupRequestForm").addEventListener("submit", createGroupRequest); // Adiciona evento ao formulário
});