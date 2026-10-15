function transformar (status) {
    let resultado = [];
    
    for (let item of status) {
        resultado.push(item ? "Concluído" : "Pendente");
    }
    return resultado;
}
console.log(transformar([true, false, true]));