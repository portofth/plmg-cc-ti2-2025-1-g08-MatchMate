async function fetchJogosDados() {
    try {
        const response = await fetch('db.json');
        const data = await response.json();

    
        const labels = data.top5Jogos.map(jogo => jogo.name);
        const playerCounts = data.top5Jogos.map(jogo => jogo.playerCount);

        return {
            labels: labels,
            datasets: [{
                data: playerCounts,
                backgroundColor: ["#008B8B", "#00FF7F", "#7B68EE", "#FF00FF", "#DC143C"],
                hoverBackgroundColor: ["#00FF00", "#00FF00", "#00FF00", "#00FF00", "#00FF00"]
            }]
        };
    } catch (error) {
        console.error('Erro ao buscar os dados dos jogos:', error);
        return null;
    }
}

async function initGrafico() {
    const jogosDados = await fetchJogosDados();
    if (!jogosDados) {
        console.error('Não foi possível carregar os dados dos jogos.');
        return;
    }

    const config = {
        type: 'pie',
        data: jogosDados,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw + ' milhões de players';
                            return label;
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Popularidade dos Jogos Online'
                
                }
            }
        }
    };

   
    const ctx = document.getElementById('topJogosGrafico').getContext('2d');
    new Chart(ctx, config);
}


window.onload = initGrafico;


