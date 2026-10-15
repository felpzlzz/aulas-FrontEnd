const verificarIdade = 
function(idade) {
    return idade >= 18?
    "Permitido" : "Bloqueado";
}

console.log(verificarIdade(20));
console.log(verificarIdade(11));