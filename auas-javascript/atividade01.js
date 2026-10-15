// Etapa 1

const nomeItem = "Espada das Sombras";
const precoItem = 250;
let raridadeItem = "Raro";
const quantidadeEstoque = 12;

console.log(`
=== FICHA DO ITEM ===
Nome: ${nomeItem}
Preço: R$ ${precoItem}
Raridade: ${raridadeItem}
Estoque: ${quantidadeEstoque} unidades
`);


// Etapa 2

if (precoItem >= 0) {
    console.log("Preço válido!");
} else {
    console.log("Erro: o preço não pode ser negativo.");
}

if (precoItem < 100) {
    raridadeItem = "Comum";
} else if (precoItem >= 100 && precoItem < 500) {
    raridadeItem = "Raro";
} else {
    raridadeItem = "Lendário";
}

console.log(`Raridade: ${raridadeItem}`);

const emDestaque = precoItem > 500 ? true : false;

console.log(`Em destaque: ${emDestaque}`);

const disponivelCompra = quantidadeEstoque > 0 && precoItem > 0;

console.log(`Disponível para compra: ${disponivelCompra}`);


// Etapa 3

for (let i = 1; i <= 5; i++) {
    console.log(`Item ${i} cadastrado com sucesso!`);

    if (i % 2 === 0) {
        console.log("Item da promoção da semana!");
    }
}


// Etapa 4

let estoque = quantidadeEstoque;

while (estoque > 0) {
    estoque--;

    console.log(`Venda realizada. Estoque restante: ${estoque}`);
}

console.log("Item esgotado!");


// Etapa 5

const catalogo = [
    "Espada das Sombras",
    "Asas Douradas",
    "Capacete Neon",
    "Pet Dragão",
    "Skin Cyberpunk"
];

for (const item of catalogo) {
    console.log(`🛒 ${item}`);
}