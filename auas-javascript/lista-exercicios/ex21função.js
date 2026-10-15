const missoes = [
    { nome: "Derrotar chefe", pontos: 500 },
    { nome: "Encontrar tesouro", pontos: 200 },
    { nome: "Salvar personagem", pontos: 800 },
    { nome: "Explorar mapa", pontos: 100 }
];

function analisarMissoes(missoes) {
    for (let missao of missoes) {
        if (missao.pontos >= 500) {
            console.log(missao.nome + " - Missão difícil");
        } else if (missao.pontos >= 200) {
            console.log(missao.nome + " - Missão média");
        } else {
            console.log(missao.nome + " - Missão fácil");
        }
    }
}

analisarMissoes(missoes);