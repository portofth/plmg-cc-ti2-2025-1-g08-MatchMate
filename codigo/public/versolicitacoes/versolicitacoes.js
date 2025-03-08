// Exemplo de como deve funcionar (será substituido pelo back-end)
const solicitacoes = [
    {
        id: 1,
        titulo: "Grupo para jogar Fortnite",
        jogo: "Fortnite",
        descricao: "Vamos jogar em equipe e nos divertir!",
        estilo: "Cooperativo",
        turno: "Noite",
        plataforma: "PC",
        criador: "João",
        participantes: [
            { nome: "João", discord: "joao#1234" },
            { nome: "Maria", discord: "maria#5678" },
        ],
        maxParticipantes: 4,
    },
    {
        id: 2,
        titulo: "Ranked no League of Legends",
        jogo: "League of Legends",
        descricao: "Jogadores experientes para ranked.",
        estilo: "Competitivo",
        turno: "Tarde",
        plataforma: "PC",
        criador: "Carlos",
        participantes: [
            { nome: "Carlos", discord: "carlos#9101" },
            { nome: "João", discord: "joao#1234" }, 
        ],
        maxParticipantes: 5,
    }
];

const usuarioLogado = { nome: "João", discord: "joao#1234" }; 


function exibirMinhasSolicitacoes() {
    const container = document.getElementById("minhasSolicitacoes");
    container.innerHTML = "";

    const minhasSolicitacoes = solicitacoes.filter(s => s.criador === usuarioLogado.nome);

    if (minhasSolicitacoes.length === 0) {
        container.innerHTML = "<p>Você ainda não criou nenhuma solicitação.</p>";
    } else {
        minhasSolicitacoes.forEach(solicitacao => {
            const div = document.createElement("div");
            div.className = "solicitacao";
            div.innerHTML = `
                <h3>${solicitacao.titulo}</h3>
                <p><strong>Jogo:</strong> ${solicitacao.jogo}</p>
                <p><strong>Descrição:</strong> ${solicitacao.descricao}</p>
                <p><strong>Estilo:</strong> ${solicitacao.estilo}</p>
                <p><strong>Turno:</strong> ${solicitacao.turno}</p>
                <p><strong>Plataforma:</strong> ${solicitacao.plataforma}</p>
                <p><strong>Participantes:</strong> ${solicitacao.participantes.map(p => `${p.nome} (${p.discord})`).join(", ")}</p>
                <p><strong>Vagas restantes:</strong> ${solicitacao.maxParticipantes - solicitacao.participantes.length}</p>
                <button onclick="editarSolicitacao(${solicitacao.id})">Editar Grupo</button>
                <button onclick="encerrarSolicitacao(${solicitacao.id})" class="encerrar">Encerrar Grupo</button>
            `;
            container.appendChild(div);
        });
    }
}


function exibirSolicitacoesAceitas() {
    const container = document.getElementById("solicitacoesAceitas");
    container.innerHTML = "";

    const solicitacoesAceitas = solicitacoes.filter(s => s.participantes.some(p => p.nome === usuarioLogado.nome) && s.criador !== usuarioLogado.nome);

    if (solicitacoesAceitas.length === 0) {
        container.innerHTML = "<p>Você ainda não aceitou nenhuma solicitação.</p>";
    } else {
        solicitacoesAceitas.forEach(solicitacao => {
            const div = document.createElement("div");
            div.className = "solicitacao";
            div.innerHTML = `
                <h3>${solicitacao.titulo}</h3>
                <p><strong>Jogo:</strong> ${solicitacao.jogo}</p>
                <p><strong>Descrição:</strong> ${solicitacao.descricao}</p>
                <p><strong>Estilo:</strong> ${solicitacao.estilo}</p>
                <p><strong>Turno:</strong> ${solicitacao.turno}</p>
                <p><strong>Plataforma:</strong> ${solicitacao.plataforma}</p>
                <p><strong>Criador:</strong> ${solicitacao.criador}</p>
                <p><strong>Participantes:</strong> ${solicitacao.participantes.map(p => `${p.nome} (${p.discord})`).join(", ")}</p>
                <button onclick="sairDaSolicitacao(${solicitacao.id})" class="sair">Sair do Grupo</button>
            `;
            container.appendChild(div);
        });
    }
}

// Carregar as solicitações ao abrir a página
window.addEventListener("load", () => {
    exibirMinhasSolicitacoes();
    exibirSolicitacoesAceitas();
});
