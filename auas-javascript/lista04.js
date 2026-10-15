 // Atividade 1
 const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
console.log('Usuários ativos:', usuariosAtivos);


// Atividade 2
const produtos = [
    { nome: 'Teclado', preco: 100 },
    { nome: 'Mouse', preco: 50 }
];

const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9
}));

console.log('Produtos com desconto:', produtosComDesconto);


// Atividade 3
const carrinho = [25.50, 10.00, 100.00, 5.00];

const total = carrinho.reduce((soma, preco) => soma + preco, 0);
console.log('Total do carrinho: R$', total.toFixed(2));


// Atividade 4
const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(nomes) {
    return [...new Set(nomes)];
}

console.log('Lista sem duplicatas:', limparLista(nomesRepetidos));


// Atividade 5
const apiProdutos = [
    { id: 101, nome: 'monitor led', preco: 899.9 },
    { id: 102, nome: 'teclado mecanico', preco: 250.0 },
    { id: 103, nome: 'mouse gamer', preco: 125.45 }
];

const produtosFormatados = apiProdutos.map(produto => ({
    ...produto,
    nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
    precoFormatado: 'R$ ' + produto.preco.toFixed(2).replace('.', ',')
}));

console.log('Produtos formatados:', produtosFormatados);