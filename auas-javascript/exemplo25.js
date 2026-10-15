const usuario = { nome: 'Ana', ativo: false };
const atualizado = { ...usuario, ativo: true };

console.log(atualizado); // { nome: 'Ana', ativo: true }